/// <reference path="../Adxportal Objects.ts" />
/// <reference path="../Script - Common Utilities - Web Template.ts" /> 
var GNEXT;
(function (GNEXT) {
    /** Methods that will be referenced across the Education Web Forms.   **/
    var EducationCommon = (function () {
        function EducationCommon() {
        }
        // Apply validators, mask SSN, etc.
        EducationCommon.ApplyPSOInfoChecks = function () {
            // apply the date mask to all controls
            GNEXT.ui.maskDate();
            // load the common web file and attach the validation handlers
            GNEXT.validators.addFutureDateValidator("gnext_publicsafetyofficersdateofbirth");
            GNEXT.validators.addFutureDateValidator("gnext_publicsafetyofficersdateofdeathorinjury");
            // if officer prefix is "other", describe is necessary
            GNEXT.validators.addLinkedNullValueValidator("gnext_officerprefix", "optionset", "419700005", "gnext_officerprefixother", "Please describe other Public Safety Officer Prefix.", true);
            GNEXT.ui.maskSSN("gnext_publicsafetyofficerssocialsecuritynumber");
            GNEXT.validators.addLinkedNullValueValidator("gnext_isthereanapproveddeathordisabilityclai_0", "radio", "419700000", "gnext_whichtypeofclaimwastheapprovedclaim", "Please describe which type of claim was the approved claim.", true);
            GNEXT.validators.addLinkedNullValueValidator("gnext_isthereanapproveddeathordisabilityclai_0", "radio", "419700000", "gnext_pleaseenterclaimnumberifknown", "Please enter claim number.", true);
            GNEXT.validators.addLinkedNullValueValidator("gnext_studentsrelationshiptothepublicsafetyoff_2", "radio", "419700002", "gnext_studentsrelationshipother", "Please describe Student's Relationship.", true);
        };
        // Apply prefix other validator 
        // @param capacityValidationFlag: if true, will make specific fields for Parent, Authorized, or Other required if 
        //"Student" is NOT chosen in the "in which capacity?" option set. Should only be true in the education application. Should
        //be false in every other case, including the pre-screen. 
        EducationCommon.ApplyInWhichCapacityInfoChecks = function (capacityValidationFlag) {
            // apply the prefix other validator  -- different value needed here 419,700,003 is other
            GNEXT.validators.addLinkedNullValueValidator("gnext_inwhichcapacity_3", "radio", "419700003", "gnext_inwhichcapacityother", "Please describe other filing type.", true);
            var values = ["gnext_parentorlegalguardiansfirstname", "gnext_parentorlegalguardianslastname", "gnext_parentorlegalguardiansbesttelephonenum", "gnext_parentorlegalguardiansemailaddress"];
            if (capacityValidationFlag) {
                $('#gnext_inwhichcapacity_1').click(function () {
                    GNEXT.validators.addLinkedNullValueValidator("gnext_inwhichcapacity_1", "radio", "419700001", values, null, false);
                });
                $('#gnext_inwhichcapacity_2').click(function () {
                    GNEXT.validators.addLinkedNullValueValidator("gnext_inwhichcapacity_2", "radio", "419700002", values, null, false);
                });
                $('#gnext_inwhichcapacity_3').click(function () {
                    GNEXT.validators.addLinkedNullValueValidator("gnext_inwhichcapacity_3", "radio", "419700003", values, null, false);
                });
            }
        };
        /** This function gets called on the actual web form step page. Checks an option set value and sets certain fields to
         *  required as needed. E.g. Education Application - Applicant Review Web form step to check "In which capacity are you
         *  filing for benefits?" option set.
         * @param values - a string array of schema names of the fields that need to be set to required.
         */
        EducationCommon.initialRequiredFieldsCheckParentAuthOther = function (values) {
            if ($('#gnext_inwhichcapacity_1').is(":checked")) {
                GNEXT.validators.addLinkedNullValueValidator("gnext_inwhichcapacity_1", "radio", "419700001", values, null, false);
            }
            else if ($('#gnext_inwhichcapacity_2').is(":checked")) {
                GNEXT.validators.addLinkedNullValueValidator("gnext_inwhichcapacity_2", "radio", "419700002", values, null, false);
            }
            else if ($('#gnext_inwhichcapacity_3').is(":checked")) {
                GNEXT.validators.addLinkedNullValueValidator("gnext_inwhichcapacity_3", "radio", "419700003", values, null, false);
            }
        };
        EducationCommon.initialRequiredFieldsCheckPrimaryContact = function (values) {
            if ($('#gnext_primarycontactsameasapplicant_1').is(":checked")) {
                GNEXT.validators.addLinkedNullValueValidator("gnext_primarycontactsameasapplicant_1", "radio", "419700001", values, null, false);
            }
        };
        // Apply prefix other validator 
        EducationCommon.ApplyParentAuthRepInfoChecks = function () {
            // apply the prefix other validator  -- different value needed here 419,700,003 is other
            GNEXT.validators.addLinkedNullValueValidator("gnext_parentorauthrepprefix", "optionset", "419700005", "gnext_parentorauthrepprefixother", "Please describe other Prefix.", true);
        };
        // Apply prefix other check
        EducationCommon.ApplyApplicantInfoChecks = function () {
            // apply the date mask to all controls
            GNEXT.ui.maskDate();
            //GNEXT.EducationCommon.hideParentAuthRepOrOther();
            GNEXT.EducationCommon.hidePrimaryContact();
            GNEXT.EducationCommon.hideParentAuthRepOrOther();
            GNEXT.validators.addLinkedNullValueValidator("gnext_studentprefix", "optionset", "419700005", "gnext_studentprefixother", "Please describe other Prefix.", true);
        };
        // Apply date mask, etc. to primary contact
        EducationCommon.ApplyPrimaryContactInfoChecks = function () {
            // apply null link validator - prefix other
            GNEXT.validators.addLinkedNullValueValidator("gnext_primarycontactprefix", "optionset", "419700005", "gnext_primarycontactprefixother", "Please describe other Primary Contact Prefix.", true);
            GNEXT.validators.toggleTabRequired("PrimaryContactSame");
            var contactInfo = ["gnext_primarycontactfirstname", "gnext_primarycontactlastname", "gnext_primarycontactphonenumber", "gnext_primarycontactemailaddress"];
            $('#gnext_primarycontactsameasapplicant_1').click(function () {
                GNEXT.validators.addLinkedNullValueValidator("gnext_primarycontactsameasapplicant_1", "radio", "419700001", contactInfo, null, false);
            });
        };
        // apply logic for final review page
        EducationCommon.ApplyFinalReview = function () {
            // hide the tabs we do not want them to see (any preview instructions, etc.)
            var tabIds = ["tab_Preview", "ReviewConfirm", "TermAndEducationalAssistance", "tab_8_section_2", "studentLoanStatusVerification", "ApplicantSignature", "MissingDocuments","ApplicationPreview"];
            GNEXT.ui.toggleTabDisplay(tabIds);
            GNEXT.ui.addPrintButton();
            GNEXT.EducationCommon.makeReadOnly();
            GNEXT.EducationCommon.hidePrimaryContact();
            GNEXT.EducationCommon.hideParentAuthRepOrOther();
        };
        // apply logic for final review page
        EducationCommon.ApplyEducationPreview = function () {
            GNEXT.ui.addPrintButton();
            GNEXT.EducationCommon.hidePrimaryContact();
            GNEXT.EducationCommon.hideParentAuthRepOrOther();
            GNEXT.EducationCommon.ApplyApplicantInfoChecks();
            GNEXT.EducationCommon.ApplyPrimaryContactInfoChecks();
            GNEXT.EducationCommon.ApplyInWhichCapacityInfoChecks(false);
            GNEXT.EducationCommon.ApplyParentAuthRepInfoChecks();
            //GNEXT.EducationCommon.ApplyPSOInfoChecks();
            // hide the tabs we do not want them to see (any preview instructions, etc.)
            var tabIds = ["FinalReview", "FinalReviewConfirm", "tab_Preview", "PublicSafetyOfficerInformation", "RequiredDocuments", "MissingDocuments", "ApplicantSignature"];
            GNEXT.ui.toggleTabDisplay(tabIds);
            $("input[type='radio']").change(function () {
                GNEXT.EducationCommon.hidePrimaryContact();
                GNEXT.EducationCommon.hideParentAuthRepOrOther();
            });
        };
        // apply logic for education editable review page - used in education application
        EducationCommon.ApplyEducationReview = function () {
            GNEXT.ui.addPrintButton();
            GNEXT.EducationCommon.hidePrimaryContact();
            GNEXT.EducationCommon.hideParentAuthRepOrOther();
            GNEXT.EducationCommon.ApplyApplicantInfoChecks();
            GNEXT.EducationCommon.ApplyPrimaryContactInfoChecks();
            GNEXT.EducationCommon.ApplyInWhichCapacityInfoChecks(true);
            GNEXT.EducationCommon.ApplyParentAuthRepInfoChecks();
            //GNEXT.EducationCommon.ApplyPSOInfoChecks();
            // hide the tabs we do not want them to see (any preview instructions, etc.)
            var tabIds = ["FinalReview", "FinalReviewConfirm", "tab_Preview", "ApplicationPreview", "ReviewConfirm", "PublicSafetyOfficerInformation", "TermAndEducationalAssistance", "studentLoanStatusVerification", "RequiredDocuments", "MissingDocuments", "ApplicantSignature"];
            GNEXT.ui.toggleTabDisplay(tabIds);
            $("input[type='radio']").change(function () {
                GNEXT.EducationCommon.hidePrimaryContact();
                GNEXT.EducationCommon.hideParentAuthRepOrOther();
            });
        };
        // apply logic for education editable review page
        EducationCommon.ApplyEducationFinalReview = function () {
            GNEXT.ui.addPrintButton();
            GNEXT.EducationCommon.hidePrimaryContact();
            GNEXT.EducationCommon.hideParentAuthRepOrOther();
            GNEXT.EducationCommon.ApplyApplicantInfoChecks();
            GNEXT.EducationCommon.ApplyPrimaryContactInfoChecks();
            GNEXT.EducationCommon.ApplyInWhichCapacityInfoChecks(false);
            GNEXT.EducationCommon.ApplyParentAuthRepInfoChecks();
            //GNEXT.EducationCommon.ApplyPSOInfoChecks();
            // hide the tabs we do not want them to see (any preview instructions, etc.)
            var tabIds = ["tab_Preview", "ApplicationPreview", "ReviewConfirm", "PublicSafetyOfficerInformation", "MissingDocuments"];
            GNEXT.ui.toggleTabDisplay(tabIds);
            // make the form read only
            GNEXT.EducationCommon.makeReadOnly();
        };
        // hide the primary contact info if not necessary
        EducationCommon.hidePrimaryContact = function () {
            // is there a primary contact
            var isPrimaryContact = $('#gnext_primarycontactsameasapplicant_0').is(":checked");
            GNEXT.ui.toggleTabDisplay([".tab[data-name='PrimaryContactInfo']"], isPrimaryContact);
        };
        //JOY ADDED
        //hide the Parent, Authorized Representative, or "Other" information if not necessary
        EducationCommon.hideParentAuthRepOrOther = function () {
            var isNotStudent = $('#gnext_inwhichcapacity_0').is(":checked");
            GNEXT.ui.toggleTabDisplay([".tab[data-name='tab_parentauthrepinformation']"], isNotStudent);
        };
        EducationCommon.makeReadOnly = function () {
            $('input[type=text], textarea').each(function () {
                //var elem = $( el );
                $(this).attr('readonly', 'true');
            });
            $('#gnext_officersemailaddress').attr('readonly', 'true');
            $('input[type=checkbox]:not(:checked)').each(function () {
                //var elem = $( el );
                $(this).attr('disabled', 'true');
            });
            $('input[type=checkbox]').click(function (evt) {
                //var elem = $( el );
                evt.preventDefault();
            });
            $('input[type=radio]:not(:checked)').each(function () {
                //var elem = $( el );
                $(this).attr('disabled', 'true');
            });
            // handle option sets
            $('option:not(:selected)').prop('disabled', 'true');
            // disable calendar
            GNEXT.ui.disableDatePick("gnext_applicantsdateofbirth");
        };
        EducationCommon.ApplyPreviewChecks = function () {
            GNEXT.EducationCommon.ApplyInWhichCapacityInfoChecks(true);
            GNEXT.EducationCommon.ApplyApplicantInfoChecks();
            GNEXT.EducationCommon.ApplyParentAuthRepInfoChecks();
            GNEXT.EducationCommon.ApplyPrimaryContactInfoChecks();
            GNEXT.EducationCommon.ApplyPSOInfoChecks();
            GNEXT.ui.addPrintButton();
            // hide the tabs we do not want them to see quite yet.
            var tabIds = ["FinalReview", "FinalReviewConfirm", "ApplicationPreview", "TermAndEducationalAssistance", "tab_8_section_2", "studentLoanStatusVerification", "ApplicantSignature", "RequiredDocuments", "MissingDocuments"];
            GNEXT.ui.toggleTabDisplay(tabIds);
            //Dynamically hide these tabs depending on what radio button options are selected
            $("input[type='radio']").change(function () {
                GNEXT.EducationCommon.hidePrimaryContact();
                GNEXT.EducationCommon.hideParentAuthRepOrOther();
            });
        };
        return EducationCommon;
    }());
    GNEXT.EducationCommon = EducationCommon;
})(GNEXT || (GNEXT = {}));
//# sourceMappingURL=Education Functions - Web Template.js.map