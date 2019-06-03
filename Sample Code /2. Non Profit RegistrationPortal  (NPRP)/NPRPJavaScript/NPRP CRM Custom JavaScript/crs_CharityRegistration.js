
/*
Onload method for the entity from
*/
function OnLoad() {
    ModifyCharityRegistrationStageOptionsOnLoad();
    SetTypeofCharityOnLoadCreate();
 //   SetPortalRegistrationStatus();
}

/*
Onsave function for onsave event
*/
function OnSave() {
    SetPortalRegistrationStatus();
}

/*
On Create form, Sets Portal Registration status to Paid Registered
If the registration is created from Portal this field is set automatically from Portal itself, but if Registration record is 
Created from CRM form, this field never gets its value hence below script sets portal registration status value depending on Charity State
*/
function SetPortalRegistrationStatus() {
    var formType = Xrm.Page.ui.getFormType();
    var charityState = Xrm.Page.getAttribute("crs_charitystate").getValue();
    //170,960,000 - in process
    //170,960,001 - Deficient
    //170,960,003 - approved
    if (formType == 1 && (charityState == "170960000" || charityState == "170960001" || charityState == "170960003")) {
        //3-Paid/Registered
        Xrm.Page.getAttribute("crs_portalregistrationstatus").setValue(3);
    }
}

// This function is added for Requirement No - 58393
/* Set Type of from as Short form based up on Charity type in CharityRegistration entity  */

function OnchangeofTypeofCharity() {
    if (Xrm.Page.getAttribute("crs_charityid").getValue() != null) {
        var Url = "/XRMServices/2011/OrganizationData.svc/AccountSet?$select=crs_TypeofCharity&$filter=AccountId eq guid'" + Xrm.Page.getAttribute("crs_charityid").getValue()[0].id + "'";
        var Charitydetails = RetriveOdataResults(Url)
        if (Charitydetails != null && Charitydetails[0].results.length > 0) {
            if (Charitydetails[0].results[0].crs_TypeofCharity.Value != null) {
                if (Charitydetails[0].results[0].crs_TypeofCharity.Value != 170960019 && Charitydetails[0].results[0].crs_TypeofCharity.Value != 170960020 && Charitydetails[0].results[0].crs_TypeofCharity.Value != 170960021 && Charitydetails[0].results[0].crs_TypeofCharity.Value != 170960022 && Charitydetails[0].results[0].crs_TypeofCharity.Value != 170960023 && Charitydetails[0].results[0].crs_TypeofCharity.Value != 100000000) {

                    //If NOT the charitys CHARITY TYPE is fraternal, patriotic, social, alumni, historical society, or veterans
                    //If use PFR (gross contributions is Not Applicable in this case)   Then  Long Form
                    //If its gross contributions > $25,000 (use PFR is Not applicable in this case) Then Long Form

                    // Verify Uses PFR is True or not
                    if (Xrm.Page.getAttribute("crs_userpfr").getValue() == true) {
                        Xrm.Page.getAttribute("crs_typeofform").setValue(170960000);
                        return;
                    }
                    else {
                        Xrm.Page.getAttribute("crs_typeofform").setValue(170960001);
                    }
                    // Verify Total Gross Contributions is Greater then 25000 or Not
                    if (Xrm.Page.getAttribute("crs_totalgrosscontributions").getValue() > 25000) {
                        Xrm.Page.getAttribute("crs_typeofform").setValue(170960000);
                        return;
                    }
                    else {
                        Xrm.Page.getAttribute("crs_typeofform").setValue(170960001);
                    }
                }
                else {
                    Xrm.Page.getAttribute("crs_typeofform").setValue(170960001);
                }
            }
            else {
                Xrm.Page.getAttribute("crs_typeofform").setValue(170960001);
            }
        }
    }
}

// Setting Short Form for IF CHARITY TYPE IN (fraternal, patriotic, social, alumni, historical society, veterans)
function SetTypeofCharityOnLoadCreate() {
    
            CharityTypedetails = getCharityType();//Charitydetails[0].results[0].crs_TypeofCharity.Value;
            if (CharityTypedetails == fraternal || CharityTypedetails == patriotic || CharityTypedetails == social || CharityTypedetails == alumni || CharityTypedetails == historicalsociety || CharityTypedetails == veterans) {
                    if (Xrm.Page.ui.getFormType() == 1) {
                        Xrm.Page.getAttribute("crs_typeofform").setValue(Shortform);
                    }
                }
}

function getCharityType() {
    if (Xrm.Page.getAttribute("crs_charityid").getValue() != null) {
        var Url = "/XRMServices/2011/OrganizationData.svc/AccountSet?$select=crs_TypeofCharity&$filter=AccountId eq guid'" + Xrm.Page.getAttribute("crs_charityid").getValue()[0].id + "'";
        var Charitydetails = RetriveOdataResults(Url)
        if (Charitydetails != null && Charitydetails[0].results.length > 0) {
            return Charitydetails[0].results[0].crs_TypeofCharity.Value;
        }
    }
}

// Setting Form Type For Short and Long Form Both Create and Update Mode
function ChangeFormTypeOnFieldChange() {
    Xrm.Page.getAttribute("crs_typeofform").setValue(DetermineFormType());
}

// Determine The Form TYpe Base on Charity Type 
function DetermineFormType() {
    if (CharityTypedetails == veterans) {
        return Shortform;
    }
    else if (Xrm.Page.getAttribute("crs_userpfr").getValue() == true) {
        return Longform;
    }
    else if (Xrm.Page.getAttribute("crs_totalgrosscontributions").getValue() > 25000) {
        return Longform;
    }
    else if (Xrm.Page.getAttribute("crs_totalgrosscontributions").getValue() <= 25000) {
        return Shortform;
    }
    else {
        return null;
    }
}

/*
This Method is only called during the Form Load and removes the [Charity Registration Stage] of "New", so that the users can't create a Registration with that Stage from CRM UI. 
The "New" stage is reserved for all Registrations created from the Portal. After the Payment is done from the Portal, the Stage changes from New to In-Process. 
Although none of the Internal views show the Registrations in "New" Stage, but the users can leverage Advanced Find to see those Registrations, so for that reason, we only remove the "New" option from the 
option set when the current stage of the registration is anything other than "New".
*/
function ModifyCharityRegistrationStageOptionsOnLoad()
{
    var NEW_REGISTRATION_STAGE_OPTION_VALUE = 170960004; /* [Charity Registration Stage] = "New" */

    var charityRegistrationStageOption = Xrm.Page.getAttribute("crs_charitystate").getSelectedOption();    
    
    /* [Charity Registration Stage] <> "New" */
    if (charityRegistrationStageOption.value != NEW_REGISTRATION_STAGE_OPTION_VALUE) {
        /* Remove the Option Set of "New" */
        Xrm.Page.getControl("crs_charitystate").removeOption(NEW_REGISTRATION_STAGE_OPTION_VALUE);
    }   
}