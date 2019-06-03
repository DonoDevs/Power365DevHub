$(document).ready(function () {
    var applicantEligibleHealthBenefits_yes = $('#govmod_hrapplicanteligiblecontinuehealthbenef_1');
    var applicantEligibleHealthBenefits_no = $('#govmod_hrapplicanteligiblecontinuehealthbenef_0');
 
    applicantEligibleHealthBenefits_yes.change(function() { showHideQuestions(); });
    applicantEligibleHealthBenefits_no.change(function() { showHideQuestions(); });
   
    showHideQuestions();

});	  

//Function to Show and hide the fields
function showHideQuestions() {
    var enrollmentCode = $('#govmod_hrenrollmentcode').closest('td');
    var giveReason = $('#govmod_hrgivereason').closest('td');

    //LOGIC
    if ($('#govmod_hrapplicanteligiblecontinuehealthbenef_1').is(':checked')) {
        enrollmentCode.show("slow");
        $("#govmod_hrenrollmentcode_label").parent().addClass('required');
        giveReason.hide("fast");
        $("#govmod_hrgivereason_label").parent().removeClass('required');
    } else {
        enrollmentCode.hide("fast");
        $("#govmod_hrenrollmentcode_label").parent().removeClass('required');
        giveReason.show("slow");
        $("#govmod_hrgivereason_label").parent().addClass('required');
    }


}

