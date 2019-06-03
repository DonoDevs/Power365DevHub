//// This function is added for Requirement No - 58822
//The Filing fee due field will be defaulted to $30  
var FeeDue = 30;

function OnLoad() {
    setPFRContractFeeDue();
    SetReportDueDate();

    var formType = Xrm.Page.ui.getFormType();
    /* We don't want to make these fields required for existing records,
    as the users might not know what data to provide as these records would have been
    created much earlier than this fix */
    if (formType == 1) {
        ChangeCompensationFieldRequirmentLevel();
    }

    ShowPortalSection();
}

function OnSave() {
    SetPortalRegistrationStatus();
}

/*
If the Contract is created from portal, this function shows section "Charity_Portal".
This section contains fields populated by portal.
*/
function ShowPortalSection() {
    var createdByProcess = Xrm.Page.getAttribute("crs_createdbyprocess").getValue();
    //170,960,001 - Portal
    if (createdByProcess == 170960001) {
        Xrm.Page.ui.tabs.get("tab_2").sections.get("Charity_Portal").setVisible(true);
    }
}

function setPFRContractFeeDue() {
    if (Xrm.Page.ui.getFormType() == 1) {
        Xrm.Page.getAttribute("crs_filingfeedue").setValue(FeeDue);
    }
}

// This function is added for Requirement No - 58822
//The Report due date field will be calculated based on 40 days after termination of contract
function SetReportDueDate() {
    var EndDate = Xrm.Page.getAttribute("crs_contractenddate").getValue();
    if (EndDate != null) {
        var date = new Date(EndDate.setDate(EndDate.getDate() + 40));
        Xrm.Page.getAttribute("crs_sr2campaignreportduedate").setValue(date);
        Xrm.Page.data.entity.attributes.get("crs_sr2campaignreportduedate").setSubmitMode("always");
    }
}

// Makes fields mandetory/non mandetory depending on fee type selected
function ChangeCompensationFieldRequirmentLevel() {
    var compensationType=Xrm.Page.getAttribute("crs_compensationtype").getValue();
    switch (compensationType) {
        // faltFee
        case 170960000:
            {
                MakeRequired("crs_percentagetocharity,crs_percentagetopfr", "none");
                MakeRequired("crs_flatfeeamt", "required");
            }
            break;

            //Percentage
        case 170960001:
            {
                MakeRequired("crs_flatfeeamt", "none");
                MakeRequired("crs_percentagetocharity,crs_percentagetopfr", "required");
            }
            break;
            //Combo
        case 170960002:
            {
                MakeRequired("crs_percentagetocharity,crs_percentagetopfr,crs_flatfeeamt", "required");
            }
            break;
        default:
    }

}

//Makes given fields as mandatory or non mandatory depending on parameters passed.
//Pass multiple field schema names as comma seperated values
function MakeRequired(commaSeperatedFieldNames, required) {
    if (commaSeperatedFieldNames != null) {
        var fields = commaSeperatedFieldNames.split(',');
        for (var i = 0; i < fields.length; i++) {
            if (Xrm.Page.getAttribute(fields[i]) != null) {
                if (Xrm.Page.getAttribute(fields[i]).getRequiredLevel() != required) {
                    Xrm.Page.data.entity.attributes.get(fields[i]).setRequiredLevel(required);
                }
            }
        }
    }
}