$(document).ready(function () {
         //Short Form Question 1 Boolean variables
		 var shortFormQuestion1_yes = $('#crs_shrtquestion1_1');
		 var shortFormQuestion1_no = $('#crs_shrtquestion1_0'); 
         //Short Form Question 6 Boolean variables
		 var shortFormQuestion6_yes = $('#crs_shrtquestion6_1');
		 var shortFormQuestion6_no = $('#crs_shrtquestion6_0'); 
         //Short Form Question 1 Logic
         shortFormQuestion1_yes.change(function() {showHideQuestions(); });
         shortFormQuestion1_no.change(function() {showHideQuestions(); });
         //Short Form Question 6 Logic
         shortFormQuestion6_yes.change(function() {showHideQuestions(); });
         shortFormQuestion6_no.change(function() {showHideQuestions(); });
        //Wires the function logic up onload
        showHideQuestions(); 
});	   
 function showHideQuestions() {
      //ShortForm question 1 logic
      if($('#crs_shrtquestion1_1').is(':checked')) {
        $(".section[data-name='short_form_solicitedstates']").closest("fieldset").show();
      } else {
        $(".section[data-name='short_form_solicitedstates']").closest("fieldset").hide();
      }
      //ShortForm question 6 logic
      if($('#crs_shrtquestion6_1').is(':checked')) {
        $(".section[data-name='short_form_question6']").closest("fieldset").show();
      } else {
        $(".section[data-name='short_form_question6']").closest("fieldset").hide();
      }
    }



