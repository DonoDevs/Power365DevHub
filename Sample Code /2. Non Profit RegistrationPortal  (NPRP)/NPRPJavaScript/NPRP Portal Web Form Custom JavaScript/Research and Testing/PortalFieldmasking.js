$(document).ready(function () {

    //Federal EIN Field Mask
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.3/jquery.mask.js", function () {
        $("#crs_federalein").mask("000000000");
        //$("#crs_federalein").mask("00-0000000");
    });

    //Phone Number of Charity Field Mask
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.3/jquery.mask.js", function () {
        $("#telephone1").mask("(000) 000-0000 X0000");
        $("#fax").mask("(000) 000-0000 X0000");
    });
    
    $("[data-date-format='M/D/YYYY']").attr("placeholder","MM/DD/YYYY");
});


