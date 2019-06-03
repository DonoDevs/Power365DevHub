function OnComplainantChange() {
    var contact = Xrm.Page.getAttribute("icm_complainantid").getValue();
    if (contact != null) {
        Xrm.Page.getControl("icm_confwaived").setVisible(true);
    } else {
        Xrm.Page.getControl("icm_confwaived").setVisible(false);
        Xrm.Page.getAttribute("icm_confwaived").setValue(false);
    }
}

function OnLoad() {

    //  Basic UX - If NOT CREATE FORM
    Xrm.Page.ui.clearFormNotification("ICM_TIGTA_CREATE")

    OnTypeLoad();
    OnComplainantChange();

    if (Xrm.Page.ui.getFormType() != 1) {
        //  Show the details tab and set the default Due Date

        Xrm.Page.getControl("icm_intaketype").setDisabled(true);
        Xrm.Page.getControl("icm_wfstatusid").setVisible(true);
    } else Xrm.Page.getAttribute("icm_receivedon").setValue(new Date());

    //  SharePoint and Docs
    var spUrl = Xrm.Page.getAttribute("icm_spurl").getValue();
    if (spUrl == null) {
        //  Hide the documents tab in the left nav
        Xrm.Page.ui.navigation.items.get("navDocument").setVisible(false);
        Xrm.Page.getControl("icm_spurl").setVisible(false);
    } else {
        // ensure it shows - CRM 2013 bug, if Visible By Default = false, must force it 
        Xrm.Page.getControl("icm_spurl").setVisible(true);
    }
}

function OnTypeChange() {
    var type = Xrm.Page.getAttribute("icm_intaketype").getValue();
    if (type == 100000000 || type == 100000002) { // COMPLAINT or Congressional
        Xrm.Page.getAttribute("icm_initiativeid").setRequiredLevel("none");
        Xrm.Page.getControl("icm_initiativeid").setVisible(false);
        Xrm.Page.getAttribute("icm_initiativeid").setValue(null);
    } else if (type == 100000001) { // LEAD
        Xrm.Page.getAttribute("icm_initiativeid").setRequiredLevel("required");
        Xrm.Page.getControl("icm_initiativeid").setVisible(true);
    }
}

function OnTypeLoad() {
    var type = Xrm.Page.getAttribute("icm_intaketype").getValue();
    if (type == 100000000 || type == 100000002) { // COMPLAINT or Congressional
        Xrm.Page.getAttribute("icm_initiativeid").setRequiredLevel("none");
        Xrm.Page.getControl("icm_initiativeid").setVisible(false);
    } else if (type == 100000001) { // LEAD
        Xrm.Page.getAttribute("icm_initiativeid").setRequiredLevel("required");
        Xrm.Page.getControl("icm_initiativeid").setVisible(true);
    }
    //  Always drop manual create for I - Case
    Xrm.Page.getControl("icm_intaketype").removeOption(100000003);
}

function OnSubjectChange() {
    var contact = Xrm.Page.getAttribute("icm_contactid").getValue();
    if (contact != null) {
        Xrm.Page.getAttribute("icm_title").setValue(contact[0].name);
    } else Xrm.Page.getAttribute("icm_title").setValue("");
}

function OnSourceSameChange() {
    var source = Xrm.Page.getAttribute("icm_sourceid").getValue();
    var same = Xrm.Page.getAttribute("icm_sourcesame").getValue();
    if (source != null && same) {
        Xrm.Page.getAttribute("icm_complainantid").setValue(source);
    } else if (source != null && !same) {
        Xrm.Page.getAttribute("icm_sourcesame").setValue(false);
    }
}

function OnSave() {
    //  Simple UX for the User
    if (Xrm.Page.ui.getFormType() == 1) {
        //  Create
        var tabs = Xrm.Page.ui.tabs.get();
        for (i in tabs) {
            tabs[i].setDisplayState("collapsed");
        }
        Xrm.Page.ui.setFormNotification("Creating Auto-Number and provisioning SharePoint folder...", "INFO", "ICM_TIGTA_CREATE");
    }
}