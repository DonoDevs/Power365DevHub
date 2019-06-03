/*
$(document).ready(function () {
    if ($('#crs_doyouhaveacharitycontact') == true) {
        $('#NextButton').click(function () {
            alert("You must add a charity detail record.");
        });
    }
});
*/


$(document).ready(function () {
    if (typeof (Page_Validators) == 'undefined') return;
    var pageValidator = document.createElement('span')
    pageValidator.style.display = "none";
    pageValidator.id = "recordValidator"
    pageValidator.controltovalidate = 'crs_doyouhaveacharitycontact';
    pageValidator.errormessage = "<a href='#crs_doyouhaveacharitycontact_label'>Charity Contact is checked yes. Please add a charity detail record.</a>";
    pageValidator.validationGroup = "CharityInfoErrorGroup" //Validation Group on the webform step
    pageValidator.inititalvalue = "";
    pageValidator.evaluationfunction = function(){
        if ($('#crs_doyouhaveacharitycontact_1').is(':checked') == false) return true;
        else
            return false;
    }
    Page_Validators.push(pageValidator);

    $("a[href='#crs_doyouhaveacharitycontact_label']").on("click", function () { scrollToAndFocus('crs_doyouhaveacharitycontact_label','crs_doyouhaveacharitycontact'); });
    /*
    
        if ($('#crs_doyouhaveacharitycontact_1').is(':checked')) {
            //$('#NextButton').attr('disabled', true);
            $('#NextButton').click(function () {
                alert("You must add a charity detail record.");
            });
        }
    
        */
    /*else
    {
        $('#NextButton').attr('disabled', false);
    }*/
});

$(document).ready(function () {
    if (typeof (Page_Validators) == 'undefined') return;
    var pageValidator = document.createElement('span')
    pageValidator.style.display = "none";
    pageValidator.id = "recordValidator"
    pageValidator.controltovalidate = 'crs_doyouhaveacharitycontact';
    pageValidator.errormessage = "<a href='#crs_doyouhaveacharitycontact_label'>Charity Contact is checked yes. Please add a charity detail record.</a>";
    pageValidator.validationGroup = "CharityInfoErrorGroup" //Validation Group on the webform step
    pageValidator.inititalvalue = "";
    pageValidator.evaluationfunction = function(){
        if ($('#crs_doyouhaveacharitycontact_1').is(':checked') == false) return true;
        else
            return false;
    }
    Page_Validators.push(pageValidator);

    $("a[href='#crs_doyouhaveacharitycontact_label']").on("click", function () { scrollToAndFocus('crs_doyouhaveacharitycontact_label','crs_doyouhaveacharitycontact'); });
/*

    if ($('#crs_doyouhaveacharitycontact_1').is(':checked')) {
        //$('#NextButton').attr('disabled', true);
        $('#NextButton').click(function () {
            alert("You must add a charity detail record.");
        });
    }

    */
    /*else
    {
        $('#NextButton').attr('disabled', false);
    }*/
});













































$(document).ready(function () {
    //$('#NextButton').attr('disabled', 'disabled');
    var charityContact = $('#CharityPrimaryContact');  // my guess is that it will error here (or this variable doesn't have .style in it
    if (typeof (Page_Validators) == 'undefined') return;
    var pageValidator = document.createElement('span')
    pageValidator.style.display = "none";
    pageValidator.id = "recordValidator"
    pageValidator.controltovalidate = 'crs_doyouhaveacharitycontact';
    pageValidator.errormessage = "<a href='#crs_doyouhaveacharitycontact_label'> The Charity Contact Record is checked to yes. If so, Please add a charity detail record. If you do not have a charity detail record then say no please.</a>";
    pageValidator.validationGroup = "CharityInfoErrorGroup" //Validation Group on the webform step
    pageValidator.inititalvalue = "";


    pageValidator.evaluationfunction = function(){
        //If the do you have a contact field is checked as yes and the "There are no records to display message" is present
        //Look to see if a charity record has been created. If the display style is block( means no record has been added to the grid then throw the error message)
        if ($('#crs_doyouhaveacharitycontact_1').is(':checked') == true && charityContact != null && charityContact.style.display == 'block')      
               //If a Charity record has not been created while checked yes then return true and throw the error message
            return true;
            //If the contact attribute attribute field is checked to yes, and there are records ("There are no records to display message" is not present and a field exists)
        else if($('#crs_doyouhaveacharitycontact_1').is(':checked') == true && charityContact.style.display == 'none')
            return false;
        //If the attribute is checked to no, then don't worry about checking to see if records exist and allow user to go next
        else
            return false;
    }
    //Pushes the error messages to the screen
    Page_Validators.push(pageValidator); 

    //Creates the clickable hyperlink and then scrolls to the actual attribute on the page
    $("a[href='#crs_doyouhaveacharitycontact_label']").on("click", function () { scrollToAndFocus('crs_doyouhaveacharitycontact_label','crs_doyouhaveacharitycontact'); });
/*

    if ($('#crs_doyouhaveacharitycontact_1').is(':checked')) {
        //$('#NextButton').attr('disabled', true);
        $('#NextButton').click(function () {
            alert("You must add a charity detail record.");
        });
    }

    */
    /*else
    {
        $('#NextButton').attr('disabled', false);
    }*/
});




















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (typeof (Page_Validators) == 'undefined') return;
// Create new validator
var newValidator = document.createElement('span');
newValidator.style.display = "none";
newValidator.id = "contactValidator";
newValidator.controltovalidate = "adoxio_lastname";
newValidator.errormessage = "<a href='#adoxio_lastname_label'>Please enter contact details.</a>";
newValidator.validationGroup = "ParkGroup"; // Set this if you have set ValidationGroup on the form
newValidator.initialvalue = "";
newValidator.evaluationfunction = function () {
            
    if ($('#adoxio_personalinjury').is(':checked') == false) return true; 
    else
        return false;
};

// Add the new validator to the page validators array:
Page_Validators.push(newValidator);

// Wire-up the click event handler of the validation summary link
$("a[href='#adoxio_firstname_label']").on("click", function () { scrollToAndFocus('adoxio_firstname_label','adoxio_firstname'); });
});
$(document).ready(function () {
    if (typeof (Page_Validators) == 'undefined') return;
    var pageValidator = document.createElement('span')
    pageValidator.style.display = "none";
    pageValidator.id = "recordValidator"
    pageValidator.controltovalidate = 'crs_doyouhaveacharitycontact';
    pageValidator.errormessage = "<a href='#crs_doyouhaveacharitycontact_label'>Charity Contact is checked yes. Please add a charity detail record.</a>";
    pageValidator.validationGroup = "CharityInfoErrorGroup" //Validation Group on the webform step
    pageValidator.inititalvalue = "";
    pageValidator.evaluationfunction = function(){
        if ($('#crs_doyouhaveacharitycontact_1').is(':checked') == false) return true;
        else
            return false;
    }
    Page_Validators.push(pageValidator);

    $("a[href='#crs_doyouhaveacharitycontact_label']").on("click", function () { scrollToAndFocus('crs_doyouhaveacharitycontact_label','crs_doyouhaveacharitycontact'); });
/*

    if ($('#crs_doyouhaveacharitycontact_1').is(':checked')) {
        //$('#NextButton').attr('disabled', true);
        $('#NextButton').click(function () {
            alert("You must add a charity detail record.");
        });
    }

    */
    /*else
    {
        $('#NextButton').attr('disabled', false);
    }*/
});






$(document).ready(function () {
    if (typeof (Page_Validators) == 'undefined') return;
    var pageValidator = document.createElement('span')
    pageValidator.style.display = "none";
    pageValidator.id = "recordValidator"
    pageValidator.controltovalidate = 'crs_doyouhaveacharitycontact';
    pageValidator.errormessage = "<a href='#crs_doyouhaveacharitycontact_label'>Charity Contact is checked yes. Please add a charity detail record.</a>";
    pageValidator.validationGroup = "CharityInfoErrorGroup" //Validation Group on the webform step
    pageValidator.inititalvalue = "";
    pageValidator.evaluationfunction = function(){
        if ($('#crs_doyouhaveacharitycontact_1').is(':checked') == false) return true;
        else
            return false;
    }
    Page_Validators.push(pageValidator);

    $("a[href='#crs_doyouhaveacharitycontact_label']").on("click", function () { scrollToAndFocus('crs_doyouhaveacharitycontact_label','crs_doyouhaveacharitycontact'); });
    /*
    
        if ($('#crs_doyouhaveacharitycontact_1').is(':checked')) {
            //$('#NextButton').attr('disabled', true);
            $('#NextButton').click(function () {
                alert("You must add a charity detail record.");
            });
        }
    
        */
    /*else
    {
        $('#NextButton').attr('disabled', false);
    }*/
});
