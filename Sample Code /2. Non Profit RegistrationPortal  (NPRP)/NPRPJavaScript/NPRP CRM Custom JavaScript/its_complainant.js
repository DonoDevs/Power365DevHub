function OnLoad() {
    if (Xrm.Page.ui.getFormType() == 1) {
        Xrm.Page.getAttribute("its_name").setValue(" "); /* As this is required field, just setting it to blank with Length of 1.  This is being set as part of the Pre plugin. */
        PopulateFieldsFromComplaint();
    }
}

/*
If new complainant form is opened from complaint, this function populates complainant details from complaint.
*/
function PopulateFieldsFromComplaint() {
    var entityName = "";

    try {
        // As Complainant is created from so many places, just checking if this works.
        entityName = window.top.opener.Xrm.Page.data.entity.getEntityName();
    }
    catch (e) { }

    if (entityName == "its_complaint") {
        var page = window.top.opener.Xrm.Page;
        /*
        if (page.getAttribute("its_complainant_name") != null && page.getAttribute("its_complainant_name").getValue() != null) {
            var names = page.getAttribute("its_complainant_name").getValue().split(" ");
            
            //.split() method breaks it up
            //var name = "John L Doe"
            //result: John,L,Doe
            //where John[0]   L[1] Doe[2]
            

            if (names.length >= 1) {
                Xrm.Page.getAttribute("its_firstname").setValue(names[0]);
            }

            if (names.length >= 2) {
                Xrm.Page.getAttribute("crs_middlename").setValue(names[1]);
            }
            if(names.length >= 3){
                Xrm.Page.getAttribute("its_lastname").setValue(names[2]);
            }
        }
        */
        if (page.getAttribute("its_originalcomplainantfirstname") != null && page.getAttribute("its_originalcomplainantfirstname").getValue() != null) {
            var firstname = page.getAttribute("its_originalcomplainantfirstname").getValue()
            Xrm.Page.getAttribute("its_firstname").setValue(firstname);
        }
        if (page.getAttribute("its_originalcomplainantmiddlename") != null && page.getAttribute("its_originalcomplainantmiddlename").getValue() != null) {
            var middlename = page.getAttribute("its_originalcomplainantmiddlename").getValue()
            Xrm.Page.getAttribute("its_middlename").setValue(middlename);
        }
        if (page.getAttribute("its_originalcomplainantlastname") != null && page.getAttribute("its_originalcomplainantlastname").getValue() != null) {
            var lastname = page.getAttribute("its_originalcomplainantlastname").getValue()
            Xrm.Page.getAttribute("its_lastname").setValue(lastname);
        }
        Xrm.Page.getAttribute("its_addressline1").setValue(page.getAttribute("its_complainant_address").getValue());
        Xrm.Page.getAttribute("its_addressline2").setValue(page.getAttribute("its_addressline2").getValue());
        Xrm.Page.getAttribute("its_city").setValue(page.getAttribute("its_complainant_city").getValue());
        if (page.getAttribute("its_complainantstate") != null && page.getAttribute("its_complainantstate") != undefined) {
            Xrm.Page.getAttribute("its_state").setValue(page.getAttribute("its_complainantstate").getValue());
        }
        /*if (page.getAttribute("its_complainant_state") != null && page.getAttribute("its_complainant_state") != undefined) {
            Xrm.Page.getAttribute("crs_state").setValue(page.getAttribute("its_complainant_state").getValue());
        }*/
        Xrm.Page.getAttribute("its_country").setValue(page.getAttribute("its_complainant_country").getValue());
        Xrm.Page.getAttribute("its_zip").setValue(page.getAttribute("its_complainant_zipcode").getValue());
        Xrm.Page.getAttribute("emailaddress").setValue(page.getAttribute("its_complainant_emailaddress").getValue());
        Xrm.Page.getAttribute("its_homephone").setValue(page.getAttribute("its_complainant_hometelephonenumber").getValue());
        Xrm.Page.getAttribute("its_cellphone").setValue(page.getAttribute("its_complainant_workphonenumber").getValue());
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function OnLoad() {
    if (Xrm.Page.ui.getFormType() == 1) {
        Xrm.Page.getAttribute("its_name").setValue(" "); /* As this is required field, just setting it to blank with Length of 1.  This is being set as part of the Pre plugin. */
        PopulateFieldsFromComplaint();
    }
}

/*
If new complainant form is opened from complaint, this function populates complainant details from complaint.
*/
function PopulateFieldsFromComplaint() {
    var entityName = "";

    try {
        // As Complainant is created from so many places, just checking if this works.
        entityName = window.top.opener.Xrm.Page.data.entity.getEntityName();
    }
    catch (e) { }

    if (entityName == "its_complaint") {
        var page = window.top.opener.Xrm.Page;

        if (page.getAttribute("its_complainant_name") != null && page.getAttribute("its_complainant_name").getValue() != null) {
            var names = page.getAttribute("its_complainant_name").getValue().split(" ");

            if (names.length >= 1) {
                Xrm.Page.getAttribute("its_firstname").setValue(names[0]);
            }

            if (names.length >= 2) {
                Xrm.Page.getAttribute("its_lastname").setValue(names[1]);
            }
        }

        Xrm.Page.getAttribute("its_addressline1").setValue(page.getAttribute("its_complainant_address").getValue());
        Xrm.Page.getAttribute("its_addressline2").setValue(page.getAttribute("its_addressline2").getValue());
        Xrm.Page.getAttribute("its_city").setValue(page.getAttribute("its_complainant_city").getValue());

        /* DAVINS: Commented on 15-DEC-2016. The issue is that the Complainant State field on the Complaint form uses the global option set of its_usstates,
        whereas the State on the Complainant form uses the global option set of crs_state. The optionsets have different values for the corresponding states.
        The state can't be populated unless the issue is resolved and we only use one global option set (the existing crs_state) 
        if (page.getAttribute("its_complainant_state") != null && page.getAttribute("its_complainant_state") != undefined) {
            Xrm.Page.getAttribute("its_state").setValue(page.getAttribute("its_complainant_state").getValue());
        }
        */

        Xrm.Page.getAttribute("its_country").setValue(page.getAttribute("its_complainant_country").getValue());
        Xrm.Page.getAttribute("its_zip").setValue(page.getAttribute("its_complainant_zipcode").getValue());
        Xrm.Page.getAttribute("emailaddress").setValue(page.getAttribute("its_complainant_emailaddress").getValue());
        Xrm.Page.getAttribute("its_homephone").setValue(page.getAttribute("its_complainant_hometelephonenumber").getValue());
        Xrm.Page.getAttribute("its_cellphone").setValue(page.getAttribute("its_complainant_workphonenumber").getValue());
    }
}