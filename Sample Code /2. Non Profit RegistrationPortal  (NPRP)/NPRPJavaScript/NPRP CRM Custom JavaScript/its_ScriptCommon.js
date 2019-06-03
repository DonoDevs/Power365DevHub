var PHONE_NO_ERROR_MESSAGE = "Phone number doesn’t contains 10 digits.";
//OData service URL
var oDataServiceURL = "/XRMServices/2011/OrganizationData.svc";

/*
checks if user has any one of the given roles, pass comma seperated role names eg "rolename1,rolename2,rolename3"
not using role name contains ODATA query just to avoid situations were role names are like "role" and "role name"
*/
function HasRole(roleNames) {
    if (roleNames != null) {
        var names = roleNames.split(',');
        var currentUserRoles = Xrm.Page.context.getUserRoles();
        var userRoleName = "";
        for (var i = 0; i < currentUserRoles.length; i++) {
            var userRoleName = GetRoleName(currentUserRoles[i]);
            for (var j = 0; j < names.length; j++) {
                if (names[j] == userRoleName) {
                    return true;
                }
            }
        }
    }
    return false;
}

// This ODATA function is used to Retrieve the data from CRM
function RetrieveODataResults(oDataQuery) {
    // REST End point service URL
    var url = Xrm.Page.context.getClientUrl() + oDataServiceURL + "/";
    url += oDataQuery;
    console.log("its_Common.js_RetrieveODataResults() -> ODATA Query = " + url);

    // Get Windows XMLHTTP service request object
    var service = GetRequestObject();

    if (service != null) {
        try {
            service.open("GET", url, false);
            service.setRequestHeader("X-Requested-Width", "XMLHttpRequest");
            // Set the header properly to get JSON response
            service.setRequestHeader("Accept", "application/json, text/javascript, */*");
            service.send(null);
            if (service.responseText != null && service.responseText != "") {

                // Get the result from service
                var requestResults = eval('(' + service.responseText + ')').d;
                if (requestResults != null && requestResults.results != null && requestResults.results.length >= 1) {
                    return requestResults.results;
                }
            }
        }
        catch (e) {
            Xrm.Utility.alertDialog("Error occurred while processing please contact administrator !");
        }
    }
    return null;
}

// Get Windows XMLHTTP service request object
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

function ExecuteQuery(ODataQuery) {
    var clientUrl = Xrm.Page.context.getClientUrl();

    // Adjust URL for differences between on premise and online 
    if (clientUrl.match(/\/$/)) {
        clientUrl = clientUrl.substring(0, serverUrl.length - 1);
    }

    var ODataURL = clientUrl + "/XRMServices/2011/OrganizationData.svc" + ODataQuery;
    WriteToConsole("ExecuteQuery() -> ODataURL: " + ODataURL);
    var result = null;

    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        url: ODataURL,
        async: false,
        beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("Accept", "application/json");
        },
        success: function (data, textStatus, XmlHttpRequest) {
            WriteToConsole("ExecuteQuery() -> Success.");
            result = data.d.results;            
        },
        error: function (XmlHttpRequest, textStatus, errorObject) {
            WriteToConsole("ExecuteQuery() -> OData Execution Error Occurred");
        }
    });

    return result;
}

// Get User Name based on Role ID.
function GetRoleName(roleId) {
    var serverUrl = Xrm.Page.context.getClientUrl();
    var odataSelect = serverUrl + oDataServiceURL + "/" + "RoleSet?$filter=RoleId eq guid'" + roleId + "'";
    var roleName = null;
    $.ajax(
        {
            type: "GET",
            async: false,
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            url: odataSelect,
            beforeSend: function (XMLHttpRequest) { XMLHttpRequest.setRequestHeader("Accept", "application/json"); },
            success: function (data, textStatus, XmlHttpRequest) {
                roleName = data.d.results[0].Name;
            },
            error: function (XmlHttpRequest, textStatus, errorThrown) { Xrm.Utility.alertDialog('OData Select Failed: ' + textStatus + errorThrown + odataSelect); }
        }
    );
    return roleName;
}

/*
Formats phone US number 
*/
function FormatPhoneNumber(context) {
    var phoneField = context.getEventSource();
    var phoneValue = phoneField.getValue();

    // Removing all non-digit characters
    if (phoneValue != null && phoneValue.length > 0) {
        var phoneWithNumbersOnly = phoneValue.replace(/[^0-9]/g, "");

        if (phoneWithNumbersOnly.length == 10) {
            // Format the Mobile Phone No as (###) ###-####
            var phoneNumberFormatted = "(" + phoneWithNumbersOnly.substr(0, 3) + ") " + phoneWithNumbersOnly.substr(3, 3) + "-" + phoneWithNumbersOnly.substr(6, 4);
            phoneField.setValue(phoneNumberFormatted);
        }
        else {
            Xrm.Utility.alertDialog(PHONE_NO_ERROR_MESSAGE);
            phoneField.setValue(null);
        }
    }
}

/*
Saves form and reloads it
*/
function SaveAndRefreshForm() {
    Xrm.Page.data.save().then(function () {
        Xrm.Page.data.setFormDirty(false);
        var entityId = Xrm.Page.data.entity.getId();
        var entityName = Xrm.Page.data.entity.getEntityName();
        Xrm.Utility.openEntityForm(entityName, entityId);
    }, function () { });
}

/*
Generic Method for enable disable field
*/
function EnableDisableField(fieldArray, enabledisablestate) {
    if (fieldArray != "") {
        for (var i = 0; i < fieldArray.length; i++) {
            try {
                Xrm.Page.getControl(fieldArray[i]).setDisabled(enabledisablestate);
            } catch (e) {
                Xrm.Utility.alertDialog("Error occurred while processing please contact administrator !");
            }

        }
    }
}

/*
Seeting Requirement Level
*/
function SetFieldsRequirementLevel(fieldArray, requiredState) {
    if (fieldArray != "") {
        for (var i = 0; i < fieldArray.length; i++) {
            try {
                Xrm.Page.getAttribute(fieldArray[i]).setRequiredLevel(requiredState);
            } catch (e) {
                Xrm.Utility.alertDialog("Error occurred while processing please contact administrator !");
            }

        }
    }
}

function ToggleFieldsVisibility(fieldArray, isVisible) {
    if (fieldArray != "") {
        for (var i = 0; i < fieldArray.length; i++) {
            try {
                Xrm.Page.getControl(fieldArray[i]).setVisible(isVisible);                
            } catch (e) {
                WriteToConsole("its_Common.ToggleFieldsVisibility() -> Error: " + e.message + " for " + fieldArray[i]);
            }
        }
    }    
}

/*
Setting Submit Mode
always
never
dirty
*/
function SetSubmitMode(fieldArray, submitMode) {
    if (fieldArray != "") {
        for (var i = 0; i < fieldArray.length; i++) {
            try {
                Xrm.Page.getAttribute(fieldArray[i]).setSubmitMode(submitMode);
            } catch (e) {
                Xrm.Utility.alertDialog("Error occurred while processing please contact administrator !");
            }

        }
    }
}

// Changing Record Status

function changeRecordStatus(EntityName, EntityId, stateCode, statusCode) {

    // create the SetState request
    var request = "<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\">";
    request += "<s:Body>";
    request += "<Execute xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts/Services\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\">";
    request += "<request i:type=\"b:SetStateRequest\" xmlns:a=\"http://schemas.microsoft.com/xrm/2011/Contracts\" xmlns:b=\"http://schemas.microsoft.com/crm/2011/Contracts\">";
    request += "<a:Parameters xmlns:c=\"http://schemas.datacontract.org/2004/07/System.Collections.Generic\">";
    request += "<a:KeyValuePairOfstringanyType>";
    request += "<c:key>EntityMoniker</c:key>";
    request += "<c:value i:type=\"a:EntityReference\">";
    request += "<a:Id>" + EntityId + "</a:Id>";
    request += "<a:LogicalName>" + EntityName + "</a:LogicalName>";
    request += "<a:Name i:nil=\"true\" />";
    request += "</c:value>";
    request += "</a:KeyValuePairOfstringanyType>";
    request += "<a:KeyValuePairOfstringanyType>";
    request += "<c:key>State</c:key>";
    request += "<c:value i:type=\"a:OptionSetValue\">";
    request += "<a:Value>" + stateCode + "</a:Value>";
    request += "</c:value>";
    request += "</a:KeyValuePairOfstringanyType>";
    request += "<a:KeyValuePairOfstringanyType>";
    request += "<c:key>Status</c:key>";
    request += "<c:value i:type=\"a:OptionSetValue\">";
    request += "<a:Value>" + statusCode + "</a:Value>";
    request += "</c:value>";
    request += "</a:KeyValuePairOfstringanyType>";
    request += "</a:Parameters>";
    request += "<a:RequestId i:nil=\"true\" />";
    request += "<a:RequestName>SetState</a:RequestName>";
    request += "</request>";
    request += "</Execute>";
    request += "</s:Body>";
    request += "</s:Envelope>";

    //send set state request
    $.ajax({
        type: "POST",
        contentType: "text/xml; charset=utf-8",
        datatype: "xml",
        url: Xrm.Page.context.getClientUrl() + "/XRMServices/2011/Organization.svc/web",
        data: request,
        beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("Accept", "application/xml, text/xml, */*");
            XMLHttpRequest.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute");
        },
        success: function (data, textStatus, XmlHttpRequest) {
            //Xrm.Page.ui.close();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
}

/*
Returns value of required querystring parameter.
*/
function GetQSParam(paramName) {
    var regexS = "[\\?&]" + paramName + "=([^&#]*)",
regex = new RegExp(regexS),
results = regex.exec(window.location.search);
    if (results == null) {
        return "";
    } else {
        var value = decodeURIComponent(results[1].replace(/\+/g, " "));
        value = value.replace("{", "").replace("}", "");
        return value;
    }
}

/*
this function is called from bulk letter generation ribbon buttons from below entity grid
complaint
investigationfunction writeToConsole
post investigation
settlement
*/
function GenerateBulkLetters(selectedRecordReferences, entityName) {
    var recordIds = "";
    for (var i = 0; i < selectedRecordReferences.length; i++) {
        recordIds += selectedRecordReferences[i].Id + ",";
    }

    //Remove last ',' character
    recordIds = recordIds.substr(0, recordIds.length - 1);

    var url = Xrm.Page.context.getClientUrl() + "/WebResources/its_/Html/DocumentGenerationWebPage";
    var customParamsString = "entityName=" + entityName +
        "&ItemId=" + recordIds +
        "&crmURL=" + Xrm.Page.context.getClientUrl() +
        "&currentUserId=" + Xrm.Page.context.getUserId() +
        "&subjectId=" +
        "&recordType=" + Xrm.Page.context.getQueryStringParameters().etc;
    var customParameters = encodeURIComponent(customParamsString);
    Xrm.Utility.openWebResource("/its_/Html/DocumentGenerationWebPage", customParameters);
}

function WriteToConsole(message) {
    if (typeof console != 'undefined') {
        console.log(message);
    }
}

function IsNullOrEmpty(val) {
    return (val == null || val == undefined || val == "");
}