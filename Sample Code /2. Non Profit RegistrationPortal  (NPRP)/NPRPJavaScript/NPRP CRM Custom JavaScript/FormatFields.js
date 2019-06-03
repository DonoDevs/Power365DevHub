function FormatTelephonePhoneNumber(context) {
    var phoneField = context.getEventSource();
    var phoneValue = phoneField.getValue();
    if (phoneValue != null) {  
        // Removing all non-digit characters
        //Variable to format a 10 digit phone number
        var phone10plus = phoneValue.replace(/[^0-9]/g, "");

        if (phone10plus.substr(0, 1) == '1') {
            phone10plus = phone10plus.substr(1); // get rid of leading 1's
        }  
        //If there are greater than 10 characters (taking into account extension numbers)
        if(phone10plus.length >= 10){
            //Format the Phone no as (###) ###-#### X###++
            var extension = "";
            try {
                extension = phone10plus.substr(10, phone10plus.length-10);
            }
            catch(e){}
            //var extension = phone10plus.substr(10, phone10plus.length-10);
            var phoneNumberFormatted = "(" + phone10plus.substr(0, 3) + ") " + phone10plus.substr(3, 3) + "-" + phone10plus.substr(6, 4) + "  X" + extension;
            phoneField.setValue(phoneNumberFormatted);

        }
        //Throw an error saying that its not a valid number and clear out what the user entered
        else {
            //alert("Please enter a valid a valid phone format of at least 10 digits");
            Xrm.Page.ui.setFormNotification("Please enter a valid a valid phone format of at least 10 digits.", "INFORMATION", '1');
            context.getEventSource().setValue(null);
        }
        

    }
}

function FormatEIN(context){
    var EINField = context.getEventSource();
    var EINValue = EINField.getValue();

    if (EINValue != null) {
     try{
        //Remove all non-digit characters
        var EINValStripped = EINValue.replace(/[^0-9]/g, "");

        if(EINValStripped.length == 9){
            //Format EIN as #########
            EINField.setValue(EINValStripped);
            //Format the EIN as ##-#######
            //var EINFormatted = inputtedEIN.substr(0,2) + "-" + inputtedEIN.substr(2,7);
            //EINField.setValue(EINFormatted);
        }
        else if(EINValStripped.length > 9){
            //Does not clear the entire string, but strips the characters after the 9th character
            //Format the EIN as #########
            var EINValReduced = EINValStripped.substr(0,9);
            EINField.setValue(EINValReduced)
        }
        //Throw an error saying that its not a valid number and clear out what the user entered
        else{
             //alert("Please enter a valid a valid EIN number of 9 digits");
            Xrm.Page.ui.setFormNotification("Please enter a valid a valid EIN number of 9 digits.", "INFORMATION",'2');
            context.getEventSource().setValue(null);      
        }

     }
     catch(exception){}
        

     }
}

function ClearFormNotificationOnSave(){
    Xrm.Page.ui.clearFormNotification('1')
    Xrm.Page.ui.clearFormNotification('2')
}

/*
function ClearFormNotificationOnSave(){
    var EIN = context.getEventSource().getValue();
    var phone = context.getEventSource().getValue();

    if (EIN != null){
        Xrm.Page.ui.clearFormNotification(EINNotification)
    }
    if (phone != null){
        Xrm.Page.ui.clearFormNotification(phoneNotification)
    }


}
*/

/*
function FormatEIN(context){
    var EINField = context.getEventSource();
    var EINValue = EINField.getValue();

    //Remove all non-digit characters
    var inputtedEIN = EINValue.replace(/[^0-9]/g, "");

    if(inputtedEIN.length == 9){

        //Format the EIN as ##-#######
        var EINFormatted = inputtedEIN.substr(0,2) + "-" + inputtedEIN.substr(2,7);
        EINField.setValue(EINFormatted);
     }
     //Throw an error saying that its not a valid number and clear out what the user entered
     else{
             alert("Please enter a valid a valid EIN number of at least 9 digits");
            context.getEventSource().setValue(null);      
     }
}
*/
/*
function FormatPhone(context, errMsgCode) {
    var phone = context.getEventSource().getValue();
    if (phone != null) {
        phone = phone.replace(/^s+/, '').replace(/s+$/, '');
        phone = phone.replace(/[^\d]/g, ""); // get rid of everything but the numbers
        if (phone.substr(0, 1) == '1') {
            phone = phone.substr(1); // get rid of leading 1's
        }

        if (phone.length == 10) {
            context.getEventSource().setValue("(" + phone.substr(0, 3) + ") " + phone.substr(3, 3) + "-" + phone.substr(6, 4));
        }
        else {
            FetchAndDisplayErrorMessage(errMsgCode, context);
        }

    }
}
*/