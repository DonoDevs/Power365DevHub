'use strict';
var GNEXT;
(function (GNEXT) {
    /*
    export interface ITriggerControl {
        id: string,
        type: string,
        value: any
    } */
    var ui = (function () {
        function ui() {
        }
        /** Make all controls on hte form Read Only **/
        ui.makeFormReadOnly = function () {
            // disable inputs on the forms
            $('input[type=text], select, textarea').each(function () {
                //var elem = $( el );
                $(this).attr('readonly', 'readonly');
                //$(this).prop('disabled', 'disabled');
            });
            $('input[type=checkbox]:not(:checked), input[type=radio]:not(:checked)').each(function () {
                //var elem = $( el );
                $(this).attr('disabled', 'disabled');
            });
            $('input[type=checkbox]').click(function (evt) {
                //var elem = $( el );
                evt.preventDefault();
            });
            // handle option sets
            $('option:not(:selected)').prop('disabled', 'disabled');
        };
        /** Helper method that will hide a tab on the page
        * @param {string} tabSelector tab being hidden.  this can either be a tab ID or a selector for the tab
        * @return {void}
        **/
        ui.hideTab = function (tabSelector) {
            var ctl = $(GNEXT.ui.valdiateTabSelector(tabSelector));
            ctl.hide();
            ctl.prev().hide();
        };
        /** Helper method that set a tab visible on a form
        * @param {string} tabSelector tab being hidden.  this can either be a tab ID or a selector for the tab
        * @return {void}
        **/
        ui.showTab = function (tabSelector) {
            var ctl = $(GNEXT.ui.valdiateTabSelector(tabSelector));
            ctl.show();
            ctl.prev().show();
        };
        /** Helper method to return the correct selector for the tab on the form
        * @param {string} tabSelector tab id/selector being evaluated. if a tabID is passed, a selector is returned
        * @return {string} updated selector for the tab
        **/
        ui.valdiateTabSelector = function (tabSelector) {
            // if this is just the tab name, append the selector 
            if (!(tabSelector.lastIndexOf(".tab[data-name", 0) === 0)) {
                tabSelector = ".tab[data-name='" + tabSelector + "']";
            }
            return tabSelector;
        };
        /**
         * Helper method that will add a print button
        *   @return {void}
         */
        ui.addPrintButton = function () {
            var ctl = $("#NextButton");
            var button = $('<input type="button" onclick="window.print()" class="btn btn-primary button next submit-btn" value="Print" />');
            ctl.parent().after(button);
        };
        /** Helper method that will toggle the display of all tabs in the list of Ids
        *   @param {Array<string>} tabIdList list of tab control Ids
        *   @param {boolean} hide flag indicating whether to hide or show
        **/
        ui.toggleTabDisplay = function (tabIdList, hide) {
            // default to hide tab
            if (GNEXT.utilities.isNullOrUndefined(hide)) {
                hide = true;
            }
            for (var _i = 0, tabIdList_1 = tabIdList; _i < tabIdList_1.length; _i++) {
                var tabId = tabIdList_1[_i];
                if (hide) {
                    GNEXT.ui.hideTab(tabId);
                }
                else {
                    GNEXT.ui.showTab(tabId);
                }
            }
        };
        /** Helper method that will apply the mask to the SSN field for the given control
        * @param {string} controlId control being masked
        * @return {void}
        **/
        ui.maskSSN = function (controlId) {
            $.getScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.3/jquery.mask.js", function () {
                var ctl = $("#" + controlId); // use any to bypass TS compilation error
                ctl.mask("000-00-0000");
            });
        };
        /** Helper method that will apply the mask all date fields on a form
        * @return {void}
        **/
        ui.maskDate = function () {
            // apply the placeholder for the dates
            $("[data-date-format='M/D/YYYY']").attr("placeholder", "MM/DD/YYYY");
        };
        /** Helper method that will apply the mask all date/time fields on a form
        * @return {void}
        **/
        ui.maskDateTime = function () {
            // apply the placeholder for the dates
            $("[data-date-format='M/D/YYYY h:mm A']").attr("placeholder", "MM/DD/YYYY h:mm A");
        };
        /** Helper method that will disable a check control
        * @param {string} controlId control being disabled
        * @return {void}
        **/
        ui.disableCheck = function (controlId) {
            var ctl = GNEXT.utilities.selectObjectById(controlId);
            ctl.removeAttr('checked');
            ctl.attr('disabled', 'disabled');
        };
        /** Helper method that will enable a check control
        * @param {string} controlId control being enabled
        * @return {void}
        **/
        ui.enableCheck = function (controlId) {
            var ctl = GNEXT.utilities.selectObjectById(controlId);
            ctl.removeAttr('disabled');
        };
        /** Toggle the enabled state for a list of check controls
        * @param {Array<string>} controlIdList list of controls to be toggled
        * @param {boolean} enable flag indicating whether to enable
        * @return {void}
        **/
        ui.toggleCheckEnabled = function (controlIdList, enable) {
            // default to hide tab
            if (GNEXT.utilities.isNullOrUndefined(enable)) {
                enable = true;
            }
            for (var _i = 0, controlIdList_1 = controlIdList; _i < controlIdList_1.length; _i++) {
                var controlId = controlIdList_1[_i];
                if (enable) {
                    GNEXT.ui.enableCheck(controlId);
                }
                else {
                    GNEXT.ui.disableCheck(controlId);
                }
            }
        };
        /** Helper method that will toggle a generic element enabled / disabled.
        *   @param {string} elementId id of the element being toggled
        *   @param {boolean} enable flag indicating whether to toggle the item enabled or disabled
        *   @param {boolean} clearValue flag indicating whether to clear the value
        *   @return {void}
        **/
        ui.toggleElementEnabled = function (elementId, enable, clearValue) {
            if (GNEXT.utilities.isNullUndefinedEmpty(clearValue)) {
                clearValue = false;
            }
            if (GNEXT.utilities.isNullUndefinedEmpty(enable)) {
                enable = false;
            }
            var ctl = GNEXT.utilities.selectObjectById(elementId);
            if (enable) {
                ctl.removeAttr('disabled');
            }
            else {
                ctl.attr('disabled', 'disabled');
            }
            if (clearValue) {
                ctl.val("");
            }
        };
        /** Helper method that will toggle multiple generic elements enabled / disabled.
        *   @param {Array<string>} elementIdList array of element Ids to be toggled
        *   @param {boolean} enable flag indicating whether to toggle the item enabled or disabled
        *   @param {boolean} clearValue flag indicating whether to clear the value
        *   @return {void}
        **/
        ui.toggleElementsEnabled = function (elementIdList, enable, clearValue) {
            for (var _i = 0, elementIdList_1 = elementIdList; _i < elementIdList_1.length; _i++) {
                var elementId = elementIdList_1[_i];
                GNEXT.ui.toggleElementEnabled(elementId, enable, clearValue);
            }
        };
        /**  Helper method to disable the date Picker control
        *   @param {string} controlId control id of the date picker control
        *   @return {void}
        **/
        ui.disableDatePick = function (controlId) {
            var cal = GNEXT.utilities.selectObjectById(controlId);
            cal.next().data("DateTimePicker").destroy();
        };
        ui.RequiredIndicatorClassName = "gnext-requred-field";
        /** This function makes fields read only true or not read only
        takes field name (#gnext_officerssn for example) and true or false.
        The readonly class is necessary to make the field view consistent with
        the way that ADX displays read only fields.**/
        ui.MakeFieldReadOnly = function (readField, param) {
            $(readField).prop("readonly", param);
            if (!param)
                $(readField).removeClass("readonly");
            else
                $(readField).addClass("readonly");
        };
        return ui;
    }());
    GNEXT.ui = ui;
    var utilities = (function () {
        function utilities() {
        }
        // Function that sets a local session variable to false
        utilities.setSessionToNotCached = function () {
            if (typeof (Storage) != undefined) {
                sessionStorage.setItem("cached", "false");
            }
        };
        //function checks a local session variable and if false, "portal caches" the page
        utilities.portalCachePage = function () {
            var isCached = sessionStorage["cached"];
            if (isCached == "false") {
                var url = document.location.protocol + '//'
                    + document.location.host
                    + (document.location.host.indexOf("demo.adxstudio.com") != -1
                        ? document.location.pathname.split("/").slice(0, 3).join("/") : "")
                    + '/Cache.axd?Message=InvalidateAll&d=' + (new Date()).valueOf();
                var req = new XMLHttpRequest();
                req.open('GET', url, false);
                req.send(null);
                window.location.reload(true);
                sessionStorage.setItem("cached", "true");
            }
        };
        /** Wrapper for selecting an element in JQuery, will ensure that the element Id has a #prefix
        *   @param {string} elementId html element being selected
        *   @return {JQuery}
        **/
        utilities.selectObjectById = function (elementId) {
            if (elementId.substr(0, 1) != "#") {
                elementId = "#" + elementId;
            }
            return $(elementId);
        };
        /** Helper method that will check to see if a value is either null or undefined
        * @param {string} obj object being validated
        * @return {boolean}
        **/
        utilities.isNullOrUndefined = function (obj) {
            return ((obj === null) || (obj === undefined));
        };
        /** Helper method that will check to see if a value is either null, undefined, or an empty string
        * @param {string} obj object being validated
        * @return {boolean}
        **/
        utilities.isNullUndefinedEmpty = function (obj) {
            switch (typeof (obj)) {
                case 'boolean':
                case 'number':
                    return false;
                case 'string':
                    obj = obj.trim();
                    break;
            }
            return (GNEXT.utilities.isNullOrUndefined(obj) || (obj === ""));
        };
        /** Helper method to check if element in page exists
        * @return {boolean}
        **/
        utilities.elementExists = function (elementId) {
            // make sure the control exists~
            var ctl = GNEXT.utilities.selectObjectById(elementId);
            return (ctl.length > 0);
        };
        return utilities;
    }());
    GNEXT.utilities = utilities;
    var validators = (function () {
        function validators() {
        }
        /**
        * Helper method that will initialize a new control validator for the current page
        * @param {string} controlId schema name of the control being validated
        * @param {string} validatorIdPrefix Prefix appended to the validator name that identifies the type, such as NotNull or FutureDate
        * @param {string} failureMessageMask Message that will be displayed on error. the slug {label} will be replaced with the control label. The slug {label} will be replaced with the value field label
        * @param {PromiseLike<boolean>} evalFunction function to be invoked on validation
        * @param {string=} initialValue Default value for the field
        * @param {string=} validationGroup Group?
        * @return {void}
        **/
        validators.addValidator = function (controlId, validatorIdPrefix, failureMessageMask, evalFunction, initialValue, validationGroup) {
            if (typeof (Page_Validators) == 'undefined') {
                throw ("Page_Validators is undefined in this web form step");
            }
            // check default params
            if (GNEXT.utilities.isNullUndefinedEmpty(validationGroup))
                validationGroup = "";
            if (GNEXT.utilities.isNullUndefinedEmpty(initialValue))
                initialValue = "";
            // get control label and label text from page
            var controlLabelId = controlId + "_label";
            var controlLabel = $("#" + controlLabelId).text();
            //  replace the slug with the control label text
            var failureMessage = failureMessageMask.replace("{label}", controlLabel);
            var validator = document.createElement("span");
            validator.style.display = "none";
            validator.id = validatorIdPrefix + "_" + controlId;
            validator.controltovalidate = controlId;
            validator.errormessage = "<a href='#" + controlLabelId + "'>" + failureMessage + "</a>";
            validator.validationGroup = validationGroup; // Set this if you have set ValidationGroup on the form
            validator.setAttribute("initialvalue", initialValue);
            validator.evaluationfunction = evalFunction;
            // add the page validator and hook the error message click
            Page_Validators.push(validator);
        };
        /** Injects a new control validator that restricts users from entering dates set in the future
        * @param controlId schema name of the control being validated
        * @return {void}
        **/
        validators.addFutureDateValidator = function (controlId) {
            // make sure the control exists~
            if (!GNEXT.utilities.elementExists(controlId)) {
                return;
            }
            // also restrict the calendar from selecting future dates
            // var now = new Date().toLocaleDateString();
            // $("#" + controlId).next().data("DateTimePicker").setMaxDate(now);
            // use the common method to add the future date validation
            GNEXT.validators.addValidator(controlId, "FutureDateValidator", "{label} cannot be set to a future date.", function () {
                var isValid = true;
                var dateVal = $("#" + controlId).val();
                if (dateVal != null) {
                    // compare time values of date objects
                    var newDate = new Date(dateVal), now = new Date();
                    // TODO - use UTC conversions?
                    if (newDate.getTime() > now.getTime()) {
                        isValid = false;
                    }
                }
                return isValid;
            });
        };
        /** Injects a list of general null check validators that will ensure that a value is not null
        * @param {string} controlIdList array of schema control names value being checked for null
        * @return {void}
        **/
        validators.addMultipleNullValidators = function (controlIdList) {
            for (var i = 0; i < controlIdList.length; i++) {
                GNEXT.validators.addNullValidator(controlIdList[i]);
            }
        };
        /** JOY ADDED
         *
         * @param triggers
         * @param valueControlId
         * @param failureMessageMask
         * @param addLinkedEnableToggle
         * @param validationGroup
         */
        /*
        public static addMultipleLinkedNullValueValidators(
            triggers: trigger[],
            valueControlId: string | string[],         //Can either be a string or string array to account for multiple fields
            failureMessageMask?: string,
            addLinkedEnableToggle?: boolean,
            validationGroup?: string): void {

            $.each(triggers, (i, val) => {
                GNEXT.validators.addLinkedNullValueValidator(val.id, val.type, val.value, valueControlId, failureMessageMask, addLinkedEnableToggle);
            });
        }*/
        /** Injects a new control validator that will ensure that a value is not null
        * @param {string} controlId schema name of the control value being checked for null
        * @return {void}
        **/
        validators.addNullValidator = function (controlId) {
            var failureMessageMask = "Please provide a value for {label}.";
            // use the helper method to inject the null dependent null value check
            GNEXT.validators.addValidator(controlId, "GeneralNullValidator", failureMessageMask, function () {
                var isValid = true;
                var value = $("#" + controlId).val();
                // fail if null, undefined, or empty string
                if (GNEXT.utilities.isNullUndefinedEmpty(value)) {
                    isValid = false;
                }
                return isValid;
            });
        };
        /**
         * Add a linked null validator to a list of controls, all linked to the same value element.
         * NOTE: this is intended for use with controls all in a section such as a list of radio buttons linked to a text box
         * @param triggerControls {Array<ITriggerControl>} list of control elements that will trigger the value control required.
        *                                                  NOTE: we assume that these will all be the same type!
         * @param {string} valueControlId schema name of the control value being checked for null
         * @param {string} failureMessageMask optional mask for the message to be displayed. The slug {label} will be replaced with the value field label
         * @param {boolean} addLinkedEnableToggle optional flag indicating whether to toggle the value control enabled when trigger is met
         * @param {string} validationGroup validation group for evaluating this validator
         */
        /*
        public static addMultipleLinkedNullValidators(
            triggerControls: Array<ITriggerControl>, valueControlId: string,
            failureMessageMask?: string,
            addLinkedEnableToggle?: boolean,
            validationGroup?: string): void {

            // check for default arg values
            if (GNEXT.utilities.isNullUndefinedEmpty(addLinkedEnableToggle)) {
                addLinkedEnableToggle = false;
            }
            if (GNEXT.utilities.isNullUndefinedEmpty(failureMessageMask)) {
                failureMessageMask = "Please provide a value for {label}.";
            }

            // add the required marker to the value control
            GNEXT.validators.addMultipleRequiredMarkingHandler(triggerControls, valueControlId, addLinkedEnableToggle, false);

            // trigger the change on the first one in the list to get things rolling....
            var triggerCtl: JQuery = GNEXT.utilities.selectObjectById(triggerControls[0].id);
            triggerCtl.trigger("change");

            // use the helper method to inject the null dependent null value check
            GNEXT.validators.addValidator(valueControlId,
                "DependentNullValidator",
                failureMessageMask,
                () => {
                    var isValid: boolean = true;
                    var isTriggered: boolean = false;

                    // check each value in the list of possible trigger values.  if we found one that is triggered, we don't need to continue
                    for (let triggerCtl of triggerControls) {
                        isTriggered = GNEXT.validators.isControlTriggered(triggerCtl.id, triggerCtl.type, triggerCtl.value);
                        if (isTriggered) {
                            break;
                        }
                    }

                    // if the trigger control Id is checked, then ensure valueControl is not null
                    if (isTriggered == true) {
                        var value = $("#" + valueControlId).val();
                        // fail if null, undefined, or empty string
                        if (GNEXT.utilities.isNullUndefinedEmpty(value)) {
                            isValid = false;
                        }
                    }
                    return isValid;
                },
                null,
                validationGroup
            );
        } */
        /** Injects a new control validator that will validate the contents of a text field if a check box has been checked
        *** Modified to handle both a string or string array of valueControlId's in order to affect multiple fields
        * @param {string} triggerControlId schema name of the control that will trigger the validation
        * @param {string} triggerControlType type of control that will trigger the validation: check, radio, optionset, text
        * @param {any} triggerControlValue value that will determine whether the validation should occur
        * @param {string} valueControlId schema name of the control value being checked for null
        * @param {string} failureMessageMask optional mask for the message to be displayed. The slug {label} will be replaced with the value field label
        * @param {boolean} addLinkedEnableToggle optional flag indicating whether to toggle the value control enabled when trigger is met
        * @param {string} validationGroup validation group for evaluating this validator
        * @return {void}
        **/
        validators.addLinkedNullValueValidator = function (triggerControlId, triggerControlType, triggerControlValue, valueControlId, //Can either be a string or string array to account for multiple fields 
            failureMessageMask, addLinkedEnableToggle, validationGroup) {
            //check to see if valueControlId is a string or string array 
            if (typeof valueControlId === 'string') {
                // check for default arg values
                if (GNEXT.utilities.isNullUndefinedEmpty(addLinkedEnableToggle)) {
                    addLinkedEnableToggle = false;
                }
                if (GNEXT.utilities.isNullUndefinedEmpty(failureMessageMask)) {
                    failureMessageMask = "Please provide a value for {label}.";
                }
                // add the required marker to the trigger control
                GNEXT.validators.addRequiredMarkingHandler(triggerControlId, triggerControlType, triggerControlValue, valueControlId, false);
                // if indicated, add the enable toggle to the target value control
                if (addLinkedEnableToggle) {
                    GNEXT.validators.addLinkedControlEnableToggle(triggerControlId, triggerControlType, triggerControlValue, valueControlId);
                }
                // use the helper method to inject the null dependent null value check
                GNEXT.validators.addValidator(valueControlId, "DependentNullValidator", failureMessageMask, function () {
                    var isValid = true;
                    var isTriggered = GNEXT.validators.isControlTriggered(triggerControlId, triggerControlType, triggerControlValue);
                    // if the trigger control Id is checked, then ensure valueControl is not null
                    if (isTriggered == true) {
                        var value = $("#" + valueControlId).val();
                        // fail if null, undefined, or empty string
                        if (GNEXT.utilities.isNullUndefinedEmpty(value)) {
                            isValid = false;
                        }
                    }
                    return isValid;
                }, null, validationGroup);
            }
            else if ((typeof valueControlId === "object") && (Array.isArray(valueControlId))) {
                if (GNEXT.utilities.isNullUndefinedEmpty(addLinkedEnableToggle)) {
                    addLinkedEnableToggle = false;
                }
                if (GNEXT.utilities.isNullUndefinedEmpty(failureMessageMask)) {
                    failureMessageMask = "Please provide a value for {label}.";
                }
                //iterate
                $.each(valueControlId, function (i, val) {
                    // add the required marker to the trigger control
                    GNEXT.validators.addRequiredMarkingHandler(triggerControlId, triggerControlType, triggerControlValue, val, false);
                    // if indicated, add the enable toggle to the target value control
                    if (addLinkedEnableToggle) {
                        GNEXT.validators.addLinkedControlEnableToggle(triggerControlId, triggerControlType, triggerControlValue, val);
                    }
                    // use the helper method to inject the null dependent null value check
                    GNEXT.validators.addValidator(val, "DependentNullValidator", failureMessageMask, function () {
                        var isValid = true;
                        var isTriggered = GNEXT.validators.isControlTriggered(triggerControlId, triggerControlType, triggerControlValue);
                        // if the trigger control Id is checked, then ensure valueControl is not null
                        if (isTriggered == true) {
                            var value = $("#" + val).val();
                            // fail if null, undefined, or empty string
                            if (GNEXT.utilities.isNullUndefinedEmpty(value)) {
                                isValid = false;
                            }
                        }
                        return isValid;
                    }, null, validationGroup);
                });
            }
        };
        /** Adds a validator that will ensure that a min number of check boxes have been checked for a specific section
            NOTE: this does not seem to be invoked if validation is attached via metadata.  need to test
            @param {string} sectionDataName     name of the section that contains the group of checkboxes
            @param {string} validationGroup     validation group for the checkboxes
            @param {boolean} minChecked         min number of items to be checked
            @param {string} failureMessageMask  failure message when the min number of items is not checked
        **/
        validators.addMinCheckedRequiredValidator = function (sectionDataName, validationGroup, minChecked, failureMessageMask) {
            // select the section by name 
            var selector = "table.section[data-name='" + sectionDataName + "']";
            var section = $(selector);
            var sectionLabel = section.prev().text();
            if (GNEXT.utilities.isNullUndefinedEmpty(failureMessageMask)) {
                failureMessageMask = "Please check at least one value in the section '" + sectionLabel + "'";
            }
            if (GNEXT.utilities.isNullUndefinedEmpty(minChecked)) {
                minChecked = 1;
            }
            // get the list of checkboxes in the section and attach the validator to the fitst in the list
            var firstCheck = $(" tbody tr td.cell.checkbox-cell input[type='checkbox']", section).first();
            var controlId = firstCheck.attr("id");
            GNEXT.validators.addValidator(controlId, "MinCheckedRequired", failureMessageMask, function () {
                // check to see if any checked 
                var checkedCount = $(selector + " tbody tr td.cell.checkbox-cell input[type='checkbox']:checked").length;
                var isValid = (checkedCount >= minChecked);
                return isValid;
            }, null, validationGroup);
        };
        /** Helper method that will enable or disable a target control based on another trigger control
        * @param {string} triggerControlId schema name of the control that will trigger the toggle.
        * @param {string} triggerControlType type of control that will trigger the validation: check, radio, optionset, text
        * @param {any} triggerControlValue value that will determine whether the validation should occur
        * @param {string} controlId schema name of the control value being checked enable/disable
        **/
        validators.addLinkedControlEnableToggle = function (triggerControlId, triggerControlType, triggerControlValue, controlId) {
            // grab the target trigger control.
            var triggerCtl = GNEXT.utilities.selectObjectById(triggerControlId);
            // if this is a radio button, we need to trigger on the group change to account for deselect.
            // so get the name and use that as the selector
            if (triggerControlType == "radio") {
                var name = triggerCtl.attr("name");
                // select the controls with the same name as the trigger target
                triggerCtl = $("input[name='" + name + "']", triggerCtl.parent());
            }
            // add the change handler
            triggerCtl.change(function () {
                var isTriggered = GNEXT.validators.isControlTriggered(triggerControlId, triggerControlType, triggerControlValue);
                var ctl = GNEXT.utilities.selectObjectById(controlId);
                GNEXT.ui.toggleElementEnabled(controlId, isTriggered, false);
            });
            // npw "fire" the event so we can toggle enable/disable
            triggerCtl.trigger("change");
        };
        /** Helper method that will determine whether our trigger control is ... triggered!
        * @param {string} triggerControlId schema name of the control that will trigger the validation
        * @param {string} triggerControlType type of control that will trigger the validation: check, radio, optionset, text
        * @param {any} triggerControlValue value that will determine whether the validation should occur
        **/
        validators.isControlTriggered = function (triggerControlId, triggerControlType, triggerControlValue) {
            var isTriggered = false;
            switch (triggerControlType) {
                case "check":
                case "radio":
                    isTriggered = $("#" + triggerControlId).is(":checked");
                    break;
                case "optionset":
                    var valueNum = $("#" + triggerControlId + " option:selected").val();
                    isTriggered = (valueNum == triggerControlValue);
                    break;
                case "text":
                    var valueStr = $("#" + triggerControlId).val();
                    isTriggered = (valueStr == triggerControlValue);
                    break;
            }
            return isTriggered;
        };
        /** Helper method that will attach the red asterisk reqired marker to an input control when a control is
        * @param {string} triggerControlId schema name of the control that will trigger the validation
        * @param {string} triggerControlType type of control that will trigger the validation: check, radio, optionset, text
        * @param {any} triggerControlValue value that will determine whether the validation should occur
        * @param {string} valueControlId schema name of the control value being checked for null
        **/
        validators.addRequiredMarkingHandler = function (triggerControlId, triggerControlType, triggerControlValue, valueControlId, useClassName) {
            // add the required marker to the trigger control
            var trigger = GNEXT.utilities.selectObjectById(triggerControlId);
            // if this is a radio button, we need to react to the check of each in the group.
            // so get all inputs in the parent and attach change to that!
            if (triggerControlType == "radio") {
                trigger = trigger.parent().find("input[type='radio']");
            }
            trigger.change(function () {
                var isTriggered = GNEXT.validators.isControlTriggered(triggerControlId, triggerControlType, triggerControlValue);
                GNEXT.validators.toggleFieldRequired(valueControlId, isTriggered, useClassName);
            });
        };
        /**
         * Helper method that will add the required marking handler for a list of trigger controls
         * NOTE: this is intended for use with controls all in a section such as a list of radio buttons linked to a text box
         * @param triggerControls {Array<ITriggerControl>} list of control elements that will trigger the value control required.
         *                                                 NOTE: we assume that these will all be the same type!
         * @param triggerControls
         * @param valueControlId
         * @param useClassName
         */
        /*
        public static addMultipleRequiredMarkingHandler(triggerControls: Array<ITriggerControl>, valueControlId: string, addLinkedEnableToggle?:boolean, useClassName?: boolean): void {

            // we need to handle a list of items.
            // Radio buttons are special: need to attach to even non trigger items so that we can fire on change for the triggers

            // check the type of first item in the list for the type. ASSUMES ALL THE SAME TYPE!!
            var triggerCtl: ITriggerControl = triggerControls[0];

            if (triggerCtl.type == 'radio')
            {
                // get all radio buttons in the section
                var trigger: JQuery = GNEXT.utilities.selectObjectById(triggerCtl.id);
                trigger = trigger.parent().find("input[type='radio']");

                trigger.change(
                    () => {
                        var isTriggered: boolean = false;
                        // check each value in the list of possible trigger values.  if we found one that is triggered, we don't need to continue
                        for (let triggerCtl of triggerControls) {
                            isTriggered = GNEXT.validators.isControlTriggered(triggerCtl.id, triggerCtl.type, triggerCtl.value);
                            if (isTriggered) {
                                break;
                            }
                        }

                        // now toggle the value control
                        GNEXT.validators.toggleFieldRequired(valueControlId, isTriggered, useClassName);
                        // also toggle enabled if specified
                        if (addLinkedEnableToggle === true) {
                            GNEXT.ui.toggleElementEnabled(valueControlId, isTriggered);
                        }
                    }
                );
            }
            else {

                for (let triggerCtl of triggerControls)
                {
                    // add the required marker to the trigger control
                    var trigger: JQuery = GNEXT.utilities.selectObjectById(triggerCtl.id);

                    // here we just trigger on the individual value. Each time it's triggered, the value control id should be updated
                    trigger.change(
                        () => {
                            var isTriggered: boolean = GNEXT.validators.isControlTriggered(triggerCtl.id, triggerCtl.type, triggerCtl.value);
                            GNEXT.validators.toggleFieldRequired(valueControlId, isTriggered, useClassName);

                            // also toggle enabled if specified
                            if (addLinkedEnableToggle === true) {
                                GNEXT.ui.toggleElementEnabled(valueControlId, isTriggered);
                            }
                        }
                    );
                }
            }
        } */
        /** Hide/show the red asterisk next to a field label to indicate required
        *    NOTE: this is dependent upon the .gnext-requred-field::after css element present in the Page definition custom CSS
        *   @param {string} controlId control being flagged as required
        *   @param {boolean} useClassName option flag indicating whether to use CSS or inject an element
        **/
        validators.toggleFieldRequired = function (controlId, required, useClassName) {
            var controlLabelId = controlId + "_label";
            var ctl = GNEXT.utilities.selectObjectById(controlLabelId);
            GNEXT.validators.toggleElementRequired(ctl, required, useClassName);
        };
        /** Helper function that will add a Required indicator on a Section header
        *    NOTE: this is dependent upon the .gnext-requred-field::after css element present in the Page definition custom CSS
        *   @param {string} sectionDataName name of the section in the CRM entity form
        *   @param {boolean} required option flag indicating whether to add or remove reqiured flag
        *   @param {boolean} useClassName option flag indicating whether to use CSS or inject an element
        **/
        validators.toggleSectionRequired = function (sectionDataName, required, useClassName) {
            var selector = "table.section[data-name='" + sectionDataName + "']";
            var element = $(selector);
            if (element.length > 0) {
                GNEXT.validators.toggleElementRequired(element.prev(), required, useClassName);
            }
        };
        /** Helper function that will add a Required indicator on a Tab header
        *    NOTE: this is dependent upon the .gnext-requred-field::after css element present in the Page definition custom CSS
        *   @param {string} tabName name of the tab in the CRM entity form
        *   @param {boolean} required option flag indicating whether to add or remove reqiured flag
        *   @param {boolean} useClassName option flag indicating whether to use CSS or inject an element
        **/
        validators.toggleTabRequired = function (tabName, required, useClassName) {
            var selector = "div#EntityFormView div.tab.clearfix[data-name='" + tabName + "']";
            var element = $(selector);
            if (element.length > 0) {
                GNEXT.validators.toggleElementRequired(element.prev(), required, useClassName);
            }
        };
        validators.toggleElementRequired = function (element, required, useClassName) {
            if (element.length > 0) {
                var validatorId = element.attr("id") + "_required_indicator";
                // allow for message override
                if (GNEXT.utilities.isNullUndefinedEmpty(required)) {
                    required = true;
                }
                if (GNEXT.utilities.isNullUndefinedEmpty(useClassName)) {
                    useClassName = true;
                }
                if (required) {
                    if (useClassName) {
                        element.addClass(GNEXT.ui.RequiredIndicatorClassName);
                    }
                    else {
                        // insert the DIV after the element 
                        if (!GNEXT.utilities.elementExists(validatorId)) {
                            var div = $("<div class='validators' id='" + validatorId + "'/>");
                            div.html(" *");
                            div.insertAfter(element);
                        }
                    }
                }
                else {
                    if (useClassName) {
                        element.removeClass(GNEXT.ui.RequiredIndicatorClassName);
                    }
                    else {
                        $("#" + validatorId).remove();
                    }
                }
            }
        };
        return validators;
    }());
    GNEXT.validators = validators;
})(GNEXT || (GNEXT = {}));
//# sourceMappingURL=Script - Common Utilities - Web Template.js.map