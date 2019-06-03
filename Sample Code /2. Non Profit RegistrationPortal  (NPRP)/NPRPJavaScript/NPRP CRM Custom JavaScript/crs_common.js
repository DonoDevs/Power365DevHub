g_FORM_TYPE_CREATE_MODE = 1;

var pfrregistrationfee = 250;

function openReportPreview(reportid, workflowid, attachmentName) {
    var recordtype = Xrm.Page.context.getQueryStringParameters().etc;
    var recordid = Xrm.Page.data.entity.getId();
    var entityName = Xrm.Page.data.entity.getEntityName();
    var parentEntityName;
    var parentEntityId;

    switch (entityName) {
        case "account":
            parentEntityId = Xrm.Page.data.entity.getId();
            parentEntityName = Xrm.Page.data.entity.getEntityName();
            break;

        case "crs_pfr":
            parentEntityId = Xrm.Page.data.entity.getId();
            parentEntityName = Xrm.Page.data.entity.getEntityName();
            break;

        case "crs_charityinitialregistration":
            var lookupSchemaName = "crs_charityid";
            var lookupObj = Xrm.Page.getAttribute(lookupSchemaName).getValue();
            if (lookupObj != null) {
                parentEntityId = lookupObj[0].id;
                parentEntityName = lookupObj[0].entityType;
            }
            break;

        case "crs_pfrrenewal":
            var lookupSchemaName = "crs_pfrid";
            var lookupObj = Xrm.Page.getAttribute(lookupSchemaName).getValue();
            if (lookupObj != null) {
                parentEntityId = lookupObj[0].id;
                parentEntityName = lookupObj[0].entityType;
            }
            break;

        case "crs_pfrcontract":
            var lookupSchemaName = "crs_pfr";
            var lookupObj = Xrm.Page.getAttribute(lookupSchemaName).getValue();
            if (lookupObj != null) {
                parentEntityId = lookupObj[0].id;
                parentEntityName = lookupObj[0].entityType;
            }
            break;

        case "crs_commercialcoventurec":
            var lookupSchemaName = "crs_charityname";
            var lookupObj = Xrm.Page.getAttribute(lookupSchemaName).getValue();
            if (lookupObj != null) {
                parentEntityId = lookupObj[0].id;
                parentEntityName = lookupObj[0].entityType;
            }
            break;

        case "crs_commercialcoventurereport":
            var lookupSchemaName = "crs_charity";
            var lookupObj = Xrm.Page.getAttribute(lookupSchemaName).getValue();
            if (lookupObj != null) {
                parentEntityId = lookupObj[0].id;
                parentEntityName = lookupObj[0].entityType;
            }
            break;

        case "crs_noticeofintent":
            var lookupSchemaName = "crs_charityname";
            var lookupObj = Xrm.Page.getAttribute(lookupSchemaName).getValue();
            if (lookupObj != null) {
                parentEntityId = lookupObj[0].id;
                parentEntityName = lookupObj[0].entityType;
            }
            break;

        case "campaign":
            var lookupSchemaName = "crs_charity";
            var lookupObj = Xrm.Page.getAttribute(lookupSchemaName).getValue();
            if (lookupObj != null) {
                parentEntityId = lookupObj[0].id;
                parentEntityName = lookupObj[0].entityType;
            }
            break;
    }
    var data = encodeURIComponent("reportid={" + reportid + "}&recordid=" + recordid + "&recordtype=" + recordtype + "&wfid=" + workflowid + "&entityname=" + entityName + "&attachmentname=" + attachmentName + "&parentEntityName=" + parentEntityName + "&parentEntityId=" + parentEntityId);
    Xrm.Utility.openWebResource("crs_ReportViewer.html", data, 870, 755);
}

function reportInProgress() {
    alert("Report Under Development");
}

function PFRAcknowledge() {
    openReportPreview("532a1634-256e-e411-940a-00155d0168c7", "41d0e935-4b82-4641-908f-addf94005acc", "Acknowledge Letter");
}

///Charity

// Charity Complaince Letter
function chComplianceLetter() {
    openReportPreview("8aeb44c4-3780-e411-940d-00155d016613", "C410ADA5-A31B-4067-BC01-A12690A17684", "Charity Letter of Complaince");
}

// Charity Complaince Denial Letter
function chComplianceDenyLetter() {
    openReportPreview("E3EC3FF2-A983-E411-940E-00155DC992F0", "ac0b15b7-5f83-4906-942b-4a1c80c596a2", "Denial of Letter of Compliance");
}

//Charity Exemption Acknowledgement
function chExemptionAck() {
    openReportPreview("4677749e-4783-e411-940e-00155dc992f0", "bd94e4bb-91bc-4afd-bdb9-14fe74a0f260", "Charity Reg Exemption Request - Acknowledgment of Receipt");
}

//Charity Exemption Denial Letter
function chExemptionDenial() {
    openReportPreview("9a26975b-7883-e411-940e-00155dc992f0", "A67C61B4-905E-4B50-A52A-995085D33881", "Denial of Request");
}

//Charity Reg Exemption Request - Granted Religious Exemption
function chExemptionApproveRel() {
    openReportPreview("5A579D5C-BC83-E411-940E-00155DC992F0", "fbbf4f3d-cb0a-45a7-9357-465974b6ff7f", "Charity Reg Exemption Request - Granted Religious Exemption");
}

//Charity Reg Exemption Request - Granted Education Exemption
function chExemptionApproveEdu() {
    openReportPreview("6a1ea643-bc83-e411-940e-00155dc992f0", "9F1ADAAB-8AD8-4E0F-BF28-9E490D302D44", "Charity Reg - Exemption Request - Granted Educational Institution Exemption");
}

//Charity Reg Exemption Request - Granted Libray Exemption
function chExemptionApproveLib() {
    openReportPreview("DE70C420-BC83-E411-940E-00155DC992F0", "ee649188-5210-4bbb-9736-92f0c2bf3365", "Charity Reg - Exemption Request - Granted Library Exemption");
}

//Charity Reg Exemption Request - Granted Govt Agencies & Status 01 Only
function chExemptionApproveGovt() {
    openReportPreview("181BEB80-BC83-E411-940E-00155DC992F0", "ff15edf4-7736-4683-9930-0076272a6bbb", "Charity Reg - Exemption Request -  Govt Agencies and Status 01 Only");
}

//Unregisterd Charity Letter
function chUnregisteredLetter() {
    openReportPreview("d2c7b491-346e-e411-940a-00155d0168c7", "F189FC7D-F5D7-4962-99A7-DFDE025F8D0F", "Notice of Unregistered Charitable Organization");
}




/// Charity Registration

//Charity initial Registration Acknowledgement
function chRegAcknowledge() {
    openReportPreview("E57F7B2A-6484-E411-940E-00155DC992F0", "EA6C83E3-8AC1-40B9-BB74-922E130A9256", "Acknowledgement of Receipt");
}

//Charity Registration Initial Deficiency
function chRegInitialDef() {
    openReportPreview("27520425-AF83-E411-940E-00155DC992F0", "AFF06F53-CF51-4FC2-9412-BAA8B3C42578", "Initial Registration Deficiency");
}

//Charity Initial Registration denial
function chRegDenial() {
    openReportPreview("81301c46-8380-e411-940d-00155d016613", "008bb16d-a6a8-4aa6-ad06-340ba6796ffc", "Charity Initial Registration - Denial of Registration");
}

//Charity Registration Approavl & Issue of Charity Number
function chRegNumberNotice() {
    openReportPreview("52E0EF8C-D284-E411-940E-00155DC992F0", "54F30814-7516-4CFF-87D0-5ADF65248DE0", "Notice of Charities Registration Number");
}

// Charity Registration Renewal Acknowledgemnt
function chRegRenewAcknowledge() {
    openReportPreview("978B99C4-7E80-E411-940D-00155D016613", "3B6CCA7E-648D-4EDD-B96A-560126F8F1FD", "Acknowledgement of Receipt");
}

//Charity Registration Renewal Deficiency
function chRegRenewDef() {
    openReportPreview("d567f132-a783-e411-940e-00155dc992f0", "463381EF-22AD-43E1-AE3F-931EB37C4F3E", "Charity Renewal Registration Deficiency");
}

//Renewal Reminder
function chRegRenewReminder() {
    openReportPreview("38512F45-2A85-E411-940E-00155DC992F0", "96e6ff75-865e-4878-96db-4fd1135cc2eb", "Renewal Reminder");
}

// Charity extension Request Acknowledgement
function chRegRenewExtAcknowledge() {
    openReportPreview("BD11843E-B185-E411-940E-00155DC992F0", "2e0e0e0a-a36d-401b-a5ae-05590e9e2ec1", "Registration Renewal Extension request acknowledgement");
}

// Charity Renewal Extension Approval
function chRegRenewExtApproval() {
    openReportPreview("435F4EEB-9180-E411-940D-00155D016613", "3ff342cb-d946-4df1-a5bf-27fd5fe2ff75", "Charity Reg - Extension Request - Approval of Extension");
}

// Charity Renewal Extension Denial
function chRegRenewExtDenial() {
    openReportPreview("ccbabb50-6d83-e411-940e-00155dc992f0", "C05833E9-F553-45E3-AEFF-C297BD081337", "Charity Reg - Extension Request - Denial of Extension");
}

// Charity Renewal Extension Denial Status
function chRegRenewExtDenialStatus01() {
    openReportPreview("2e5134db-9480-e411-940d-00155d016613", "535DE7BA-CD42-4B84-9CDD-79A05EF3DB86", "Extension Request - Denial of Extension");
}

function chRegRenApproval() {
    openReportPreview("4497CDAB-3F4B-E511-9409-000D3AA0744F", "535DE7BA-CD42-4B84-9CDD-79A05EF3DB86", "Renewal Registration - Approval");
}

function chRegA2AprvlCHNumIssuance() {
    openReportPreview("0AB59202-FE47-E511-9409-000D3AA0744F", "535DE7BA-CD42-4B84-9CDD-79A05EF3DB86", "Charity Initial Registration - A2 Approval and CH Number Issuance ");
}

/// Charity Campaign

function campaignSR1Ack() {
    openReportPreview("FD5B695B-0481-E411-940D-00155D016613", "11BCC864-A82D-4E77-A9C9-F3E0BDF3C26E", "Acknowledgement of Receipt SR-1 Report");
}

function campaignfirstSR1() {
    openReportPreview("9464C666-1B84-E411-940E-00155DC992F0", "FD5A0C5E-395A-4E98-B0D6-303D192ECB5B", "First SR-1 Demand Letter");
}

function campaignSecondSR1() {
    openReportPreview("74C715EF-3875-E411-940B-00155D016613", "D7D7F911-501E-417F-94B5-C4872F53923A", "Second SR-1 Demand Letter");
}

function campaignSR2Ack() {
    reportInProgress();
    //openReportPreview("", "");
}

function campaignfirstSR2() {
    openReportPreview("02564579-0F81-E411-940D-00155D016613", "4D89AEED-D883-4B31-87AE-85D2153ABBD4", "SR-2 First Demand Letter");
}

function campaignSecondSR2() {
    openReportPreview("00F9C6BF-1481-E411-940D-00155D016613", "3D5620A2-6D06-4BDA-B97B-6A4925BB9178", "SR-2 Second Demand Letter");
}

function campaignSR2AckRecept() {
    openReportPreview("83CEF6C8-AE4B-E511-9409-000D3AA0744F", "3D5620A2-6D06-4BDA-B97B-6A4925BB9178", "SR-2 Acknowledge of Receipt");
}

function campaignSR2CmpgnChrtySlctn() {
    openReportPreview("2CE506BE-D64B-E511-9409-000D3AA0744F", "3D5620A2-6D06-4BDA-B97B-6A4925BB9178", "SR-2 Campaign of Charity Solitication");
}

function campaignSR1CmpgnChrtySlctn() {
    openReportPreview("85305067-D94B-E511-9409-000D3AA0744F", "3D5620A2-6D06-4BDA-B97B-6A4925BB9178", "SR-1 Campaign of Charity Solitication");
}



/// Notice of Intent


function intentUnregister() {
    openReportPreview("EC6DB857-DE6B-E411-9409-00155D0168C7", "DB161434-3688-4051-B42C-7F4D67072689", "Notice of Intent Unregistered Charity");
}

function intentAcknowledge() {
    openReportPreview("7C4FA8B0-DA6B-E411-9409-00155D0168C7", "832E7BC2-92CB-409E-9566-5A37DB0E363A", "Receipt of Notice of Intent Acknowledge");
}

/// Commerical Co-venture Contract

// CCommerical Co-venture contract Acknowledgement
function CVContractAck() {
    openReportPreview("f25eb085-e180-e411-940d-00155d016613", "74883806-C27B-4623-BAE6-780DA79B4F02", "Acknowledgement of Receipt");
}

// Commerical Co-venture Contract Deficiency
function CVContractDef() {
    openReportPreview("6dd36f78-e680-e411-940d-00155d016613", "8CD45224-E8A4-4311-ADFB-45F7148F1224", "Coventure Contract Deficiency Letter");
}

/// Commerical Co-venture Report

// Commerical Co-venture Report Acknowledgment
function CVReportAck() {
    openReportPreview("e80c2750-f080-e411-940d-00155d016613", "383067CE-E48F-4F8D-BBFA-DF9E333F8699", "Acknowledgement of Receipt");
}

//Commerical Co-venture Report Deficiency   
function CVReportDef() {
    openReportPreview("9c2b515f-fe80-e411-940d-00155d016613", "284D9600-E2B0-438C-9267-9D0EBCDE6E88", "Coventure Report Deficiency Letter");
}

/// PFR

// PFR Acknowledgement
function pfrAcknowledge() {
    openReportPreview("532a1634-256e-e411-940a-00155d0168c7", "41D0E935-4B82-4641-908F-ADDF94005ACC", "Acknowledge Letter");
}

// Annual renew
function pfrAnnualRenew() {
    openReportPreview("34a2e300-c76b-e411-9409-00155d0168c7", "E2BE29F4-3AB2-49C0-B7F8-FE9E2390F064", "PFR Annual Renewal Notice");
}

// Bond Notice
function pfrBondNotice() {
    openReportPreview("b83921a5-d46b-e411-9409-00155d0168c7", "1DC74097-1CA0-4AEF-A49A-80A8083C8E7E", "PFR Notice of Receipt of Bond Cancelation Letter");
}

// Unregisterd PFR
function pfrUnregistered() {
    openReportPreview("73cb427b-897f-e411-940d-00155d016613", "C990B57A-B397-4624-881D-02E61ED3198D", "Notice of Unregistered Professional Fund Raiser");
}

//  Acknowledgement & Acceptance Letter � Receipt of Bond 
function pfrBondAck() {
    openReportPreview("7254d187-5780-e411-940d-00155d016613", "01A055A8-4257-432E-8031-C8F463E792EB", "Acknowledgement of Receipt of Bond");
}

function pfrContractReq() {
    openReportPreview("313ACCBD-3F75-E411-940B-00155D016613", "f11573fb-5a2a-4074-9763-6f35172fdb78", "Contract Request letter");
}

/// PFR Registration

function pfrRegIniAck() {
    openReportPreview("24F2BB31-0385-E411-940E-00155DC992F0", "BA45BF29-E927-4BF1-8264-DB3220001C9A", "Acknowledgment of Receipt of Initial Registration");
}

function pfrRegRenewAck() {
    openReportPreview("243F39C0-8C7F-E411-940D-00155D016613", "D5FA9021-A53D-4C21-A4D8-1FD549524D14", "Acknowledgement of Receipt of Renewal Registration");
}

function pfrRegRenewApproval() {
    reportInProgress();
    //openReportPreview("", "");
}

function pfrRegApprovenumber() {
    openReportPreview("AEE51DF4-947F-E411-940D-00155D016613", "2de08732-8d5a-4481-8a9f-f54000f239da", "Approval Letter and Assignment of PFR Number for Initial Registration");
}

function pfrRegDeficiency() {
    openReportPreview("825CD717-5C75-E411-940B-00155D016613", "483dba11-ebe8-4077-8cf7-345cf76e8471", "PFR Registration Deficiency Letter");
}


/// PFR Contract

// PFR Contract Acknowledgment
function PFRContractAck() {
    openReportPreview("5371DBAF-6380-E411-940D-00155D016613", "E4320584-88E3-4A17-A8D0-200C79381137", "Contract Acknowledgement Letter");
}

//PFR Contract Deficiency   
function PFRContractDef() {
    openReportPreview("BEFD557F-0A85-E411-940E-00155DC992F0", "049c0205-6b55-4e71-90a8-0ffae64e8a1e", " Deficiency letter for contract");
}

function setdefaultPFRFee() {
    if (Xrm.Page.ui.getFormType() == 1) {
        Xrm.Page.getAttribute("crs_registratonfeedue").setValue(pfrregistrationfee)
    }
}

function charityRegInitial() {
    if (Xrm.Page.getAttribute("crs_charityid").getValue() != null && Xrm.Page.ui.getFormType() == 1) {
        var charityId = Xrm.Page.getAttribute("crs_charityid").getValue()[0].id;
        charityId = charityId.replace("{", "");
        charityId = charityId.replace("}", "");
        var retrieveEntityQuery = new Sdk.Query.QueryByAttribute("crs_charityinitialregistration");
        retrieveEntityQuery.setColumnSet("crs_name");
        retrieveEntityQuery.addAttributeValue(new Sdk.Lookup("crs_charityid", new Sdk.EntityReference("account", charityId)));
        try {
            registrationColl = Sdk.Sync.retrieveMultiple(retrieveEntityQuery);
            if (registrationColl.getCount() == 0) {
                Xrm.Page.getAttribute("crs_intialorrenewal").setValue(false);
            }
            else {
                Xrm.Page.getAttribute("crs_intialorrenewal").setValue(true);
            }
        }
        catch (e) {
            throw new Error("Error on setting Initial or Renewal: " + e.message);
        }
    }
}

function PFRRegInitial() {
    if (Xrm.Page.getAttribute("crs_pfrid").getValue() && Xrm.Page.ui.getFormType() == g_FORM_TYPE_CREATE_MODE) {
        
        var pfrId = Xrm.Page.getAttribute("crs_pfrid").getValue()[0].id;
        pfrId = pfrId.replace("{", "");
        pfrId = pfrId.replace("}", "");
        var retrieveEntityQuery = new Sdk.Query.QueryByAttribute("crs_pfrrenewal");
        retrieveEntityQuery.setColumnSet("crs_name");
        retrieveEntityQuery.addAttributeValue(new Sdk.Lookup("crs_pfrid", new Sdk.EntityReference("crs_pfr", pfrId)));
        try {
            registrationColl = Sdk.Sync.retrieveMultiple(retrieveEntityQuery);
            if (registrationColl.getCount() == 0) {
                Xrm.Page.getAttribute("crs_initalorrenewal").setValue(false);
            }
            else {
                Xrm.Page.getAttribute("crs_initalorrenewal").setValue(true);
            }
        }
        catch (e) {
            throw new Error("Error on setting Initial or Renewal: " + e.message);
        }
    }
}

var CoventureFeeDue = 10;
function setCommCoventureFeeDue() {
    if (Xrm.Page.ui.getFormType() == 1) {
        Xrm.Page.getAttribute("crs_fillingfeedue").setValue(CoventureFeeDue);
    }
}

//Modified this according to requirement - 58822 to change the default value from $10 to $30
var SubContractFeeDue = 30;
function setSubContractFeeDue() {
    if (Xrm.Page.ui.getFormType() == 1) {
        Xrm.Page.getAttribute("crs_fillingfee").setValue(SubContractFeeDue);
    }
}

var SRFeeDue = 10;
function setSR1FeeDue() {
    if (Xrm.Page.ui.getFormType() == 1) {
        Xrm.Page.getAttribute("crs_feedue").setValue(SRFeeDue);
        Xrm.Page.getAttribute("crs_feedue").setSubmitMode("always");
    }
}

var SolicitorFeeAmount = 15;
function setSolicitorFeeDue() {
    if (Xrm.Page.ui.getFormType() == 1) {
        Xrm.Page.getAttribute("crs_feedue").setValue(SolicitorFeeAmount)
        Xrm.Page.getAttribute("crs_feedue").setSubmitMode("always");
    }
}

var CommercialCoventureFee = 30;
function setCommercialCoventureFee() {
    if (Xrm.Page.ui.getFormType() == 1) {
        Xrm.Page.getAttribute("crs_feedue").setValue(CommercialCoventureFee);
    }
}

var PFRBondAmount = 20000;
function setdefaultPFRBondAmount() {
    if (Xrm.Page.ui.getFormType() == 1) {
        Xrm.Page.getAttribute("crs_bondamount").setValue(PFRBondAmount);
    }
}

function PFRRegDueDateSet() {
    var regCalendarYear = Xrm.Page.getAttribute("crs_registrationcalendaryear").getValue();
    
    /* In JavaScript, Date Object January is 0, and December is 11*/
    if (regCalendarYear != null) {
        /* Registration Beginning Date */
        Xrm.Page.getAttribute("crs_registrationbeginningdate").setValue(new Date(regCalendarYear - 1, 6, 1));
        
        /* Registration End/Expiration Date */
        var regEndDate = new Date(regCalendarYear, 5, 30);
        Xrm.Page.getAttribute("crs_registrationendingdate").setValue(regEndDate);
        
        /* Registration Due Date */
        Xrm.Page.getAttribute("crs_registrationduedate").setValue(regEndDate);
        Xrm.Page.getAttribute("crs_registrationduedate").fireOnChange();
        
        /* Registration Next Registration Due Date */ 

        //Xrm.Page.getAttribute("crs_nextregistrationduedate").setValue(regEndDate); 
        
        /*******Modified 4/24/2017 based on new rules 
        //Should be the same date as the  Registration end date/Expiration date but the next year
        Next Registration Due date = Registration End date year(crs_registrationendingdate) +1year
        **********/
         var nextRegDueDate = regEndDate.setFullYear(regEndDate.getFullYear()+ 1);
         Xrm.Page.getAttribute("crs_nextregistrationduedate").setValue(nextRegDueDate);

    }
    else {
        /* Registration Beginning Date */
        Xrm.Page.getAttribute("crs_registrationbeginningdate").setValue(null);

        /* Registration End/Expiration Date */
        Xrm.Page.getAttribute("crs_registrationendingdate").setValue(null);

        /* Registration Due Date */
        Xrm.Page.getAttribute("crs_registrationduedate").setValue(null);
        Xrm.Page.getAttribute("crs_registrationduedate").fireOnChange();

        /* Registration Next Registration Due Date */
        Xrm.Page.getAttribute("crs_nextregistrationduedate").setValue(null);
    }

    Xrm.Page.getAttribute("crs_registrationbeginningdate").setSubmitMode("always");
    Xrm.Page.getAttribute("crs_registrationendingdate").setSubmitMode("always");
    Xrm.Page.getAttribute("crs_registrationduedate").setSubmitMode("always");
    Xrm.Page.getAttribute("crs_nextregistrationduedate").setSubmitMode("always");
}

function calculatePercentageCharityCampaign() {
    if (Xrm.Page.getAttribute("crs_grossrevenue").getValue() != null) {
        var grossAmount = Xrm.Page.getAttribute("crs_grossrevenue").getValue();
        if (Xrm.Page.getAttribute("crs_amounttocharity").getValue() != null) {
            var charityAmount = Xrm.Page.getAttribute("crs_amounttocharity").getValue();
            var percentageToCharity = (charityAmount * 100) / grossAmount;
            Xrm.Page.getAttribute("crs_presentagetocharity").setValue(percentageToCharity);
        }

        if (Xrm.Page.getAttribute("crs_amounttopfr").getValue() != null) {
            var pfrAmount = Xrm.Page.getAttribute("crs_amounttopfr").getValue();
            var percentageToPFR = (pfrAmount * 100) / grossAmount;
            Xrm.Page.getAttribute("crs_percentagetopfr").setValue(percentageToPFR);
        }
    }
}

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
            alert("Phone number doesn’t contains 10 digits.");
        }
    }
}

function RetriveOdataResults(url) {
    var ClientUrl = Xrm.Page.context.getClientUrl();
    var oDataUri = ClientUrl + url;

    if (typeof jQuery == 'undefined') {

    } else {
        var jSonArray = new Array();
        jQuery.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            url: oDataUri,
            async: false,
            beforeSend: function (XMLHttpRequest) {
                //Specifying this header ensures that the results will be returned as JSON.            
                XMLHttpRequest.setRequestHeader("Accept", "application/json");
            },
            success: function (data, textStatus, XmlHttpRequest) {
                if (data && data.d != null) {

                    jSonArray.push(data.d);
                }
            },
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                alert("Error :  has occured during retrieval of the Subjects");
            }
        });

        return jSonArray;
    }
}

/*
On Create form, Sets Portal Registration status to Paid Registered
If the registration is created from Portal this field is set automatically from Portal itself, but if Registration record is 
Created from CRM form, this field never gets its value hence below script sets portal registration status value depending on Charity State
*/
function SetPortalRegistrationStatus() {
    var formType = Xrm.Page.ui.getFormType();
    if (formType == 1) {
        //3-Paid/Registered
        Xrm.Page.getAttribute("crs_portalregistrationstatus").setValue(3);
    }
}