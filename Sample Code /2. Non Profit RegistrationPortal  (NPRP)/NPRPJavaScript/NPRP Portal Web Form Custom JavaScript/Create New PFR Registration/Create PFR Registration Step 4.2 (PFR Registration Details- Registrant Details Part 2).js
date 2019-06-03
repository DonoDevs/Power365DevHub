$(document).ready(function () {
         
         //PFR Question 4a Boolean Variables
		 var pfrq4a_yes = $('#crs_pfrregownership_1');
         var pfrq4a_no = $('#crs_pfrregownership_0'); 
         //PFR Question 4a Logic
         pfrq4a_yes.change(function() {showHideQuestions(); });
         pfrq4a_no.change(function() {showHideQuestions(); });
         //PFR Question 4b Boolean Variables
		 var pfrq4b_yes = $('#crs_crs_pfrregownershipotherbusinesses_1');
		 var pfrq4b_no = $('#crs_crs_pfrregownershipotherbusinesses_0'); 
         //PFR Question 4b Logic
         pfrq4b_yes.change(function() {showHideQuestions(); });
         pfrq4b_no.change(function() {showHideQuestions(); });
         //PFR Question 4c Boolean Variables
		 var pfrq4c_yes = $('#crs_pfrregcapitalstockowner_1');
		 var pfrq4c_no = $('#crs_pfrregcapitalstockowner_0'); 
         //PFR Question 4c Logic
         pfrq4c_yes.change(function() {showHideQuestions(); });
         pfrq4c_no.change(function() {showHideQuestions(); });
          //PFR Question 4d Boolean Variables
		 var pfrq4d_yes = $('#crs_pfrregcapitalstockownercharorg_1');
		 var pfrq4d_no = $('#crs_pfrregcapitalstockownercharorg_0'); 
         //PFR Question 4d Logic
         pfrq4d_yes.change(function() {showHideQuestions(); });
         pfrq4d_no.change(function() {showHideQuestions(); });
         //PFR Question 5a Boolean Variables
		 var pfrq5a_yes = $('#crs_pfrregindependentnjcharorgcontract_1');
		 var pfrq5a_no = $('#crs_pfrregindependentnjcharorgcontract_0'); 
         //PFR Question 5a Logic
         pfrq5a_yes.change(function() {showHideQuestions();addNoticeMessagePFRQ5aNo();});
         pfrq5a_no.change(function() {showHideQuestions();addNoticeMessagePFRQ5aNo();});
         //PFR Question 5b Boolean Variables
		 var pfrq5b_yes = $('#crs_usesasubcontractor_1');
		 var pfrq5b_no = $('#crs_usesasubcontractor_0'); 
         //PFR Question 5b Logic
         pfrq5b_yes.change(function() {showHideQuestions(); });
         pfrq5b_no.change(function() {showHideQuestions(); });
         //PFR Question 5c Boolean Variables
		 var pfrq5c_yes = $('#crs_conductedcampaigns_1');
		 var pfrq5c_no = $('#crs_conductedcampaigns_0'); 
         //PFR Question 5c Logic
         pfrq5c_yes.change(function() {showHideQuestions();addNoticeMessagePFRQ5cNo();});
         pfrq5c_no.change(function() {showHideQuestions();addNoticeMessagePFRQ5cNo();});
         //PFR Question 5d Boolean Variables
		 var pfrq5d_yes = $('#crs_engagedorretainedsolicitationactivities_1');
		 var pfrq5d_no = $('#crs_engagedorretainedsolicitationactivities_0'); 
         //PFR Question 5d Logic
         pfrq5d_yes.change(function() {showHideQuestions();addNoticeMessagePFRQ5dNo();});
         pfrq5d_no.change(function() {showHideQuestions();addNoticeMessagePFRQ5dNo();});
         //PFR Question 6 Boolean Variables
		 var pfrq6_yes = $('#crs_pfrregistrantpermitsandlicenses_1');
		 var pfrq6_no = $('#crs_pfrregistrantpermitsandlicenses_0'); 
         //PFR Question 6 Logic
         pfrq6_yes.change(function() {showHideQuestions(); });
         pfrq6_no.change(function() {showHideQuestions(); });
         //PFR Question 7 Boolean Variables
		 var pfrq7_yes = $('#crs_registrantorofficersconvictedofcharges_1');
		 var pfrq7_no = $('#crs_registrantorofficersconvictedofcharges_0'); 
         //PFR Question 7 Logic
         pfrq7_yes.change(function() {showHideQuestions();addNoticeMessagePFRCriminalOffenseInfo();});
         pfrq7_no.change(function() {showHideQuestions();addNoticeMessagePFRCriminalOffenseInfo();});
         

        //Wires the function logic up onload
        showHideQuestions(); 
        addNoticeMessagePFRQ5aNo();
        addNoticeMessagePFRQ5cNo();
        addNoticeMessagePFRQ5dNo();
        addNoticeMessagePFRCriminalOffenseInfo();
        PageValidator();
});	
//Function to show and hide fields and tabs   
 function showHideQuestions() {
     //PFR Question 7 yes answer text box field (Criminal Offense Info)
     var pfrqCriminalOffenseInfo = $('#crs_criminaloffenseinformation').closest('td');

    //PFR Question 4a logic
      if($('#crs_pfrregownership_1').is(':checked')) {
        $(".section[data-name='pfrreg_10percentOrMoreOwners']").closest("fieldset").show();
       
      } else {
        $(".section[data-name='pfrreg_10percentOrMoreOwners']").closest("fieldset").hide();
      
      }
    //PFR Question 4b logic
      if($('#crs_crs_pfrregownershipotherbusinesses_1').is(':checked')) {
        $(".section[data-name='pfrowner_otherbusinesses']").closest("fieldset").show();
       
      } else {
        $(".section[data-name='pfrowner_otherbusinesses']").closest("fieldset").hide();
      
      }
    //PFR Question 4c logic
      if($('#crs_pfrregcapitalstockowner_1').is(':checked')) {
        $(".section[data-name='pfr_capitalstockowners']").closest("fieldset").show();
       
      } else {
        $(".section[data-name='pfr_capitalstockowners']").closest("fieldset").hide();
      
      }
    //PFR Question 4d logic
      if($('#crs_pfrregcapitalstockownercharorg_1').is(':checked')) {
        $(".section[data-name='pfr_contractedcharitableorg']").closest("fieldset").show();
       
      } else {
        $(".section[data-name='pfr_contractedcharitableorg']").closest("fieldset").hide();
      
      }
    //PFR Question 5a logic
      if($('#crs_pfrregindependentnjcharorgcontract_1').is(':checked')) {
        $(".section[data-name='PFR_Charitable_Organization_Independent']").closest("fieldset").show();
       
      } else {
        $(".section[data-name='PFR_Charitable_Organization_Independent']").closest("fieldset").hide();
      
      }
    //PFR Question 5b logic
      if($('#crs_usesasubcontractor_1').is(':checked')) {
        $(".section[data-name='PFR_Subcontractor']").closest("fieldset").show();
       
      } else {
        $(".section[data-name='PFR_Subcontractor']").closest("fieldset").hide();
      
      }
    //PFR Question 5c logic
      if($('#crs_conductedcampaigns_1').is(':checked')) {
        $(".section[data-name='PFRReg_CharitableCampaign']").closest("fieldset").show();
       
      } else {
        $(".section[data-name='PFRReg_CharitableCampaign']").closest("fieldset").hide();
      
      }
    //PFR Question 5d logic
      if($('#crs_engagedorretainedsolicitationactivities_1').is(':checked')) {
        $(".section[data-name='pfrreg_charitablesolicitationactivities']").closest("fieldset").show();
       
      } else {
        $(".section[data-name='pfrreg_charitablesolicitationactivities']").closest("fieldset").hide();
      
      }
    //PFR Question 6 logic
      if($('#crs_pfrregistrantpermitsandlicenses_1').is(':checked')) {
        $(".section[data-name='pfrreg_registrantpermits']").closest("fieldset").show();
       
      } else {
        $(".section[data-name='pfrreg_registrantpermits']").closest("fieldset").hide();
      
      }

    //PFR Question 7 logic
    if($('#crs_registrantorofficersconvictedofcharges_1').is(':checked')) {
        pfrqCriminalOffenseInfo.show("fast");
        $("#crs_criminaloffenseinformation_label").parent().addClass('required');
      } else {
        pfrqCriminalOffenseInfo.hide("fast");
        $("#crs_criminaloffenseinformation_label").parent().addClass('required');
      }


    }
function addNoticeMessagePFRQ5aNo(){
    var pfrq5anoMessage = $('<divpfrq5ano> <u> By stating no to the question below, you are confirming the organization was not engaged or retained by any charitable organization during this time and there are no contracts in effect. </u><br/></divpfrq5ano>').css({"background-color":"#f2dede","color":"#337ab7","font-size":"14px"});
    if($('#crs_pfrregindependentnjcharorgcontract_0').is(':checked')) {
          pfrq5anoMessage.prependTo('#crs_pfrregindependentnjcharorgcontract_label')   
    } else {
        $( "divpfrq5ano" ).remove();
      }
}

function addNoticeMessagePFRQ5cNo(){
    var pfrq5cnoMessage = $('<divpfrq5cno> <u> By stating no to the question below, you are confirming the organization was not engaged or retained by any charitable organization during this time. </u><br/></divpfrq5cno>').css({"background-color":"#f2dede","color":"#337ab7","font-size":"14px"});
    if($('#crs_conductedcampaigns_0').is(':checked')) {
          pfrq5cnoMessage.prependTo('#crs_conductedcampaigns_label')   
    } else {
        $( "divpfrq5cno" ).remove();
      }
}

function addNoticeMessagePFRQ5dNo(){
    var pfrq5dnoMessage = $('<divpfrq5dno> <u> By stating no to the question below, you are confirming the organization was not engaged or retained by any charitable organization during the last five (5) years in New Jersey. </u><br/></divpfrq5dno>').css({"background-color":"#f2dede","color":"#337ab7","font-size":"14px"});
    if($('#crs_engagedorretainedsolicitationactivities_0').is(':checked')) {
          pfrq5dnoMessage.prependTo('#crs_engagedorretainedsolicitationactivities_label')   
    } else {
        $( "divpfrq5dno" ).remove();
      }
}
function addNoticeMessagePFRCriminalOffenseInfo(){
    var pfrqCriminalOffenseInfoMessage = $('<divpfrqCriminalOffense> <u> Please list the following information: the name and full address of the jurisdiction(s) which took the action, the date and case/file number of the action; if taken against an individual, the name of the individual against whom the action was taken; and the nature of the disciplinary action or criminal action taken and the disposition. You will be required to upload copies of any and all written documentation (such as a court order, administrative order, judgment, formal notice or written assurance) which support your affirmative response.</u><br/></divpfrqCriminalOffense>').css({"background-color":"#f2dede","color":"#337ab7","font-size":"14px"});
      if($('#crs_registrantorofficersconvictedofcharges_1').is(':checked')) {
          pfrqCriminalOffenseInfoMessage.prependTo('#crs_criminaloffenseinformation_label')   
    } else {
        $( "divpfrqCriminalOffense" ).remove();
      }
}


//Function to Add custom Page Validators to the Fields    
function PageValidator(){
          if (typeof (Page_Validators) == 'undefined') return;

          /*******************Create new validator - Criminal Offense Information****************************/
          var pfrq7yesValidator = document.createElement('span');
          pfrq7yesValidator.style.display = "none";
          pfrq7yesValidator.id = "RequiredFieldValidatorcrs_criminaloffenseinformation";
          pfrq7yesValidator.controltovalidate = "crs_criminaloffenseinformation";
          pfrq7yesValidator.errormessage = "<a href='#crs_criminaloffenseinformation_label'> <b><u>'Criminal Offense Information'</u></b>   Is required, since you answered 'Yes' to the question above it. </a>";
          pfrq7yesValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
          pfrq7yesValidator.initialvalue = "";
          pfrq7yesValidator.evaluationfunction = function () {
              if (!$("#crs_registrantorofficersconvictedofcharges_1").is(':checked')){
                  $("#crs_criminaloffenseinformation_label").parent().addClass('required');
              return true; 
              }
              var value = $("#crs_criminaloffenseinformation").val();
              if (value == null || value == "") {
              return false;
              } else {
              return true;
              }
          };      
          // Wire-up the click event handler of the validation summary link
          $("a[href='#crs_criminaloffenseinformation_label']").on("click", function () { scrollToAndFocus('crs_criminaloffenseinformation_label','crs_criminaloffenseinformation'); });
          //Radio Button on change handler
          $("#crs_registrantorofficersconvictedofcharges_1").on("change", function () { q12yesToggleRequired('#crs_registrantorofficersconvictedofcharges_1'); });
          $("#crs_cmnquestion12_0").on("change", function () { q12yesToggleRequired('#crs_registrantorofficersconvictedofcharges_1'); });		 
          q12yesToggleRequired('#crs_registrantorofficersconvictedofcharges_1')
          //Toggle Required
          function q12yesToggleRequired(labelname){
                if ($(labelname).is(':checked')){
                    $("#crs_criminaloffenseinformation_label").parent().addClass('required');;
                }else{
                    $("#crs_criminaloffenseinformation_label").parent().removeClass('required');
                }		
          }    
      // Add the new validator to the page validators array:
          Page_Validators.push(pfrq7yesValidator);
          
}
