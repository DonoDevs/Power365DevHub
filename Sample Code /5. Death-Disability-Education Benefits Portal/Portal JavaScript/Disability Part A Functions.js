/// <reference path="../Adxportal Objects.ts" />
/// <reference path="../Script - Common Utilities - Web Template.ts" />
var GNEXT;
(function (GNEXT) {
    /** Methods that will be referenced across the Death Part B Web Form.   **/
    var DisabilityPartACommon = (function () {
        function DisabilityPartACommon() {
        }
        /**
        * General method to add tab and section header required indicators
        **/
        DisabilityPartACommon.AddRequiredTabsAndSections = function () {
            // add the tab and section required indicators 
            GNEXT.validators.toggleTabRequired("PSOMaritalProfileQuestion", true);
            GNEXT.validators.toggleTabRequired("PSOChildrenProfileQuestion", true);
        };
        /**
        *   Apply the handler for the Applicant Type selection
        **/
        DisabilityPartACommon.ApplicantTypeDisplayHandler = function () {
            var isApplicant = $('#gnext_applicanttype_0:checked').val();
            if (isApplicant == null) {
                isApplicant = $('#gnext_applicanttype_1:checked').val();
            }
            if (isApplicant == "419700002") {
                GNEXT.ui.hideTab(".tab[data-name='AuthorizedRepType']");
            }
            else {
                GNEXT.ui.showTab(".tab[data-name='AuthorizedRepType']");
            }
        };
        DisabilityPartACommon.ApplyConditionalSectionDisplayRules = function () {
            // Marriage Profile
            if ($("#gnext_officermarriedattimeofinjury_wfs_1").is(":checked")) {
                GNEXT.ui.hideTab("PSOMaritalProfileInfo");
            }
            // Children profile
            if ($("#gnext_psohavechildren_wfs_1").is(":checked")) {
                GNEXT.ui.hideTab("PSOChildrenProfileInfo");
            }
        };
        DisabilityPartACommon.ApplyPSOInformationChecks = function () {
            GNEXT.ui.maskSSN("gnext_officerssn");
            GNEXT.ui.maskDate();
            // load the common web file and attach the validation handlers
            // NOTE: is included in the custom script segment for the parent page
            GNEXT.validators.addFutureDateValidator("gnext_officerdateofbirth");
            GNEXT.validators.addFutureDateValidator("gnext_officerdateofincident");
            GNEXT.validators.addFutureDateValidator("gnext_publicsafetyofficerdateofmedicalretiremen");
            // validator for Prefix (other)
            GNEXT.validators.addLinkedNullValueValidator("gnext_prefixortitle", "optionset", 419700005, "gnext_describeotherprefix", "Please describe other Prefix.");
            GNEXT.validators.addLinkedControlEnableToggle("gnext_prefixortitle", "optionset", 419700005, "gnext_describeotherprefix");
            // validator for State (other)
            GNEXT.validators.addLinkedNullValueValidator("gnext_publicsafetyofficerstate", "optionset", 419700055, "gnext_otherstate", "Please describe other State.");
            GNEXT.validators.addLinkedControlEnableToggle("gnext_publicsafetyofficerstate", "optionset", 419700055, "gnext_otherstate");
        };
        DisabilityPartACommon.ApplyOfficerInjuryProfileChecks = function () {
            // cause of injury "Other"
            GNEXT.validators.addLinkedNullValueValidator("gnext_injurytypeother", "check", "", "gnext_causeofinjuryother", "Please describe other cause of injury", true);
            // Duty type "other"  
            GNEXT.validators.addLinkedNullValueValidator("gnext_dutystatus_2", "radio", "", "gnext_dutystatusdescribe", "Please describe the Officer's duty status", true);
            // mark the section as required!
            GNEXT.validators.toggleSectionRequired("PSOInjuryProfile_section_2", true); // Cause of Injury: (Check all that apply)
        };
        DisabilityPartACommon.ApplyApplicantStatementChecks = function () {
            // lock out If so, where if worked post injury checked 
            GNEXT.validators.addLinkedNullValueValidator("gnext_offworkedatanyjobs_fol_theinj_0", "radio", "", "gnext_officerworkedotherplacespostinjury", "{label}");
            GNEXT.validators.addLinkedControlEnableToggle("gnext_offworkedatanyjobs_fol_theinj_0", "radio", null, "gnext_officerworkedotherplacespostinjury");
            // lock out If yes, please describe if volunteering checked 
            GNEXT.validators.addLinkedNullValueValidator("gnext_officercurrentlyworkingorvolunteering_0", "radio", "", "gnext_describeofficerworkingorvolunteering", "{label}");
            GNEXT.validators.addLinkedControlEnableToggle("gnext_officercurrentlyworkingorvolunteering_0", "radio", null, "gnext_describeofficerworkingorvolunteering");
        };
        /** Apply the on change handlers to the 'None of the above' checks **/
        DisabilityPartACommon.ApplyOtherBenefitsChecks = function () {
            // add required indicators
            GNEXT.validators.toggleSectionRequired("Hasaclaimbeenfiledunderthefollowing?", true);
            GNEXT.validators.toggleSectionRequired("Hasafinaldeterminationbeenissuedfor?", true);
            // set other benefits filed validator
            GNEXT.validators.addLinkedNullValueValidator("gnext_otherbenefitsfiled", "check", "", "gnext_describeotherfiled", "Please provide a value for other benefits filed.");
            GNEXT.validators.addLinkedNullValueValidator("gnext_nootherbenefitsfiled", "check", "", "gnext_describeotherfiled", "Please describe None of the Above filed.");
            // set up other benefits determined validator
            GNEXT.validators.addLinkedNullValueValidator("gnext_otherbenefitsdetermined", "check", "", "gnext_describeotherdetermination", "Please provide a value for other determination.");
            GNEXT.validators.addLinkedNullValueValidator("gnext_nootherbenefitsdetermined", "check", "", "gnext_describeotherdetermination", "Please describe None of the Above determination.");
            // add the change handler
            $("#gnext_nootherbenefitsfiled,#gnext_otherbenefitsfiled").change(function () {
                var isChecked = $("#gnext_nootherbenefitsfiled").is(":checked") || $("#gnext_otherbenefitsfiled").is(":checked");
                // if either None or Other is checked, then
                GNEXT.ui.toggleElementEnabled("gnext_describeotherfiled", isChecked, !isChecked);
            });
            $("#gnext_otherbenefitsdetermined,#gnext_nootherbenefitsdetermined").change(function () {
                var isChecked = $("#gnext_otherbenefitsdetermined").is(":checked") || $("#gnext_nootherbenefitsdetermined").is(":checked");
                // if either None or Other is checked, then
                GNEXT.ui.toggleElementEnabled("gnext_describeotherdetermination", isChecked, !isChecked);
            });
            $("#gnext_nootherbenefitsfiled").change(function () {
                GNEXT.DisabilityPartACommon.disableOtherBenefitsFiled();
            });
            $("#gnext_nootherbenefitsdetermined").change(function () {
                GNEXT.DisabilityPartACommon.disableOtherBenefitsDetermined();
            });
            GNEXT.DisabilityPartACommon.disableOtherBenefitsFiled();
            GNEXT.DisabilityPartACommon.disableOtherBenefitsDetermined();
        };
        DisabilityPartACommon.disableOtherBenefitsFiled = function () {
            // when None of the Above is checked, uncheck and disable others.
            // claim for benefits been filed
            var controlIds = ['gnext_appfiledundermedicalretirementdisability',
                'gnext_appfiledunderworkerscompensation',
                'gnext_appfiledundersocialsecurity',
                'gnext_federalemployeescompensationact',
                'gnext_dcretirementanddisabilityact',
                'gnext_september11thvictimcompensationfund',
                'gnext_otherbenefitsfiled'];
            if ($('#gnext_nootherbenefitsfiled').is(':checked')) {
                // disable the rest of the checkboxes
                GNEXT.ui.toggleCheckEnabled(controlIds, false);
            }
            else {
                GNEXT.ui.toggleCheckEnabled(controlIds);
            }
        };
        DisabilityPartACommon.disableOtherBenefitsDetermined = function () {
            // when None of the Above is checked, uncheck and disable others.
            // claim for benefits been filed
            var controlIds = ['gnext_deteminationissuedmedicalretirementdis',
                'gnext_deteminationissuedworkerscompensation',
                'gnext_deteminationissuedsocialsecurity',
                'gnext_federalemployeescompensationactfinal',
                'gnext_dcretirementanddisabilityfinal',
                'gnext_september11tvictimcompensationfundfinal',
                'gnext_otherbenefitsdetermined'];
            if ($('#gnext_nootherbenefitsdetermined').is(':checked')) {
                // disable the rest of the checkboxes
                GNEXT.ui.toggleCheckEnabled(controlIds, false);
            }
            else {
                GNEXT.ui.toggleCheckEnabled(controlIds);
            }
        };
        return DisabilityPartACommon;
    }());
    GNEXT.DisabilityPartACommon = DisabilityPartACommon;
})(GNEXT || (GNEXT = {}));
//# sourceMappingURL=Disability Part A Functions - Web Template.js.map