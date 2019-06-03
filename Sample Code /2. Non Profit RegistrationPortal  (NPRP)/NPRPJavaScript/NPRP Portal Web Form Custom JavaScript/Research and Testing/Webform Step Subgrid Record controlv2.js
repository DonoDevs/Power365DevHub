$(document).ready(function () {

    var pageValidator = document.createElement('span');
    pageValidator.style.display = "none";
    pageValidator.id = "recordValidator"
    pageValidator.controltovalidate = 'crs_doyouhaveacharitycontact';
    pageValidator.errormessage = "<a href='#crs_doyouhaveacharitycontact_label'>Charity Contact is checked yes. Please add a charity detail record.</a>";
    pageValidator.validationGroup = "CharityInfoErrorGroup" //Validation Group on the webform step
    pageValidator.inititalvalue = "";
    pageValidator.evaluationfunction = function () {
        
        //If the boolean is checked to yes and there are no records, throw the page validation error
        if ($('#crs_doyouhaveacharitycontact_1').is(':checked') == false /*&& $("#CharityPrimaryContact .view-grid table tbody tr").length < 1*/)
             return false; 
        //If the boolean is checked to yes and there are records in the subgrid, then don't throw an error
        else if ($('#crs_doyouhaveacharitycontact_1').is(':checked') == false && $("#CharityPrimaryContact .view-grid table tbody tr").length >= 1)
             return false;
        //Don't throw and error at all because the fields is checked to no 
        else
            return false;

    }
    Page_Validators.push(pageValidator);

    $("a[href='#crs_doyouhaveacharitycontact_label']").on("click", function () { scrollToAndFocus('crs_doyouhaveacharitycontact_label', 'crs_doyouhaveacharitycontact'); });


});

//create function disable to disbale buttons
//function disableButtons() {

//}

setTimeout(countSubgridRecords, 3000);


function countSubgridRecords() {
    
    alert($("#CharityPrimaryContact .view-grid table tbody tr").length)
}

function countSubgridRecords() {

    //Run JS page validation code
}








//Create Delay Function To disable 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    if (typeof (Page_Validators) == 'undefined') return;
    var pageValidator = document.createElement('span')
    pageValidator.style.display = "none";
    pageValidator.id = "recordValidator"
    pageValidator.controltovalidate = 'crs_doyouhaveacharitycontact';
    pageValidator.errormessage = "<a href='#crs_doyouhaveacharitycontact_label'>Charity Contact is checked yes. Please add a charity detail record.</a>";
    pageValidator.validationGroup = "CharityInfoErrorGroup" //Validation Group on the webform step
    pageValidator.inititalvalue = "";
    pageValidator.evaluationfunction = function () {
        ;
        //If the boolean is checked to yes and there are no records, throw the page validation error
        while ($('#crs_doyouhaveacharitycontact_1').is(':checked') == false){
            if( $("#CharityPrimaryContact .view-grid table tbody tr").length < 1)
                return true;
                //If the boolean is checked to yes and there are records in the subgrid, then don't throw an error
            else if ($('#crs_doyouhaveacharitycontact_1').is(':checked') == false && $("#CharityPrimaryContact .view-grid table tbody tr").length >= 1)

                return false;
                //Don't throw and error at all because the fields is checked to no 
            else
                return false;
        }

           
           

    }
    Page_Validators.push(pageValidator);

    $("a[href='#crs_doyouhaveacharitycontact_label']").on("click", function () { scrollToAndFocus('crs_doyouhaveacharitycontact_label', 'crs_doyouhaveacharitycontact'); });

});

//create function disable to disbale buttons
//function disableButtons() {

//}

setTimeout(countSubgridRecords, 3000);


function countSubgridRecords() {

    alert($("#CharityPrimaryContact .view-grid table tbody tr").length)
}



//Create Delay Function To disable 




$(document).ready(function () {

    var pageValidator = document.createElement('span')
    pageValidator.style.display = "none";
    pageValidator.id = "recordValidator"
    pageValidator.controltovalidate = 'crs_doyouhaveacharitycontact';
    pageValidator.errormessage = "<a href='#crs_doyouhaveacharitycontact_label'>Charity Contact is checked yes. Please add a charity detail record.</a>";
    pageValidator.validationGroup = "CharityInfoErrorGroup" //Validation Group on the webform step
    pageValidator.inititalvalue = "";
    pageValidator.evaluationfunction = function () {
        ;
        //If the boolean is checked to yes and there are no records, throw the page validation error
        if ($('#crs_doyouhaveacharitycontact_1').is(':checked') == false /*&& $("#CharityPrimaryContact .view-grid table tbody tr").length < 1*/)
            return false;
            //If the boolean is checked to yes and there are records in the subgrid, then don't throw an error
        else if ($('#crs_doyouhaveacharitycontact_1').is(':checked') == false && $("#CharityPrimaryContact .view-grid table tbody tr").length >= 1)
            return false;
            //Don't throw and error at all because the fields is checked to no 
        else
            return false;

    }
    Page_Validators.push(pageValidator);

    $("a[href='#crs_doyouhaveacharitycontact_label']").on("click", function () { scrollToAndFocus('crs_doyouhaveacharitycontact_label', 'crs_doyouhaveacharitycontact'); });


});



