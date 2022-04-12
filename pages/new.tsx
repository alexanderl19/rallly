import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { usePlausible } from "next-plausible";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useMutation } from "react-query";
import { useSessionStorage } from "react-use";
import { createPoll } from "../api-client/create-poll";
import Button from "../components/button";
import {
  NewEventData,
  PollDetailsData,
  PollDetailsForm,
  PollOptionsData,
  PollOptionsForm,
  UserDetailsData,
  UserDetailsForm,
} from "../components/forms";
import StandardLayout from "../components/standard-layout";
import Steps from "../components/steps";
import { useUserName } from "../components/user-name-context";
import { encodeDateOption } from "../utils/date-time-utils";

type StepName = "eventDetails" | "options" | "userDetails";

const steps: StepName[] = ["eventDetails", "options", "userDetails"];

const required = <T extends unknown>(v: T | undefined): T => {
  if (!v) {
    throw new Error("Required value is missing");
  }

  return v;
};

const initialNewEventData: NewEventData = { currentStep: 0 };
const sessionStorageKey = "newEventFormData";

const Page: NextPage<{
  title?: string;
  location?: string;
  description?: string;
  view?: "week" | "month";
}> = ({ title, location, description, view }) => {
  const { t } = useTranslation("app");

  const router = useRouter();

  const [persistedFormData, setPersistedFormData] =
    useSessionStorage<NewEventData>(sessionStorageKey, {
      currentStep: 0,
      eventDetails: {
        title,
        location,
        description,
      },
      options: {
        view,
      },
    });

  const [formData, setTransientFormData] = React.useState(persistedFormData);

  const setFormData = React.useCallback(
    (newEventData: NewEventData) => {
      setTransientFormData(newEventData);
      setPersistedFormData(newEventData);
    },
    [setPersistedFormData],
  );

  const currentStepIndex = formData?.currentStep ?? 0;

  const currentStepName = steps[currentStepIndex];

  const [isRedirecting, setIsRedirecting] = React.useState(false);

  const [, setUserName] = useUserName();

  const plausible = usePlausible();

  const { mutate: createEventMutation, isLoading: isCreatingPoll } =
    useMutation(
      () => {
        const title = required(formData?.eventDetails?.title);
        return createPoll({
          title: title,
          type: "date",
          location: formData?.eventDetails?.location,
          description: formData?.eventDetails?.description,
          user: {
            name: required(formData?.userDetails?.name),
            email: required(formData?.userDetails?.contact),
          },
          timeZone: formData?.options?.timeZone,
          options: required(formData?.options?.options).map(encodeDateOption),
        });
      },
      {
        onSuccess: (poll) => {
          setIsRedirecting(true);
          setUserName(poll.authorName);
          plausible("Created poll", {
            props: {
              numberOfOptions: formData.options?.options?.length,
              optionsView: formData?.options?.view,
            },
          });
          setPersistedFormData(initialNewEventData);
          router.replace(`/admin/${poll.urlId}`);
        },
      },
    );

  const isBusy = isRedirecting || isCreatingPoll;

  const handleSubmit = (
    data: PollDetailsData | PollOptionsData | UserDetailsData,
  ) => {
    if (currentStepIndex < steps.length - 1) {
      setFormData({
        ...formData,
        currentStep: currentStepIndex + 1,
        [currentStepName]: data,
      });
    } else {
      // last step
      createEventMutation();
    }
  };

  const handleChange = (
    data: Partial<PollDetailsData | PollOptionsData | UserDetailsData>,
  ) => {
    setFormData({
      ...formData,
      currentStep: currentStepIndex,
      [currentStepName]: data,
    });
  };

  return (
    <StandardLayout>
      <Head>
        <title>{formData?.eventDetails?.title ?? t("newPoll")}</title>
      </Head>
      <div className="max-w-full w-[1024px] py-4 px-3 lg:px-6">
        <div className="flex space-x-4 items-center mb-4">
          <h1 className="m-0">New Poll</h1>
          <Steps current={currentStepIndex} total={steps.length} />
        </div>
        <div className="bg-white overflow-hidden rounded-lg max-w-full w-fit shadow-sm border">
          {(() => {
            switch (currentStepName) {
              case "eventDetails":
                return (
                  <PollDetailsForm
                    className="px-4 pt-4 max-w-full"
                    name={currentStepName}
                    defaultValues={formData?.eventDetails}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                  />
                );
              case "options":
                return (
                  <PollOptionsForm
                    className="grow"
                    name={currentStepName}
                    defaultValues={formData?.options}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    title={formData.eventDetails?.title}
                  />
                );
              case "userDetails":
                return (
                  <UserDetailsForm
                    className="px-4 pt-4 grow"
                    name={currentStepName}
                    defaultValues={formData?.userDetails}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                  />
                );
            }
          })()}
          <div className="bg-slate-50 w-full justify-end px-4 py-3 flex border-t space-x-3">
            {currentStepIndex > 0 ? (
              <Button
                disabled={isBusy}
                onClick={() => {
                  setFormData({
                    ...persistedFormData,
                    currentStep: currentStepIndex - 1,
                  });
                }}
              >
                {t("back")}
              </Button>
            ) : null}
            <Button
              form={currentStepName}
              loading={isBusy}
              htmlType="submit"
              type="primary"
            >
              {currentStepIndex < steps.length - 1
                ? t("next")
                : t("createPoll")}
            </Button>
          </div>
        </div>
      </div>
    </StandardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale = "en",
  query,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["app"])),
      ...query,
    },
  };
};

// We disable SSR because the data on this page relies on sessionStore
export default dynamic(() => Promise.resolve(Page), { ssr: false });