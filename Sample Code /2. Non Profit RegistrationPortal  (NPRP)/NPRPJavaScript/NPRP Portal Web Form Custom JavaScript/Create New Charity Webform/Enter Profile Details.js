if (window.jQuery) {
   (function ($) {
   
   function showHideAgency() {
      var target = $('#crs_regagencyname').closest('td');
      if($('#crs_registrationagent_1').is(':checked')) {
        target.show("slow");
		$("#crs_regagencyname_label").parent().addClass('required');
      } else {
        target.hide("slow");
		$("#crs_regagencyname_label").parent().removeClass('required');
      }
    }
      $(document).ready(function () {
         if (typeof (Page_Validators) == 'undefined') return;        
		 
		 // Create new validator - Agency Name
         var anValidator = document.createElement('span');
         anValidator.style.display = "none";
         anValidator.id = "RequiredFieldValidatorcrs_regagencyname";
         anValidator.controltovalidate = "crs_regagencyname";
         anValidator.errormessage = "<a href='#crs_regagencyname_label'>Agency Name is a required field.</a>";
         anValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
         anValidator.initialvalue = "";
         anValidator.evaluationfunction = function () {
            if (!$("#crs_registrationagent_1").is(':checked')) return true; 
            
            var value = $("#crs_regagencyname").val();
            if (value == null || value == "") {
            return false;
            } else {
               return true;
            }
         };
 
         // Add the new validator to the page validators array:
         Page_Validators.push(anValidator);
 
         // Wire-up the click event handler of the validation summary link
         $("a[href='#crs_regagencyname_label']").on("click", function () { scrollToAndFocus('crs_regagencyname_label','crs_regagencyname'); });
		 
		 //Radio Button on change handler
		 var registrationAgentRadio_yes = $('#crs_registrationagent_1');
		 var registrationAgentRadio_no = $('#crs_registrationagent_0');
		 showHideAgency();
		 registrationAgentRadio_yes.change(function() { showHideAgency(); });
		 registrationAgentRadio_no.change(function() { showHideAgency(); });
      });	  
	  
   }(window.jQuery));
}
