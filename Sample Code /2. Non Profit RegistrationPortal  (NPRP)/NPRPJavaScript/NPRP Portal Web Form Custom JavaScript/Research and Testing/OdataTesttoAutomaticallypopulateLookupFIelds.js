function OnComplainantChange() {

    //  first, get the lookup
    //  One quick comment here - because this is a lookup IT SHOULD BE names with id at the end
    var compRef = Xrm.Page.getAttribute("its_complainant").getValue();
    if (compRef != null) {

        //  get the Record and pull in some data
        var compRefId = compRef[0].id; // GUID
        GetRecordData(compRefId);
    }
}

function GetRecordData(recordId) {

    //  Pull JQuery from Parent << CRM's Product Form is the Parent now since we are using Turbo Forms
    //  it wasn't like this in 2013 (TIGTA) and we had to use our own Jquery Library
    if (typeof ($) === 'undefined') {
        $ = parent.$;
        jQuery = parent.jQuery;
    }

    //  Build an OData EndPoint
    var clientUrl = Xrm.Page.context.getClientUrl(); // base URI that holds your customer's OrgName/DNS
    var ODATA_ENDPOINT = "/XRMServices/2011/OrganizationData.svc"; // OrgData EndPoint

    //  Specific the filter and the select statement (limit the select statement to increase performance, aka don't pull all fields)
    var selectQuery = "/its_complainantSet?$filter=its_complainantId eq guid'" + recordId + "'&$select=its_firstname, crs_middlename, its_lastname";
    var odataSelect = clientUrl + ODATA_ENDPOINT + selectQuery;
    //^^ if we are trying to grab the fields on the complaint entity and set those values on the lookup shouldnt it be flipped?
    //Do you get what I'm saying? Should we not be querying the complaint entity first? and then setting the values on the complainant?
    //  Pull JQuery from Parent if it's blank
    if (typeof ($) === 'undefined') {
        $ = parent.$;
        jQuery = parent.jQuery;
    }

    //  for debug
    Xrm.Utility.alertDialog(odataSelect); // this will show us the full URL and it should resolve in IE/Browser

    $.ajax({
        type: "GET",
        async: false,
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        url: odataSelect,
        beforeSend: function (XMLHttpRequest) { XMLHttpRequest.setRequestHeader("Accept", "application/json"); },
        success: function (data, textStatus, XmlHttpRequest) {
            var result = data.d;
            if (!!result) {
                if (result.results.length > 0) {
                    var firstName = result.results[0].its_firstname;
                    var midName = result.results[0].crs_middlename;
                    var lastName = result.results[0].its_lastname;

                    //  Set the values on the form
                    Xrm.Page.getAttribute("crs_originalcomplainantfirstname").setValue(firstName);
                    Xrm.Page.getAttribute("crs_originalcomplainantmiddlename").setValue(midName);
                    Xrm.Page.getAttribute("crs_originalcomplainantLastname").setValue(lastName);

                }
            }
        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            Xrm.Utility.alertDialog("Problem checking Subject for User Profile.");
        }
    });
}