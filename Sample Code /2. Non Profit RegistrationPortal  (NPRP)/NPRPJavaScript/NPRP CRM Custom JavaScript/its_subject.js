function SubjectOnLoad() {
    if (Xrm.Page.ui.getFormType() == 1) {
        PopulateFieldsFromComplaint();
    }    
}

function PopulateFieldsFromComplaint() {
    var entityName = "";

    try
    {
        // As Subject is created from so many places, just checking if this works.
        entityName = window.top.opener.Xrm.Page.data.entity.getEntityName();
    }
    catch(e) {}

    if (entityName == "its_complaint") {
        var page = window.top.opener.Xrm.Page;

        Xrm.Page.getAttribute("its_name").setValue(page.getAttribute("its_subject_business").getValue());
        Xrm.Page.getAttribute("its_addressline1").setValue(page.getAttribute("its_business_address").getValue());
        Xrm.Page.getAttribute("its_addressline2").setValue(page.getAttribute("its_business_addressline2").getValue());
        Xrm.Page.getAttribute("its_city").setValue(page.getAttribute("its_business_city").getValue());
        if (page.getAttribute("its_businessstate") != null && page.getAttribute("its_businessstate") != undefined) {
            Xrm.Page.getAttribute("its_state").setValue(page.getAttribute("its_businessstate").getValue());
        }
        Xrm.Page.getAttribute("its_country").setValue(page.getAttribute("its_business_country").getValue());
        Xrm.Page.getAttribute("its_zip").setValue(page.getAttribute("its_business_zipcode").getValue());
        Xrm.Page.getAttribute("its_email").setValue(page.getAttribute("its_business_email").getValue());
        Xrm.Page.getAttribute("its_telephonenumber1").setValue(page.getAttribute("its_business_telephonenumber").getValue());
        Xrm.Page.getAttribute("its_telephonenumber2").setValue(page.getAttribute("its_business_telephonenumber2").getValue());

        Xrm.Page.getAttribute("its_registrationlicenseno").setValue(page.getAttribute("its_business_registrationlicenseno").getValue());
    }
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function SubjectOnLoad() {
    if (Xrm.Page.ui.getFormType() == 1) {
        PopulateFieldsFromComplaint();
    }    
}

function PopulateFieldsFromComplaint() {
    var entityName = "";

    try
    {
        // As Subject is created from so many places, just checking if this works.
        entityName = window.top.opener.Xrm.Page.data.entity.getEntityName();
    }
    catch(e) {}

    if (entityName == "its_complaint") {
        var page = window.top.opener.Xrm.Page;

        Xrm.Page.getAttribute("its_name").setValue(page.getAttribute("its_subject_business").getValue());
        Xrm.Page.getAttribute("its_addressline1").setValue(page.getAttribute("its_business_address").getValue());
        Xrm.Page.getAttribute("its_addressline2").setValue(page.getAttribute("its_business_addressline2").getValue());
        Xrm.Page.getAttribute("its_city").setValue(page.getAttribute("its_business_city").getValue());

        /* DAVINS: Commented on 15-DEC-2016. The issue is that the Business/Subject State field on the Complaint form uses the global option set of its_usstates,
        whereas the State on the Subject form uses the global option set of crs_state. The optionsets have different values for the corresponding states.
        The state can't be populated unless the issue is resolved and we only use one global option set (the existing crs_state)
        if (page.getAttribute("its_business_state") != null && page.getAttribute("its_business_state") != undefined) {
            Xrm.Page.getAttribute("its_state").setValue(page.getAttribute("its_business_state").getValue());
        }
        */

        Xrm.Page.getAttribute("its_country").setValue(page.getAttribute("its_business_country").getValue());
        Xrm.Page.getAttribute("its_zip").setValue(page.getAttribute("its_business_zipcode").getValue());
        Xrm.Page.getAttribute("its_email").setValue(page.getAttribute("its_business_email").getValue());
        Xrm.Page.getAttribute("its_telephonenumber1").setValue(page.getAttribute("its_business_telephonenumber").getValue());
        Xrm.Page.getAttribute("its_telephonenumber2").setValue(page.getAttribute("its_business_telephonenumber2").getValue());

        Xrm.Page.getAttribute("its_registrationlicenseno").setValue(page.getAttribute("its_business_registrationlicenseno").getValue());
    }
}