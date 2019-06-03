/************************JS for regular optionset picklist***************************************/
$(document).ready(function () {
    var sickLeaveBalance = $('#govmod_prquestion3');
    var sickLeave = $('#govmod_prquestion4').closest('td');
    var select = this.value;
    //Hide on page load
    sickLeave.hide();

    sickLeaveBalance.change(function() {
        if ($(this).val() == '100000001') {
            sickLeave.show("slow");
        }
        else{
            sickLeave.hide("slow");
        } 
   });
   
 });	 

/************************JS for Metadata Radio Buttons***************************************/
 $(document).ready(function () {
    var sickLeaveBalance_no = $('#govmod_prquestion3_0');
    var sickLeaveBalance_yes = $('#govmod_prquestion3_1');
    var sickLeaveBalance_na = $('#govmod_prquestion3_2');
    var sickLeave = $('#govmod_prquestion4').closest('td');
    //Hide on page load
    sickLeave.hide();
    sickLeaveBalance_no.change(function() { showHideQuestions(); });
    sickLeaveBalance_yes.change(function() { showHideQuestions(); });
    ickLeaveBalance_na.change(function() { showHideQuestions(); });
   
    showHideQuestions();

});	  

//Function to Show and hide the fields
function showHideQuestions() {
    var sickLeave = $('#govmod_prquestion4').closest('td');
    //LOGIC
    if ($('#govmod_prquestion3_1').is(':checked')) {
        sickLeave.show("slow");
        $("#govmod_prquestion4_label").parent().addClass('required');
    }
    if ($('#govmod_prquestion3_0').is(':checked')) {
        sickLeave.hide("slow");
        $("#govmod_prquestion4_label").parent().removeClass('required');
    }
    if ($('#govmod_prquestion3_2').is(':checked')) {
        sickLeave.hide("slow");
        $("#govmod_prquestion4_label").parent().removeClass('required');
    }
    /*else {
        sickLeave.hide("slow");
        $("#govmod_prquestion4_label").parent().removeClass('required');
    }
    */
}



