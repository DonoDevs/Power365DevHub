// This function is added for Requirement No - 58818
function OnchangeSolicitationMethod() {
    if (Xrm.Page.getAttribute("crs_solicitationmethod").getValue() != null) {
        var SolicitationMethod = Xrm.Page.getAttribute("crs_solicitationmethod").getValue();
        if (SolicitationMethod[0].name == "Other") {
            Xrm.Page.getControl("crs_name").setVisible(true);
        }
        else {
            Xrm.Page.getAttribute("crs_name").setValue(null);
            Xrm.Page.getControl("crs_name").setVisible(false);
        }
    }
    else {
        Xrm.Page.getControl("crs_name").setVisible(false);
    }
}