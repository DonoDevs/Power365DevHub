/// <reference path="../Adxportal Objects.ts" />
/// <reference path="../Script - Common Utilities - Web Template.ts" /> 
var GNEXT;
(function (GNEXT) {
    /** Methods that will be referenced across the Disability Part B Web Form.   **/
    var DisabilityPartBCommon = (function () {
        function DisabilityPartBCommon() {
        }
        DisabilityPartBCommon.ApplyPSOInfoChecks = function () {
            // apply the date mask to all controls
            GNEXT.ui.maskDate();
            // load the common web file and attach the validation handlers
            GNEXT.validators.addFutureDateValidator("gnext_officersdateofbirth");
            GNEXT.validators.addFutureDateValidator("gnext_whatwasthedateofinjury");
            GNEXT.validators.addFutureDateValidator("gnext_officerdateofmedicalretirement");
            GNEXT.validators.addLinkedNullValueValidator("gnext_officerprefix", "optionset", "419700005", "gnext_officerprefixother", "Please describe other Public Safety Officer Prefix.", true);
            GNEXT.ui.maskSSN("gnext_officersssn");
        };
        DisabilityPartBCommon.ApplyEmployingAgencyChecks = function () {
            // lock out Explain Other if Agency Type, Other checked 
            GNEXT.validators.addLinkedNullValueValidator("gnext_agencyclassification_4", "radio", "", "gnext_agencyclassificationifother", "Please provide a value for Agency Type, {label}", true);
            // lock out Explain Other if Jurisdiction Type, Other checked 
            GNEXT.validators.addLinkedNullValueValidator("gnext_agencyjurisdiction_6", "radio", null, "gnext_agencyjurisdicationifother", "Please provide a value for Jurisdiction Type, {label}", true);
        };
        DisabilityPartBCommon.ApplyEmployingAgencyContactInfoChecks = function () {
            GNEXT.DisabilityPartBCommon.AttachAgencyContactInfoSync("gnext_agencyheadinfosameasemployingagency", "AgencyHead_AddressFields");
            GNEXT.DisabilityPartBCommon.AttachAgencyContactInfoSync("gnext_agencypocinfosameasemployingagency", "AgencyPOC_AddressFields");
        };
        DisabilityPartBCommon.AttachAgencyContactInfoSync = function (targetControlId, sectionName) {
            // add the null check if Other is selected for state fields
            GNEXT.validators.addLinkedNullValueValidator("gnext_state", "optionset", "419700055", "gnext_state_other", null, true);
            GNEXT.validators.addLinkedNullValueValidator("gnext_agencyheadstate", "optionset", "419700055", "gnext_agencyheadstate_other", null, true);
            GNEXT.validators.addLinkedNullValueValidator("gnext_agencypocstate", "optionset", "419700055", "gnext_agencypocstate_other", null, true);
            // validator for Prefixes
            GNEXT.validators.addLinkedNullValueValidator("gnext_officerprefix", "optionset", "419700005", "gnext_officerprefixother", "Please describe other Public Safety Officer Prefix.", true);
            GNEXT.validators.addLinkedNullValueValidator("gnext_agencypocprefix", "optionset", "419700005", "gnext_agencypocprefixother", "Please describe other Agency POC Prefix.", true);
            GNEXT.validators.addLinkedNullValueValidator("gnext_agencyheadprefix", "optionset", "419700005", "gnext_agencyheadprefixother", "Please describe other Agency Head Prefix.", true);
            // attach the sync method to the on change event for all of the source fields.
            // because if they say that the address is same but agency address changes, we will lose info
            var idSelector = "#gnext_addressline1,#gnext_addressline2,#gnext_city,#gnext_state,#gnext_state_other," +
                "#gnext_zipcode,#gnext_country,#gnext_employingagencyphonenumber,#gnext_employingagencyalternatephonenumber" +
                "#gnext_agencyheadstate_other,#gnext_agencypocstate_other";
            $(idSelector).change(function () {
                GNEXT.DisabilityPartBCommon.SyncAgencyContactInfo();
            });
            // now 
            var ctl = GNEXT.utilities.selectObjectById(targetControlId);
            ctl.change(function () {
                GNEXT.DisabilityPartBCommon.UpdateContactInfoSection(targetControlId, sectionName);
            });
            // kick it off for this section now
            GNEXT.DisabilityPartBCommon.UpdateContactInfoSection(targetControlId, sectionName);
        };
        /**  **/
        DisabilityPartBCommon.UpdateContactInfoSection = function (targetControlId, sectionName) {
            // get the value of the current selection 
            var ctl = GNEXT.utilities.selectObjectById(targetControlId);
            var isSameAsAgency = ctl.is(":checked");
            // run the sync now
            if (isSameAsAgency) {
                GNEXT.DisabilityPartBCommon.SyncAgencyContactInfo();
            }
        };
        /**
        * Sync up the values from the Agency contact info fields to the Agency Head and POC fields if check enabled.
        **/
        DisabilityPartBCommon.SyncAgencyContactInfo = function () {
            var headChecked = $("#gnext_agencyheadinfosameasemployingagency").is(":checked");
            var pocChecked = $("#gnext_agencypocinfosameasemployingagency").is(":checked");
            // if both are unchecked, no need to proceed
            if (!headChecked && !pocChecked) {
                return;
            }
            var addr1 = $("#gnext_addressline1").val();
            var addr2 = $("#gnext_addressline2").val();
            var city = $("#gnext_city").val();
            var state = $("#gnext_state").val();
            var state_other = $("#gnext_state_other").val();
            var zip = $("#gnext_zipcode").val();
            var country = $("#gnext_country").val();
            var phone = $("#gnext_employingagencyphonenumber").val();
            var altphone = $("#gnext_employingagencyalternatephonenumber").val();
            if (headChecked) {
                $("#gnext_agencyheadaddressline1").val(addr1);
                $("#gnext_agencyheadaddressline2").val(addr2);
                $("#gnext_agencyheadcity").val(city);
                $("#gnext_agencyheadstate").val(state);
                $("#gnext_agencyheadstate").trigger("change");
                $("#gnext_agencyheadstate_other").val(state_other);
                $("#gnext_agencyheadzipcode").val(zip);
                $("#gnext_agencyheadcountry").val(country);
                $("#gnext_agencyheadphonenumber").val(phone);
                $("#gnext_agencyheadalternatephonenumber").val(altphone);
            }
            if (pocChecked) {
                $("#gnext_agencypointofcontactaddressline1").val(addr1);
                $("#gnext_agencypointofcontactaddressline2").val(addr2);
                $("#gnext_agencyppointofcontactcity").val(city);
                $("#gnext_agencypocstate").val(state);
                $("#gnext_agencypocstate").trigger("change");
                $("#gnext_agencypocstate_other").val(state_other);
                $("#gnext_agencypointofcontactzip").val(zip);
                $("#gnext_agencypointofcontactcountry").val(country);
                $("#gnext_agencypointofcontactphonenumber").val(phone);
                $("#gnext_agencypointofcontactalternatephonenumber").val(altphone);
            }
        };
        DisabilityPartBCommon.Apply24HourActivityReportChecks = function (inReview) {
            $("#gnext_upload24houractivityreport").change(function () {
                GNEXT.DisabilityPartBCommon.Upload24HourActivityReportCheck();
            });
            GNEXT.DisabilityPartBCommon.Upload24HourActivityReportCheck();
            if (inReview === true) {
                // attach the change handler to the checkboxes
                $("#gnext_injurytypeheartattack, #gnext_injurytypestroke, #gnext_injurytypevasularrupture").change(function () {
                    GNEXT.DisabilityPartBCommon.Toggle24HourChecks();
                });
                // run the helper method that will hide/show tabs
                GNEXT.DisabilityPartBCommon.Toggle24HourChecks();
            }
        };
        /** In review, handle the instance where the user can check/uncheck options related to 24 hour report **/
        DisabilityPartBCommon.Toggle24HourChecks = function () {
            // if the criteria for a 24 hr report is not met, then hide the section 
            // uncheck the flag that will create the document 
            // check the criteria that will determine whether to show the 24 Hour Report
            if (!$("#gnext_injurytypeheartattack").is(":checked") &&
                !$("#gnext_injurytypestroke").is(":checked") &&
                !$("#gnext_injurytypevasularrupture").is(":checked")) {
                // hide tab and uncheck upload flag
                GNEXT.ui.hideTab("PSO24HourActivityReport");
                $("#gnext_upload24houractivityreport").attr('checked', false);
            }
            else {
                GNEXT.ui.showTab("PSO24HourActivityReport");
            }
        };
        DisabilityPartBCommon.Upload24HourActivityReportCheck = function () {
            // when the user checks the flag, disable the grid
            var uploadDocChecked = $("#gnext_upload24houractivityreport").is(":checked");
            var grid = $("#Activities_24hours.subgrid");
            // disable
            if (uploadDocChecked) {
                grid.hide();
            }
            else {
                grid.show();
            }
        };
        DisabilityPartBCommon.ApplyStatementOfCircumstanceChecks = function () {
            $("#gnext_uploadstatementofcircumstance").change(function () {
                GNEXT.DisabilityPartBCommon.UploadStatementOfCircumstanceCheck();
            });
            GNEXT.DisabilityPartBCommon.UploadStatementOfCircumstanceCheck();
        };
        DisabilityPartBCommon.UploadStatementOfCircumstanceCheck = function () {
            // when the user checks the flag, disable the grid
            var uploadDocChecked = $("#gnext_uploadstatementofcircumstance").is(":checked");
            var ctl = $("#gnext_statementofcircumstance");
            // disable
            if (uploadDocChecked) {
                ctl.hide();
            }
            else {
                ctl.show();
            }
        };
        DisabilityPartBCommon.ApplyOfficerInjuryProfileChecks = function () {
            // show required indicator on the tab
            GNEXT.validators.toggleTabRequired("OfficerInjuryProfile", true);
            // set up cause of injury validator
            GNEXT.validators.addLinkedNullValueValidator("gnext_injurytypeother", "check", "", "gnext_causeofinjuryother", "Please provide a value for Cause of Injury, {label}", true);
            // set up duty status validator
            GNEXT.validators.addLinkedNullValueValidator("gnext_dutystatus_2", "radio", "", "gnext_dutystatusother", "Please provide a value for Time of Injury, {label}", true);
        };
        DisabilityPartBCommon.ApplyPotentialLimitationsOnPaymentChecks = function () {
            // set up : performing duties in a grossly negligent manner
            GNEXT.validators.addLinkedNullValueValidator("gnext_officergrossnegligence_wfs_0", "radio", "", "gnext_grossnegligenceexplanation", "Please describe how Officer performing duties in a grossly negligent manner.", true);
            // set up : injury was caused by an intention to bring about death
            GNEXT.validators.addLinkedNullValueValidator("gnext_officerintenttobringaboutownharm_wfs_0", "radio", "", "gnext_officerintenttoselfharmexplanation", "Please describe how injury was caused by an intention to bring about death.", true);
            // set up : the Officer's injury was caused by intentional misconduct
            GNEXT.validators.addLinkedNullValueValidator("gnext_injurycasuedbyintentionalmisconduct_wfs_0", "radio", "", "gnext_injurycausedbyintentionalmisconductdescri", "Please describe how the Officer's injury was caused by intentional misconduct.", true);
            // set up : the Officer was voluntarily intoxicated at the time of injury?
            GNEXT.validators.addLinkedNullValueValidator("gnext_indicationofvoluntaryintoxication_wfs_0", "radio", "", "gnext_indicationofvoluntaryintoxicationexplanat", "Please describe how the Officer was voluntarily intoxicated at the time of injury.", true);
            // set up : the Officer employed in a non-civilian (military) capacity?
            GNEXT.validators.addLinkedNullValueValidator("gnext_officeremployedinnoncivilianmilita_wfs_0", "radio", "", "gnext_officeremployedinnonciviliancapexplanatio", "Please describe how the Officer employed in a non-civilian (military) capacity.", true);
        };
        /** Apply the on change handlers to the 'None of the above' checks **/
        DisabilityPartBCommon.ApplyOtherBenefitsChecks = function () {
            // add required indicators
            GNEXT.validators.toggleSectionRequired("Hasaclaimbeenfiledunderthefollowing?", true);
            GNEXT.validators.toggleSectionRequired("Hasafinaldeterminationbeenissuedfor?", true);
            // set other benefits filed validator
            GNEXT.validators.addLinkedNullValueValidator("gnext_otherbenefitsfiled", "check", "", "gnext_describeotherfiled", "Please provide a value for other benefits filed.", false);
            GNEXT.validators.addLinkedNullValueValidator("gnext_nootherbenefitsfiled", "check", "", "gnext_describeotherfiled", "Please describe None of the Above filed.", false);
            // set up other benefits determined validator
            GNEXT.validators.addLinkedNullValueValidator("gnext_otherbenefitsdetermined", "check", "", "gnext_describeotherdetermination", "Please provide a value for other determination.", false);
            GNEXT.validators.addLinkedNullValueValidator("gnext_nootherbenefitsdetermined", "check", "", "gnext_describeotherdetermination", "Please describe None of the Above determination.", false);
            // add the change handler to toggle the text boxes enabled/disabled
            $("#gnext_nootherbenefitsfiled,#gnext_otherbenefitsfiled,#gnext_otherbenefitsdetermined,#gnext_nootherbenefitsdetermined").change(function () {
                GNEXT.DisabilityPartBCommon.toggleDescribeOtherElements();
            });
            // when they click None of the above, disable the other checks
            $("#gnext_nootherbenefitsfiled").change(function () {
                GNEXT.DisabilityPartBCommon.disableOtherBenefitsFiled();
            });
            $("#gnext_nootherbenefitsdetermined").change(function () {
                GNEXT.DisabilityPartBCommon.disableOtherBenefitsDetermined();
            });
            // now apply the check enable/disable
            GNEXT.DisabilityPartBCommon.disableOtherBenefitsFiled();
            GNEXT.DisabilityPartBCommon.disableOtherBenefitsDetermined();
            GNEXT.DisabilityPartBCommon.toggleDescribeOtherElements();
        };
        DisabilityPartBCommon.toggleDescribeOtherElements = function () {
            var isChecked = $("#gnext_nootherbenefitsfiled").is(":checked") || $("#gnext_otherbenefitsfiled").is(":checked");
            // if either None or Other is checked, then
            GNEXT.ui.toggleElementEnabled("gnext_describeotherfiled", isChecked, !isChecked);
            isChecked = $("#gnext_otherbenefitsdetermined").is(":checked") || $("#gnext_nootherbenefitsdetermined").is(":checked");
            // if either None or Other is checked, then
            GNEXT.ui.toggleElementEnabled("gnext_describeotherdetermination", isChecked, !isChecked);
        };
        DisabilityPartBCommon.disableOtherBenefitsFiled = function () {
            // when None of the Above is checked, uncheck and disable others.
            // claim for benefits been filed
            var controlIds = ['gnext_filedstatelineofdutydeathbenefits',
                'gnext_filedmedicalretirement',
                'gnext_filedworkerscompensation',
                'gnext_filedsocialsecurity',
                'gnext_filedfederalemployeescompensationact',
                'gnext_fileddcretirementanddisabilityact',
                'gnext_filedsept11victimcompfund',
                'gnext_otherbenefitsfiled'];
            if ($('#gnext_nootherbenefitsfiled').is(':checked')) {
                // disable the rest of the checkboxes
                GNEXT.ui.toggleCheckEnabled(controlIds, false);
            }
            else {
                GNEXT.ui.toggleCheckEnabled(controlIds);
            }
        };
        DisabilityPartBCommon.disableOtherBenefitsDetermined = function () {
            // when None of the Above is checked, uncheck and disable others.
            // claim for benefits been filed
            var controlIds = ['gnext_determinedstatelineofdutydeathbenefits',
                'gnext_determinedmedicalretirement',
                'gnext_determinedworkerscompensation',
                'gnext_determinedsocialsecurity',
                'gnext_determinedfederalemployeescompact',
                'gnext_determineddcretirementanddisabilityact',
                'gnext_determinedsept11victimcompfund',
                'gnext_otherbenefitsdetermined'];
            if ($('#gnext_nootherbenefitsdetermined').is(':checked')) {
                // disable the rest of the checkboxes
                GNEXT.ui.toggleCheckEnabled(controlIds, false);
            }
            else {
                GNEXT.ui.toggleCheckEnabled(controlIds);
            }
        };
        DisabilityPartBCommon.ApplyReviewAndUpdate = function () {
            GNEXT.DisabilityPartBCommon.ApplyPSOInfoChecks();
            GNEXT.DisabilityPartBCommon.ApplyEmployingAgencyChecks();
            GNEXT.DisabilityPartBCommon.ApplyEmployingAgencyContactInfoChecks();
            GNEXT.DisabilityPartBCommon.Apply24HourActivityReportChecks(true);
            GNEXT.DisabilityPartBCommon.ApplyStatementOfCircumstanceChecks();
            GNEXT.DisabilityPartBCommon.ApplyOfficerInjuryProfileChecks();
            //GNEXT.DisabilityPartBCommon.ApplyPotentialLimitationsOnPaymentChecks();
            GNEXT.DisabilityPartBCommon.ApplyOtherBenefitsChecks();
            // validator for State (other) agency 
            GNEXT.validators.addLinkedNullValueValidator("gnext_state", "optionset", 419700055, "gnext_state_other", "Please describe other State for Agency.", true);
            // validator for State (other) head
            GNEXT.validators.addLinkedNullValueValidator("gnext_agencyheadstate", "optionset", 419700055, "gnext_agencyheadstate_other", "Please describe other State for Agency Head.", true);
            // validator for State (other) POC
            GNEXT.validators.addLinkedNullValueValidator("gnext_agencypocstate", "optionset", 419700055, "gnext_agencypocstate_other", "Please describe other State for Agency Point of Contact.", true);
            // validator for Applicantn Type - gnext_applicanttype_2 > gnext_describeapplicanttypeother
            GNEXT.validators.addLinkedNullValueValidator("gnext_applicanttype_2", "radio", "", "gnext_describeapplicanttypeother", "Please describe other applicant type.", true);
            // allow printing
            GNEXT.ui.addPrintButton();
            // hide the tabs we do not want them to see quite yet.
            var tabIds = ["FinalReviewMessage", "RequiredDocuments", "CertificationOfApplication", "RequiredDocsRejectMessage", "General", "AgencyActingOnBehalf"];
            GNEXT.ui.toggleTabDisplay(tabIds);
            // format the header tab
            $("div[data-name=ReviewAndConfirm]").prev()
                .css("text-align", "center")
                .css("font-size", "32px")
                .css("text-decoration", "underline");
        };
        DisabilityPartBCommon.ApplyFinalReview = function () {
            GNEXT.ui.addPrintButton();
            GNEXT.DisabilityPartBCommon.ApplyStatementOfCircumstanceChecks();
            GNEXT.DisabilityPartBCommon.Apply24HourActivityReportChecks(true);
            // hide the tabs we do not want them to see quite yet.
            var tabIds = ["ReviewAndConfirm", "RequiredDocsRejectMessage", "CertificationStatement", "General"];
            GNEXT.ui.toggleTabDisplay(tabIds);
        };
        DisabilityPartBCommon.makeReadOnly = function () {
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
            GNEXT.ui.disableDatePick("gnext_officersdateofbirth");
            GNEXT.ui.disableDatePick("gnext_whatwasthedateofinjury");
            GNEXT.ui.disableDatePick("gnext_officerdateofmedicalretirement");
        };
        return DisabilityPartBCommon;
    }());
    GNEXT.DisabilityPartBCommon = DisabilityPartBCommon;
})(GNEXT || (GNEXT = {}));
//# sourceMappingURL=Disability Part B Functions - Web Template.js.map