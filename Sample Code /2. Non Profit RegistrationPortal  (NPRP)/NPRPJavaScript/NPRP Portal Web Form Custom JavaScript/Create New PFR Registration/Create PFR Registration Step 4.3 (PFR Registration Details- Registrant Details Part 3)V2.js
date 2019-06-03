$(document).ready(function () {
    
        //PFR Question 8 Boolean Variables
        var pfrq8_yes = $('#crs_registrantorderedceaseanddesistfromunlawf_1');
        var pfrq8_no = $('#crs_registrantorderedceaseanddesistfromunlawf_0');
        //PFR Question 8 Logic
        pfrq8_yes.change(function () { showHideQuestions(); addNoticeMessagePFRQ8yes(); });
        pfrq8_no.change(function () { showHideQuestions(); addNoticeMessagePFRQ8yes(); });
        //PFR Question 9 Boolean Variables
        var pfrq9_yes = $('#crs_fundraisinglicenserevoked_1');
        var pfrq9_no = $('#crs_fundraisinglicenserevoked_0');
        //PFR Question 9 Logic
        pfrq9_yes.change(function () { showHideQuestions(); addNoticeMessagePFRQ9yes(); });
        pfrq9_no.change(function () { showHideQuestions(); addNoticeMessagePFRQ9yes(); });
    
        //PFR Question 10 Boolean Variables
        var pfrq10_yes = $('#crs_voluntaryassuranceordiscontinuance_1');
        var pfrq10_no = $('#crs_voluntaryassuranceordiscontinuance_0');
        //PFR Question 10 Logic
        pfrq10_yes.change(function () { showHideQuestions(); addNoticeMessagePFRQ10yes(); });
        pfrq10_no.change(function () { showHideQuestions(); addNoticeMessagePFRQ10yes(); });
    
        //PFR Question 11a Boolean Variables
        var pfrq11a_yes = $('#crs_registrantrepresentedticket_1');
        var pfrq11a_no = $('#crs_registrantrepresentedticket_0');
        //PFR Question 11a Logic
        pfrq11a_yes.change(function () { showHideQuestions(); addNoticeMessagePFRQ11ayes(); });
        pfrq11a_no.change(function () { showHideQuestions(); addNoticeMessagePFRQ11ayes(); });
        /*
        //PFR Question 11b Boolean Variables
        var pfrq11b_yes = $('#crs_preventeddonatedticketsolicitation_1');
        var pfrq11b_no = $('#crs_preventeddonatedticketsolicitation_0');
        //PFR Question 11b Logic
        pfrq11b_yes.change(function () { showHideQuestions(); });
        pfrq11b_no.change(function () { showHideQuestions(); });
    
        //PFR Question 11c Boolean Variables
        var pfrq11c_yes = $('#crs_ensuredticketssoldnotgreater_1');
        var pfrq11c_no = $('#crs_ensuredticketssoldnotgreater_0');
        //PFR Question 11c Logic
        pfrq11c_yes.change(function () { showHideQuestions(); });
        pfrq11c_no.change(function () { showHideQuestions(); }); */
    
        //Wires the function logic up onload
        showHideQuestions();
        //showHide11aQuestions();
        addNoticeMessagePFRQ8yes();
        addNoticeMessagePFRQ9yes();
        addNoticeMessagePFRQ10yes();
        addNoticeMessagePFRQ11ayes();
        //addNoticeMessagePFRQ11d();
        PageValidator();
    });
    //Function to show and hide fields and tabs   
    function showHideQuestions() {
        //Variables for the textbox fields
        var pfrqRegistrantUnlawfulPracticeInformation = $('#crs_registrantunlawfulpracticeinfo').closest('td');
        var pfrqFundraisingLicenseSuspensionFinormation = $('#crs_fundraisinglicenserevokedinfo').closest('td');
        var pfrqVoluntaryAssuranceorDiscontinuanceInfo = $('#crs_voluntaryassuranceordiscontinuanceinfo').closest('td');
        //var pfrqNonPreventionExplanationInfo = $('#crs_nonpreventionexplanation').closest('td');
    
    
        /***********************************************/
    
        /********************************************** */
        //PFR Question 8 logic
        if ($('#crs_registrantorderedceaseanddesistfromunlawf_1').is(':checked')) {
            pfrqRegistrantUnlawfulPracticeInformation.show("fast");
            $("#crs_registrantunlawfulpracticeinfo_label").parent().addClass('required');
        } else {
            pfrqRegistrantUnlawfulPracticeInformation.hide("fast");
            $("#crs_registrantunlawfulpracticeinfo_label").parent().removeClass('required');
        }
        //PFR Question 9 logic
        if ($('#crs_fundraisinglicenserevoked_1').is(':checked')) {
            pfrqFundraisingLicenseSuspensionFinormation.show("fast");
            $("#crs_fundraisinglicenserevokedinfo_label").parent().addClass('required');
        } else {
            pfrqFundraisingLicenseSuspensionFinormation.hide("fast");
            $("#crs_fundraisinglicenserevokedinfo_label").parent().removeClass('required');
        }
        //PFR Question 10 logic
        if ($('#crs_voluntaryassuranceordiscontinuance_1').is(':checked')) {
            pfrqVoluntaryAssuranceorDiscontinuanceInfo.show("fast");
            $("#crs_voluntaryassuranceordiscontinuanceinfo_label").parent().addClass('required');
        } else {
            pfrqVoluntaryAssuranceorDiscontinuanceInfo.hide("fast");
            $("#crs_voluntaryassuranceordiscontinuanceinfo_label").parent().removeClass('required');
        }
    
        //PFR Question 11a logic
        if ($('#crs_registrantrepresentedticket_1').is(':checked')) {
            $(".section[data-name='pfrreg_chartiableorgdonatedtickets']").closest("fieldset").show();
            $(".section[data-name='registrant_represented_tickets_questions']").closest("fieldset").show();
        } else {
            $(".section[data-name='pfrreg_chartiableorgdonatedtickets']").closest("fieldset").hide();
            $(".section[data-name='registrant_represented_tickets_questions']").closest("fieldset").hide();
    
        }
        //PFR Question 11b logic
        /*
        if($('#crs_voluntaryassuranceordiscontinuance_1').is(':checked')) {
          pfrqNonPreventionExplanationInfo.show("fast");
           $("#crs_nonpreventionexplanation_label").parent().addClass('required');
         } else {
           pfrqNonPreventionExplanationInfo.hide("fast");
           $("#crs_nonpreventionexplanation_label").parent().removeClass('required');
         }
         */
        /* //PFR Question 11b Boolean Variables
        var pfrq11b_yes = $('#crs_preventeddonatedticketsolicitation_1');
        var pfrq11b_no = $('#crs_preventeddonatedticketsolicitation_0');
        //PFR Question 11b Logic
        pfrq11b_yes.change(function () { showHide11aQuestions(); });
        pfrq11b_no.change(function () { showHide11aQuestions(); });
        //PFR Question 11c Boolean Variables
        var pfrq11c_yes = $('#crs_ensuredticketssoldnotgreater_1');
        var pfrq11c_no = $('#crs_ensuredticketssoldnotgreater_0');
        //PFR Question 11c Logic
        pfrq11c_yes.change(function () { showHide11aQuestions(); });
        pfrq11c_no.change(function () { showHide11aQuestions(); }); */
    
    
    }
    
    //Function to show and hide the textbox for quetions 11b-d (Need to wire up another on change event in the parent show hide function)
    /* function showHide11aQuestions() {
        var pfrqNonPreventionExplanationInfo = $('#crs_nonpreventionexplanation').closest('td');
        var pfrqTicketsSoldExplanation = $('#crs_ticketssoldexplanation').closest('td');
        //PFR Question 11b logic
        if ($('#crs_preventeddonatedticketsolicitation_0').is(':checked')) {
            pfrqNonPreventionExplanationInfo.show("fast");
            $("#crs_nonpreventionexplanation_label").parent().addClass('required');
        } else {
            pfrqNonPreventionExplanationInfo.hide("fast");
            $("#crs_nonpreventionexplanation_label").parent().removeClass('required');
        }
        //PFR Question 11c logic
        if ($('#crs_ensuredticketssoldnotgreater_0').is(':checked')) {
            pfrqTicketsSoldExplanation.show("fast");
            $("#crs_ticketssoldexplanation_label").parent().addClass('required');
        } else {
            pfrqTicketsSoldExplanation.hide("fast");
            $("#crs_ticketssoldexplanation_label").parent().removeClass('required');
        }
    
    } */
    
    
    
    
    
    //Functions to add notice messages to questions
    function addNoticeMessagePFRQ8yes() {
        var pfrq8yesMessage = $('<divpfrq8yes> <u>  Please list the names and addresses of the jurisdiction(s) that took action; the date and case/file number of the action; the nature of the action and the disposition. You will be required to upload copies of any and all written documentation (such as a court order, administrative order, judgment, formal notice or written assurance) which support your affirmative response.  </u><br/></divpfrq8yes>').css({ "background-color": "#f2dede", "color": "#337ab7", "font-size": "14px" });
        if ($('#crs_registrantorderedceaseanddesistfromunlawf_1').is(':checked')) {
            pfrq8yesMessage.prependTo('#crs_registrantunlawfulpracticeinfo_label')
        } else {
            $("divpfrq8yes").remove();
        }
    }
    
    function addNoticeMessagePFRQ9yes() {
        var pfrq9yesMessage = $('<divpfrq9yes> <u>  Please list the following information: The name and address of each jurisdiction that took action; the type and number of the license, registration or permit; and the date and type of action taken. You will be required to upload copies of any and all written documentation (such as a court order, administrative order, judgment, formal notice or written assurance) which support your affirmative response. </u><br/></divpfrq9yes>').css({ "background-color": "#f2dede", "color": "#337ab7", "font-size": "14px" });
        if ($('#crs_fundraisinglicenserevoked_1').is(':checked')) {
            pfrq9yesMessage.prependTo('#crs_fundraisinglicenserevokedinfo_label')
        } else {
            $("divpfrq9yes").remove();
        }
    }
    
    function addNoticeMessagePFRQ10yes() {
        var pfrq10yesMessage = $('<divpfrq10yes> <u>  Please list the following information: The name and address of each jurisdiction that took action; the type and number of the license, registration or permit; and the date and type of action taken. You will be required to upload copies of any and all written documentation (such as a court order, administrative order, judgment, formal notice or written assurance) which support your affirmative response. </u><br/></divpfrq10yes>').css({ "background-color": "#f2dede", "color": "#337ab7", "font-size": "14px" });
        if ($('#crs_voluntaryassuranceordiscontinuance_1').is(':checked')) {
            pfrq10yesMessage.prependTo('#crs_voluntaryassuranceordiscontinuanceinfo_label')
        } else {
            $("divpfrq10yes").remove();
        }
    }
    
    function addNoticeMessagePFRQ11ayes() {
        var pfrq11ayesMessage = $('<divpfrq11yes> <u> Please list all of the events with the full legal name of each charitable organization to which the tickets would be donated and the number of tickets, and answer all of the questions below </u><br/></divpfrq11yes>').css({ "background-color": "#f2dede", "color": "#337ab7", "font-size": "14px" });
        if ($('#crs_registrantrepresentedticket_1').is(':checked')) {
            pfrq11ayesMessage.prependTo('#crs_registrantrepresentedticket_label')
        } else {
            $("divpfrq11yes").remove();
        }
    }
    
    /* function addNoticeMessagePFRQ11d() {
        var pfrq11dMessage = $('<divpfrq11d> <u><b> You will be required to upload document  copies. They can be uploaded.  However, you will be required to mail all notarized ticket commitment statement(s) from the charitable organization stating that it will accept donated tickets and specifying the number of tickets it is willing to accept and for which it is able to provide transportation (N.J.S.A. 45:17A-32e(1)) to The Division of Consumer Affairs, New Jersey Charities Registration Section, P. O. Box 45021, 124 Halsey Street, Newark, NJ  07102.  The annual registration cannot be approved until the original document is received by this Office.  There is currently no form required for this purpose.    </b></u><br/></divpfrq11d>').css({ "background-color": "#f2dede", "color": "#337ab7", "font-size": "14px" });
        pfrq11dMessage.appendTo('#EntityFormView > div.tab.clearfix > div > div > fieldset:nth-child(3) > table > tbody > tr:nth-child(5) > td.clearfix.cell.picklist-cell')
    } */
    
    
    //Function to Add custom Page Validators to the Fields  
    
    function PageValidator() {
        if (typeof (Page_Validators) == 'undefined') return;
    
        /*******************Create new validator - Registrant Unlawful Practice Information****************************/
        var pfrq8yesValidator = document.createElement('span');
        pfrq8yesValidator.style.display = "none";
        pfrq8yesValidator.id = "RequiredFieldValidatorcrs_registrantunlawfulpracticeinfo";
        pfrq8yesValidator.controltovalidate = "crs_registrantunlawfulpracticeinfo";
        pfrq8yesValidator.errormessage = "<a href='#crs_registrantunlawfulpracticeinfo_label'> <b><u>'Registrant Unlawful Practice Information'</u></b>   Is required, since you answered 'Yes' to the question above it. </a>";
        pfrq8yesValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
        pfrq8yesValidator.initialvalue = "";
        pfrq8yesValidator.evaluationfunction = function () {
            if (!$("#crs_registrantorderedceaseanddesistfromunlawf_1").is(':checked')) {
                $("#crs_registrantunlawfulpracticeinfo_label").parent().addClass('required');
                return true;
            }
            var value = $("#crs_registrantunlawfulpracticeinfo").val();
            if (value == null || value == "") {
                return false;
            } else {
                return true;
            }
        };
        // Wire-up the click event handler of the validation summary link
        $("a[href='#crs_registrantunlawfulpracticeinfo']").on("click", function () { scrollToAndFocus('crs_registrantunlawfulpracticeinfo_label', 'crs_registrantunlawfulpracticeinfo'); });
        //Radio Button on change handler
        $("#crs_registrantorderedceaseanddesistfromunlawf_1").on("change", function () { pfrq8yesToggleRequired('crs_registrantorderedceaseanddesistfromunlawf_1'); });
        //$("#crs_registrantorderedceaseanddesistfromunlawf_0").on("change", function () { pfrq8yesToggleRequired('crs_registrantorderedceaseanddesistfromunlawf_1'); });
        //pfrq8yesToggleRequired('crs_registrantorderedceaseanddesistfromunlawf_1')
        ////Toggle Required
        //function pfrq8yesToggleRequired(labelname) {
        //    if ($(labelname).is(':checked')) {
        //        $("#crs_registrantunlawfulpracticeinfo_label").parent().addClass('required');;
        //    } else {
        //        $("#crs_registrantunlawfulpracticeinfo_label").parent().removeClass('required');
        //    }
        //}
    
        /*******************Create new validator - Fund Raising License Suspension Information****************************/
        var pfrq9yesValidator = document.createElement('span');
        pfrq9yesValidator.style.display = "none";
        pfrq9yesValidator.id = "RequiredFieldValidatorcrs_fundraisinglicenserevokedinfo";
        pfrq9yesValidator.controltovalidate = "crs_fundraisinglicenserevokedinfo";
        pfrq9yesValidator.errormessage = "<a href='#crs_fundraisinglicenserevokedinfo_label'> <b><u>'Fund Raising License Suspension Information'</u></b>   Is required, since you answered 'Yes' to the question above it. </a>";
        pfrq9yesValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
        pfrq9yesValidator.initialvalue = "";
        pfrq9yesValidator.evaluationfunction = function () {
            if (!$("#crs_fundraisinglicenserevoked_1").is(':checked')) {
                $("#crs_fundraisinglicenserevokedinfo_label").parent().addClass('required');
                return true;
            }
            var value = $("#crs_fundraisinglicenserevokedinfo").val();
            if (value == null || value == "") {
                return false;
            } else {
                return true;
            }
        };
        // Wire-up the click event handler of the validation summary link
        $("a[href='#crs_fundraisinglicenserevokedinfo_label']").on("click", function () { scrollToAndFocus('crs_fundraisinglicenserevokedinfo_label', 'crs_fundraisinglicenserevokedinfo'); });
        //Radio Button on change handler
        $("#crs_fundraisinglicenserevoked_1").on("change", function () { pfrq9yesToggleRequired('crs_fundraisinglicenserevoked_1'); });
        //$("#crs_fundraisinglicenserevoked_0").on("change", function () { pfrq9yesToggleRequired('crs_fundraisinglicenserevoked_1'); });
        //pfrq9yesToggleRequired('crs_fundraisinglicenserevoked_1')
        ////Toggle Required
        //function pfrq9yesToggleRequired(labelname) {
        //    if ($(labelname).is(':checked')) {
        //        $("#crs_fundraisinglicenserevokedinfo_label").parent().addClass('required');;
        //    } else {
        //        $("#crs_fundraisinglicenserevokedinfo_label").parent().removeClass('required');
        //    }
        //}
    
        /*******************Create new validator - Voluntay Assurance Discontinuance Information****************************/
        var pfrq10yesValidator = document.createElement('span');
        pfrq10yesValidator.style.display = "none";
        pfrq10yesValidator.id = "RequiredFieldValidatorcrs_voluntaryassuranceordiscontinuanceinfo";
        pfrq10yesValidator.controltovalidate = "crs_voluntaryassuranceordiscontinuanceinfo";
        pfrq10yesValidator.errormessage = "<a href='#crs_voluntaryassuranceordiscontinuanceinfo_label'> <b><u>'Has the registrant ever voluntarily entered into an assurance or voluntary discontinuance or agreement with any jurisdiction or federal agency or officer?'</u></b>   Is required, since you answered 'Yes' to the question above it. </a>";
        pfrq10yesValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
        pfrq10yesValidator.initialvalue = "";
        pfrq10yesValidator.evaluationfunction = function () {
            if (!$("#crs_voluntaryassuranceordiscontinuance_1").is(':checked')) {
                $("#crs_voluntaryassuranceordiscontinuanceinfo_label").parent().addClass('required');
                return true;
            }
            var value = $("#crs_voluntaryassuranceordiscontinuanceinfo").val();
            if (value == null || value == "") {
                return false;
            } else {
                return true;
            }
        };
        // Wire-up the click event handler of the validation summary link
        $("a[href='#crs_voluntaryassuranceordiscontinuanceinfo_label']").on("click", function () { scrollToAndFocus('crs_voluntaryassuranceordiscontinuanceinfo_label', 'crs_voluntaryassuranceordiscontinuanceinfo'); });
        //Radio Button on change handler
        $("#crs_voluntaryassuranceordiscontinuance_1").on("change", function () { pfrq10yesToggleRequired('crs_voluntaryassuranceordiscontinuance_1'); });
        //$("#crs_voluntaryassuranceordiscontinuance_0").on("change", function () { pfrq10yesToggleRequired('crs_voluntaryassuranceordiscontinuance_1'); });
        //pfrq10yesToggleRequired('crs_voluntaryassuranceordiscontinuance_1')
        ////Toggle Required
        //function pfrq10yesToggleRequired(labelname) {
        //    if ($(labelname).is(':checked')) {
        //        $("#crs_voluntaryassuranceordiscontinuanceinfo_label").parent().addClass('required');;
        //    } else {
        //        $("#crs_voluntaryassuranceordiscontinuanceinfo_label").parent().removeClass('required');
        //    }
        //}
    
        /*******************Create new validator - Non Prevention Explanation****************************/
        var pfrq11byesValidator = document.createElement('span');
        pfrq11byesValidator.style.display = "none";
        pfrq11byesValidator.id = "RequiredFieldValidatorcrs_nonpreventionexplanation";
        pfrq11byesValidator.controltovalidate = "crs_nonpreventionexplanation";
        pfrq11byesValidator.errormessage = "<a href='#crs_nonpreventionexplanation_label'> <b><u>'Non Prevention Explanation'</u></b>   Is required, since you answered 'No' to the question above it. </a>";
        pfrq11byesValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
        pfrq11byesValidator.initialvalue = "";
        pfrq11byesValidator.evaluationfunction = function () {
            if (!$("#crs_preventeddonatedticketsolicitation_0").is(':checked')) {
                $("#crs_nonpreventionexplanation_label").parent().addClass('required');
                return true;
            }
            var value = $("#crs_nonpreventionexplanation").val();
            if (value == null || value == "") {
                return false;
            } else {
                return true;
            }
        };
        // Wire-up the click event handler of the validation summary link
        $("a[href='#crs_nonpreventionexplanation_label']").on("click", function () { scrollToAndFocus('crs_nonpreventionexplanation_label', 'crs_nonpreventionexplanation'); });
        //Radio Button on change handler
        $("#crs_preventeddonatedticketsolicitation_0").on("change", function () { q11byesToggleRequired('#crs_preventeddonatedticketsolicitation_0'); });
        //$("#crs_registrantorofficersconvictedofcharges_1").on("change", function () { q11byesToggleRequired('#crs_preventeddonatedticketsolicitation_0'); });
        q11byesToggleRequired('#crs_preventeddonatedticketsolicitation_0')
        //Toggle Required
        function q11byesToggleRequired(labelname) {
            if ($(labelname).is(':checked')) {
                $("#crs_nonpreventionexplanation_label").parent().addClass('required');;
            } else {
                $("#crs_nonpreventionexplanation_label").parent().removeClass('required');
            }
        }
        /*******************Create new validator - Tickets Sold Explanation****************************/
        var pfrq11cyesValidator = document.createElement('span');
        pfrq11cyesValidator.style.display = "none";
        pfrq11cyesValidator.id = "RequiredFieldValidatorcrs_ticketssoldexplanation";
        pfrq11cyesValidator.controltovalidate = "crs_ticketssoldexplanation";
        pfrq11cyesValidator.errormessage = "<a href='#crs_ticketssoldexplanation_label'> <b><u>'Tickets Sold Explanation'</u></b>   Is required, since you answered 'No' to the question above it. </a>";
        pfrq11cyesValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
        pfrq11cyesValidator.initialvalue = "";
        pfrq11cyesValidator.evaluationfunction = function () {
            if (!$("#crs_ensuredticketssoldnotgreater_0").is(':checked')) {
                $("#crs_ticketssoldexplanation_label").parent().addClass('required');
                return true;
            }
            var value = $("#crs_ticketssoldexplanation").val();
            if (value == null || value == "") {
                return false;
            } else {
                return true;
            }
        };
        // Wire-up the click event handler of the validation summary link
        $("a[href='#crs_ticketssoldexplanation_label']").on("click", function () { scrollToAndFocus('crs_ticketssoldexplanation_label', 'crs_ticketssoldexplanation'); });
        //Radio Button on change handler
        $("#crs_ensuredticketssoldnotgreater_0").on("change", function () { q11cyesToggleRequired('#crs_ensuredticketssoldnotgreater_0'); });
        //$("#crs_registrantorofficersconvictedofcharges_1").on("change", function () { q11cyesToggleRequired('#crs_ensuredticketssoldnotgreater_0'); });
        q11cyesToggleRequired('#crs_ensuredticketssoldnotgreater_0')
        //Toggle Required
        function q11cyesToggleRequired(labelname) {
            if ($(labelname).is(':checked')) {
                $("#crs_ticketssoldexplanation_label").parent().addClass('required');;
            } else {
                $("#crs_ticketssoldexplanation_label").parent().removeClass('required');
            }
        }
    
        // Add the new validator to the page validators array:
        Page_Validators.push(pfrq8yesValidator);
        Page_Validators.push(pfrq9yesValidator);
        Page_Validators.push(pfrq10yesValidator);
        Page_Validators.push(pfrq11byesValidator);
        Page_Validators.push(pfrq11cyesValidator);
    
    }
    
    
    