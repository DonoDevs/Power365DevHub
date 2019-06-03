$(document).ready(function () {
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
        pfrq11c_no.change(function () { showHideQuestions(); });
    
        //Wires the function logic up onload
        showHideQuestions();
        addNoticeMessagePFRQ11d();
        PageValidator();
    });


     //Function to show and hide fields and tabs   
     function showHideQuestions() {
        //Variables for the textbox fields
        var pfrqRegistrantUnlawfulPracticeInformation = $('#crs_registrantunlawfulpracticeinfo').closest('td');
        var pfrqFundraisingLicenseSuspensionFinormation = $('#crs_fundraisinglicenserevokedinfo').closest('td');
        var pfrqVoluntaryAssuranceorDiscontinuanceInfo = $('#crs_voluntaryassuranceordiscontinuanceinfo').closest('td');
        //var pfrqNonPreventionExplanationInfo = $('#crs_nonpreventionexplanation').closest('td');

        //PFR Question 11b Boolean Variables
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
        pfrq11c_no.change(function () { showHide11aQuestions(); });
    
    
    }
    
    //Function to show and hide the textbox for quetions 11b-d (Need to wire up another on change event in the parent show hide function)
    function showHide11aQuestions() {
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
    
    }



    function addNoticeMessagePFRQ11d() {
        var pfrq11dMessage = $('<divpfrq11d> <u><b> You will be required to upload document  copies. They can be uploaded.  However, you will be required to mail all notarized ticket commitment statement(s) from the charitable organization stating that it will accept donated tickets and specifying the number of tickets it is willing to accept and for which it is able to provide transportation (N.J.S.A. 45:17A-32e(1)) to The Division of Consumer Affairs, New Jersey Charities Registration Section, P. O. Box 45021, 124 Halsey Street, Newark, NJ  07102.  The annual registration cannot be approved until the original document is received by this Office.  There is currently no form required for this purpose.    </b></u><br/></divpfrq11d>').css({ "background-color": "#f2dede", "color": "#337ab7", "font-size": "14px" });
        pfrq11dMessage.appendTo('#EntityFormView > div.tab.clearfix > div > div > fieldset:nth-child(3) > table > tbody > tr:nth-child(5) > td.clearfix.cell.picklist-cell')
    }


    //Function to Add custom Page Validators to the Fields  
    
    function PageValidator() {
        if (typeof (Page_Validators) == 'undefined') return;
    
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
        Page_Validators.push(pfrq11byesValidator);
        Page_Validators.push(pfrq11cyesValidator);
    
    }