function ChangeToUpperCase(obj) {

    //  Generic script that makes the field value UPPER CASE
    //  Obj Context is passed in above 
    //  This function is set on Form Property for each field this needs to occur on
    var fieldName = obj.getEventSource().getName();
    if (Xrm.Page.getAttribute(fieldName).getValue() != null) {
        //  Make upper case
        var fieldValue = Xrm.Page.getAttribute(fieldName).getValue().toUpperCase();
        // Set the Value
        Xrm.Page.getAttribute(fieldName).setValue(fieldValue);
    }
}

function DoCompanyContact() {

    var type = Xrm.Page.getAttribute("icm_type").getValue();
    var fullName = Xrm.Page.getAttribute("fullname");
    var lastName = Xrm.Page.getAttribute("lastname");

    if (type != null && type == 100000001) {
        //  Business     
        Xrm.Page.getControl("fullname").setVisible(false);
        fullName.setRequiredLevel("none");
        lastName.setRequiredLevel("none");
        Xrm.Page.getControl("department").setFocus();
    } else {
        Xrm.Page.getControl("fullname").setVisible(true);
        fullName.setRequiredLevel("required");
        lastName.setRequiredLevel("required");
    }
}

function OnCompanyNameChange() {
    //  Store Company Name in LastName (OOTB issue)
    var fullName = Xrm.Page.getAttribute("fullname");
    var lastName = Xrm.Page.getAttribute("lastname");
    fullName.setRequiredLevel("none");
    lastName.setRequiredLevel("none");
    lastName.setValue(Xrm.Page.getAttribute("department").getValue().toUpperCase());
}