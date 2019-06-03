
 $(document).ready(function () {
         //long Form Question 1 Boolean variables
		 var longFormQuestion1_yes = $('#crs_longquestion1_1');
		 var longFormQuestion1_no = $('#crs_longquestion1_0'); 
         //long Form Question 1 Logic
         longFormQuestion1_yes.change(function() {showHideQuestions(); });
         longFormQuestion1_no.change(function() {showHideQuestions(); });

         //long Form Question 2 Boolean variables
		 var longFormQuestion2_yes = $('#crs_longquestion2_1');
		 var longFormQuestion2_no = $('#crs_longquestion2_0'); 
         //long Form Question 2 Logic
         longFormQuestion2_yes.change(function() {showHideQuestions(); });
         longFormQuestion2_no.change(function() {showHideQuestions(); });

         //long Form Question 4 Boolean variables
		 var longFormQuestion4_yes = $('#crs_longquestion4_1');
		 var longFormQuestion4_no = $('#crs_longquestion4_0'); 
         //long Form Question 4 Logic
         longFormQuestion4_yes.change(function() {showHideQuestions(); });
         longFormQuestion4_no.change(function() {showHideQuestions(); });

         //long Form Question 11 Boolean variables
		 var longFormQuestion11_yes = $('#crs_longquestion11_1');
		 var longFormQuestion11_no = $('#crs_longquestion11_0'); 
         //long Form Question 11 Logic
         longFormQuestion11_yes.change(function() {showHideQuestions(); });
         longFormQuestion11_no.change(function() {showHideQuestions(); });

        //Wires the function logic up onload
        showHideQuestions(); 
        PageValidator();
});	
//Function to show and hide fields and tabs   
 function showHideQuestions() {
     var lq4 = $('#crs_longquestion4yes').closest('td');
      //longForm question 1 logic
      if($('#crs_longquestion1_1').is(':checked')) {
        $(".section[data-name='long_form_statessolicited']").closest("fieldset").show();
      } else {
        $(".section[data-name='long_form_statessolicited']").closest("fieldset").hide();
      }
      //longForm question 2 logic
      if($('#crs_longquestion2_1').is(':checked')) {
        $(".section[data-name='long_form_charityaffiliates']").closest("fieldset").show();
      } else {
        $(".section[data-name='long_form_charityaffiliates']").closest("fieldset").hide();
      }
      //longForm question 4 logic
      if($('#crs_longquestion4_1').is(':checked')) {
        lq4.show("fast");
        $("#crs_longquestion4yes_label").parent().addClass('required');
      } else {
        lq4.hide("fast");
        $("#crs_longquestion4yes_label").parent().addClass('required');
      }
      //longForm question 11 logic
      if($('#crs_longquestion11_1').is(':checked')) {
        $(".section[data-name='long_form_highestpaidemployees']").closest("fieldset").show();
      } else {
        $(".section[data-name='long_form_highestpaidemployees']").closest("fieldset").hide();
      }
       
    }
//Function to create custome field page validators
 function PageValidator(){
       if (typeof (Page_Validators) == 'undefined') return;

       /*******************Create new validator - Long Form Question 4yes Textbox****************************/
       var lq4yesValidator = document.createElement('span');
       lq4yesValidator.style.display = "none";
       lq4yesValidator.id = "RequiredFieldValidatorcrs_longquestion4yes";
       lq4yesValidator.controltovalidate = "crs_longquestion4yes";
       lq4yesValidator.errormessage = "<a href='#crs_longquestion4yes_label'> <b><u>'Please Describe why the paid fund raiser or paid fund raising consul has control or access to the organization’s funds?.'</u></b>   Is required, since you answered 'Yes' to the question above it. </a>";
       lq4yesValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
       lq4yesValidator.initialvalue = "";
       lq4yesValidator.evaluationfunction = function () {
           if (!$("#crs_longquestion4_1").is(':checked')){
               $("#crs_longquestion4yes_label").parent().addClass('required');
           return true; 
           }
           var value = $("#crs_longquestion4yes").val();
           if (value == null || value == "") {
           return false;
           } else {
           return true;
           }
       };      
       // Wire-up the click event handler of the validation summary link
       $("a[href='#crs_longquestion4yes_label']").on("click", function () { scrollToAndFocus('crs_longquestion4yes_label','crs_longquestion4yes'); });
       //Radio Button on change handler
       $("#crs_longquestion4_1").on("change", function () { lq4yesToggleRequired('#crs_longquestion4_1'); });
       $("#crs_longquestion4_1_0").on("change", function () { lq4yesToggleRequired('#crs_longquestion4_1'); });		 
       lq4yesToggleRequired('#crs_cmnquestion14_1')
       //Toggle Required
       function lq4yesToggleRequired(labelname){
             if ($(labelname).is(':checked')){
                 $("#crs_longquestion4yes_label").parent().addClass('required');;
             }else{
                 $("#crs_longquestion4yes_label").parent().removeClass('required');
             }		
       }
   // Add the new validator to the page validators array:
       Page_Validators.push(lq4yesValidator);
       

}

   