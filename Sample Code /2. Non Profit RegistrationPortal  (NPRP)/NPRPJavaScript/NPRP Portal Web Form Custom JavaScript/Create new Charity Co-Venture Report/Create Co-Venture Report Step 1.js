$(document).ready(function() {
    $("#crs_amounttocharity").keyup(function(e) {
        if($(this).val() != '') {
            $("#crs_amountordonatedtocharity").not(this).prop('disabled','disabled');
        } else {
            $("#crs_amountordonatedtocharity").removeProp('disabled');
        }
    });
    
    $("#crs_amountordonatedtocharity").keyup(function(e) {
        if($(this).val() != '') {
            $("#crs_amounttocharity").not(this).prop('disabled','disabled');
        } else {
            $("#crs_amounttocharity").removeProp('disabled');
        }
    });
});