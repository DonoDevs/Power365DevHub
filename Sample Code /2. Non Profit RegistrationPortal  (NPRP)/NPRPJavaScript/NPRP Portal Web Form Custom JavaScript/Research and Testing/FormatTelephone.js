
//working code 
function FormatTelephonePhoneNumber(context) {
    var phoneField = context.getEventSource();
    var phoneValue = phoneField.getValue();
   
    // Removing all non-digit characters
        //Variable to format a 10 digit phone number
        var phone10plus = phonefield.replace(/[^0-9]/g, "");
        
        //If there are greater than 10 characters (taking into account extension numbers)
        if(phone10plus.length >= 10){
            //Format the Phone no as (###) ###-#### X###++
            var extension = "";
            try {
                extension = phone10plus.substr(10, phone10plus.length-10);
            }
            catch(e){}
            
            var phoneNumberFormatted = "(" + phone10plus.substr(0, 3) + ") " + phone10plus.substr(3, 3) + "-" + phone10plus.substr(6, 4) + "  X" + extension;
            context.setValue(phoneNumberFormatted);

        }
        //Throw an error saying that its not a valid number and clear out what the user entered
        else {
            alert("Please enter a valid a valid phone format of at least 10 digits");
            phoneValue.getEventSource().setValue(null);
        }
    
}


























