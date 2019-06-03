  //////////////////////////////////////////////Working code///////////////////////////////////////////////////////////////////////
$(document).ready(function () {
         var commonQuestion6_yes = $('#crs_cmnquestion6_1');
         var commonQuestion6_no = $('#crs_cmnquestion6_0');
         var commonQuestion7_yes = $('#crs_cmnquestion7_1');
		 var commonQuestion7_no = $('#crs_cmnquestion7_0');
         var commonQuestion8_yes = $('#crs_cmnquestion8_1');
         var commonQuestion8_no = $('#crs_cmnquestion8_0');
         var commonQuestion9_yes = $('#crs_cmnquestion9_1');
		 var commonQuestion9_no = $('#crs_cmnquestion9_0');
         var commonQuestion10_yes = $('#crs_cmnquestion10_1');
		 var commonQuestion10_no = $('#crs_cmnquestion10_0');
		 var commonQuestion12_yes = $('#crs_cmnquestion12_1');
		 var commonQuestion12_no = $('#crs_cmnquestion12_0');
		 var commonQuestion13_yes = $('#crs_cmnquestion13_1');
		 var commonQuestion13_no = $('#crs_cmnquestion13_0');
         var commonQuestion14_yes = $('#crs_cmnquestion14_1');
         var commonQuestion14_no = $('#crs_cmnquestion14_0');
         commonQuestion6_yes.change(function() { showHideQuestions(); });
         commonQuestion6_no.change(function() { showHideQuestions(); });
         commonQuestion7_yes.change(function() { cq7addNoticeMessages(); });
         commonQuestion7_no.change(function() { cq7addNoticeMessages(); });
         commonQuestion8_yes.change(function() { cq8addNoticeMessages(); });
         commonQuestion8_no.change(function() { cq8addNoticeMessages(); });
         commonQuestion9_yes.change(function() { cq9addNoticeMessages(); });
         commonQuestion9_no.change(function() { cq9addNoticeMessages(); });
         commonQuestion10_yes.change(function() { cq10addNoticeMessages(); });
         commonQuestion10_no.change(function() { cq10addNoticeMessages(); }); 
		 commonQuestion12_yes.change(function() { showHideQuestions(); });
		 commonQuestion12_no.change(function() {showHideQuestions(); });
		 commonQuestion13_yes.change(function() { showHideQuestions(); });
		 commonQuestion13_no.change(function() {showHideQuestions(); });
         commonQuestion14_yes.change(function() { showHideQuestions(); });
		 commonQuestion14_no.change(function() {showHideQuestions(); });
         showHideQuestions();
         PageValidator();
         cq7addNoticeMessages();
         cq8addNoticeMessages();
         cq9addNoticeMessages();
         cq10addNoticeMessages();
         
});	  
//Function to Show and hide the fields
 function showHideQuestions() {
      var q6yesA = $('#crs_parentcharityname').closest('td');
      var q6yesB = $('#crs_njcharitynumbofparentorg').closest('td');
      var q12 = $('#crs_cmnquestion12yes').closest('td');
      var q13 = $('#crs_cmnquestioncurrentdba').closest('td');
      var q14 = $('#crs_cmnquestion14yes').closest('td');
      //Common Question 6 Logic
      if($('#crs_cmnquestion6_1').is(':checked')) {
        q6yesA.show("fast");
        $("#crs_parentcharityname_label").parent().addClass('required');
        q6yesB.show("fast");
		$("#crs_njcharitynumbofparentorg_label").parent().addClass('required');
      } else {
        q6yesA.hide("fast");
        $("#crs_parentcharityname_label").parent().removeClass('required');
        q6yesB.hide("fast");
		$("#crs_njcharitynumbofparentorg_label").parent().removeClass('required');
      }
      //Common Question 12 Logic
      if($('#crs_cmnquestion12_1').is(':checked')) {
        q12.show("fast");
		$("#crs_cmnquestion12yes_label").parent().addClass('required');
      } else {
        q12.hide("fast");
		$("#crs_cmnquestion12yes_label").parent().removeClass('required');
      }
      //Common Question 13 Logic
      if($('#crs_cmnquestion13_1').is(':checked')) {
        q13.show("fast");
		$("#crs_cmnquestioncurrentdba_label").parent().addClass('required');
      } else {
        q13.hide("fast");
		$("#crs_cmnquestioncurrentdba_label").parent().removeClass('required');  
      }
      //Common Question 14 Logic
       if($('#crs_cmnquestion14_1').is(':checked')) {
        q14.show("fast");
		$("#crs_cmnquestion14yes_label").parent().addClass('required');
        $(".section[data-name='common_charity_information_pfr_coventure']").closest("fieldset").show();
      } else {
        q14.hide("fast");
		$("#crs_cmnquestion14yes_label").parent().removeClass('required');
        $(".section[data-name='common_charity_information_pfr_coventure']").closest("fieldset").hide();
      }
    }
//Function to Add custom Page Validators to the Fields    
function PageValidator(){
          if (typeof (Page_Validators) == 'undefined') return;

            /*******************Create new validator - Commonquestion 6 yes A****************************/
            var q6yesAValidator = document.createElement('span');
            q6yesAValidator.style.display = "none";
            q6yesAValidator.id = "RequiredFieldValidatorcrs_parentcharityname";
            q6yesAValidator.controltovalidate = "crs_parentcharityname";
            q6yesAValidator.errormessage = "<a href='#crs_parentcharityname_label'> <b><u>'Parent Charity name.'</u></b>   Is required, since you answered 'Yes' to the question above it. </a>";
            q6yesAValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
            q6yesAValidator.initialvalue = "";
            q6yesAValidator.evaluationfunction = function () {
                if (!$("#crs_cmnquestion6_1").is(':checked')){
                    $("#crs_parentcharityname_label").parent().addClass('required');
                return true; 
                }
                var value = $("#crs_parentcharityname").val();
                if (value == null || value == "") {
                return false;
                } else {
                return true;
                }
            };      
            // Wire-up the click event handler of the validation summary link
            $("a[href='#crs_parentcharityname_label']").on("click", function () { scrollToAndFocus('crs_parentcharityname_label','crs_parentcharityname'); });
            //Radio Button on change handler
            $("#crs_cmnquestion6_1").on("change", function () { q6yesAToggleRequired('#crs_cmnquestion6_1'); });
            $("#crs_cmnquestion6_1").on("change", function () { q6yesAToggleRequired('#crs_cmnquestion6_1'); });		 
            q6yesAToggleRequired('#crs_cmnquestion6_1')
            //Toggle Required
            function q6yesAToggleRequired(labelname){
                if ($(labelname).is(':checked')){
                    $("#crs_parentcharityname_label").parent().addClass('required');;
                }else{
                    $("#crs_parentcharityname_label").parent().removeClass('required');
                }		
            }

            /*******************Create new validator - Commonquestion 6 yes B****************************/
            var q6yesBValidator = document.createElement('span');
            q6yesBValidator.style.display = "none";
            q6yesBValidator.id = "RequiredFieldValidatorcrs_njcharitynumbofparentorg";
            q6yesBValidator.controltovalidate = "crs_njcharitynumbofparentorg";
            q6yesBValidator.errormessage = "<a href='#crs_njcharitynumbofparentorg_label'> <b><u>'NJ CH# of the Parent Organization.'</u></b>   Is required, since you answered 'Yes' to the question above it. </a>";
            q6yesBValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
            q6yesBValidator.initialvalue = "";
            q6yesBValidator.evaluationfunction = function () {
                if (!$("#crs_cmnquestion6_1").is(':checked')){
                    $("#crs_njcharitynumbofparentorg_label").parent().addClass('required');
                return true; 
                }
                var value = $("#crs_njcharitynumbofparentorg").val();
                if (value == null || value == "") {
                return false;
                } else {
                return true;
                }
            };      
            // Wire-up the click event handler of the validation summary link
            $("a[href='#crs_njcharitynumbofparentorg_label']").on("click", function () { scrollToAndFocus('crs_njcharitynumbofparentorg_label','crs_njcharitynumbofparentorg'); });
            //Radio Button on change handler
            $("#crs_cmnquestion6_1").on("change", function () { q6yesBToggleRequired('#crs_cmnquestion6_1'); });
            $("#crs_cmnquestion6_1").on("change", function () { q6yesBToggleRequired('#crs_cmnquestion6_1'); });		 
            q6yesBToggleRequired('#crs_cmnquestion6_1')
            //Toggle Required
            function q6yesBToggleRequired(labelname){
                if ($(labelname).is(':checked')){
                    $("#crs_njcharitynumbofparentorg_label").parent().addClass('required');;
                }else{
                    $("#crs_njcharitynumbofparentorg_label").parent().removeClass('required');
                }		
            }
          

          /*******************Create new validator - Commonquestion 12yes Textbox****************************/
          var q12yesValidator = document.createElement('span');
          q12yesValidator.style.display = "none";
          q12yesValidator.id = "RequiredFieldValidatorcrs_cmnquestion12yes";
          q12yesValidator.controltovalidate = "crs_cmnquestion12yes";
          q12yesValidator.errormessage = "<a href='#crs_cmnquestion12yes_label'> <b><u>'Please explain the purpose for which solicited funds are being raised.'</u></b>   Is required, since you answered 'Yes' to the question above it. </a>";
          q12yesValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
          q12yesValidator.initialvalue = "";
          q12yesValidator.evaluationfunction = function () {
              if (!$("#crs_cmnquestion12_1").is(':checked')){
                  $("#crs_cmnquestion12yes_label").parent().addClass('required');
              return true; 
              }
              var value = $("#crs_cmnquestion12yes").val();
              if (value == null || value == "") {
              return false;
              } else {
              return true;
              }
          };      
          // Wire-up the click event handler of the validation summary link
          $("a[href='#crs_cmnquestion12yes_label']").on("click", function () { scrollToAndFocus('crs_cmnquestion12yes_label','crs_cmnquestion12yes'); });
          //Radio Button on change handler
          $("#crs_cmnquestion12_1").on("change", function () { q12yesToggleRequired('#crs_cmnquestion12_1'); });
          $("#crs_cmnquestion12_0").on("change", function () { q12yesToggleRequired('#crs_cmnquestion12_1'); });		 
          q12yesToggleRequired('#crs_cmnquestion12_1')
          //Toggle Required
          function q12yesToggleRequired(labelname){
                if ($(labelname).is(':checked')){
                    $("#crs_cmnquestion12yes_label").parent().addClass('required');;
                }else{
                    $("#crs_cmnquestion12yes_label").parent().removeClass('required');
                }		
          }

          
          /*******************Create new validator - Commonquestion 13current DBA Textbox****************************/
          var q13dbaValidator = document.createElement('span');
          q13dbaValidator.style.display = "none";
          q13dbaValidator.id = "RequiredFieldValidatorcrs_cmnquestioncurrentdba";
          q13dbaValidator.controltovalidate = "crs_cmnquestioncurrentdba";
          q13dbaValidator.errormessage = "<a href='#crs_cmnquestioncurrentdba_label'> <b><u>'Current D.B.A'</u></b>   Is required, since you answered 'Yes' to the question above it. </a>";
          q13dbaValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
          q13dbaValidator.initialvalue = "";
          q13dbaValidator.evaluationfunction = function () {
              if (!$("#crs_cmnquestion13_1").is(':checked')){
                  $("#crs_cmnquestioncurrentdba_label").parent().addClass('required');
              return true; 
              }
              //Check to see if the Current DBA textbox field is emoty/null or whitespace
              var value = $("#crs_cmnquestioncurrentdba").val();
              //Check to see if the Current DBA textbox field is emoty/null or whitespace
              if (value == null || value == "") {
              return false;
              } else {
              return true;
              }
          };      
          // Wire-up the click event handler of the validation summary link
          $("a[href='#crs_cmnquestioncurrentdba_label']").on("click", function () { scrollToAndFocus('crs_cmnquestioncurrentdba_label','crs_cmnquestioncurrentdba'); });
          //Radio Button on change handler
          $("#crs_cmnquestion13_1").on("change", function () { q13dbaToggleRequired('#crs_cmnquestion13_1'); });
          $("#crs_cmnquestion13_0").on("change", function () { q13dbaToggleRequired('#crs_cmnquestion13_1'); });		 
          q13dbaToggleRequired('#crs_cmnquestion13_1')
          //Toggle Required
          function q13dbaToggleRequired(labelname){
                if ($(labelname).is(':checked')){
                    $("#crs_cmnquestioncurrentdba_label").parent().addClass('required');;
                }else{
                    $("#crs_cmnquestioncurrentdba_label").parent().removeClass('required');
                }		
          }


          /*******************Create new validator - Commonquestion 14yes Textbox****************************/
          var q14yesValidator = document.createElement('span');
          q14yesValidator.style.display = "none";
          q14yesValidator.id = "RequiredFieldValidatorcrs_cmnquestion14yes";
          q14yesValidator.controltovalidate = "crs_cmnquestion14yes";
          q14yesValidator.errormessage = "<a href='#crs_cmnquestion14yes_label'> <b><u>'Please describe the purpose for which the funds are being raised.'</u></b>   Is required, since you answered 'Yes' to the question above it. </a>";
          q14yesValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
          q14yesValidator.initialvalue = "";
          q14yesValidator.evaluationfunction = function () {
              if (!$("#crs_cmnquestion14_1").is(':checked')){
                  $("#crs_cmnquestion14yes_label").parent().addClass('required');
              return true; 
              }
              var value = $("#crs_cmnquestion14yes").val();
              if (value == null || value == "") {
              return false;
              } else {
              return true;
              }
          };      
          // Wire-up the click event handler of the validation summary link
          $("a[href='#crs_cmnquestion14yes_label']").on("click", function () { scrollToAndFocus('crs_cmnquestion14yes_label','crs_cmnquestion14yes'); });
          //Radio Button on change handler
          $("#crs_cmnquestion14_1").on("change", function () { q14yesToggleRequired('#crs_cmnquestion14_1'); });
          $("#crs_cmnquestion14_0").on("change", function () { q14yesToggleRequired('#crs_cmnquestion14_1'); });		 
          q14yesToggleRequired('#crs_cmnquestion14_1')
          //Toggle Required
          function q14yesToggleRequired(labelname){
                if ($(labelname).is(':checked')){
                    $("#crs_cmnquestion14yes_label").parent().addClass('required');;
                }else{
                    $("#crs_cmnquestion14yes_label").parent().removeClass('required');
                }		
          }
      // Add the new validator to the page validators array:
          Page_Validators.push(q6yesAValidator);
          Page_Validators.push(q6yesBValidator);
          Page_Validators.push(q12yesValidator);
          Page_Validators.push(q13dbaValidator);
          Page_Validators.push(q14yesValidator);

}
//Functions to show document upload precursor messages
function cq7addNoticeMessages(){
  //Common Question 7 prepend message variable
  var cq7prependMessage = $('<divcq7> <u><i> If "Yes",Please scan a copy of the IRS 1023, 10244 or other application form used to apply for IRS tax exempt status.  You will be required to upload a copy of this document later in the registration process.</i></u><br/></divcq7>').css({"background-color":"#f2dede","color":"#337ab7","font-size":"14px"});
  //var cq7prependMessage;
  //Common Question 7 notice message logic
      if($('#crs_cmnquestion7_1').is(':checked')) {
          cq7prependMessage.prependTo('#crs_cmnquestion7_label')
        //cq7prependMessage.prependTo($('#crs_cmnquestion7_label'))
        //cq7prependMessage = $('<div> <u><i> If "Yes",Please scan a copy of the IRS 1023, 10244 or other application form used to apply for IRS tax exempt status.  You will be required to upload a copy of this document later in the registration process.,</i></u></div>').css('background-color','lightyellow').prependTo('#crs_cmnquestion7_label');
        //cq7prependMessage.prependTo('#crs_cmnquestion7_label');
        
    } else {
        $( "divcq7" ).remove();
        //$(cq7prependMessage).detach('#crs_cmnquestion7_label');
        //cq7prependMessage=$("cq7prependMessage").detach();
        //$(this).remove();
      }
  
  
}

function cq8addNoticeMessages(){
  //Common Question 8 prepend message variable
  var cq8prependMessage = $('<divcq8> <u><i> If “Yes”, please scan a copy of any and all correspondence from the IRS changing your organization’s tax-exempt status, and a detailed explanation of the circumstances of any tax exempt status change.  You will be required to upload a copy of this form later in the registration process.</i></u><br/></divcq8>').css({"background-color":"#f2dede","color":"#337ab7","font-size":"14px"});
  //Common Question 8 notice message logic
      if($('#crs_cmnquestion8_1').is(':checked')) {
        cq8prependMessage.prependTo('#crs_cmnquestion8_label')

      } else {
       // $('#crs_cmnquestion8_label').remove(cq8prependMessage);
       $( "divcq8" ).remove();
      }
}

function cq9addNoticeMessages(){
    //Common Question 9 prepend message variable
    var cq8prependMessage = $('<divcq9> <u><i> If “Yes”, please scan a copy of the amendments to the articles of incorporation, court order or other legal document(s) which details the name changes made; you will be required to upload a copy of this document later in the registration process. </i></u><br/></divcq9>').css({"background-color":"#f2dede","color":"#337ab7","font-size":"14px"});
    //Common Question 9 notice message logic
        if($('#crs_cmnquestion9_1').is(':checked')) {
          cq8prependMessage.prependTo('#crs_cmnquestion9_label')
  
        } else {
         // $('#crs_cmnquestion8_label').remove(cq8prependMessage);
         $( "divcq9" ).remove();
        }
  }

function cq10addNoticeMessages(){
  //Common Question 10 prepend message variable
  var cq10prependMessage = $('<divcq10> <u><i> If “Yes”, Please provide the details on a separate sheet of paper, and provide copies of the documentary proof of a name change (example: amendment to incorporation) and/or a copy of the letter of determination from the I.R.S. regarding the tax-exempt-status changes. You will be required to upload these documents later in the registration process.</i></u><b/></divcq10>').css({"background-color":"#f2dede","color":"#337ab7","font-size":"14px"});
  //Common Question 10 notice message logic
      if($('#crs_cmnquestion10_1').is(':checked')) {
        cq10prependMessage.prependTo('#crs_cmnquestion10_label')

      } else {
        //$('#crs_cmnquestion10_label').remove(cq10prependMessage);
        $( "divcq10" ).remove();
      }
}
















































/////////////////////////////////////////////////////////////////////////
function addNoticeMessages(){
  var cq7div = document.createElement("div"); 
  var cq7documentmesage = document.createTextNode("please scan a copy of the IRS 1023, 10244 or other application form used to apply for IRS tax exempt status.  You will be required to upload a copy of this document later in the registration process."); 
  cq7div.appendChild(cq7documentmesage); //add the text node to the newly created div. 

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("info required"); 
  document.body.insertBefore(cq7div, currentDiv); 
}

$("<div>Test message</div>").appendTo("#crs_cmnquestion13_label"); 



////////////////////////////////////////////Common Question 12 Show Hide with Custom Page Validator//////////////////////////////////////////////////////////////////////
 $(document).ready(function () {
		 var commonQuestion12_yes = $('#crs_cmnquestion12_1');
		 var commonQuestion12_no = $('#crs_cmnquestion12_0');
		 commonQuestion12_yes.change(function() { showHideQuestions(); });
		 commonQuestion12_no.change(function() {showHideQuestions(); });
         showHideQuestions();
         cmnq12yesPageValidator();

});	  
 function showHideQuestions() {
      var q12 = $('#crs_cmnquestion12yes').closest('td');

      
            //Common Question 12 Logic
             if($('#crs_cmnquestion12_1').is(':checked')) 
            {
                q12.show("fast");
                $("#crs_cmnquestion12yes_label").parent().addClass('required');
                return true;
            } else {
                q12.hide("fast");
                $("#crs_cmnquestion12yes_label").parent().removeClass('required');
                return false;
            }   
            
}

function cmnq12yesPageValidator(){
          if (typeof (Page_Validators) == 'undefined') return;
          // Create new validator - Commonquestion 12yes Textbox
          var q12yesValidator = document.createElement('span');
          q12yesValidator.style.display = "none";
          q12yesValidator.id = "RequiredFieldValidatorcrs_cmnquestion12yes";
          q12yesValidator.controltovalidate = "crs_cmnquestion12yes";
          q12yesValidator.errormessage = "<a href='#crs_cmnquestion12yes_label'>Common Question 12 yes is a required field.</a> >";
          q12yesValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
          q12yesValidator.initialvalue = "";
          q12yesValidator.evaluationfunction = function () {
              if (!$("#crs_cmnquestion12_1").is(':checked')){
                  $("#crs_cmnquestion12yes_label").parent().addClass('required');
              return true; 
              }
              
              
              var value = $("#crs_cmnquestion12yes").val();
              if (value == null || value == "") {
              return false;
              } else {
              return true;
              }
          };
      
          // Add the new validator to the page validators array:
          Page_Validators.push(q12yesValidator);
      
          // Wire-up the click event handler of the validation summary link
          $("a[href='#crs_cmnquestion12yes_label']").on("click", function () { scrollToAndFocus('crs_cmnquestion12yes_label','crs_cmnquestion12yes'); });
          
          //Radio Button on change handler
          $("#crs_cmnquestion12_1").on("change", function () { ToggleRequired('#crs_cmnquestion12_1'); });
          $("#crs_cmnquestion12_0").on("change", function () { ToggleRequired('#crs_cmnquestion12_1'); });		 
          ToggleRequired('#crs_cmnquestion12_1')

          function ToggleRequired(labelname){
          if ($(labelname).is(':checked')){
              $("#crs_cmnquestion12yes_label").parent().addClass('required');;
          }else{
              $("#crs_cmnquestion12yes_label").parent().removeClass('required');
          }		
      }

}



///////////////////////////////////Common Question 12yes page validator working////////////////////////////////////////////////////////
$(document).ready(function () {
         if (typeof (Page_Validators) == 'undefined') return;
		 // Create new validator - Commonquestion 12yes Textbox
         var q12yesValidator = document.createElement('span');
         q12yesValidator.style.display = "none";
         q12yesValidator.id = "RequiredFieldValidatorcrs_cmnquestion12yes";
         q12yesValidator.controltovalidate = "crs_cmnquestion12yes";
         q12yesValidator.errormessage = "<a href='#crs_cmnquestion12yes_label'>Common Question 12 yes is a required field.</a> >";
         q12yesValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
         q12yesValidator.initialvalue = "";
         q12yesValidator.evaluationfunction = function () {
            if (!$("#crs_cmnquestion12_1").is(':checked')){
                $("#crs_cmnquestion12yes_label").parent().addClass('required');
             return true; 
            }
            
            
            var value = $("#crs_cmnquestion12yes").val();
            if (value == null || value == "") {
            return false;
            } else {
               return true;
            }
         };
 
         // Add the new validator to the page validators array:
		 Page_Validators.push(q12yesValidator);
 
         // Wire-up the click event handler of the validation summary link
		 $("a[href='#crs_cmnquestion12yes_label']").on("click", function () { scrollToAndFocus('crs_cmnquestion12yes_label','crs_cmnquestion12yes'); });
		 
		 //Radio Button on change handler
         $("#crs_cmnquestion12_1").on("change", function () { ToggleRequired('#crs_cmnquestion12_1'); });
		 $("#crs_cmnquestion12_0").on("change", function () { ToggleRequired('#crs_cmnquestion12_1'); });		 
		 ToggleRequired('#crs_cmnquestion12_1')

        function ToggleRequired(labelname){
		if ($(labelname).is(':checked')){
			$("#crs_cmnquestion12yes_label").parent().addClass('required');;
		}else{
			$("#crs_cmnquestion12yes_label").parent().removeClass('required');
		}		
	  }
});
	  
////////////////////////////////////////////////////////////Single Page validator Function/////////////////////////////////////////////////////////////////////////////////////////////////////
      function cmnq12yesPageValidator(){
                    if (typeof (Page_Validators) == 'undefined') return;
                    // Create new validator - Commonquestion 12yes Textbox
                    var q12yesValidator = document.createElement('span');
                    q12yesValidator.style.display = "none";
                    q12yesValidator.id = "RequiredFieldValidatorcrs_cmnquestion12yes";
                    q12yesValidator.controltovalidate = "crs_cmnquestion12yes";
                    q12yesValidator.errormessage = "<a href='#crs_cmnquestion12yes_label'>Common Question 12 yes is a required field.</a> >";
                    q12yesValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
                    q12yesValidator.initialvalue = "";
                    q12yesValidator.evaluationfunction = function () {
                        if (!$("#crs_cmnquestion12_1").is(':checked')){
                            $("#crs_cmnquestion12yes_label").parent().addClass('required');
                        return true; 
                        }
                        
                        
                        var value = $("#crs_cmnquestion12yes").val();
                        if (value == null || value == "") {
                        return false;
                        } else {
                        return true;
                        }
                    };
            
                    // Add the new validator to the page validators array:
                    Page_Validators.push(q12yesValidator);
            
                    // Wire-up the click event handler of the validation summary link
                    $("a[href='#crs_cmnquestion12yes_label']").on("click", function () { scrollToAndFocus('crs_cmnquestion12yes_label','crs_cmnquestion12yes'); });
                    
                    //Radio Button on change handler
                    $("#crs_cmnquestion12_1").on("change", function () { ToggleRequired('#crs_cmnquestion12_1'); });
                    $("#crs_cmnquestion12_0").on("change", function () { ToggleRequired('#crs_cmnquestion12_1'); });		 
                    ToggleRequired('#crs_cmnquestion12_1')

                    function ToggleRequired(labelname){
                    if ($(labelname).is(':checked')){
                        $("#crs_cmnquestion12yes_label").parent().addClass('required');;
                    }else{
                        $("#crs_cmnquestion12yes_label").parent().removeClass('required');
                    }		
                }

      }
	

/////////////////////////////////////////////////////Create Message On the fly test///////////////////////////////////////////////////////////
function addNoticeMessages(){
  var cq7div = document.createElement("div"); 
  var cq7documentmesage = document.createTextNode("please scan a copy of the IRS 1023, 10244 or other application form used to apply for IRS tax exempt status.  You will be required to upload a copy of this document later in the registration process."); 
  cq7div.appendChild(cq7documentmesage); //add the text node to the newly created div. 

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("info required"); 
  document.body.insertBefore(cq7div, currentDiv); 
}


