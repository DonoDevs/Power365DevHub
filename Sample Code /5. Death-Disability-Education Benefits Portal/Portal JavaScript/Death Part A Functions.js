/// <reference path="../Script - Common Utilities - Web Template.ts" />
var GNEXT;
(function (GNEXT) {
    var DeathPartASummary = (function () {
        function DeathPartASummary() {
        }
        DeathPartASummary.ApplyPSOInformationChecks = function () {
            GNEXT.ui.maskDate();
            GNEXT.ui.maskSSN("gnext_officerssn");
            // load the common web file and attach the validation handlers
            GNEXT.validators.addFutureDateValidator("gnext_officerdateofbirth");
            GNEXT.validators.addFutureDateValidator("gnext_officerdateofincident");
            GNEXT.validators.addFutureDateValidator("gnext_officerdateofdeath");
            // validator for Prefix (other)
            GNEXT.validators.addLinkedNullValueValidator("gnext_prefixortitle", "optionset", 419700005, "gnext_describeotherprefix", "Please describe other Prefix.");
            GNEXT.validators.addLinkedControlEnableToggle("gnext_prefixortitle", "optionset", 419700005, "gnext_describeotherprefix");
        };
        /**
        * General method to add tab and section header required indicators
        **/
        DeathPartASummary.AddRequiredTabsAndSections = function () {
            // add the tab and section required indicators..
            GNEXT.validators.toggleTabRequired("ApplicantsRelationshipToPSO", true);
            GNEXT.validators.toggleTabRequired("PSOPriorMarriageQuestion", true);
            GNEXT.validators.toggleTabRequired("PSOChildrenQuestion", true);
            GNEXT.validators.toggleSectionRequired("tab_20_section_5", true); // Public Safety Officer Benefits' (PSOB) Designee(s) on file 
            GNEXT.validators.toggleTabRequired("LifeInsuranceDesigneeQuestion", true);
            GNEXT.validators.toggleTabRequired("SurvivingParentsQuestion", true);
            GNEXT.validators.toggleTabRequired("didPSOhaveSurvivingAdultChildren", true);
            GNEXT.validators.toggleSectionRequired("tab_19_section_1", true); // Other benefits, filed
            GNEXT.validators.toggleSectionRequired("tab_19_section_2", true); // Other benefits, determined
        };
        DeathPartASummary.hideTabs = function () {
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
            // check for PSO marital status
            var psoMaritalStatus = $('#gnext_publicsafetyofficersmaritalstatus_0:checked').val();
            if (psoMaritalStatus == null) {
                psoMaritalStatus = $('#gnext_publicsafetyofficersmaritalstatus_1:checked').val();
                if (psoMaritalStatus == null) {
                    psoMaritalStatus = $('#gnext_publicsafetyofficersmaritalstatus_2:checked').val();
                    if (psoMaritalStatus == null) {
                        psoMaritalStatus = $('#gnext_publicsafetyofficersmaritalstatus_3:checked').val();
                    }
                }
            }
            // if officer was previously married, show the spouse information
            if (psoMaritalStatus == "419700000") {
                GNEXT.ui.toggleTabDisplay([".tab[data-name='PSOSurvivingSpouseInformation']",
                    ".tab[data-name='PSOPriorMarriageQuestion']",
                    ".tab[data-name='PSOPriorMarriageInformation']"]);
                $("#gnext_publicsafetyofficerpriormarriages_wfs_1").prop('checked', true);
            }
            else if (psoMaritalStatus == "419700002" || psoMaritalStatus == "419700003") {
                GNEXT.ui.hideTab(".tab[data-name='PSOSurvivingSpouseInformation']");
                GNEXT.ui.toggleTabDisplay([".tab[data-name='PSOPriorMarriageQuestion']",
                    ".tab[data-name='PSOPriorMarriageInformation']"], false);
                $("#gnext_publicsafetyofficerpriormarriages_wfs_0").prop('checked', true);
            }
            else {
                GNEXT.ui.toggleTabDisplay([".tab[data-name='PSOSurvivingSpouseInformation']",
                    ".tab[data-name='PSOPriorMarriageQuestion']",
                    ".tab[data-name='PSOPriorMarriageInformation']"], false);
            }
            // Applicant Relationship to PSO
            var spouse = $("#gnext_applicantrelationshiptothepso_0").is(":checked");
            var spouseWithChild = $("#gnext_applicantrelationshiptothepso_1").is(":checked");
            var minorChild = $("#gnext_applicantrelationshiptothepso_2").is(":checked");
            var psobDesignee = $("#gnext_applicantrelationshiptothepso_3").is(":checked");
            var lifeInsDesignee = $("#gnext_applicantrelationshiptothepso_4").is(":checked");
            var parent = $("#gnext_applicantrelationshiptothepso_5").is(":checked");
            var adultChild = $("#gnext_applicantrelationshiptothepso_6").is(":checked");
            var other = $("#gnext_applicantrelationshiptothepso_7").is(":checked");
            // only minor child sees Name of Child's Parent or Legal Guardian
            if (minorChild) {
                // display tab
                GNEXT.ui.showTab(".tab[data-name='NameofMinorChildsParentorLegalGuardian']");
            }
            else {
                GNEXT.ui.hideTab(".tab[data-name='NameofMinorChildsParentorLegalGuardian']");
            }
            // designees
            if (spouse || minorChild || spouseWithChild) {
                GNEXT.ui.toggleTabDisplay([".tab[data-name='PSOBDesigneeQuestion']",
                    ".tab[data-name='PSOBDesigneeInformation']",
                    ".tab[data-name='LifeInsuranceDesigneeQuestion']",
                    ".tab[data-name='LifeInsuranceDesigneeInformation']",
                    ".tab[data-name='SurvivingParentsInformation']",
                    ".tab[data-name='SurvivingParentsQuestion']",
                    ".tab[data-name='didPSOhaveSurvivingAdultChildren']",
                    ".tab[data-name='psoSurvivingAdultChildrenInfo']",
                    ".tab[data-name='PSOOtherBeneficiary']"]);
            }
            else if (psobDesignee) {
                GNEXT.ui.toggleTabDisplay([".tab[data-name='LifeInsuranceDesigneeQuestion']",
                    ".tab[data-name='LifeInsuranceDesigneeInformation']",
                    ".tab[data-name='SurvivingParentsInformation']",
                    ".tab[data-name='SurvivingParentsQuestion']",
                    ".tab[data-name='didPSOhaveSurvivingAdultChildren']",
                    ".tab[data-name='psoSurvivingAdultChildrenInfo']",
                    ".tab[data-name='PSOOtherBeneficiary']"]);
            }
            else if (lifeInsDesignee) {
                GNEXT.ui.toggleTabDisplay([".tab[data-name='SurvivingParentsInformation']",
                    ".tab[data-name='SurvivingParentsQuestion']",
                    ".tab[data-name='didPSOhaveSurvivingAdultChildren']",
                    ".tab[data-name='psoSurvivingAdultChildrenInfo']",
                    ".tab[data-name='PSOOtherBeneficiary']"]);
            }
            else if (parent || adultChild) {
                GNEXT.ui.hideTab(".tab[data-name='PSOOtherBeneficiary']");
            }
            else {
                GNEXT.ui.showTab(".tab[data-name='PSOOtherBeneficiary']");
            }
            // check for previous marriages
            DeathPartASummary.updateSectionCheck("#gnext_publicsafetyofficerpriormarriages_wfs_0", ".tab[data-name='PSOPriorMarriageInformation']");
            // check for PSOs children
            DeathPartASummary.updateSectionCheck("#gnext_officerchildren_wfs_0", ".tab[data-name='PSOChildrenInformation']");
            // check for designee
            DeathPartASummary.updateSectionCheck("#gnext_officerhaddesigneeorlifeinsbeneficiary_0", ".tab[data-name='PSOBDesigneeInformation']");
            // check for parents
            DeathPartASummary.updateSectionCheck("#gnext_officerhadsurvivingparents_0", ".tab[data-name='SurvivingParentsInformation']");
            // check for adult children
            DeathPartASummary.updateSectionCheck("#gnext_didthepsohavesurvivingadultchildren_0", ".tab[data-name='psoSurvivingAdultChildrenInfo']");
            // check for life insurance
            DeathPartASummary.updateSectionCheck("#gnext_officerhadlifeinsurancedesignee_0", ".tab[data-name='LifeInsuranceDesigneeInformation']");
        };
        /** Update a given tab that is linked to a check box value (better name for this method?!)
        *   @param {string} checkControlId
        *   @param {string} tabSelector
        **/
        DeathPartASummary.updateSectionCheck = function (checkControlId, tabSelector) {
            // if checked, show, otherwise, hide
            if ($(checkControlId).is(":checked")) {
                GNEXT.ui.showTab(tabSelector);
            }
            else {
                GNEXT.ui.hideTab(tabSelector);
            }
        };
        DeathPartASummary.hideNonReviewTabs = function () {
            GNEXT.ui.toggleTabDisplay([
                ".tab[data-name='ApplicationSummary']",
                ".tab[data-name='FinalReview']",
                ".tab[data-name='tab_9']",
                ".tab[data-name='RequiredDocuments']",
                ".tab[data-name='MissingDocuments']",
                ".tab[data-name='CertificationOfApplication']" // Certification of Application
            ]);
        };
        DeathPartASummary.hideNonSignatureTabs = function () {
            GNEXT.ui.toggleTabDisplay([".tab[data-name='ApplicationPreview']",
                ".tab[data-name='SummaryContext']",
                ".tab[data-name='ApplicationSummary']",
                ".tab[data-name='MissingDocuments']"]);
        };
        DeathPartASummary.makeReadOnly = function () {
            $('input[type=text]').each(function () {
                //var elem = $( el );
                $(this).attr('readonly', 'true');
            });
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
            GNEXT.ui.disableDatePick("gnext_officerdateofbirth");
            GNEXT.ui.disableDatePick("gnext_officerdateofincident");
            GNEXT.ui.disableDatePick("gnext_officerdateofdeath");
        };
        DeathPartASummary.ApplyOtherBenefitsChecks = function () {
            // add the on change handler that will toggle the other checks
            $("#gnext_nootherbenefitsfiled").change(function () {
                GNEXT.DeathPartASummary.disableOtherBenefitsFiled();
            });
            $("#gnext_nootherbenefitsdetermined").change(function () {
                GNEXT.DeathPartASummary.disableOtherBenefitsDetermined();
            });
            GNEXT.DeathPartASummary.disableOtherBenefitsFiled();
            GNEXT.DeathPartASummary.disableOtherBenefitsDetermined();
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
            // run the same change handler as above on load
            var isChecked = ($('#gnext_nootherbenefitsfiled').is(':checked') || $('#gnext_otherbenefitsfiled').is(':checked'));
            GNEXT.ui.toggleElementEnabled("gnext_describeotherfiled", isChecked, !isChecked);
            var isChecked = ($('#gnext_nootherbenefitsdetermined').is(':checked') || $('#gnext_otherbenefitsdetermined').is(':checked'));
            GNEXT.ui.toggleElementEnabled("gnext_describeotherdetermination", isChecked, !isChecked);
        };
        DeathPartASummary.disableOtherBenefitsFiled = function () {
            var controlIds = ["gnext_filedstatelineofdutydeathbenefits",
                "gnext_appfiledunderworkerscompensation",
                "gnext_federalemployeescompensationact",
                "gnext_dcretirementanddisabilityact",
                "gnext_september11thvictimcompensationfund",
                "gnext_otherbenefitsfiled"];
            // need to check and see if gnext_no
            if ($('#gnext_nootherbenefitsfiled').is(':checked')) {
                // disable the rest of the checkboxes
                GNEXT.ui.toggleCheckEnabled(controlIds, false);
            }
            else {
                GNEXT.ui.toggleCheckEnabled(controlIds);
            }
        };
        DeathPartASummary.disableOtherBenefitsDetermined = function () {
            var controlIds = ['#gnext_determinedstatelineofdutydeathbenefits',
                '#gnext_deteminationissuedworkerscompensation',
                '#gnext_federalemployeescompensationactfinal',
                '#gnext_dcretirementanddisabilityfinal',
                '#gnext_september11tvictimcompensationfundfinal',
                '#gnext_otherbenefitsdetermined'];
            if ($('#gnext_nootherbenefitsdetermined').is(':checked')) {
                // disable the rest of the checkboxes
                GNEXT.ui.toggleCheckEnabled(controlIds, false);
            }
            else {
                GNEXT.ui.toggleCheckEnabled(controlIds);
            }
        };
        return DeathPartASummary;
    }());
    GNEXT.DeathPartASummary = DeathPartASummary;
})(GNEXT || (GNEXT = {}));
//# sourceMappingURL=Death Part A Functions - Web Template.js.map