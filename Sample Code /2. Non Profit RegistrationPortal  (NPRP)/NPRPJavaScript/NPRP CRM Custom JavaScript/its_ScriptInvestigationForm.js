var investigationunitOCP = 960760000;
var investigationunitBureauofSecurity = 960760001;
var investigationunitLegalizedGames = 960760002;
var investigationunitLemonLaw = 960760003;
var investigationunitWeightMeasures = 960760004;
var statusClosed = 100000003;
var formTypeUpdate = 2;
var formTypeCreate = 1;
var securityRoleSupervisor = "CTS Reviewer Supervisor";
var securityRoleInvestigatorSupervisor = "CTS Investigator Supervisor";
var securityRoleInvestigator = "CTS Investigator";
var securityRoleReviewer = "CTS Reviewer";
var dispositionMessage = "A Disposition should be associated to this Investigation";

//  This function is added for Requirement No -- 85966
// Enable and Disable Subject based on Selected Unit Department.
function InvestigationUnitOnChange() {
    var investigationUnit = Xrm.Page.getAttribute("its_unitdepartment");
    Xrm.Page.ui.tabs.get("tab_bos").setVisible(investigationUnit != null && investigationUnit.getValue() == investigationunitBureauofSecurity);
    Xrm.Page.ui.tabs.get("tab_lgcc").setVisible(investigationUnit != null && investigationUnit.getValue() == investigationunitLegalizedGames);

    if (Xrm.Page.ui.getFormType() == formTypeCreate) {
        Xrm.Page.getControl("its_subjectid").setVisible(true);
        Xrm.Page.ui.tabs.get("Subject").setVisible(false);
        Xrm.Page.getAttribute("its_subjectid").setRequiredLevel("required");
    }
    else {
        if (investigationUnit != null && investigationUnit.getValue() != null) {
            if (investigationUnit.getValue() == investigationunitBureauofSecurity) {
                Xrm.Page.getControl("its_subjectid").setVisible(false);
                Xrm.Page.ui.tabs.get("Subject").setVisible(true);
                Xrm.Page.getAttribute("its_subjectid").setRequiredLevel("none");

                /* TODO: Set the fields [its_bos_complaintsummary] and [its_bos_fundsdrawnfrom] required if BOS Complaint */
            }
            else {
                Xrm.Page.getControl("its_subjectid").setVisible(true);
                Xrm.Page.ui.tabs.get("Subject").setVisible(false);
                Xrm.Page.getAttribute("its_subjectid").setRequiredLevel("required");

                /* TODO: Set the fields [its_bos_complaintsummary] and [its_bos_fundsdrawnfrom] optional, if non-BOS Complaint */
            }
        }        
    }
}



//  This function is added for Requirement No -- 85966
// Set Custom lookup view for "Supervisor" Lookup field and get user's Business unit 
function SetInvestigatorLookUpView() {
    try {        
        var fetchXml;
        var businessUnitName;
        var investigationunit = Xrm.Page.getAttribute("its_unitdepartment");
        if (investigationunit != null && investigationunit.getValue() != null) {
            var oData = "BusinessUnitSet?$select=BusinessUnitId&$filter=its_complaintuusinessunit/Value eq " + investigationunit.getValue() + "";
            var results = RetrieveODataResults(oData);

            var filterXml = "<filter type='or'>";
            for (var i = 0; i < results.length; i++)
            {
                filterXml = filterXml + "<condition attribute='businessunitid' operator='eq' value='{" + results[i].BusinessUnitId + "}' />";
            }
            filterXml = filterXml + "</filter>";
                        
            var layoutXml = "<grid name='resultset' object='8' jump='fullname' select='1' preview='0' icon='1'>" +
                            "<row name='result' id='systemuserid'>" +
                            "<cell name='fullname' width='300' />" +
                            "<cell name='positionid' width='100' />" +
                            "<cell name='address1_telephone1' width='100' />" +
                            "<cell name='businessunitid' width='150' />" +
                            "<cell name='siteid' width='150' />" +
                            "<cell name='title' width='100' />" +
                            "<cell name='internalemailaddress' width='200' />" +
                            "<cell name='address1_fax' ishidden='1' width='100' />" +
                            "</row>" +
                            "</grid>";
            var viewId = Xrm.Page.getControl("its_investigator").getDefaultView();
            var entityName = "systemuser";
            // give the custom view a name      
            var viewDisplayName = "investigator Veiw";
            fetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>" +
                        "<entity name='systemuser'>" +
                        "<attribute name='fullname' />" +
                        "<attribute name='businessunitid' />" +
                        "<attribute name='positionid' />" +
                        "<attribute name='address1_telephone1' />" +
                        "<attribute name='siteid' />" +
                        "<attribute name='businessunitid' />" +
                        "<attribute name='title' />" +
                        "<attribute name='address1_fax' />" +
                        "<attribute name='systemuserid' />" +
                        "<attribute name='internalemailaddress' />" +

                        filterXml +

                        "<link-entity name='systemuserroles' from='systemuserid' to='systemuserid' visible='false' intersect='true'>" +
                          "<link-entity name='role' from='roleid' to='roleid' alias='ag'>" +
                            "<filter type='and'>" +
                              "<condition attribute='name' operator='eq' value='"+ securityRoleInvestigator +"' />" +
                            "</filter>" +
                          "</link-entity>" +
                        "</link-entity>" +
                      "</entity>" +
                    "</fetch>";
            // set created Custom view to "Supervisor" Lookup field 
            Xrm.Page.getControl("its_investigator").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
            Xrm.Page.getControl("its_investigator").setDefaultView(viewId);
        }
    }
    catch (e) {
        Xrm.Utility.alertDialog("Error occurred while processing please contact administrator !");
    }
}

// This Function will make the form read only when status reason is closed
function ReadOnly() {
    var statusReason = Xrm.Page.getControl("header_statuscode").getAttribute().getValue();
    //Xrm.Page.getAttribute("header_statuscode").getValue();
    if (statusReason == statusClosed) {
        // get form Controls
        var allAttributes = Xrm.Page.data.entity.attributes.get();
        for (var i in allAttributes) {
            var myattribute = Xrm.Page.data.entity.attributes.get(allAttributes[i].getName());
            if (myattribute != null) {
                var myname = myattribute.getName();
                var control = Xrm.Page.getControl(myname);
                if (control != null) {
                    control.setDisabled(true);
                }
            }
        }
    }
}

// This Function is Written Enable , Disable Investigator Lookup based on current login user Securiry Role. 
function SetReviewer() {
    // If form Type is Update Mode
    if (Xrm.Page.ui.getFormType() == 2) {
        var securityrole = CheckUserRole();
        // if Login User having "Supervisor" Role , enable "investigator" and make Madatory 
        if (securityrole == securityRoleSupervisor) {
            Xrm.Page.getAttribute("its_investigator").setRequiredLevel("required");
            Xrm.Page.getControl("its_investigator").setDisabled(false);
        }
            // if Login User having "Reviewer" Role , Disable "investigator" and remove Madatory 
        else if (securityrole == securityRoleReviewer) {
            Xrm.Page.getAttribute("its_investigator").setRequiredLevel("none");
            Xrm.Page.getControl("its_investigator").setDisabled(true);
        }
        else {
            Xrm.Page.getAttribute("its_investigator").setRequiredLevel("none");
            Xrm.Page.getControl("its_investigator").setDisabled(true);
        }
    }
}

function IsLoggedInUserAnInvestigator() {
    var isUserInvestigator = false;

    var user = Xrm.Page.context.getUserId();
    var currentUserRoles = Xrm.Page.context.getUserRoles();
    for (var i = 0; i < currentUserRoles.length; i++) {
        var userRoleId = currentUserRoles[i];
        var userRoleName = GetRoleName(userRoleId);
        if (userRoleName == securityRoleInvestigator) {
            isUserInvestigator = true;
            break;
        }
    }

    return isUserInvestigator;
}

// This function is written to Check login user Roles.
function CheckUserRole() {

    var user = Xrm.Page.context.getUserId();
    var currentUserRoles = Xrm.Page.context.getUserRoles();
    for (var i = 0; i < currentUserRoles.length; i++) {
        var userRoleId = currentUserRoles[i];
        var userRoleName = GetRoleName(userRoleId);
        if (userRoleName == securityRoleSupervisor || userRoleName == securityRoleReviewer) {
            return userRoleName;
        }
    }
    return false;
}

// This function will hide status field  based on logged in user Roles.
function GetLoggedInUser() {
    var user = Xrm.Page.context.getUserId();
    var currentUserRoles = Xrm.Page.context.getUserRoles();
    for (var i = 0; i < currentUserRoles.length; i++) {
        var userRoleId = currentUserRoles[i];
        var userRoleName = GetRoleName(userRoleId);
        if (userRoleName == securityRoleInvestigator || userRoleName == securityRoleInvestigatorSupervisor || userRoleName == "System Administrator") {
            return true;
        }

    }
}

// this function will hide the satus field based on logged in user role
function HideStatus() {
    var HasRoles = GetLoggedInUser();
    if (HasRoles == true) {
        Xrm.Page.getControl("header_statuscode").setVisible(true);
    }
    else {
        Xrm.Page.getControl("header_statuscode").setVisible(false);
    }
}

// This function is written to get Login User Security Role names 
function GetRoleName(roleId) {
    var serverUrl = Xrm.Page.context.getClientUrl();
    var odataSelect = serverUrl + "/xrmservices/2011/OrganizationData.svc" + "/" + "RoleSet?$filter=RoleId eq guid'" + roleId + "'";
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


//This function will refresh the form once the data is saved
function ReloadFormAfterSave() {
    var statusReason = Xrm.Page.getControl("header_statuscode").getAttribute().getValue();
    //Xrm.Page.getAttribute("header_statuscode").getValue();
    if (statusReason == statusClosed) {
        setTimeout(function () {
            Xrm.Utility.openEntityForm(Xrm.Page.data.entity.getEntityName(), Xrm.Page.data.entity.getId());
        }, 500);
    }
}

// Add Subject filter Lookup
function AddSubjectFilter() {
    Xrm.Page.getControl("its_subjectid").addPreSearch(function () {
        var filter = "<filter type='and'>" +
                   "<condition attribute='its_verified' operator='eq' value='1'/>" +
                    "</filter>";


        Xrm.Page.getControl("its_subjectid").addCustomFilter(filter);
    });
}

// Add Complainant filter Lookup
function AddComplainantFilter() {
    if (Xrm.Page.getControl("its_complainantid") == null) {
        return;
    }

    Xrm.Page.getControl("its_complainantid").addPreSearch(function () {
        var filter = "<filter type='and'>" +
               "<condition attribute='its_verified' operator='eq' value='1'/>" +
                "</filter>";

        Xrm.Page.getControl("its_complainantid").addCustomFilter(filter);
    });
}



// Setting BU Onload of Investigation Form
function SetBUOnload() {
    WriteToConsole("SetBUOnLoad() -> Entered ");
    if (Xrm.Page.ui.getFormType() == formTypeCreate) {
        var loginuserId = Xrm.Page.context.getUserId();
        WriteToConsole("SetBUOnLoad() -> [loginuserid] = " + loginuserId);

        var odataQuery = "/SystemUserSet?$select=business_unit_system_users/its_complaintuusinessunit&$expand=business_unit_system_users&$filter=SystemUserId eq guid'" + loginuserId + "'";
        var businessUnit = RetrieveODataResults(odataQuery);
        WriteToConsole("SetBUOnLoad() -> Business Unit Retrieved.");

        if (businessUnit != null && businessUnit[0].business_unit_system_users.its_complaintuusinessunit != null && businessUnit[0].business_unit_system_users.its_complaintuusinessunit.Value != null) {
            var businessUnitComplaintUnit = businessUnit[0].business_unit_system_users.its_complaintuusinessunit.Value
            Xrm.Page.getAttribute("its_unitdepartment").setValue(businessUnitComplaintUnit);
            Xrm.Page.getAttribute("its_unitdepartment").setSubmitMode("always");
        }
    }
}

function OnLoad() {    
debugger;
    SetBUOnload();
    InvestigationUnitOnChange();
    
    // Only set the logged in user during the Create Mode.
    if (Xrm.Page.ui.getFormType() == formTypeCreate && IsLoggedInUserAnInvestigator()) {
        Xrm.Page.getAttribute("its_investigator").setValue([{
            id: Xrm.Page.context.getUserId(),
            name: Xrm.Page.context.getUserName(),
            entityType: "systemuser"
        }]);

        Xrm.Page.getControl("its_investigator").setDisabled(true);
    }
    else {
        SetInvestigatorLookUpView();
    }

    //SetReviewer();
    ReadOnly();
    HideStatus();
    AddSubjectFilter();
    AddComplainantFilter();
}

/*
Called from Form save event.
*/
function OnSave(execObj) {
    //ReloadFormAfterSave();    
    CheckForDisposition(execObj);
}

/*
Checks if Investigation has dispositions associated or not.
*/
function CheckForDisposition(execObj) {
    var statusReason = Xrm.Page.getControl("header_statuscode").getAttribute().getValue();
    if (statusReason == statusClosed) {
        var investigationId = Xrm.Page.data.entity.getId();
        investigationId = investigationId.replace('{', '');
        investigationId = investigationId.replace('}', '');
        var url = "its_dispositionSet?$select=its_InvestigationId&$filter=its_InvestigationId/Id eq guid'" + investigationId + "'";
        var dispositions = RetrieveODataResults(url);

        if (dispositions == null || dispositions.length == 0) {
            Xrm.Utility.alertDialog(dispositionMessage);
            // Prevent save 
            execObj.getEventArgs().preventDefault();
            return;
        }
    }
}

function OnClickLetterRibbonButton() {   
    var url = Xrm.Page.context.getClientUrl() + "/WebResources/its_/Html/DocumentGenerationWebPage";
    var subjectId = "";
    var complainantId = "";

    var subjectControl = Xrm.Page.getAttribute("its_subjectid");
    if (subjectControl != null && subjectControl.getValue() != null) {
        subjectId = subjectControl.getValue()[0].id;
    }

    var complainantControl = Xrm.Page.getAttribute("its_complainantid");
    if (complainantControl != null && complainantControl.getValue() != null) {
        complainantId = complainantControl.getValue()[0].id;
    }

    var investigationUnit = Xrm.Page.getAttribute("its_unitdepartment");
    if (investigationUnit != null && investigationUnit.getValue() != null) {
        // As Letters could be sent either to the Subject OR Complainant, grabbing them off the form and passing, so that don't need to retrieve the same from the HTML web resource. */
        var customParamsString = "entityName=" + Xrm.Page.data.entity.getEntityName() +
                            "&entityId=" + Xrm.Page.data.entity.getId() +
                            "&entityTypeCode=" + Xrm.Page.context.getQueryStringParameters().etc +
                            "&subjectId=" + subjectId +
                            "&complainantId=" + complainantId +
                            "&dept=" + investigationUnit.getValue();  

        //Xrm.Utility.openWebResource("/its_/Html/DocumentGenerationWebPage", encodeURIComponent(customParamsString), 300, 300);
        window.open(url + "?data=" + encodeURIComponent(customParamsString), "_blank", "titlebar=no,statusbar=no,toolbar=no,height=400, width=700");
    }
    else {
        alert("The Letters can't be generated, as there isn't any Unit/Department set on the record.");
    }
}

function GenerateComplaintBulkLetters(selectedRecordReferences) {
    GenerateBulkLetters(selectedRecordReferences, "its_complaint");
}

function GenerateInvestigationBulkLetters(selectedRecordReferences, selectedEntity) {
    GenerateBulkLetters(selectedRecordReferences, selectedEntity);
}