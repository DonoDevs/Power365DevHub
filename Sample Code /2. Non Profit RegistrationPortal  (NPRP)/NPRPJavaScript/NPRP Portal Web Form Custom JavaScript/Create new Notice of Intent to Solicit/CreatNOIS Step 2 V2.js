$(document).ready(function () {

    $(".section[data-name='section_Pfr1']").closest("fieldset").hide();
    $('#crs_haspaidfundraiserbeencontracted').on('change', function() {
        //use toggle for ease of use
        $(".section[data-name='section_Pfr1']").closest("fieldset").toggle(this.value == 170960000)
      });

     /****************************************Create new validator - PFR Registration Number 1*************************************** */
      if (typeof (Page_Validators) == 'undefined') return;
      // Create new validator
      var pfrregistrationnumber1Validator = document.createElement('span');
      pfrregistrationnumber1Validator.style.display = "none";
      pfrregistrationnumber1Validator.id = "crs_pfrregistrationnumber1Validator";
      pfrregistrationnumber1Validator.controltovalidate = "crs_pfrregistrationnumber1";
      pfrregistrationnumber1Validator.errormessage = "<a href='#crs_pfrregistrationnumber1_label'> <b><u>'The firstPFR Registration Number.'</u></b>   Is required </a>";
      pfrregistrationnumber1Validator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
      pfrregistrationnumber1Validator.initialvalue = "";
      pfrregistrationnumber1Validator.evaluationfunction = function () {
         var hasPaidFundraiserCounselBeenContracted = $("#crs_haspaidfundraiserbeencontracted").val();
         if (hasPaidFundraiserCounselBeenContracted != 170960000) 
            //$("#crs_pfrregistrationnumber1_label").parent().addClass('required');
            return true; // check if hasPaidFundraiserCounselBeenContracted is not 'Yes'.
         // only require PFR Registration Number 1 if paidFundraiser counsel been contracted is yes
         var value = $("#crs_pfrregistrationnumber1").val();
         if (value == null || value == "") {
         return false;
         } else {
            return true;
         }
      };
  
      // Add the new validator to the page validators array:
      Page_Validators.push(pfrregistrationnumber1Validator);
  
      // Wire-up the click event handler of the validation summary link
      $("a[href='#crs_pfrregistrationnumber1_label']").on("click", function () { scrollToAndFocus('crs_pfrregistrationnumber1_label','crs_pfrregistrationnumber1'); });
      $("#crs_pfrregistrationnumber1_label").parent().addClass('required');


      /****************************************Create new validator - PFR Name 1*************************************** */
      if (typeof (Page_Validators) == 'undefined') return;
      // Create new validator
      var pfrName1Validator = document.createElement('span');
      pfrName1Validator.style.display = "none";
      pfrName1Validator.id = "crs_pfrname1Validator";
      pfrName1Validator.controltovalidate = "crs_pfrname1";
      pfrName1Validator.errormessage = "<a href='#crs_pfrname1_label'> <b><u>'PFR Name.'</u></b>   Is required </a>";
      pfrName1Validator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
      pfrName1Validator.initialvalue = "";
      pfrName1Validator.evaluationfunction = function () {
         var hasPaidFundraiserCounselBeenContracted = $("#crs_haspaidfundraiserbeencontracted").val();
         if (hasPaidFundraiserCounselBeenContracted != 170960000) 
            //$("#crs_pfrregistrationnumber1_label").parent().addClass('required');
            return true; // check if hasPaidFundraiserCounselBeenContracted is not 'Yes'.
         // only require PFR Registration Number 1 if paidFundraiser counsel been contracted is yes
         var value = $("#crs_pfrname1").val();
         if (value == null || value == "") {
         return false;
         } else {
            return true;
         }
      };
  
      // Add the new validator to the page validators array:
      Page_Validators.push(pfrName1Validator);
  
      // Wire-up the click event handler of the validation summary link
      $("a[href='#crs_pfrname1_label']").on("click", function () { scrollToAndFocus('crs_pfrname1_label','crs_pfrname1'); });
      $("#crs_pfrname1_label").parent().addClass('required');


     /****************************************Create new validator - PFR Telephone Number 1*************************************** */
        if (typeof (Page_Validators) == 'undefined') return;
        // Create new validator
        var pfrTelephoneNumber1Validator = document.createElement('span');
        pfrTelephoneNumber1Validator.style.display = "none";
        pfrTelephoneNumber1Validator.id = "crs_pfrTelephoneNumber1Validator";
        pfrTelephoneNumber1Validator.controltovalidate = "crs_pfrphonenumber1";
        pfrTelephoneNumber1Validator.errormessage = "<a href='#crs_pfrphonenumber1_label'> <b><u>'PFR Telephone Number.'</u></b>   Is required </a>";
        pfrTelephoneNumber1Validator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
        pfrTelephoneNumber1Validator.initialvalue = "";
        pfrTelephoneNumber1Validator.evaluationfunction = function () {
            var hasPaidFundraiserCounselBeenContracted = $("#crs_haspaidfundraiserbeencontracted").val();
            if (hasPaidFundraiserCounselBeenContracted != 170960000) 
            //$("#crs_pfrregistrationnumber1_label").parent().addClass('required');
            return true; // check if hasPaidFundraiserCounselBeenContracted is not 'Yes'.
            // only require PFR Registration Number 1 if paidFundraiser counsel been contracted is yes
            var value = $("#crs_pfrphonenumber1").val();
            if (value == null || value == "") {
            return false;
            } else {
            return true;
            }
        };

        // Add the new validator to the page validators array:
        Page_Validators.push(pfrTelephoneNumber1Validator);

        // Wire-up the click event handler of the validation summary link
        $("a[href='#crs_pfrphonenumber1_label']").on("click", function () { scrollToAndFocus('crs_pfrphonenumber1_label','crs_pfrphonenumber1'); });
        $("#crs_pfrphonenumber1_label").parent().addClass('required');

     /****************************************Create new validator - PFR Address 1*************************************** */
        if (typeof (Page_Validators) == 'undefined') return;
        // Create new validator
        var pfrTelephoneNumber1Validator = document.createElement('span');
        pfrTelephoneNumber1Validator.style.display = "none";
        pfrTelephoneNumber1Validator.id = "crs_pfraddress1Validator";
        pfrTelephoneNumber1Validator.controltovalidate = "crs_pfraddress1";
        pfrTelephoneNumber1Validator.errormessage = "<a href='#crs_pfraddress1_label'> <b><u>'PFR Address.'</u></b>   Is required </a>";
        pfrTelephoneNumber1Validator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
        pfrTelephoneNumber1Validator.initialvalue = "";
        pfrTelephoneNumber1Validator.evaluationfunction = function () {
            var hasPaidFundraiserCounselBeenContracted = $("#crs_haspaidfundraiserbeencontracted").val();
            if (hasPaidFundraiserCounselBeenContracted != 170960000) 
            //$("#crs_pfrregistrationnumber1_label").parent().addClass('required');
            return true; // check if hasPaidFundraiserCounselBeenContracted is not 'Yes'.
            // only require PFR Registration Number 1 if paidFundraiser counsel been contracted is yes
            var value = $("#crs_pfraddress1").val();
            if (value == null || value == "") {
            return false;
            } else {
            return true;
            }
        };

        // Add the new validator to the page validators array:
        Page_Validators.push(pfrTelephoneNumber1Validator);

        // Wire-up the click event handler of the validation summary link
        $("a[href='#crs_pfraddress1_label']").on("click", function () { scrollToAndFocus('crs_pfraddress1_label','crs_pfraddress1'); });
        $("#crs_pfraddress1_label").parent().addClass('required');

    
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

