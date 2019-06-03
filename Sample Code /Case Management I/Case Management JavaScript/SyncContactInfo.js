function OnSubjectChange2() {

    //  Is the Subject set?
    var contact = Xrm.Page.getAttribute("icm_contactid").getValue();

    if (contact != null) {
        var contactId = contact[0].id;
        retrieveMultiple("ContactSet", "?$filter=ContactId eq (guid'" + contactId + "')", DoContactFields, null);
    } else ClearContactData();
}
function ClearContactData() {

    //  No Contact Set, clear the data fields
    Xrm.Page.getAttribute("icm_firstname").setValue(null);
    Xrm.Page.getAttribute("icm_mi").setValue(null);
    Xrm.Page.getAttribute("icm_lastname").setValue(null);
    Xrm.Page.getAttribute("icm_phone").setValue(null);
    Xrm.Page.getAttribute("icm_email").setValue(null);
    Xrm.Page.getAttribute("icm_tin").setValue(null);

    //  Address
    Xrm.Page.getAttribute("icm_address1").setValue(null);
    Xrm.Page.getAttribute("icm_address2").setValue(null);
    Xrm.Page.getAttribute("icm_city").setValue(null);
    Xrm.Page.getAttribute("icm_state").setValue(null);
    Xrm.Page.getAttribute("icm_zip").setValue(null);
}
function DoContactFields(data, textStatus, XmlHttpRequest) {

    //  Get back the JSON Object
    var records = data;

    if (records.length > 0) {
        //  Contact Info
        Xrm.Page.getAttribute("icm_firstname").setValue(records[0].FirstName);
        Xrm.Page.getAttribute("icm_mi").setValue(records[0].MiddleName);
        Xrm.Page.getAttribute("icm_lastname").setValue(records[0].LastName);
        Xrm.Page.getAttribute("icm_phone").setValue(records[0].Telephone1);
        Xrm.Page.getAttribute("icm_email").setValue(records[0].EMailAddress1);
        Xrm.Page.getAttribute("icm_tin").setValue(records[0].icm_tin);

        //  Address
        Xrm.Page.getAttribute("icm_address1").setValue(records[0].Address1_Line1);
        Xrm.Page.getAttribute("icm_address2").setValue(records[0].Address1_Line2);
        Xrm.Page.getAttribute("icm_city").setValue(records[0].Address1_City);
        Xrm.Page.getAttribute("icm_state").setValue(records[0].Address1_StateOrProvince);
        Xrm.Page.getAttribute("icm_zip").setValue(records[0].Address1_PostalCode);

    }
}

function retrieveMultiple(odataSetName, filter, successCallback, errorCallback) {
    var context = Xrm.Page.context;
    var clientUrl = Xrm.Page.context.getClientUrl();

    var checker = clientUrl.substring(clientUrl.length - 1, clientUrl.length);
    if (checker == "/") {
        clientUrl = clientUrl.substring(0, clientUrl.length - 1);
    }
    var ODATA_ENDPOINT = "/XRMServices/2011/OrganizationData.svc";

    //odataSetName is required
    if (!odataSetName) {
        alert("odataSetName is required.");
        return;
    }

    //Build the URI
    var odataUri = clientUrl + ODATA_ENDPOINT + "/" + odataSetName;

    //If a filter is supplied, append it to the OData URI
    if (filter) {
        odataUri += filter;
    }
    //Asynchronous AJAX function to Retrieve CRM records using OData
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        url: odataUri,
        beforeSend: function (XMLHttpRequest) {
            //Specifying this header ensures that the results will be returned as JSON.             
            XMLHttpRequest.setRequestHeader("Accept", "application/json");
        },
        success: function (data, textStatus, XmlHttpRequest) {
            if (successCallback) {
                if (data && data.d && data.d.results) {
                    successCallback(data.d.results, textStatus, XmlHttpRequest);
                }
                else if (data && data.d) {
                    successCallback(data.d, textStatus, XmlHttpRequest);
                }
                else {
                    successCallback(data, textStatus, XmlHttpRequest);
                }
            }
        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            if (errorCallback)
                errorCallback(XmlHttpRequest, textStatus, errorThrown);
            else
                errorHandler(XmlHttpRequest, textStatus, errorThrown);
        }
    });
}
function errorHandler(xmlHttpRequest, textStatus, errorThrow) {
    alert("Unable to pull in Contact Information.");
}