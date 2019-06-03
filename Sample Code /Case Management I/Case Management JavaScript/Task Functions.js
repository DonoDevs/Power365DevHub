function OnReferToChange() {
    var referPick = Xrm.Page.getAttribute("icm_referto").getValue();
    if (referPick != null && referPick == 100000000) {
        //  Show the Division, make it requires, and pop-up a Notification
        Xrm.Page.getControl("icm_divisionid").setVisible(true);
        Xrm.Page.getAttribute("icm_divisionid").setRequiredLevel("required");
        Xrm.Page.ui.setFormNotification("Click Mark Complete in the command bar above when you're finished.", "INFO", "ICM_TIGTA_REFER");
    } else if (referPick != null) {
        //  Hide the Division and show the Notification
        Xrm.Page.getControl("icm_divisionid").setVisible(false);
        Xrm.Page.getAttribute("icm_divisionid").setRequiredLevel("none");
        Xrm.Page.ui.setFormNotification("Click Mark Complete in the command bar above when you're finished.", "INFO", "ICM_TIGTA_REFER");
    } else if (referPick == null) {
        //  Remove the notification and hide the Division
        Xrm.Page.ui.clearFormNotification("ICM_TIGTA_REFER")
        Xrm.Page.getControl("icm_divisionid").setVisible(false);
        Xrm.Page.getAttribute("icm_divisionid").setRequiredLevel("none");
    }
}

function OnLoad() {

    //  Check Regarding
    var regarding = Xrm.Page.getAttribute("regardingobjectid").getValue();
    if (regarding != null) {
        var entityName = regarding[0].typename;

        if (entityName == "incident") {
            var referTo = Xrm.Page.getControl("icm_referto")
            var options = referTo.getAttribute().getOptions();
            referTo.clearOptions();
            referTo.addOption(options[4]);
            referTo.addOption(options[5]);
            referTo.addOption(options[6]);
            referTo.addOption(options[7]);
        } else if (entityName == "icm_intake") {
            var referTo = Xrm.Page.getControl("icm_referto")
            var options = referTo.getAttribute().getOptions();
            referTo.clearOptions();
            referTo.addOption(options[0]);
            referTo.addOption(options[1]);
            referTo.addOption(options[2]);
            referTo.addOption(options[3]);
        }
    }
    Xrm.Page.ui.clearFormNotification("ICM_TIGTA_REFER")
    if (Xrm.Page.getAttribute("icm_divisionid").getValue() != null) {
        Xrm.Page.getControl("icm_divisionid").setVisible(true);
    }
}