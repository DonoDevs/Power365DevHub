//Onload method for entity form
function OnLoad() {
    defaultTypeofEvent();
    onChangeofTypeofEventCharitySR1Sr2();
    PopulateCharityLookup();
}

function OnSave() {
    onSaveofCharitySR1andSR2();
    SetPortalRegistrationStatus();
}

/*
Populates chrity lookup value from associated contract.
*/
function PopulateCharityLookup() {
    var contract = Xrm.Page.getAttribute("crs_pfrcontractid").getValue();
    if (contract != null) {
        var Url = "crs_pfrcontractSet?$select=crs_CharityName&$filter=crs_pfrcontractId eq guid'" + contract[0].id + "'";
        var contractData = GetoDataResponse(Url);
        if (contractData != null && contractData.results[0] != null && contractData.results.length > 0) {
            if (contractData.results[0].crs_CharityName != null) {
                var campaignCharity = Xrm.Page.getAttribute("crs_charity").getValue();
                if (campaignCharity != null) {
                    campaignCharity = campaignCharity[0].id;
                    campaignCharity = campaignCharity.replace("{", "").replace("}", "");
                }

                if ((campaignCharity == null) || (contractData.results[0].crs_CharityName.Id.toLowerCase() != campaignCharity.toLowerCase())) {
                    var lookupReference = [];
                    lookupReference[0] = {};
                    lookupReference[0].id = contractData.results[0].crs_CharityName.Id;;
                    lookupReference[0].entityType = "account";
                    Xrm.Page.getAttribute("crs_charity").setValue(lookupReference);
                    Xrm.Page.data.entity.save();
                }
            }
        }
    }
}

function GetRequestObject() {
    if (window.XMLHttpRequest) {
        return new window.XMLHttpRequest;
    }
    else {
        try {
            return new ActiveXObject("MSXML2.XMLHTTP.3.0");
        }
        catch (ex) {
            return null;
        }
    }
}


function GetoDataResponse(Input) {
    var serverUrl = Xrm.Page.context.getClientUrl();//Xrm.Page.context.getClientUrl();

    var oDataEndpointUrl = serverUrl + "/XRMServices/2011/OrganizationData.svc/";
    oDataEndpointUrl += Input;
    var service = GetRequestObject();

    if (service != null) {
        service.open("GET", oDataEndpointUrl, false);
        service.setRequestHeader("X-Requested-Width", "XMLHttpRequest");
        service.setRequestHeader("Accept", "application/json, text/javascript, */*");
        service.send(null);

        return eval('(' + service.responseText + ')').d;
    }
}

// This function is added for Requirement No - 58820
function onChangeofTypeofEventCharitySR1Sr2() {
   
    if (Xrm.Page.getAttribute("crs_type").getValue() != null) {
        if (Xrm.Page.getAttribute("crs_type").getValue() == 170960000) {

            Xrm.Page.ui.tabs.get("SR1").setVisible(true);
            Xrm.Page.ui.tabs.get("SR2").setVisible(false);
        }
        else {
            Xrm.Page.ui.tabs.get("SR2").setVisible(true);
            Xrm.Page.ui.tabs.get("SR1").setVisible(false);
        }
    }
}
// This function is added for Requirement No - 58820
function onSaveofCharitySR1andSR2() {
    if (Xrm.Page.getAttribute("crs_type").getValue() != null) {
        if (Xrm.Page.getAttribute("crs_type").getValue() == 170960000) {
            var totalexpensesfees = Xrm.Page.getAttribute("crs_professionalfundraisercompensation").getValue() + Xrm.Page.getAttribute("crs_officemanagersfee").getValue() + Xrm.Page.getAttribute("crs_weeklypayroll").getValue() + Xrm.Page.getAttribute("crs_promotionalfees").getValue() + Xrm.Page.getAttribute("crs_other").getValue();
            Xrm.Page.getAttribute("crs_totalexpensesfees").setValue(totalexpensesfees);
            Xrm.Page.getAttribute("crs_totalexpensesfees").setSubmitMode("always");

            var totalexpenses = Xrm.Page.getAttribute("crs_advertisingemployment").getValue() + Xrm.Page.getAttribute("crs_collectionfees").getValue() + Xrm.Page.getAttribute("crs_furnitureandequipment").getValue() + Xrm.Page.getAttribute("crs_officeexpenses").getValue() + Xrm.Page.getAttribute("crs_postage").getValue() + Xrm.Page.getAttribute("crs_listrental").getValue() + Xrm.Page.getAttribute("crs_officerental").getValue() + Xrm.Page.getAttribute("crs_printing").getValue() + Xrm.Page.getAttribute("crs_telephone").getValue() + Xrm.Page.getAttribute("crs_utilities").getValue() + Xrm.Page.getAttribute("crs_otherexpensesfees").getValue();
            Xrm.Page.getAttribute("crs_expensestotal").setValue(totalexpenses);
            Xrm.Page.getAttribute("crs_expensestotal").setSubmitMode("always");

            var totalexpensesdirect = Xrm.Page.getAttribute("crs_auditoriumrental").getValue() + Xrm.Page.getAttribute("crs_bookingfeeproducersfee").getValue() + Xrm.Page.getAttribute("crs_printingticketsprogrambook").getValue() + Xrm.Page.getAttribute("crs_eventinsurance").getValue() + Xrm.Page.getAttribute("crs_policeandfireprotection").getValue() + Xrm.Page.getAttribute("crs_showfee").getValue() + Xrm.Page.getAttribute("crs_entertainmenttaxes").getValue() + Xrm.Page.getAttribute("crs_otherdirectexpenses").getValue();
            Xrm.Page.getAttribute("crs_totalexpensesdirectevent").setValue(totalexpensesdirect);
            Xrm.Page.getAttribute("crs_totalexpensesdirectevent").setSubmitMode("always");
            Xrm.Page.getAttribute("crs_totalexpenses").setValue(totalexpensesfees + totalexpenses + totalexpensesdirect);
            Xrm.Page.getAttribute("crs_totalexpenses").setSubmitMode("always");
        }
    }
}
// Below function is to default "Type of Event" field to SR-1
function defaultTypeofEvent() {
    var formType = Xrm.Page.ui.getFormType();
    if (formType == 1) {
        Xrm.Page.getAttribute("crs_type").setValue(170960000);
        Xrm.Page.getAttribute("crs_type").setSubmitMode("always");
        // Fixed the Bug - 78622 to close the opened dropdown of optionset after setting a default value
        Xrm.Page.ui.controls.get("actualstart").setFocus();
    }
}