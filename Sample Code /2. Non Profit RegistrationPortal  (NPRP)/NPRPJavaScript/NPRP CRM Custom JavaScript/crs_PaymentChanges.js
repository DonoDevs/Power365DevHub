// helper function to get the query string
var paymentarray = new Array();
function Querystring() {
    var querystring = location.search.substring(1, location.search.length);
    var args = querystring.split('&');
    for (var i = 0; i < args.length; i++) {
        var pair = args[i].split('=');

        temp = unescape(pair[0]).split('+');

        name = temp.join(' ');
        temp = unescape(pair[1]).split('+');
        value = temp.join(' ');
        this[name] = value;
    }
    this.get = Querystring_get;

}

function Querystring_get(strKey, strDefault) {
    var value = this[strKey];
    if (value == null) {
        value = strDefault;
    }
    return value;
}

// Show Hide Controls on Load
function HideSubPaymentSubgrid() {
    
    if (Xrm.Page.ui.getFormType() == 1) {
        var qs = new Querystring();
        var idValue = qs.get("_CreateFromType", "");
        if (idValue == "") {
            idValue = qs.get("_gridType", "");
        }
        var etc = qs.get("etc", "");
        if (idValue == etc) {
            Xrm.Page.ui.tabs.get('SubPayments').setVisible(false);
            Xrm.Page.getControl('crs_splittheammount').setVisible(false);

        }
        if (idValue == "") {
            Xrm.Page.ui.tabs.get('SubPayments').setVisible(false);
            Xrm.Page.getControl('crs_splittheammount').setVisible(true);
        }
    }


    if (Xrm.Page.ui.getFormType() == 2 || Xrm.Page.ui.getFormType() == 3 || Xrm.Page.ui.getFormType() == 4) {
        Xrm.Page.getControl("crs_splittheammount").setDisabled(true);
        if (Xrm.Page.getAttribute("crs_splittheammount").getValue() == true) {
            Xrm.Page.ui.tabs.get('SubPayments').setVisible(true);
            Xrm.Page.getAttribute("crs_feetype").setRequiredLevel("none");
            Xrm.Page.ui.controls.get("crs_feetype").setVisible(false);
            Xrm.Page.ui.controls.get("crs_revenuetype").setVisible(false);

        }
    }
    

    if (Xrm.Page.getAttribute('crs_internalstatus').getValue() == 170960001) {

        Xrm.Page.ui.setFormNotification("This Payment record is in Draft mode and will not be shown in Fiscal Report.", "INFO", "3");
    }
    //170, 960, 001
}

// On Click of Check Split
function oncheckSplittheAmmount() {
    if (Xrm.Page.getAttribute("crs_splittheammount").getValue() == true) {
        Xrm.Page.ui.tabs.get('SubPayments').setVisible(true);
        Xrm.Page.getAttribute("crs_feetype").setRequiredLevel("none");
        Xrm.Page.ui.controls.get("crs_feetype").setVisible(false);
        Xrm.Page.ui.controls.get("crs_revenuetype").setVisible(false);

        Xrm.Page.getAttribute('crs_internalstatus').setValue(170960001);

        Xrm.Page.getControl("crs_splittheammount").setDisabled(true);
        Xrm.Page.getAttribute("crs_splittheammount").setSubmitMode("always");

        Xrm.Page.getAttribute("crs_processed").setValue(true);

        Xrm.Page.ui.setFormNotification("This Payment record is in Draft mode and will not be shown in Fiscal Report", "INFO", "3");
    }
    else {
        Xrm.Page.ui.tabs.get('SubPayments').setVisible(false);
        Xrm.Page.getAttribute("crs_feetype").setRequiredLevel("required");
        Xrm.Page.ui.controls.get("crs_feetype").setVisible(true);
        Xrm.Page.ui.controls.get("crs_revenuetype").setVisible(true);


        Xrm.Page.getAttribute('crs_internalstatus').setValue(170960000);

        Xrm.Page.ui.clearFormNotification("3");
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

//Validate Payment

function ValidatePayment() {
    //debugger;
    var Url = "crs_chequeSet?$select=crs_Amount,crs_chequeId&$filter=crs_PaymentId/Id eq guid'" + Xrm.Page.data.entity.getId() + "'";
    var PaymentData = GetoDataResponse(Url);
    paymentarray = PaymentData;
    var subtotalAmmount = 0;
    var total = Xrm.Page.getAttribute("crs_amount").getValue()
    if (PaymentData != null && PaymentData.results[0] != null && PaymentData.results.length > 0) {
        for (var i = 0; i < PaymentData.results.length; i++) {
            subtotalAmmount = subtotalAmmount + (PaymentData.results[i].crs_Amount != null ? parseFloat(PaymentData.results[i].crs_Amount.Value) : 0);
        }

    }
    if (total > subtotalAmmount) {
        Xrm.Utility.alertDialog("Detail less than check Amount.",
       function () {

       });

    }
    else if (total < subtotalAmmount) {
        Xrm.Utility.alertDialog("Detail more than check Amount.",
       function () {

       });
    }
    else if (total == subtotalAmmount) {

        Xrm.Utility.alertDialog("Detail matched Total Amount.",
        function () {

            //Validate Child record
            for (var i = 0; i < paymentarray.results.length; i++) {

                var PaymentUpdate = {};
                PaymentUpdate.crs_chequeId = paymentarray.results[i].crs_chequeId;
                PaymentUpdate.crs_InternalStatus = { Value: "170960000" };

                SDK.REST.updateRecord(
                PaymentUpdate.crs_chequeId,
                PaymentUpdate,
                "crs_cheque",
                function () {

                },
                function (ex) {

                }
                );
                //}


            }


            //Upsdate the Main record

            Xrm.Page.getAttribute('crs_internalstatus').setValue(170960000);
            Xrm.Page.ui.clearFormNotification("3");
            Xrm.Page.data.save();
        });
    }
    //170,960,000 approved-- crs_internalstatus
    //170,960,001  Draft--crs_internalstatus
}
function success() {
    Xrm.Utility.openEntityForm("crs_cheque", Xrm.Page.data.entity.getId());
    //alert("Success");
}
function Failure() {
    //alert("Failure");
}

function setStateRequest(_entityname, entityid, _state, _status, successCallback, errorCallback) {

    var requestMain = ""
    requestMain += "<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\">";
    requestMain += "  <s:Body>";
    requestMain += "    <Execute xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts/Services\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\">";
    requestMain += "      <request i:type=\"b:SetStateRequest\" xmlns:a=\"http://schemas.microsoft.com/xrm/2011/Contracts\" xmlns:b=\"http://schemas.microsoft.com/crm/2011/Contracts\">";
    requestMain += "        <a:Parameters xmlns:c=\"http://schemas.datacontract.org/2004/07/System.Collections.Generic\">";
    requestMain += "          <a:KeyValuePairOfstringanyType>";
    requestMain += "            <c:key>EntityMoniker</c:key>";
    requestMain += "            <c:value i:type=\"a:EntityReference\">";
    requestMain += "              <a:Id>" + entityid + "</a:Id>";
    requestMain += "              <a:LogicalName>" + _entityname + "</a:LogicalName>";
    requestMain += "              <a:Name i:nil=\"true\" />";
    requestMain += "            </c:value>";
    requestMain += "          </a:KeyValuePairOfstringanyType>";
    requestMain += "          <a:KeyValuePairOfstringanyType>";
    requestMain += "            <c:key>State</c:key>";
    requestMain += "            <c:value i:type=\"a:OptionSetValue\">";
    requestMain += "              <a:Value>" + _state + "</a:Value>";
    requestMain += "            </c:value>";
    requestMain += "          </a:KeyValuePairOfstringanyType>";
    requestMain += "          <a:KeyValuePairOfstringanyType>";
    requestMain += "            <c:key>Status</c:key>";
    requestMain += "            <c:value i:type=\"a:OptionSetValue\">";
    requestMain += "              <a:Value>" + _status + "</a:Value>";
    requestMain += "            </c:value>";
    requestMain += "          </a:KeyValuePairOfstringanyType>";
    requestMain += "        </a:Parameters>";
    requestMain += "        <a:RequestId i:nil=\"true\" />";
    requestMain += "        <a:RequestName>SetState</a:RequestName>";
    requestMain += "      </request>";
    requestMain += "    </Execute>";
    requestMain += "  </s:Body>";
    requestMain += "</s:Envelope>";
    var req = new XMLHttpRequest();
    req.open("POST", _getServerUrl(), false)
    // Responses will return XML. It isn't possible to return JSON.
    req.setRequestHeader("Accept", "application/xml, text/xml, */*");
    req.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
    req.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute");
    req.onreadystatechange = function () { setStateResponse(req, successCallback, errorCallback); };
    req.send(requestMain);
};

var setStateResponse = function (req, successCallback, errorCallback) {
    if (req.readyState == 4) {
        if (req.status == 200) {
            if (successCallback != null) {
                successCallback();
            }
        } else {
            errorCallback(getError(req.responseXML));
        }
    }
};
function _getServerUrl() {
    var OrgServicePath = "/XRMServices/2011/Organization.svc/web";
    var serverUrl = "";
    if (typeof GetGlobalContext == "function") {
        var context = GetGlobalContext();
        serverUrl = context.getClientUrl();
    }
    else {
        if (typeof Xrm.Page.context == "object") {
            serverUrl = Xrm.Page.context.getClientUrl();
        }
        else { throw new Error("Unable to access the server URL"); }
    }
    if (serverUrl.match(/\/$/)) {
        serverUrl = serverUrl.substring(0, serverUrl.length - 1);
    }
    return serverUrl + OrgServicePath;
}