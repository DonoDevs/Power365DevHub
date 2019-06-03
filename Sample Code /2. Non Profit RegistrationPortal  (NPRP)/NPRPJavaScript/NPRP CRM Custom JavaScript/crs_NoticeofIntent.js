// This function is added for Requirement No - 58818 is that the fee due field will be defaulted to $10.00 and made read only.
// Set Default value for filling fee in Notice of Intent 
var NoticeofIntentfillingAmount = 10;
function SetDefaultfillingfeeValue() {
    if (Xrm.Page.ui.getFormType() == 1) {
        var fillfeecontrol = Xrm.Page.getControl("crs_filingfee");
        if (fillfeecontrol != null && fillfeecontrol != undefined) {
            Xrm.Page.getAttribute("crs_filingfee").setValue(NoticeofIntentfillingAmount);
            Xrm.Page.getAttribute("crs_filingfee").setSubmitMode("always");
            Xrm.Page.ui.controls.get("crs_filingfee").setDisabled(true);
        }
    }
}