$(document).ready(function(){
   $('#crs_contractstartdate').next().children('input').prop('placeholder', 'M/D/YYYY');
   $('#crs_contractenddate').next().children('input').prop('placeholder', 'M/D/YYYY');
   $('#crs_contractcancelationdate').next().children('input').prop('placeholder', 'M/D/YYYY');
});

if (window.jQuery) {
   (function ($) {
      $(document).ready(function () {
         if (typeof (Page_Validators) == 'undefined') return;
         // Create new validator - Flat fee
         var ffValidator = document.createElement('span');
         ffValidator.style.display = "none";
         ffValidator.id = "RequiredFieldValidatorcrs_flatfeeamt";
         ffValidator.controltovalidate = "crs_flatfeeamt";
         ffValidator.errormessage = "<a href='#crs_flatfeeamt_label'>Flat Fee is a required field.</a>";
         ffValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
         ffValidator.initialvalue = "";
         ffValidator.evaluationfunction = function () {
            if ($("#crs_compensationtype").val()== '170960000' || $("#crs_compensationtype").val()=="170960002"){
				var value = $("#crs_flatfeeamt").val();
				if (value == null || value == "") {
					return false;
				} else {
					return true;
				}
			}else{
				return true; 
            }
        };		

		 // Create new validator - Percentage to Charity
      var ptcValidator = document.createElement('span');
         ptcValidator.style.display = "none";
         ptcValidator.id = "RequiredFieldValidatorecrs_percentagetocharity";
         ptcValidator.controltovalidate = "crs_percentagetocharity";
         ptcValidator.errormessage = "<a href='#crs_percentagetocharity_label'>Percentage to Charity is a required field.</a>";
         ptcValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
         ptcValidator.initialvalue = "";
         ptcValidator.evaluationfunction = function () {
            if ($("#crs_compensationtype").val()== '170960001' || $("#crs_compensationtype").val()=="170960002"){
				var value = $("#crs_percentagetocharity").val();
				if (value == null || value == "") {
					return false;
				} else {
					return true;
				}
			}else{
				return true; 
            }
        };

         //Create Validator for Contract End Date
         var contrenddateValidator = document.createElement('span');
         contrenddateValidator.style.display = "none";
         contrenddateValidator.id = "RequiredFieldValidatorcrs_contractenddate";
         contrenddateValidator.controltovalidate = "crs_contractenddate";
         contrenddateValidator.errormessage = "<a href='#crs_contractenddate_label'>Contract End Date is a required field.</a>";
         contrenddateValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
         contrenddateValidator.initialvalue = "";
         contrenddateValidator.evaluationfunction = function () {
            var value = $("#crs_contractenddate").val();
            if (value == null || value == "") {
            return false;
            } else {
               return true;
            }
         };        
        
		 // Create new validator - Percentage to PFR
         var ptpValidator = document.createElement('span');
         ptpValidator.style.display = "none";
         ptpValidator.id = "RequiredFieldValidatorecrs_percentagetopfr";
         ptpValidator.controltovalidate = "crs_percentagetopfr";
         ptpValidator.errormessage = "<a href='#crs_percentagetopfr_label'>Percentage to PFR is a required field.</a>";
         ptpValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
         ptpValidator.initialvalue = "";
         ptpValidator.evaluationfunction = function () {
            if ($("#crs_compensationtype").val()== '170960001' || $("#crs_compensationtype").val()=="170960002"){
				var value = $("#crs_percentagetopfr").val();
				if (value == null || value == "") {
					return false;
				} else {
					return true;
				}
			}else{
				return true; 
            }
        };
 
         // Add the new validator to the page validators array:
         Page_Validators.push(ffValidator);
	     Page_Validators.push(ptcValidator);
         Page_Validators.push(contrenddateValidator);
		 Page_Validators.push(ptpValidator);
 
         // Wire-up the click event handler of the validation summary link
         $("a[href='#crs_flatfeeamt_label']").on("click", function () { scrollToAndFocus('crs_flatfeeamt_label','crs_flatfeeamt'); });
		 $("a[href='#crs_percentagetocharity_label']").on("click", function () { scrollToAndFocus('crs_percentagetocharity_label','crs_percentagetocharity'); });
         $("a[href='#crs_contractenddate_label']").on("click", function () { scrollToAndFocus('crs_contractenddate_label','crs_contractenddate'); });
		 $("a[href='#crs_percentagetopfr_label']").on("click", function () { scrollToAndFocus('crs_percentagetopfr_label','crs_percentagetopfr'); });
		 
		 //Radio Button on change handler
		 $("#crs_compensationtype").on("change", function () { ToggleCompensationTypeRequired(); });	 
		 ToggleCompensationTypeRequired();
      });
	  
	  function ToggleCompensationTypeRequired(){
		if ($('#crs_compensationtype').val()=='170960000'){ //Flat Fee
			$("#crs_flatfeeamt_label").parent().addClass('required');
			$("#crs_percentagetocharity_label").parent().removeClass('required');
			$("#crs_percentagetopfr_label").parent().removeClass('required');
		}else if($('#crs_compensationtype').val()=='170960001'){ //Percentage
			$("#crs_percentagetocharity_label").parent().addClass('required');
			$("#crs_percentagetopfr_label").parent().addClass('required');
			$("#crs_flatfeeamt_label").parent().removeClass('required');
		}else if($('#crs_compensationtype').val()=='170960002'){ //Combo
			$("#crs_flatfeeamt_label").parent().addClass('required');
			$("#crs_percentagetocharity_label").parent().addClass('required');
			$("#crs_percentagetopfr_label").parent().addClass('required');
		}else{
			$("#crs_flatfeeamt_label").parent().removeClass('required');
			$("#crs_percentagetocharity_label").parent().removeClass('required');
			$("#crs_percentagetopfr_label").parent().removeClass('required');
		}		
	  }
	  
   }(window.jQuery));
}














/*$(document).ready(function() {
    if (typeof (Page_Validators) == 'undefined') return;

    //Create Validator for Contract End Date
         var contrenddateValidator = document.createElement('span');
         contrenddateValidator.style.display = "none";
         contrenddateValidator.id = "RequiredFieldValidatorcrs_contractenddate";
         contrenddateValidator.controltovalidate = "crs_contractenddate";
         contrenddateValidator.errormessage = "<a href='#crs_contractenddate_label'>Contract End Date is a required field.</a>";
         contrenddateValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
         contrenddateValidator.initialvalue = "";
         contrenddateValidator.evaluationfunction = function () {
            var value = $("#crs_contractenddate").val();
            if (value == null || value == "") {
            return false;
            } else {
               return true;
            }
         };

    // Add the new validator to the page validators array:
         Page_Validators.push(contrenddateValidator);

    // Wire-up the click event handler of the validation summary link
         $("a[href='#crs_contractenddate_label']").on("click", function () { scrollToAndFocus('crs_contractenddate_label','crs_contractenddate'); });


});

 
   (function ($) {
      $(document).ready(function () {
         if (typeof (Page_Validators) == 'undefined') return;
         // Create new validator
         var newValidator = document.createElement('span');
         newValidator.style.display = "none";
         newValidator.id = "emailaddress1Validator";
         newValidator.controltovalidate = "emailaddress1";
         newValidator.errormessage = "<a href='#emailaddress1_label'>Email is a required field.</a>";
         newValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
         newValidator.initialvalue = "";
         newValidator.evaluationfunction = function () {
            var contactMethod = $("#preferredcontactmethodcode").val();
            if (contactMethod != 2) return true; // check if contact method is not 'Email'.
            // only require email address if preferred contact method is email.
            var value = $("#emailaddress1").val();
            if (value == null || value == "") {
            return false;
            } else {
               return true;
            }
         };

         // Add the new validator to the page validators array:
         Page_Validators.push(newValidator);

         // Wire-up the click event handler of the validation summary link
         $("a[href='#emailaddress1_label']").on("click", function () { scrollToAndFocus('emailaddress1_label','emailaddress1'); });
      });
*/


/*$(document).ready(function(){
   $('#crs_contractstartdate').next().children('input').prop('placeholder', 'M/D/YYYY');
   $('#crs_contractenddate').next().children('input').prop('placeholder', 'M/D/YYYY');
   $('#crs_contractcancelationdate').next().children('input').prop('placeholder', 'M/D/YYYY');
});

if (window.jQuery) {
   (function ($) {
      $(document).ready(function () {
         if (typeof (Page_Validators) == 'undefined') return;
         // Create new validator - Flat fee
         var ffValidator = document.createElement('span');
         ffValidator.style.display = "none";
         ffValidator.id = "RequiredFieldValidatorcrs_flatfeeamt";
         ffValidator.controltovalidate = "crs_flatfeeamt";
         ffValidator.errormessage = "<a href='#crs_flatfeeamt_label'>Flat Fee is a required field.</a>";
         ffValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
         ffValidator.initialvalue = "";
         ffValidator.evaluationfunction = function () {
            if ($("#crs_compensationtype").val()== '170960000' || $("#crs_compensationtype").val()=="170960002"){
				var value = $("#crs_flatfeeamt").val();
				if (value == null || value == "") {
					return false;
				} else {
					return true;
				}
			}else{
				return true; 
            }
        };		

		 // Create new validator - Percentage to Charity
      var ptcValidator = document.createElement('span');
         ptcValidator.style.display = "none";
         ptcValidator.id = "RequiredFieldValidatorecrs_percentagetocharity";
         ptcValidator.controltovalidate = "crs_percentagetocharity";
         ptcValidator.errormessage = "<a href='#crs_percentagetocharity_label'>Percentage to Charity is a required field.</a>";
         ptcValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
         ptcValidator.initialvalue = "";
         ptcValidator.evaluationfunction = function () {
            if ($("#crs_compensationtype").val()== '170960001' || $("#crs_compensationtype").val()=="170960002"){
				var value = $("#crs_percentagetocharity").val();
				if (value == null || value == "") {
					return false;
				} else {
					return true;
				}
			}else{
				return true; 
            }
        };
        
		 // Create new validator - Percentage to PFR
         var ptpValidator = document.createElement('span');
         ptpValidator.style.display = "none";
         ptpValidator.id = "RequiredFieldValidatorecrs_percentagetopfr";
         ptpValidator.controltovalidate = "crs_percentagetopfr";
         ptpValidator.errormessage = "<a href='#crs_percentagetopfr_label'>Percentage to PFR is a required field.</a>";
         ptpValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
         ptpValidator.initialvalue = "";
         ptpValidator.evaluationfunction = function () {
            if ($("#crs_compensationtype").val()== '170960001' || $("#crs_compensationtype").val()=="170960002"){
				var value = $("#crs_percentagetopfr").val();
				if (value == null || value == "") {
					return false;
				} else {
					return true;
				}
			}else{
				return true; 
            }
        };
 
         // Add the new validator to the page validators array:
         Page_Validators.push(ffValidator);
		     Page_Validators.push(ptcValidator);
		      Page_Validators.push(ptpValidator);
 
         // Wire-up the click event handler of the validation summary link
         $("a[href='#crs_flatfeeamt_label']").on("click", function () { scrollToAndFocus('crs_flatfeeamt_label','crs_flatfeeamt'); });
		 $("a[href='#crs_percentagetocharity_label']").on("click", function () { scrollToAndFocus('crs_percentagetocharity_label','crs_percentagetocharity'); });
		 $("a[href='#crs_percentagetopfr_label']").on("click", function () { scrollToAndFocus('crs_percentagetopfr_label','crs_percentagetopfr'); });
		 
		 //Radio Button on change handler
		 $("#crs_compensationtype").on("change", function () { ToggleCompensationTypeRequired(); });	 
		 ToggleCompensationTypeRequired();
      });
	  
	  function ToggleCompensationTypeRequired(){
		if ($('#crs_compensationtype').val()=='170960000'){ //Flat Fee
			$("#crs_flatfeeamt_label").parent().addClass('required');
			$("#crs_percentagetocharity_label").parent().removeClass('required');
			$("#crs_percentagetopfr_label").parent().removeClass('required');
		}else if($('#crs_compensationtype').val()=='170960001'){ //Percentage
			$("#crs_percentagetocharity_label").parent().addClass('required');
			$("#crs_percentagetopfr_label").parent().addClass('required');
			$("#crs_flatfeeamt_label").parent().removeClass('required');
		}else if($('#crs_compensationtype').val()=='170960002'){ //Combo
			$("#crs_flatfeeamt_label").parent().addClass('required');
			$("#crs_percentagetocharity_label").parent().addClass('required');
			$("#crs_percentagetopfr_label").parent().addClass('required');
		}else{
			$("#crs_flatfeeamt_label").parent().removeClass('required');
			$("#crs_percentagetocharity_label").parent().removeClass('required');
			$("#crs_percentagetopfr_label").parent().removeClass('required');
		}		
	  }
	  
   }(window.jQuery));
}*/