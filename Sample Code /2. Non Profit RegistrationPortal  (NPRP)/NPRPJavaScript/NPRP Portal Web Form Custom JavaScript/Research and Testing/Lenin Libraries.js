
function GetCurrentUser(lookupattribute) {

    var UserID;
    UserID = Xrm.Page.context.getUserId();

    var odataset = "SystemUserSet";
    var columns = "FirstName,LastName";
    var filter = "SystemUserId eq guid'" + UserID + "'";
    var requestResults = SDK.REST.retrieveRecordSynch(odataset, columns, filter);
    if (requestResults != null) {
        var id = UserID;
        var firstname = requestResults.FirstName;
        var lasttname = requestResults.LastName;
        var Name = firstname + " " + lasttname
        Xrm.Page.getAttribute(lookupattribute).setValue([{
            id: id,
            name: Name,
            entityType: "SystemUser"
        }]); //To set Current Logged in user
    }
}

function PopulateWithCurrentJO(lookupattribute, judicialOfficerId) {
    var UserID;
    UserID = Xrm.Page.context.getUserId();
    var queryString = "SystemUserSet?$select=lasc_JudicialOfficerId,lasc_judicialofficer_systemuser_JudicialOfficerId/lasc_judicialofficerId,lasc_judicialofficer_systemuser_JudicialOfficerId/lasc_name&$expand=lasc_judicialofficer_systemuser_JudicialOfficerId&$filter=SystemUserId eq guid'" + UserID + "'   and lasc_UserTypeOptionCode/Value eq 859330001";
    var requestResults = SDK.REST.runQuerySynch(queryString);
    if (requestResults != null) {
        if (judicialOfficerId != 'undefined' && judicialOfficerId != null) {
            if (judicialOfficerId.replace('{', '').replace('}', '').toUpperCase() == requestResults.lasc_JudicialOfficerId.Id.replace('{', '').replace('}', '').toUpperCase()) {
                var joname = requestResults.lasc_JudicialOfficerId.Name;
                var joid = requestResults.lasc_JudicialOfficerId.Id
                Xrm.Page.getAttribute(lookupattribute).setValue([{
                    id: joid,
                    name: joname,
                    entityType: "lasc_judicialofficer"
                }]); //To set Current Logged in user
            }
        }
        else {
            var joname = requestResults.lasc_JudicialOfficerId.Name;
            var joid = requestResults.lasc_JudicialOfficerId.Id
            Xrm.Page.getAttribute(lookupattribute).setValue([{
                id: joid,
                name: joname,
                entityType: "lasc_judicialofficer"
            }]); //To set Current Logged in user
        }
    }
}
function PopulateWithCurrentEmployee(lookupattribute) {
    var UserID;
    UserID = Xrm.Page.context.getUserId();
    var queryString = "SystemUserSet?$select=lasc_EmployeeId,lasc_employee_systemuser_EmployeeId/lasc_employeeId,lasc_employee_systemuser_EmployeeId/lasc_name&$expand=lasc_employee_systemuser_EmployeeId&$filter=SystemUserId eq guid'" + UserID + "'";
    var requestResults = SDK.REST.runQuerySynch(queryString);
    if (requestResults != null) {

        var employeeName = requestResults.lasc_EmployeeId.Name;
        var employeeId = requestResults.lasc_EmployeeId.Id
        Xrm.Page.getAttribute(lookupattribute).setValue([{
            id: employeeId,
            name: employeeName,
            entityType: "lasc_employee"
        }]); //To set Current Logged in user
    }
}
function PopulateWithCurrentEmployeePtr(lookupattribute) {

    var UserID;
    var employeeName = null;
    var employeeId = null;
    UserID = Xrm.Page.context.getUserId();
    var queryString = "SystemUserSet?$select=lasc_EmployeeId,lasc_employee_systemuser_EmployeeId/lasc_employeeId,lasc_employee_systemuser_EmployeeId/lasc_name&$expand=lasc_employee_systemuser_EmployeeId&$filter=SystemUserId eq guid'" + UserID + "'";
    var requestResults = SDK.REST.runQuerySynch(queryString);
    if (requestResults != null) {

        employeeName = requestResults.lasc_EmployeeId.Name;
        employeeId = requestResults.lasc_EmployeeId.Id;
        if (employeeId != null) {
            var queryString = "lasc_employeepointerSet?$select=lasc_employeepointerId,lasc_name&$filter=lasc_EmployeeId/Id eq guid'" + employeeId + "'";
            var requestResults = SDK.REST.runQuerySynch(queryString);
            if (requestResults != null) {

                var employeePtrName = requestResults.lasc_name;
                var employeePtrId = requestResults.lasc_employeepointerId;
                Xrm.Page.getAttribute(lookupattribute).setValue([{
                    id: employeePtrId,
                    name: employeePtrName,
                    entityType: "lasc_employeepointer"
                }]);
            }
        }

    }

    var UserID;
    UserID = Xrm.Page.context.getUserId();
    var queryString = "SystemUserSet?$select=lasc_systemuser_lasc_employee_SystemUser/lasc_EmployeePointerId&$expand=lasc_systemuser_lasc_employee_SystemUser&$filter=SystemUserId eq guid'" + UserID + "'";
    var requestResults = SDK.REST.runQuerySynch(queryString);
    if (requestResults != null && requestResults.lasc_systemuser_lasc_employee_SystemUser.results != null && requestResults.lasc_systemuser_lasc_employee_SystemUser.results.length > 0) {

        var employeeName = requestResults.lasc_systemuser_lasc_employee_SystemUser.results[0].lasc_EmployeePointerId.Name;
        var employeeId = requestResults.lasc_systemuser_lasc_employee_SystemUser.results[0].lasc_EmployeePointerId.Id
        Xrm.Page.getAttribute(lookupattribute).setValue([{
            id: employeeId,
            name: employeeName,
            entityType: "lasc_employeepointer"
        }]); //To set Current Logged in user
    }

}
function GetJudicialOfficer(lookupattribute) {
    var UserID;
    UserID = Xrm.Page.context.getUserId();
    var odataset = "lasc_judicialofficerSet";
    var columns = "FirstName,LastName";
    var filter = "SystemUserId eq guid'" + UserID + "'";
    var requestResults = SDK.REST.retrieveRecordSynch(odataset, columns, filter);
    if (requestResults != null) {
        var id = UserID;
        var firstname = requestResults.lasc_FirstName;
        var lasttname = requestResults.lasc_LastName;
        var Name = firstname + " " + lasttname
        Xrm.Page.getAttribute(lookupattribute).setValue([{
            lasc_judicialofficerid: id,
            lasc_name: Name,
            entityType: "SystemUser"
        }]); //To set Current Logged in user
    }
}

function GetSecurityRoleById(roleId) {
    var roleName = "";
    var odataset = "RoleSet";
    var columns = "Name";
    var filter = "RoleId eq guid'" + roleId + "'";
    var requestResults = SDK.REST.retrieveRecordSynch(odataset, columns, filter);
    if (requestResults != null) {
        roleName = requestResults.Name;
    }
    return roleName;
}
function GetSecurityRoleByName(roleName) {
    var roleId = "";
    var odataset = "RoleSet";
    var columns = "RoleId";
    var filter = "Name eq '" + roleName + "'";
    var requestResults = SDK.REST.retrieveRecordSynch(odataset, columns, filter);
    if (requestResults != null) {
        roleId = requestResults.RoleId;
    }
    return roleId;
}

function MakeTheFollowingFieldsRequired(attributesList) {
    var attributesArray = attributesList.split(",");
    for (var i = 0; i < attributesArray.length; i++) {
        var field = Xrm.Page.getAttribute(attributesArray[i]);
        try {
            field.setRequiredLevel("required");
        }
        catch(e) {}
    }
}

function MakeTheFollowingFieldsNotRequired(attributesList) {
    var attributesArray = attributesList.split(",");
    for (var i = 0; i < attributesArray.length; i++) {
        var field = Xrm.Page.getAttribute(attributesArray[i]);
        field.setRequiredLevel("none");
    }
}
function SubmitTheFollowingFields(attributesList) {
    var attributesArray = attributesList.split(",");
    for (var i = 0; i < attributesArray.length; i++) {
        var field = Xrm.Page.getAttribute(attributesArray[i]);
        field.setSubmitMode("always");
    }
}
function DoNotSubmitTheFollowingFields(attributesList) {
    var attributesArray = attributesList.split(",");
    for (var i = 0; i < attributesArray.length; i++) {
        var field = Xrm.Page.getAttribute(attributesArray[i]);
        field.setSubmitMode("never");
    }
}
//function ShowHideAttributes(attributesList, isVisible) {
//    var attributesArray = attributesList.split(",");
//    for (var i = 0; i < attributesArray.length; i++) {
//        var fieldName = attributesArray[i];
//        var ctrl = Xrm.Page.ui.controls.get(fieldName);
//        if (ctrl != null) //LL-060212 Filterout controls not  found
//        ctrl.setVisible(isVisible);
//        //}
//    }

//}
function DisableFollowingFields() {
    for (var i = 0; i < arguments.length; i++) {
        var field = arguments[i];
        Xrm.Page.getControl(field).setDisabled(true);
    }
}

function EnableFollowingFields() {
    for (var i = 0; i < arguments.length; i++) {
        var field = arguments[i];
        Xrm.Page.getControl(field).setDisabled(false);
    }
}

function CleanFollowingFields() {
    for (var i = 0; i < arguments.length; i++) {
        var field = arguments[i];
        var isdisabled = Xrm.Page.getControl(field).getDisabled();
        if (isdisabled) {
            Xrm.Page.getControl(field).setDisabled(false);
        }
        Xrm.Page.getAttribute(field).setValue(null);
        if (isdisabled) {
            Xrm.Page.getControl(field).setDisabled(true);
        }
    }
}

function SetLookupValue(fieldName, id, name, entityType) {
    if (fieldName != null) {
        var lookupValue = new Array();
        lookupValue[0] = new Object();
        lookupValue[0].id = id;
        lookupValue[0].name = name;
        lookupValue[0].entityType = entityType;
        Xrm.Page.getAttribute(fieldName).setValue(lookupValue);
    }
}

function ReadLookupFieldId(frmLookupObj) {
    var lookupField = Array;
    var lookupFieldValue = '';
    lookupField = frmLookupObj.getValue();
    if (lookupField == null) return lookupFieldValue;
    else {
        lookupFieldValue = lookupField[0].id;
        lookupFieldValue = lookupFieldValue.replace(/{/, '');
        lookupFieldValue = lookupFieldValue.replace(/}/, '');
    }
    return lookupFieldValue;
}
function ReadLookupFieldText(frmLookupObj) {
    var lookupField = Array;
    var lookupFieldText = '';
    lookupField = frmLookupObj.getValue();
    if (lookupField == null) return lookupFieldText;
    else {
        lookupFieldText = lookupField[0].name;
    }
    return lookupFieldText;
}
function ShowHideAttributes(attributesList, isVisible) {
    var attributesArray = attributesList.split(",");
    for (var i = 0; i < attributesArray.length; i++) {
        var fieldName = attributesArray[i];
        var ctrl = Xrm.Page.ui.controls.get(fieldName);
        if (ctrl != null) //LL-060212 Filterout controls not  found
        ctrl.setVisible(isVisible);
        //}
    }
}

//To Fetch Error Message as per Error code from Messages entity
// Created on 02-Dec-2013 I653
function ErrorMessage(Errorcode) {
    var oDataSetName = "lasc_validationanderrormessageSet";
    var columns = "lasc_MessageDescription";
    var filter = "lasc_MessageCode eq '" + Errorcode + "'";
    if (filter != null) {
        var requestResults = SDK.REST.FetchMessage(oDataSetName, columns, filter);
        if (requestResults != null) {
            if (requestResults.results != null && requestResults.results.length > 0) {
                var message = requestResults.results[0];
                return message;
            }
        }
    }
}

// To set Today date to Date fields
function SetTodayDate(attribute) {
    var todayDate = new Date();
    var field = Xrm.Page.data.entity.attributes.get(attribute);
    field.setValue(todayDate);
}
//************ Events *********************************
function CancelSaveOperation(executionContextObj) {
    executionContextObj.getEventArgs().preventDefault();
}

//Will return > 0 if date 2 is after date 1
//will return < 0 if date 2 is earlier than date 1
//will return 0 if date1 and date 2 are the same date
function GetDateDiffInDays(date1, date2) {
    //var t1 = date1.getTime();
    //var t2 = date2.getTime();
    var t1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    var t2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    if ((t2 - t1) / (24 * 3600 * 1000) < 0) return Math.ceil((t2 - t1) / (24 * 3600 * 1000));
    else if ((t2 - t1) / (24 * 3600 * 1000) >= 0) return Math.floor((t2 - t1) / (24 * 3600 * 1000));
}
//LL-081115: Improved, the  reason  for the "+1" is  because we  are looking for the
//number of days inclusive.
function GetNumberOfDays(date1, date2) {
    var _MS_PER_DAY = 1000 * 60 * 60 * 24;
    var utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    var utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    if ((utc2 - utc1) / _MS_PER_DAY) return Math.ceil((utc2 - utc1) / _MS_PER_DAY) + 1;
    else return Math.floor((utc2 - utc1) / _MS_PER_DAY) + 1;
}
function GetDateDiffInMinutes(date1, date2) {
    var t1 = date1.getTime();
    var t2 = date2.getTime();
    return Math.floor(((t2 - t1) / 60000));
}
function IsDateBetweenRange(fromDate, date, toDate) {
    if (GetDateDiffInDays(fromDate, date) >= 0 && GetDateDiffInDays(date, toDate) >= 0) return true;
    else return false;
}
//To verify Begin date should not be After End date
function ValidateBeginDate(beginDateAttrib, endDateAttrib, errMsgCode) {
    var isValidField = true;
    var endDate = Xrm.Page.getAttribute(endDateAttrib).getValue();
    if (endDate != null) {
        var beginDate = Xrm.Page.getAttribute(beginDateAttrib).getValue();
        if (GetDateDiffInDays(beginDate, endDate) < 0) {
            var messagealert = ErrorMessage(errMsgCode);
            alert(messagealert.lasc_MessageDescription);
            Xrm.Page.getAttribute(beginDateAttrib).setValue(null);;
            //Xrm.Page.getControl(beginDateAttrib).setFocus();
            event.returnValue = false;
        }
    }
    event.returnValue = true;
}

// VERIFY END DATE OCCURS AFTER BEGIN DATE
function ValidateEndDate(beginDateAttrib, endDateAttrib, errMsgCode1, errMsgCode2) {
    var isValidField = true;
    var beginDate = ReadTextFieldValue(beginDateAttrib);
    var endDate = ReadTextFieldValue(endDateAttrib);

    if (beginDate.length <= 0 && endDate.length > 0) {
        var messagealert = ErrorMessage(errMsgCode1);
       alert(messagealert.lasc_MessageDescription);
        Xrm.Page.getAttribute(endDateAttrib).setValue(null);
        //Xrm.Page.getControl(beginDateAttrib).setFocus();
        event.returnValue = false;
    }
    else if (endDate.length > 0 && beginDate.length > 0) {
        var oBegin = Date.parse(beginDate);
        var oEnd = Date.parse(endDate);
        if (GetDateDiffInDays(Xrm.Page.getAttribute(beginDateAttrib).getValue(), Xrm.Page.getAttribute(endDateAttrib).getValue()) < 0) {
            var messagealert = ErrorMessage(errMsgCode2);
            alert(messagealert.lasc_MessageDescription);
            Xrm.Page.getAttribute(endDateAttrib).setValue(null);;
            //Xrm.Page.getControl(endDateAttrib).setFocus();
            event.returnValue = false;
        }
    }
}
function ValidateEndDateInMinutes(beginDateAttrib, endDateAttrib, errMsgCode1, errMsgCode2) {
    var isValidField = true;
    var beginDate = ReadTextFieldValue(beginDateAttrib);
    var endDate = ReadTextFieldValue(endDateAttrib);

    if (beginDate.length <= 0 && endDate.length > 0) {
        var messagealert = ErrorMessage(errMsgCode1);
        alert(messagealert.lasc_MessageDescription);
        Xrm.Page.getAttribute(endDateAttrib).setValue(null);
        //Xrm.Page.getControl(beginDateAttrib).setFocus();
        event.returnValue = false;
    }
    else if (endDate.length > 0 && beginDate.length > 0) {

        if (GetDateDiffInMinutes(Xrm.Page.getAttribute(beginDateAttrib).getValue(), Xrm.Page.getAttribute(endDateAttrib).getValue()) < 0) {
            var messagealert = ErrorMessage(errMsgCode2);
            alert(messagealert.lasc_MessageDescription);
            Xrm.Page.getAttribute(endDateAttrib).setValue(null);;
            //Xrm.Page.getControl(endDateAttrib).setFocus();
            event.returnValue = false;
        }
    }
}
//Date must be in the past
function ValidatePastDateField(context, errMsgCode, attributeName) {
    var sourceObject = GetSourceObject(context, attributeName);
    if (sourceObject.getValue() != null) {
        var oToday = new Date();
        var enteredDateValue = sourceObject.getValue();
        if (GetDateDiffInDays(enteredDateValue, oToday) <= 0) {
            FetchAndDisplayErrorMessage(errMsgCode, context);
            return false
        }
        else return true;
    }
    else return true; // event.returnValue = true;
}
//Date must be in the future
function ValidateFutureDateField(context, errMsgCode, attributeName) {
    var sourceObject = GetSourceObject(context, attributeName);
    if (sourceObject.getValue() != null) {
        var oToday = new Date();
        var enteredDateValue = sourceObject.getValue();
        if (GetDateDiffInDays(enteredDateValue, oToday) > 0) {
            FetchAndDisplayErrorMessage(errMsgCode, context);
            return false
        }
        else return true;
    }
    else return true;
    //event.returnValue = true;
}
//Date must be in the future or today
function IsDateTodayOrFuture(context, errMsgCode, attributeName) {
    var sourceObject = GetSourceObject(context, attributeName);
    if (sourceObject.getValue() != null) {
        var oToday = new Date();
        var enteredDateValue = sourceObject.getValue();
        if (GetDateDiffInDays(oToday, enteredDateValue) >= 0) return true;
        else {
            if (errMsgCode != null && errMsgCode.length > 0)
                FetchAndDisplayErrorMessage(errMsgCode, context);

            return false
        }
    }
    else return true;
    //event.returnValue = true;
}
//Date must be in the past or today
function IsDateTodayOrPast(context, errMsgCode, attributeName) {
    var sourceObject = GetSourceObject(context, attributeName);
    if (sourceObject.getValue() != null) {
        var oToday = new Date();
        var enteredDateValue = sourceObject.getValue();
        if (GetDateDiffInDays(enteredDateValue, oToday) >= 0) return true;
        else {
            FetchAndDisplayErrorMessage(errMsgCode, context);
            return false
        }
    }
    else return true;
    //event.returnValue = true;
}
function GetSourceObject(context, attributeName) {
    var sourceObject = null;
    if (context != null) sourceObject = context.getEventSource();
    else sourceObject = Xrm.Page.getAttribute(attributeName);
    return sourceObject;
}
function ValidateTodayDateField(context, errMsgCode, attributeName) {
    var sourceObject = GetSourceObject(context, attributeName);
    if (sourceObject.getValue() != null) {
        var oToday = new Date();
        var enteredDateValue = sourceObject.getValue();
        if (GetDateDiffInDays(enteredDateValue, oToday) == 0) {
            FetchAndDisplayErrorMessage(errMsgCode, context);
        }
    }
    event.returnValue = true;
}
function ReadTextFieldValue(fieldName) {
    var fieldValue = "";
    if (Xrm.Page.getAttribute(fieldName).getValue() != null) {
        fieldValue = Xrm.Page.getAttribute(fieldName).getValue().toString();
    }

    return fieldValue;
}

function IsValidSSN(context, errMsg) {
    var validSSN = true;
    //var re = /^([0-8]\d{2}|7[0-6]\d|77[0-2])([ \-]?)(\d{2})\2(\d{4})$/;
    if (context.getEventSource().getValue() != null) {
        var value = context.getEventSource().getValue();
        value = value.replace(/[^\d]/g, ""); // get rid of everything but the numbers
        if (value.length != 9) {
            FetchAndDisplayErrorMessage(errMsg, context);
        }
        else {
            if (value.substring(0, 3) == "000" || value.substring(0, 3) == "666") {
                validSSN = false;
            }
            if (value.substring(3, 5) == "00") {
                validSSN = false;
            }
            if (value.substring(5, 9) == "0000") {
                validSSN = false;
            }
            if (!validSSN) {
                FetchAndDisplayErrorMessage(errMsg, context);
            }
            else {
                var ssnFormated = value.substr(0, 3) + '-' + value.substr(3, 2) + '-' + value.substr(5);
                Xrm.Page.getAttribute(context.getEventSource().getName()).setValue(ssnFormated);
                event.returnValue = true;
            }
        }
    }
}
function FormatZIP(errorCode,attributeName) {
    // old pattern was /^\d+$/
    var zipCodeIsValid = false;
    var pattern1 = /\d{5}/;
    var pattern2 = /\d{5}-\d{4}/;
    //var zip = Xrm.Page.getAttribute(attributeName).getValue();
    var enteredZip =   Xrm.Page.getAttribute(attributeName).getValue(); 
                
    if (enteredZip.length > 0) {
        if (enteredZip.length === 10)
        {
               zipCodeIsValid = pattern2.test(enteredZip);
        }
        if (enteredZip.length === 5)
        {
               zipCodeIsValid = pattern1.test(enteredZip);
        }
        if(!zipCodeIsValid)
               FetchAndDisplayErrorMessage(errorCode, null);
               
            //var messagealert = FormScripts.FormUtilities.ErrorMessage(errorCode);
            //alert(messagealert.lasc_MessageDescription);
            //Xrm.Page.getControl(attributeName).setFocus();
            
            //Xrm.Page.getAttribute(attributeName).setValue(null);                                  
            //FetchAndDisplayErrorMessage(errorCode, null);
            //Xrm.Page.getControl(attributeName).setFocus();
            //Xrm.Page.getAttribute(attributeName).setValue(null);
            
            //return false;        
    }
                return zipCodeIsValid;
}
function FormatPhone(context, errMsgCode) {
    var phone = context.getEventSource().getValue();
    if (phone != null) {
        phone = phone.replace(/^s+/, '').replace(/s+$/, '');
        phone = phone.replace(/[^\d]/g, ""); // get rid of everything but the numbers
        if (phone.substr(0, 1) == '1') {
            phone = phone.substr(1); // get rid of leading 1's
        }

        if (phone.length == 10) {
            context.getEventSource().setValue("(" + phone.substr(0, 3) + ") " + phone.substr(3, 3) + "-" + phone.substr(6, 4));
        }
        else {
            FetchAndDisplayErrorMessage(errMsgCode, context);
        }

    }
}

function FetchAndDisplayErrorMessage(errMsgCode, context) {
    var messagealert = ErrorMessage(errMsgCode);
    alert(messagealert.lasc_MessageDescription);
    //Xrm.Page.getAttribute(context.getEventSource().getName()).setValue(null);
    return false;
    //event.returnValue = false;
}

function IsThisDateAHoliday(context, errMsgCode, attributeName) {
    var sourceObject = GetSourceObject(context, attributeName);
    if (sourceObject.getValue() != null) {
        var enteredDateValue = sourceObject.getValue();
        var day = enteredDateValue.getDate();
        var month = enteredDateValue.getMonth() + 1;
        var year = enteredDateValue.getFullYear();
        var odataset = "lasc_holidaySet";
        var columns = "lasc_HolidayDate,lasc_name";
        var filter = "lasc_Day eq " + day + " and lasc_Month eq " + month + " and lasc_Year eq " + year;
        var requestResults = SDK.REST.retrieveRecordSynch(odataset, columns, filter);
        if (requestResults == null) { //Holiday not found for the given parameters
            //event.returnValue = true;
            return false;
        }
        else { //Holiday found for the givne parameters
            FetchAndDisplayErrorMessage(errMsgCode, context);
            return true;
        }
    }
    else return false;
    //event.returnValue = true;
}
//LL_081015: Check if the date object is a valid date
//           EnteredDateValue must be the actual CRM Date object
function IsThisDateAHoliday_Internal(enteredDateValue) {
    //var enteredDateValue = Xrm.Page.getAttribute("lasc_fromdate").getValue();
    var day = enteredDateValue.getDate();
    var month = enteredDateValue.getMonth() + 1;
    var year = enteredDateValue.getFullYear();
    var odataset = "lasc_holidaySet";
    var columns = "lasc_HolidayDate,lasc_name";
    var filter = "lasc_Day eq " + day + " and lasc_Month eq " + month + " and lasc_Year eq " + year;
    var requestResults = SDK.REST.retrieveRecordSynch(odataset, columns, filter);
    if (requestResults == null) { //Holiday not found for the given parameters
        return false
    }
    else { //Holliday found for the givne parameters
        return true;
    }
}
//LL_081015: Check if the date object is a valid week day
function IsThisDateAWeekDay(enteredDateValue) {

    //var enteredDateValue = Xrm.Page.getAttribute("lasc_fromdate").getValue();
    var weekDay = enteredDateValue.getDay();
    if (weekDay == 0 || weekDay == 6) return false
    else return true
}
function DisabledSection(tabNumber, sectionNumber, disablestatus) {
    var section = Xrm.Page.ui.tabs.get(tabNumber).sections.get(sectionNumber);
    var controls = section.controls.get();
    var controlsLenght = controls.length;

    for (var i = 0; i < controlsLenght; i++) {
        controls[i].setDisabled(disablestatus)
    }
}

function getODataUTCDateFilter(date) {
    var monthString;
    var rawMonth = (date.getUTCMonth() + 1).toString();
    if (rawMonth.length == 1) {
        monthString = "0" + rawMonth;
    }
    else {
        monthString = rawMonth;
    }
    var dateString;
    var rawDate = date.getUTCDate().toString();
    if (rawDate.length == 1) {
        dateString = "0" + rawDate;
    }
    else {
        dateString = rawDate;
    }
    var hourString = date.getUTCHours().toString();
    if (hourString.length == 1) hourString = "0" + hourString;
    var minuteString = date.getUTCMinutes().toString();
    if (minuteString.length == 1) minuteString = "0" + minuteString;
    var secondString = date.getUTCSeconds().toString();
    if (secondString.length == 1) secondString = "0" + secondString;
    var DateFilter = "datetime'";
    DateFilter += date.getUTCFullYear() + "-";
    DateFilter += monthString + "-";
    DateFilter += dateString;
    DateFilter += "T" + hourString + ":";
    DateFilter += minuteString + ":";
    DateFilter += secondString; // + "Z'";
    return DateFilter;
}

//-------------------------
function getLoggedInUserRoles() {

    var userId = Xrm.Page.context.getUserId();
    var userSecurityRoles = [];

    var odataset = "SystemUserSet";
    var columns = "systemuserroles_association/Name&$expand=systemuserroles_association";
    var filter = "SystemUserId eq (guid'" + userId + "')";
    var requestResults = SDK.REST.retrieveRecordSynch(odataset, columns, filter);
    if (requestResults != null) {
        for (var i = 0; i < requestResults.systemuserroles_association.results.length; i++) {
            userSecurityRoles[i] = requestResults.systemuserroles_association.results[i].Name;
        }
    }
    return userSecurityRoles;
}
function IsLoggedUserA(securityRoleName) {
    var userHasSecurityRole = false;
    for (var i = 0; i < window.loggedUserSecurityRoles.length; i++) {
        if (window.loggedUserSecurityRoles[i].toUpperCase() == securityRoleName.toUpperCase()) {
            userHasSecurityRole = true;
            break;
        }
    }
    return userHasSecurityRole;
}
function ToggleSection(tabName, sectionName, visibility) {
    Xrm.Page.ui.tabs.get(tabName).sections.get(sectionName).setVisible(visibility);
}
// *** Sets the Optionset value based on text
function setOptionSet(fieldName, setText) {

    var control = Xrm.Page.getAttribute(fieldName);

    if (control.getAttributeType() == 'optionset') {
        if (setText == "" || setText == null || setText == 'undefined') {
            control.setValue(null);
        }
        else {
            var controlOpts = control.getOptions();
            for (var i = 0; i <= controlOpts.length - 1; i++) {
                if (controlOpts[i].text.toLowerCase() == setText.toLowerCase()) {
                    control.setValue(controlOpts[i].value);
                    return;
                }
            }
        }
    }
    else {
        alert("Invalid field type or field not found. Field type should be OptionSet");
        return;
    }
};
function RemoveOptionSetValue(fieldName, setText) {

    var control = Xrm.Page.getAttribute(fieldName);

    if (control.getAttributeType() == 'optionset') {
        if (setText == "" || setText == null || setText == 'undefined') {
            // do nothing
        }
        else {
            var controlOpts = control.getOptions();
            for (var i = 0; i <= controlOpts.length - 1; i++) {
                if (controlOpts[i].text.toLowerCase() == setText.toLowerCase()) {
                    Xrm.Page.getControl(fieldName).removeOption(controlOpts[i].value)
                    return;
                }
            }
        }
    }
    else {
        alert("Invalid field type or field not found. Field type should be OptionSet");
        return;
    }
};
Array.prototype.contains = function (elem) {
    for (var i in this) {
        if (this[i] == elem) return true;
    }
    return false;
}
function ReadJudicialOfficerAssociatedToCRMUser() {
    var UserID;
    var judicialOfficer = null;
    UserID = Xrm.Page.context.getUserId();
    var queryString = "SystemUserSet?$select=lasc_JudicialOfficerId&$filter=SystemUserId eq guid'" + UserID + "'";
    var requestResults = SDK.REST.runQuerySynch(queryString);
    if (requestResults != null) {
        if (requestResults.lasc_JudicialOfficerId != null) {
            var joId = requestResults.lasc_JudicialOfficerId.Id;
            var joName = requestResults.lasc_JudicialOfficerId.Name;
            judicialOfficer = JSON.parse('{"JudicialOfficerName":"' + joName + '","JudicialOfficerId":"' + joId + '"}');
        }
    }
    return judicialOfficer;
}
function ReadCRMUserAssociatedToJudicialOfficer(judicialOfficerId) {
    var crmUserObject = null;
    var queryString = "SystemUserSet?$select=FirstName,FullName,LastName,SystemUserId&$filter=lasc_JudicialOfficerId/Id eq guid'" + judicialOfficerId + "'";
    var requestResults = SDK.REST.runQuerySynch(queryString);
    if (requestResults != null) {
        crmUserObject = JSON.parse('{"CrmUserId":"' + requestResults.SystemUserId + '","FirstName":"' + requestResults.FirstName + '","LastName":"' + requestResults.LastName + '"}');
    }
    return crmUserObject;
}
function UserHasTeam(teamName) {
    ///<summary>
    /// Checks to see if the current user is a member of a team with the passed in name.
    ///</summary>
    ///<param name="teamName" type="String">
    /// A String representing the name of the team to check if the user is a member of.
    ///</param>

    var userIsMemberOfTeam = false;
    var userId = Xrm.Page.context.getUserId();
    var teamId = null;
    var odataset = "TeamSet";
    var columns = "Name,TeamId";
    var filter = "Name eq '" + teamName + "'";

    var requestResults = SDK.REST.retrieveRecordSynch(odataset, columns, filter); //Should retrieve only one
    if (requestResults != null) {
        for (var i = 0; i < requestResults.length; i++) {
            teamId = requestResults.results[i].Id;
            break;
        }
   }
    if (teamId != null)
        userIsMemberOfTeam = getUserTeams(teamId, userId);

    return userIsMemberOfTeam;
}

function getUserTeams(teamToCheckId,userId) {
    // gets the current users team membership
    var userIsMemberOfTeam = false;
    var odataset = "TeamMembershipSet";
    var columns = "TeamMembershipId";
    var filter = "SystemUserId eq guid' " + userId + " ' and TeamId eq guid' " + teamToCheckId + " '";
    var requestResults = SDK.REST.retrieveRecordSynch(odataset, columns, filter); //Should retrieve only one
    if(requestResults != null)
    {
        if (requestResults)
            userIsMemberOfTeam = true;
    }
    return userIsMemberOfTeam;
}

function GuidsAreEqual(guid1, guid2) {
    // compares two guids
    //debugger;
    var isEqual = false;
    if (guid1 == null || guid2 == null) {
        isEqual = false;
    } else {
        isEqual = (guid1.replace(/[{}]/g, "").toLowerCase() == guid2.replace(/[{}]/g, "").toLowerCase());
    }
    return isEqual;
}

