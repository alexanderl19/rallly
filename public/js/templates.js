angular.module("rallly").run(["$templateCache", function($templateCache) {$templateCache.put("templates/about.html","<div class=\"box\">\n    <div class=\"box-title\">Frequently Asked Questions</div>\n    <div class=\"box-description\">\n        Want to find out more about Rallly? Check out the FAQs below.\n    </div>    <h2>What is Rallly?</h2>\n    <p>\n        Rallly is a collaborative scheduling service that makes deciding on a date fast and easy. In other words, Rallly helps you and your friends decide on a date to host an event.\n    </p>\n    <h2>Why is it called Rallly?</h2>\n    <p>\n        The name is derived from the proper spelling of the word, &ldquo;rally&rdquo;. The Webster dictionary defines rally as, &ldquo;to muster for a common purpose&rdquo; which accurately describes the goal of this service. The inproper spelling can be attributed to the difficulty of finding short and meaningful domain names.\n    </p>\n    <h2>Who made this?</h2>\n    <p>\n        Rallly was created by <a href=\"http://lukevella.com\">Luke Vella</a>.\n    </p>\n</div>\n");
$templateCache.put("templates/confirmmodal.html","<div class=\"rl-modal-overlay\">\n\n<div class=\"rl-modal-position\">\n\n    <div class=\"rl-modal\">\n        <div class=\"rl-modal-title\">{{modal.title}}</div>\n        <div class=\"rl-modal-message\">\n            {{modal.message}}\n        </div>\n        <div class=\"rl-modal-actions\">\n            <button type=\"button\" ng-click=\"modal.confirm()\" ng-show=\"modal.confirm\" class=\"btn\" ng-class=\"{danger : modal.isDestructive}\">{{modal.confirmText}}</button>\n            <button type=\"button\" ng-click=\"modal.cancel()\"  class=\"btn\">{{modal.cancelText}}</button>\n        </div>\n    </div>\n\n</div>\n\n</div>\n");
$templateCache.put("templates/deletedevent.html","<div class=\"box\">\n    <div class=\"box-message\">\n        <div class=\"main-image\">\n            <img src=\"/images/bin.png\" width=\"100\" />\n        </div>\n        <div class=\"title\">Event Deleted</div>\n        <div class=\"content\">\n            This event has been deleted and is no longer accessible.\n        </div>\n    </div>\n</div>\n");
$templateCache.put("templates/editevent.html","<div ng-show=\"event._id\">\n    <div class=\"box\">\n\n        <div class=\"box-title\">Edit Event</div>\n        <div class=\"box-description\">\n            You can makes changes to your existing event by changing the fields in the form below.\n        </div>\n\n        <form novalidate name=\"form\" ng-submit=\"submit()\">\n\n            <section class=\"box-section\" user-form form=\"form\" event=\"event\">\n\n            </section>\n\n            <section class=\"box-section\" event-form form=\"form\" event=\"event\">\n\n            </section>\n            <section class=\"box-section\" date-form form=\"form\" event=\"event\">\n\n            </section>\n\n            <section class=\"box-section\" settings-form form=\"form\" event=\"event\">\n\n            </section>\n\n            <div class=\"box-controls box-bottom-sticky\">\n                <button type=\"submit\" ng-show=\"didChange()\" class=\"btn btn-primary\" ng-class=\"{disabled : !didChange()}\">\n                    Save Changes\n                </button>\n                <button type=\"button\" ng-click=\"undoChanges()\" class=\"btn\" ng-show=\"didChange()\">Undo Changes</button>\n                <a href=\"/{{event._id}}\" class=\"btn\" ng-hide=\"didChange()\">Done</a>\n            </div>\n\n        </form>\n\n    </div>\n\n</div>\n");
$templateCache.put("templates/event.html","<div ng-show=\"event._id\">\n    <div class=\"box \">\n        <div class=\"event-header\">\n            <div class=\"details\">\n                <div class=\"title\">\n                    {{event.title}}\n                    <span class=\"title-label danger\" ng-show=\"event.isClosed\">Poll Closed</span>\n                    <span class=\"title-label success\" ng-hide=\"event.isClosed\">Poll Open</span>\n                </div>\n                <div class=\"subtitle\">\n                    Created by <a href=\"mailto:{{event.creator.email}}\">{{event.creator.name}}</a>\n                    &bull; {{event.created | elapsed}}\n                    &bull; <a href=\"#\" ng-click=\"editEvent()\">Edit Details</a>\n                </div>\n            </div>\n            <div class=\"actions\">\n                <button class=\"btn\" ng-click=\"editEvent()\">Edit Event</button>\n            </div>\n        </div>\n        <div class=\"event-description\" ng-if=\"event.description\">{{event.description}}</div>\n        <div class=\"event-location\" ng-if=\"event.location\">\n            Location:\n            <a  href=\"http://maps.google.com?q={{event.location}}\"  target=\"_blank\">{{event.location}}</a>\n        </div>\n\n        <div class=\"poll-wrapper\">\n            <div poll event=\"event\" class=\"poll\">\n            </div>\n        </div>\n    </div>\n\n    <div class=\"box\" ng-hide=\"event.comments.length == 0 && event.isClosed\">\n        <div class=\"box-title\">\n            Discussion\n        </div>\n        <div class=\"box-description\">\n            You can discuss the event with your friends by leaving a comment below.\n        </div>\n        <div discussion event=\"event\">\n\n        </div>\n    </div>\n</div>\n");
$templateCache.put("templates/home.html","<div class=\"page-placeholder\">\n    <div class=\"image\">\n        <img src=\"/images/mark_large.png\" width=\"67\" />\n    </div>\n    <div class=\"title\">\n        Schedule an Event\n    </div>\n    <div class=\"content\">\n        Want to host an event but can’t decide on a date? Click on the button below to start!\n    </div>\n    <button ng-click=\"newEvent()\" class=\"btn\">Schedule New Event</button>\n</div>\n");
$templateCache.put("templates/newevent.html","<div class=\"box\">\n    <div class=\"box-title\">Schedule a New Event</div>\n    <div class=\"box-description\">\n        Fill in the form below to create your event and share it with your friends and colleagues.\n    </div>\n    <form novalidate autocomplete=\"off\" name=\"form\" ng-hide=\"eventUrl\" ng-submit=\"submit()\">\n        <section class=\"box-section\" user-form form=\"form\" event=\"event\">\n\n        </section>\n\n        <section class=\"box-section\" event-form form=\"form\" event=\"event\">\n\n        </section>\n\n        <section class=\"box-section\" date-form form=\"form\" event=\"event\">\n\n        </section>\n\n        <section class=\"box-section\" participants-form form=\"form\" event=\"event\">\n\n        </section>\n\n        <section class=\"box-section\" settings-form form=\"form\" event=\"event\">\n\n        </section>\n\n        <div class=\"box-controls box-bottom-sticky\">\n            <button type=\"submit\" class=\"btn\">Create Event</button>\n        </div>\n\n    </form>\n    <div class=\"box-message animated zoomIn\" ng-show=\"eventUrl\">\n        <div class=\"main-image\">\n            <img src=\"/images/success_large.png\" width=\"100\" />\n        </div>\n        <div class=\"title\">Event Created</div>\n        <div class=\"content\">\n            Your event has been created successfully! An email has been sent to each participant with a link to the event page. \n        </div>\n        <div class=\"mini-divider\">\n        </div>\n        <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" disabled=\"true\" value=\"{{eventUrl}}\" />\n            <a href=\"{{eventUrl}}\" class=\"btn form-btn\">GO</a>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("templates/notfound.html","<div class=\"not-found\">\n    <video id=\"gfyVid1\" class=\"gfyVid\" width=\"480\" height=\"360\" autoplay=\"\" loop=\"\" muted=\"muted\" style=\"display: block;\" poster=\"//thumbs.gfycat.com/PaltryComfortableBaldeagle-poster.jpg\">\n            <source id=\"webmsource\" src=\"//zippy.gfycat.com/PaltryComfortableBaldeagle.webm\" type=\"video/webm\">\n            <source id=\"mp4source\" src=\"//zippy.gfycat.com/PaltryComfortableBaldeagle.mp4\" type=\"video/mp4\">\n            Sorry, you don\'t have HTML5 video and we didn\'t catch this properly in javascript.\n            You can try to view the gif directly: <a href=\"http://zippy.gfycat.com/PaltryComfortableBaldeagle.gif\">http://zippy.gfycat.com/PaltryComfortableBaldeagle.gif</a>.\n        </video>\n    <div class=\"overlay\">\n        <div class=\"wrapper\">\n            <div class=\"title\">Error 404 </div>\n            <div class=\"description\">The page you are looking for could not be found!</h2>\n            <div class=\"actions\">\n                <a href=\"/\" target=\"_self\">Go to Homepage</a>\n            </div>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("templates/notification.html","<div class=\"notification {{notification.type}}\" ng-click=\"notification.close()\">\n    <div class=\"title\">\n        {{notification.title}}\n    </div>\n    <div class=\"message\">\n        {{notification.message}}\n    </div>\n</div>\n");
$templateCache.put("templates/directives/datePicker.html","<div class=\"date-picker\">\n    <div class=\"wrapper\">\n        <div class=\"date-picker-head\">\n            <a href=\"#\" class=\"arrow\" ng-click=\"prevMonth()\">&#10094;</a>\n            <span class=\"title\">\n                <span class=\"title-text\">{{title}}</span>\n            </span>\n            <a href=\"#\" class=\"arrow\" ng-click=\"nextMonth()\">&#10095;</a>\n        </div>\n        <div class=\"dow\">\n            <div class=\"day\">\n                Su\n            </div>\n            <div class=\"day\">\n                Mo\n            </div>\n            <div class=\"day\">\n                Tu\n            </div>\n            <div class=\"day\">\n                We\n            </div>\n            <div class=\"day\">\n                Th\n            </div>\n            <div class=\"day\">\n                Fr\n            </div>\n            <div class=\"day\">\n                Sa\n            </div>\n        </div>\n        <div class=\"values\">\n            <div ng-repeat=\"day in days\" class=\"value\"  ng-class=\"{ outside : day.isOutsideMonth, today : day.isToday, active : isActive(day.date) }\" ng-click=\"selectDay(day)\">\n                {{day.date | date : \'d\' }}\n            </div>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("templates/directives/discussion.html","<ul class=\"comment-thread\" ng-show=\"event.comments.length\">\n    <li ng-repeat=\"comment in event.comments\" class=\"comment\">\n        <div class=\"avatar-section\">\n            <img src=\"/images/avatar.png\" />\n        </div>\n        <div class=\"comment-section\">\n            <a href=\"#\" class=\"comment-delete\" ng-click=\"discussionCtrl.deleteComment(comment)\">&times;</a>\n            <div class=\"meta\">\n                <span class=\"name\">{{comment.author.name}}</span>\n                <span class=\"time\">{{comment.created | elapsed}}</span>\n            </div>\n            <div class=\"content\">{{comment.content}}</div>\n        </div>\n    </li>\n</ul>\n<form novalidate ng-submit=\"discussionCtrl.postComment()\" name=\"commentForm\" class=\"comment-form\">\n    <div class=\"avatar-section\">\n        <img src=\"/images/avatar.png\" />\n    </div>\n    <div class=\"input-section form-group\">\n        <div class=\"content-section\">\n            <textarea class=\"form-control\" required ng-model=\"comment.content\" placeholder=\"Write a comment...\"></textarea>\n        </div>\n        <div class=\"name-section\">\n            <div class=\"name-container\">\n                <input type=\"text\" class=\"form-control\" required placeholder=\"Your Name\" ng-model=\"comment.author.name\" />\n                <button type=\"submit\" class=\"btn\">Post Comment</button>\n                <span class=\"form-error\" ng-show=\"commentForm.$submitted && commentForm.$error\">\n                    <img src=\"/images/error.png\" width=\"14\" /> Make sure you fill in all the fields.\n                </span>\n            </div>\n        </div>\n    </div>\n</form>\n");
$templateCache.put("templates/directives/poll.html","<div class=\"poll-header\">\n    <div class=\"header participants-header\">\n        {{event.participants.length}} participants\n    </div>\n    <div class=\"header date-header\" ng-repeat=\"d in event.dates\">\n        <div class=\"daticon\">\n            <div class=\"dow\">\n                {{d | date: \'EEE\'}}\n            </div>\n            <div class=\"day\">\n                {{d | date: \'d\'}}\n            </div>\n            <div class=\"month\">\n                {{d | date : \'MMM\'}}\n            </div>\n            <span class=\"count\" ng-show=\"selectedDate($index)\" ng-class={top:isTopDate($index)}>{{selectedDate($index)}}</span>\n        </div>\n    </div>\n    <div class=\"header actions-header\">\n\n    </div>\n</div>\n<div class=\"poll-body\">\n    <div class=\"poll-entry\" ng-repeat=\"participant in event.participants\">\n        <form novalidate ng-submit=\"editMode = false; pollCtrl.update(participant);\">\n            <div class=\"cell name-cell\">\n                <span class=\"avatar style-{{($index % 10) + 1 }}\">\n                    <img src=\"/images/user.png\" width=\"11\" />\n                </span>\n                <input required autocomplete=\"off\" type=\"text\" class=\"form-control\" ng-model=\"participant.name\" ng-show=\"editMode\" value=\"participant.name\"/>\n                <span ng-hide=\"editMode\" class=\"name editable\" ng-click=\"editMode = true && !event.isClosed; pollCtrl.edit(participant)\">{{participant.name}}</span>\n            </div>\n            <div class=\"cell vote-cell\" ng-repeat=\"date in event.dates\">\n                <img src=\"/images/tick@2x.png\"  width=\"16\" ng-hide=\"editMode\" ng-if=\"participant.votes[$index]\" />\n                <img src=\"/images/nope@2x.png\" width=\"8\" ng-hide=\"editMode\" ng-if=\"!participant.votes[$index]\" />\n                <input ng-model=\"participant.votes[$index]\" ng-show=\"editMode\" ng-false-value=\"false\" type=\"checkbox\" />\n                <div class=\"overlay\" ng-show=\"editMode\" ng-click=\"participant.votes[$index] = !participant.votes[$index]\"></div>\n            </div>\n            <div class=\"cell action-cell\" ng-hide=\"event.isClosed\">\n                <button type=\"button\" ng-hide=\"editMode\" ng-click=\"editMode = true; pollCtrl.edit(participant)\" class=\"btn hover\">Edit</button>\n                <button type=\"button\" ng-hide=\"editMode\" ng-click=\"pollCtrl.delete(participant)\" class=\"btn danger hover\">Delete</button>\n                <button type=\"submit\" ng-show=\"editMode\" class=\"btn\">Save</button>\n                <button type=\"button\" ng-show=\"editMode\" ng-click=\"editMode = false; pollCtrl.cancel($index)\" class=\"btn\">Cancel</button>\n            </div>\n        </form>\n    </div>\n    <div class=\"poll-example\" ng-class=\"{hidden : event.participants.length > 0}\">\n        <div class=\"poll-entry\" ng-repeat=\"example in examples\">\n            <div class=\"cell name-cell\">\n                <span class=\"avatar style-{{$index + 1}}\">\n                    <img src=\"/images/user.png\" width=\"11\" />\n                </span>\n                <span class=\"name\">{{example.name}}</span>\n            </div>\n            <div class=\"cell vote-cell\" ng-repeat=\"date in event.dates\">\n                <img src=\"/images/tick@2x.png\"  width=\"16\" ng-if=\"example.votes[$index]\" />\n                <img src=\"/images/nope@2x.png\" width=\"8\" ng-if=\"!example.votes[$index]\" />\n            </div>\n            <div class=\"cell action-cell\">\n\n            </div>\n        </div>\n        <div class=\"overlay\">\n            <div class=\"overlay-text\">\n                Fill in the form below to get started\n            </div>\n        </div>\n    </div>\n    <div ng-hide=\"event.isClosed\" class=\"poll-entry highlight\">\n        <form novalidate name=\"formnew\" ng-submit=\"pollCtrl.save()\">\n            <div class=\"cell name-cell\">\n                <span class=\"avatar style-{{participant.style}}\">\n                    <img src=\"/images/user.png\" width=\"11\" />\n                </span>\n                <input autocomplete=\"off\" name=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Your name...\" ng-model=\"participant.name\" required value=\"participant.name\"/>\n            </div>\n            <div class=\"cell vote-cell\" ng-repeat=\"date in event.dates\">\n                <input ng-model=\"participant.votes[$index]\" ng-false-value=\"false\" type=\"checkbox\" />\n                <div class=\"overlay\" ng-click=\"participant.votes[$index] = !participant.votes[$index]\"></div>\n            </div>\n            <div class=\"cell action-cell\">\n                <button type=\"submit\" ng-class=\"{ \'animated shake\' : formnew.$submitted && formnew.$invalid  }\" class=\"btn\">Save</button>\n            </div>\n        </form>\n    </div>\n</div>\n");
$templateCache.put("templates/directives/timePicker.html","<div class=\"time-picker\">\n    <div class=\"time-picker-col\">\n        <div class=\"daticon\">\n            <div class=\"dow\">\n                {{date | date: \'EEE\'}}\n            </div>\n            <div class=\"day\">\n                {{date | date: \'d\'}}\n            </div>\n            <div class=\"month\">\n                {{date | date : \'MMM\'}}\n            </div>\n            <!-- <span class=\"delete\" ng-click=\"datepicker.unsetDate(date)\"></span> -->\n        </div>\n    </div>\n    <div class=\"time-picker-col\" ng-repeat=\"time in date.times track by $index\">\n        <input type=\"text\" class=\"time-picker-input\" time-picker ng-model=\"time\" ng-model-options=\"{ updateOn: \'blur\' }\" />\n    </div>\n</div>\n");
$templateCache.put("templates/form/dateForm.html","<div class=\"section-details\">\n    <div class=\"section-title\">Choose Dates</div>\n    <ul class=\"daticon-list\">\n        <li ng-repeat=\"d in event.dates\">\n            <div class=\"daticon\">\n                <div class=\"dow\">\n                    {{d | date: \'EEE\'}}\n                </div>\n                <div class=\"day\">\n                    {{d | date: \'d\'}}\n                </div>\n                <div class=\"month\">\n                    {{d | date : \'MMM\'}}\n                </div>\n                <span class=\"delete\" ng-click=\"datepicker.removeDate(d)\"></span>\n            </div>\n        </li>\n    </ul>\n</div>\n<div class=\"section-main\">\n    <div class=\"form-row\">\n        <div class=\"form-group\">\n            <label for=\"email\">Calendar</label>\n            <span class=\"form-error\" ng-show=\"form.$submitted && form.datepicker.$error.required\">\n                <img src=\"/images/error.png\" width=\"14\" /> You need to select a few dates\n            </span>\n            <div datepicker required name=\"datepicker\" control=\"datepicker\" ng-model=\"event.dates\">\n\n            </div>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("templates/form/eventForm.html","<div class=\"section-details\">\n    <div class=\"section-title\">Event Details</div>\n</div>\n<div class=\"section-main\">\n    <div class=\"form-row\">\n        <div class=\"form-col\">\n            <div class=\"form-group\">\n                <label for=\"title\">Title</label>\n                <span class=\"form-error\" ng-show=\"(form.title.$touched || form.$submitted) && errors.title\">\n                    <img src=\"/images/error.png\" width=\"14\" /> {{errors.title}}\n                </span>\n                <input id=\"title\" name=\"title\" ng-maxlength=\"30\" required ng-model=\"event.title\" type=\"text\" placeholder=\"Monthly Meetup...\" class=\"form-control extend\"/>\n            </div>\n        </div>\n        <div class=\"form-col\">\n            <div class=\"form-group optional\">\n                <label for=\"location\">Location</label>\n                <span class=\"form-error\" ng-show=\"(form.location.$touched || form.$submitted) && errors.location\">\n                    <img src=\"/images/error.png\" width=\"14\" /> {{errors.location}}\n                </span>\n                <input id=\"location\" name=\"location\" ng-model=\"event.location\" ng-maxlength=\"50\" type=\"text\" placeholder=\"Rick\'s Cafe...\" class=\"form-control extend\"/>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-row\">\n        <div class=\"form-group optional\">\n            <label for=\"description\" >Description</label>\n            <textarea id=\"description\" name=\"description\" ng-model=\"event.description\" placeholder=\"Enter Description...\" class=\"form-control extend\"></textarea>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("templates/form/participantsForm.html","<div class=\"section-details\">\n    <div class=\"section-title\">Invite Participants</div>\n</div>\n<div class=\"section-main\">\n    <div class=\"form-row\">\n        <div class=\"form-group optional\">\n            <label>Participant\'s Emails</label>\n            <tags-input max-length=\"50\" allowed-tags-pattern=\"{{emailRegex}}\" display-property=\"email\" ng-model=\"event.emails\" placeholder=\"Add an Email\" type=\"email\" autocomplete=\"off\"></tags-input>\n            <input type=\"hidden\" name=\"shouldCreate\" value=\"true\" />\n\n        </div>\n    </div>\n</div>\n");
$templateCache.put("templates/form/settingsForm.html","<div class=\"section-details\">\n    <div class=\"section-title\">Settings</div>\n</div>\n<div class=\"section-main\">\n    <div class=\"switch-row\" ng-if=\"event._id\">\n        <div class=\"switch-details\">\n            <div class=\"title\">\n                Poll Status\n            </div>\n            <div class=\"description\">\n                Let people vote on the poll.\n            </div>\n        </div>\n        <div class=\"switch\">\n            <div class=\"switch-value\">\n                {{event.isClosed ? \'Closed\' : \'Open\' }}\n            </div>\n            <div switch-toggle ng-model=\"event.isClosed\" invert>\n            </div>\n        </div>\n    </div>\n    <div class=\"switch-row\">\n        <div class=\"switch-details\">\n            <div class=\"title\">\n                Notifications\n            </div>\n            <div class=\"description\">\n                Send me an email when someone votes or comments on the event.\n            </div>\n        </div>\n        <div class=\"switch\">\n            <div class=\"switch-value\">\n                {{event.creator.allowNotifications ? \'Enabled\' : \'Disabled\' }}\n            </div>\n            <div switch-toggle ng-model=\"event.creator.allowNotifications\">\n            </div>\n        </div>\n    </div>\n    <div class=\"switch-row\" ng-if=\"event._id\">\n        <div class=\"switch-details\">\n            <div class=\"title\">\n                Delete Event\n            </div>\n            <div class=\"description\">\n                Once you delete an event it will no longer be accessible.\n            </div>\n        </div>\n        <div class=\"switch\">\n            <button type=\"button\" ng-click=\"deleteEvent()\" class=\"btn\" ng-class=\"{danger : !deleteRequestSent, disabled : deleteRequestSent}\">{{deleteRequestSent ? \'Request Sent\' : \'Delete Event\' }}</button>\n        </div>\n    </div>\n</div>\n</section>\n");
$templateCache.put("templates/form/timeForm.html","<div class=\"section-details\">\n    <div class=\"section-title\">Choose Times</div>\n</div>\n<div class=\"section-main\">\n    <table class=\"time-form\">\n        <thead>\n            <tr>\n                <th>\n\n                </th>\n                <th>\n                    Time 1\n                </th>\n                <th>\n                    Time 2\n                </th>\n                <th>\n                    Time 3\n                </th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr ng-repeat=\"d in event.dates\">\n                <td>\n                    <div class=\"daticon\">\n                        <div class=\"dow\">\n                            {{d.date | date: \'EEE\'}}\n                        </div>\n                        <div class=\"day\">\n                            {{d.date | date: \'d\'}}\n                        </div>\n                        <div class=\"month\">\n                            {{d.date | date : \'MMM\'}}\n                        </div>\n                        <span class=\"delete\" ng-click=\"unsetDate(d.date)\"></span>\n                    </div>\n                </td>\n                <td ng-repeat=\"time in [1,2,3] track by $index\">\n                    <input type=\"text\" time-picker ng-model-options=\"{ updateOn: \'blur\' }\" ng-model=\"d.times[$index]\" class=\"time-picker-input\" />\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n");
$templateCache.put("templates/form/userForm.html","<div class=\"section-details\">\n    <div class=\"section-title\">Your Details</div>\n</div>\n<div class=\"section-main\">\n    <div class=\"form-row\">\n        <div class=\"form-col\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <span class=\"form-error\" ng-show=\"(form.name.$touched || form.$submitted) && errors.name\">\n                    <img src=\"/images/error.png\" width=\"14\" /> {{errors.name}}\n                </span>\n                <input id=\"name\" name=\"name\" ng-maxlength=\"30\" required ng-model=\"event.creator.name\" type=\"text\" placeholder=\"John Doe...\" class=\"form-control extend\"/>\n            </div>\n        </div>\n        <div class=\"form-col\">\n            <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <span class=\"form-error\" ng-show=\"(form.email.$touched || form.$submitted) && errors.email\">\n                    <img src=\"/images/error.png\" width=\"14\" /> {{errors.email}}\n                </span>\n                <input type=\"email\" id=\"email\" name=\"email\" ng-pattern=\"emailRegex\" required ng-model=\"event.creator.email\" placeholder=\"john.doe@email.com...\" class=\"form-control extend\"/>\n            </div>\n        </div>\n    </div>\n</div>\n");}]);