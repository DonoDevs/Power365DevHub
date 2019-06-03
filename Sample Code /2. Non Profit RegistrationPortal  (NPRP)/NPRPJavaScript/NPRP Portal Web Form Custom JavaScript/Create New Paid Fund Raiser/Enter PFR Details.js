if (window.jQuery) {
   (function ($) {
      $(document).ready(function () {
         if (typeof (Page_Validators) == 'undefined') return;
         // Create new validator - Bond Number
         var bnValidator = document.createElement('span');
         bnValidator.style.display = "none";
         bnValidator.id = "RequiredFieldValidatorcrs_bondnumber";
         bnValidator.controltovalidate = "crs_bondnumber";
         bnValidator.errormessage = "<a href='#crs_bondnumber_label'>Bond Number is a required field.</a>";
         bnValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
         bnValidator.initialvalue = "";
         bnValidator.evaluationfunction = function () {
            if (!$("#crs_bond_1").is(':checked')) return true; 
            
            var value = $("#crs_bondnumber").val();
            if (value == null || value == "") {
            return false;
            } else {
               return true;
            }
         };
		 // Create new validator - Bond Amount
         var baValidator = document.createElement('span');
         baValidator.style.display = "none";
         baValidator.id = "RequiredFieldValidatorcrs_bondamount";
         baValidator.controltovalidate = "crs_bondamount";
         baValidator.errormessage = "<a href='#crs_bondamount_label'>Bond Amount is a required field.</a>";
         baValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
         baValidator.initialvalue = "";
         baValidator.evaluationfunction = function () {
            if (!$("#crs_bond_1").is(':checked')) return true; 
            
            var value = $("#crs_bondamount").val();
            if (value == null || value == "") {
            return false;
            } else {
               return true;
            }
         };
		 // Create new validator - Bond Company
         var bcValidator = document.createElement('span');
         bcValidator.style.display = "none";
         bcValidator.id = "RequiredFieldValidatorcrs_bondcompany";
         bcValidator.controltovalidate = "crs_bondcompany";
         bcValidator.errormessage = "<a href='#crs_bondcompany_label'>Bond Company is a required field.</a>";
         bcValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
         bcValidator.initialvalue = "";
         bcValidator.evaluationfunction = function () {
            if (!$("#crs_bond_1").is(':checked')) return true; 
            
            var value = $("#crs_bondcompany").val();
            if (value == null || value == "") {
            return false;
            } else {
               return true;
            }
         };
		 // Create new validator - Bond Issuance Date
         var bidValidator = document.createElement('span');
         bidValidator.style.display = "none";
         bidValidator.id = "RequiredFieldValidatorcrs_bondissuancedate";
         bidValidator.controltovalidate = "crs_bondissuancedate";
         bidValidator.errormessage = "<a href='#crs_bondissuancedate_label'>Bond Issuance Date is a required field.</a>";
         bidValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
         bidValidator.initialvalue = "";
         bidValidator.evaluationfunction = function () {
            if (!$("#crs_bond_1").is(':checked')) return true; 
            
            var value = $("#crs_bondissuancedate").val();
            if (value == null || value == "") {
            return false;
            } else {
               return true;
            }
         };
		 // Create new validator - Bond Expiration Date
         var bedValidator = document.createElement('span');
         bedValidator.style.display = "none";
         bedValidator.id = "RequiredFieldValidatorcrs_datebondexpires";
         bedValidator.controltovalidate = "crs_datebondexpires";
         bedValidator.errormessage = "<a href='#crs_datebondexpires_label'>Bond Expiration Date is a required field.</a>";
         bedValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
         bedValidator.initialvalue = "";
         bedValidator.evaluationfunction = function () {
            if (!$("#crs_bond_1").is(':checked')) return true; 
            
            var value = $("#crs_datebondexpires").val();
            if (value == null || value == "") {
            return false;
            } else {
               return true;
            }
         };
 
         // Add the new validator to the page validators array:
         Page_Validators.push(bnValidator);
		 Page_Validators.push(baValidator);
		 Page_Validators.push(bcValidator);
		 Page_Validators.push(bidValidator);
		 Page_Validators.push(bedValidator);
 
         // Wire-up the click event handler of the validation summary link
         $("a[href='#crs_bondnumber_label']").on("click", function () { scrollToAndFocus('crs_bondnumber_label','crs_bondnumber'); });
		 $("a[href='#crs_bondamount_label']").on("click", function () { scrollToAndFocus('crs_bondamount_label','crs_bondamount'); });
		 $("a[href='#crs_bondcompany_label']").on("click", function () { scrollToAndFocus('crs_bondcompany_label','crs_bondcompany'); });
		 $("a[href='#crs_bondissuancedate_label']").on("click", function () { scrollToAndFocus('crs_bondissuancedate_label','crs_bondissuancedate'); });
		 $("a[href='#crs_datebondexpires_label']").on("click", function () { scrollToAndFocus('crs_datebondexpires_label','crs_datebondexpires'); });
		 
		 //Radio Button on change handler
		 $("#crs_bond_1").on("change", function () { ToggleRequired('#crs_bond_1'); });
		 $("#crs_bond_0").on("change", function () { ToggleRequired('#crs_bond_1'); });		 
		 ToggleRequired('#crs_bond_1')
      });
	  
	  function ToggleRequired(labelname){
		if ($(labelname).is(':checked')){
			$("#crs_bondnumber_label").parent().addClass('required');
			$("#crs_bondamount_label").parent().addClass('required');
			$("#crs_bondcompany_label").parent().addClass('required');
			$("#crs_bondissuancedate_label").parent().addClass('required');
			$("#crs_datebondexpires_label").parent().addClass('required');
		}else{
			$("#crs_bondnumber_label").parent().removeClass('required');
			$("#crs_bondamount_label").parent().removeClass('required');
			$("#crs_bondcompany_label").parent().removeClass('required');
			$("#crs_bondissuancedate_label").parent().removeClass('required');
			$("#crs_datebondexpires_label").parent().removeClass('required');
		}		
	  }
	   
   }(window.jQuery));
}
