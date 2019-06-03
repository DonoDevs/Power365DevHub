/*$(document).ready(function () {
	 $('#EntityFormView > div.tab.clearfix > div > div > fieldset:nth-child(3) > table > tbody > tr:nth-child(2) > td.clearfix.cell.datetime.form-control-cell > div.control > div > input).datetimepicker({
         defaultDate: new Date()
     });
 });
 */
/*
$(document).ready(function() {
   $('#EntityFormView > div.tab.clearfix > div > div > fieldset:nth-child(3) > table > tbody > tr:nth-child(2) > td.clearfix.cell.datetime.form-control-cell > div.control > div > input').datepicker();
   $('#EntityFormView > div.tab.clearfix > div > div > fieldset:nth-child(3) > table > tbody > tr:nth-child(2) > td.clearfix.cell.datetime.form-control-cell > div.control > div > input').datepicker('setDate', 'today');
});
*/


//References: https://stackoverflow.com/questions/8936652/dynamically-create-buttons-with-jquery 
$(document).ready(function () {
    $("#govmod_empolyeeappcertsignature").prop('disabled', true);
    $("#EntityFormView > div.tab.clearfix > div > div > fieldset:nth-child(3) > table > tbody > tr:nth-child(2) > td.clearfix.cell.datetime.form-control-cell > div.control > div > input").prop('disabled', true);
    
    var signatureButton = $('<button type="button" id="signatureCertification">Click to sign and Certify</button>').css({ "background-color": "#337ab7", "border-color": "#2e6da4", "color": "#FFF", "font-size": "14px" });
    var formSpacer = $('#EntityFormView > div.tab.clearfix > div > div > fieldset:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(2)');
    $(formSpacer).append(signatureButton);
    $('#signatureCertification').click(function () {
        //Set the datetime picker to today's date
        $('#EntityFormView > div.tab.clearfix > div > div > fieldset:nth-child(3) > table > tbody > tr:nth-child(2) > td.clearfix.cell.datetime.form-control-cell > div.control > div > input').datepicker().datepicker('setDate', 'today');
        //Set The Signature field to thw Firstname + Middlename + Lastname
        var employeeSignature = $('#govmod_empolyeeappcertsignature');
        employeeSignature.val($('#govmod_firstname').val() + ' ' + $('#govmod_middlename').val() + ' ' + $('#govmod_lastname').val());     
      });
    
});
  
