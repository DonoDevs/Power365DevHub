function OnAllegationChange() {

    //  Basic UX - If NOT CREATE FORM
    var allegation = Xrm.Page.getAttribute("icm_allegationid").getValue();
    if (allegation != null) {
        // set the Name field
        Xrm.Page.getAttribute("icm_name").setValue(allegation[0].name);
    }
}

function OnLoad() {
    if (Xrm.Page.ui.getFormType() == 1) {
        //  Hide the Intake relationship (1:N)
        Xrm.Page.getControl("icm_intakeid").setVisible(false);
        //  Make NOT REQUIRED
        Xrm.Page.getAttribute("icm_intakeid").setRequiredLevel("none");
    }

    //  if the Intake is NULL that means this is coming from Primary.
    if (Xrm.Page.getAttribute("icm_intakeid").getValue() == null) {
        Xrm.Page.getAttribute("icm_primary").setValue(true);
    }
}