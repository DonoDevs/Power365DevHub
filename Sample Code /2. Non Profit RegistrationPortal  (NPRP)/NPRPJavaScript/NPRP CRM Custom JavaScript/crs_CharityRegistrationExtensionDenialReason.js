ï»¿// Fetches Charity Registration Extension denial reason for given
// "Charity Registration extension Denial Reason Master" entity
function PopulateExtensionDenialReasonDetail() {

    var masterRecordLookupControl = Xrm.Page.getAttribute("crs_charregextdenmasterid"); //.getValue()[0].id
    var reasonDetailControl = Xrm.Page.getAttribute("crs_extensiondenialreasondetail");
    var reasonNameControl  = Xrm.Page.getAttribute("crs_name");// Added this field according to Bug - 78625

    if (masterRecordLookupControl != null &&
        masterRecordLookupControl.getValue() != null) {

        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            url: Xrm.Page.context.getClientUrl() + "/XRMServices/2011/OrganizationData.svc/crs_charityregistrationextdenialmasterSet(guid'" + masterRecordLookupControl.getValue()[0].id + "')?$select=crs_description",
            beforeSend: function (XMLHttpRequest) {
                XMLHttpRequest.setRequestHeader("Accept", "application/json");
            },
            async: false,
            success: function (data, textStatus, xhr) {
                var result = data.d;
                var crs_description = result.crs_description;
                reasonDetailControl.setValue(crs_description);
                reasonNameControl.setValue(masterRecordLookupControl.getValue()[0].name);
            },
            error: function (xhr, textStatus, errorThrown) {
                alert(textStatus + " " + errorThrown);
            }
        });
    }
    else {

        reasonDetailControl.setValue(null);
    }
}