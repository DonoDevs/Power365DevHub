function CommonLongShortFormQuestionsOnLoad() {
    //Check to see if it was created through the portal or CRM
    if(Xrm.Page.getAttribute("crs_createdbyprocess").getValue() == '170960001')
    {
        //Check the CLS field marker to show/hode The Common, long, Short and Confidential Question tabs
        if (Xrm.Page.getAttribute("crs_cls").getValue() == true) 
        {
            Xrm.Page.ui.tabs.get("common_questions").setVisible(true);
            //Common Question 6 Logic
            if(Xrm.Page.getAttribute("crs_cmnquestion6").getValue() == true)
            {
                    Xrm.Page.ui.controls.get("crs_parentcharityname").setVisible(true);
                    Xrm.Page.getAttribute("crs_parentcharityname").setRequiredLevel("required"); 
                    Xrm.Page.ui.controls.get("crs_njcharitynumbofparentorg").setVisible(true);
                    Xrm.Page.getAttribute("crs_njcharitynumbofparentorg").setRequiredLevel("required");        
            }
            else
            {
                Xrm.Page.ui.controls.get("crs_parentcharityname").setVisible(false);
                Xrm.Page.getAttribute("crs_parentcharityname").setRequiredLevel("none");     
                Xrm.Page.ui.controls.get("crs_njcharitynumbofparentorg").setVisible(false);
                Xrm.Page.getAttribute("crs_njcharitynumbofparentorg").setRequiredLevel("none");  
            }
            //Common Question 12 Logic
            if (Xrm.Page.getAttribute("crs_cmnquestion12").getValue() == true) {
                //Show the Multi line textbox and make it required
                //Xrm.Page.getControl("crs_cmnquestion12yes").setVisible(true);
                Xrm.Page.ui.controls.get("crs_cmnquestion12yes").setVisible(true);
                Xrm.Page.getAttribute("crs_cmnquestion12yes").setRequiredLevel("required");
            }
            else {
                //Do not show the multi line textbox and set the field level to be not required
                //Xrm.Page.getControl("crs_cmnquestion12yes").setVisible(false);
                Xrm.Page.ui.controls.get("crs_cmnquestion12yes").setVisible(false);
                Xrm.Page.getAttribute("crs_cmnquestion12yes").setRequiredLevel("none");
            }
            //Common Question 13 Logic
            if (Xrm.Page.getAttribute("crs_cmnquestion13").getValue() == true) {
                //Show the Multi line textbox and make it required
                Xrm.Page.ui.controls.get("crs_cmnquestioncurrentdba").setVisible(true);
                Xrm.Page.getAttribute("crs_cmnquestioncurrentdba").setRequiredLevel("required");
            }
            else {
                //Do not show the multi line textbox and set the field level to be not required
                Xrm.Page.ui.controls.get("crs_cmnquestioncurrentdba").setVisible(false);
                Xrm.Page.getAttribute("crs_cmnquestioncurrentdba").setRequiredLevel("none");
            }
            //Common Question 14 Logic
            if (Xrm.Page.getAttribute("crs_cmnquestion14").getValue() == true) {
                //Show tthe PFR CoVenture subgrid  
                Xrm.Page.ui.tabs.get("common_questions").sections.get("common_charity_information_pfr_coventure").setVisible(true);
                Xrm.Page.ui.controls.get("crs_cmnquestion14yes").setVisible(true);
                Xrm.Page.getAttribute("crs_cmnquestion14yes").setRequiredLevel("required");
                
            }
            else {
                //Hide the PFR CoVenture subgrid 
                Xrm.Page.ui.tabs.get("common_questions").sections.get("common_charity_information_pfr_coventure").setVisible(false);
                //Do not show the multi line textbox and set the field level to be not required
                Xrm.Page.ui.controls.get("crs_cmnquestion14yes").setVisible(false);
                Xrm.Page.getAttribute("crs_cmnquestion14yes").setRequiredLevel("none");
                
            }


            //If type long form, show longform tab and hide the shortform tab
            if (Xrm.Page.getAttribute("crs_typeofform").getValue() != null && Xrm.Page.getAttribute("crs_typeofform").getValue() == '170960000') {
                Xrm.Page.ui.tabs.get("long_form").setVisible(true);
                Xrm.Page.ui.tabs.get("short_form").setVisible(false);

                //Long Form  Question 1 Logic
                if(Xrm.Page.getAttribute("crs_longquestion1").getValue() == true)
                {
                    //Show the Longform States solicited in Subgrid
                    Xrm.Page.ui.tabs.get("long_form").sections.get("long_form_statessolicited").setVisible(true);            
                }
                else
                {
                    //Hide the Longform States solicited in Subgrid
                    Xrm.Page.ui.tabs.get("long_form").sections.get("long_form_statessolicited").setVisible(false);
                }
                ///Long Form  Question 2 Logic
                if(Xrm.Page.getAttribute("crs_longquestion2").getValue() == true)
                {
                    //Show the Longform Charity Affiliates  Subgrid
                    Xrm.Page.ui.tabs.get("long_form").sections.get("long_form_charityaffiliates").setVisible(true);            
                }
                else
                {
                    //Hide the Longform Charity Affiliates Subgrid
                    Xrm.Page.ui.tabs.get("long_form").sections.get("long_form_charityaffiliates").setVisible(false);
                }
                //Long Form  Question 3 Logic
                if(Xrm.Page.getAttribute("crs_longquestion3").getValue() == true)
                    {
                        Xrm.Page.ui.controls.get("crs_longquestion3yes").setVisible(true);
                        Xrm.Page.getAttribute("crs_longquestion3yes").setRequiredLevel("required");       
                    }
                    else
                    {
                        Xrm.Page.ui.controls.get("crs_longquestion3yes").setVisible(false);
                        Xrm.Page.getAttribute("crs_longquestion3yes").setRequiredLevel("none"); 
                    }
                //Long Form  Question 4 Logic
                if(Xrm.Page.getAttribute("crs_longquestion4").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("long_form").sections.get("longformquestion4yessection").setVisible(true);
                    Xrm.Page.getAttribute("crs_longquestion4yes").setRequiredLevel("required");            
                }
                else
                {
                    //Do not show the multi line textbox and set the field level to be not required
                    Xrm.Page.ui.tabs.get("long_form").sections.get("longformquestion4yessection").setVisible(false);
                    Xrm.Page.getAttribute("crs_longquestion4yes").setRequiredLevel("none");
                }
                //Long Form  Question 11 Logic
                if(Xrm.Page.getAttribute("crs_longquestion11").getValue() == true)
                {
                    //Show the Longform Highest Paid Employees  Subgrid
                    Xrm.Page.ui.tabs.get("long_form").sections.get("long_form_highestpaidemployees").setVisible(true);           
                }
                else
                {
                    //Hide the Longform Highest Paid Employees  Subgrid
                    Xrm.Page.ui.tabs.get("long_form").sections.get("long_form_highestpaidemployees").setVisible(false);    
                }           
            //If type shortform form, show shortform tab and hide the longform tab
            } else if (Xrm.Page.getAttribute("crs_typeofform").getValue() != null && Xrm.Page.getAttribute("crs_typeofform").getValue() == '170960001') {
                Xrm.Page.ui.tabs.get("long_form").setVisible(false);
                Xrm.Page.ui.tabs.get("short_form").setVisible(true);

                //ShorForm Question 1 logic
                if(Xrm.Page.getAttribute("crs_shrtquestion1").getValue() == true)
                {
                    //Show the Short Question States Solicited In Subgrid
                    Xrm.Page.ui.tabs.get("short_form").sections.get("short_form_solicitedstates").setVisible(true);
                }
                else
                {
                    //Hide the Short Question States Solicited In Subgrid
                    Xrm.Page.ui.tabs.get("short_form").sections.get("short_form_solicitedstates").setVisible(false);
                }
                //ShorForm Question 6 logic
                if(Xrm.Page.getAttribute("crs_shrtquestion6").getValue() == true)
                {
                    //Show the Short Question Highest Compensated Employees Subgrid
                    Xrm.Page.ui.tabs.get("short_form").sections.get("short_form_question6").setVisible(true);
                }
                else
                {
                    //Hide the Short Question Highest Compensated Employees Subgrid
                    Xrm.Page.ui.tabs.get("short_form").sections.get("short_form_question6").setVisible(false);
                }
            }
        Xrm.Page.ui.tabs.get("confidential_information").setVisible(true);
        } else {
            Xrm.Page.ui.tabs.get("common_questions").setVisible(false);
            Xrm.Page.ui.tabs.get("short_form").setVisible(false);
            Xrm.Page.ui.tabs.get("long_form").setVisible(false);
            Xrm.Page.ui.tabs.get("confidential_information").setVisible(false);

        }
        
    }else{
            Xrm.Page.ui.tabs.get("common_questions").setVisible(false);
            Xrm.Page.ui.tabs.get("short_form").setVisible(false);
            Xrm.Page.ui.tabs.get("long_form").setVisible(false);
            Xrm.Page.ui.tabs.get("confidential_information").setVisible(false);
    }
    
}


function CommonLongShortFormQuestionsOnChange() {
    //Check to see if it was crewated through the portal or CRM
    if(Xrm.Page.getAttribute("crs_createdbyprocess").getValue() == '170960001')
    {
        //Check the CLS field marker to show/hode The Common, long, Short and Confidential Question tabs
        if (Xrm.Page.getAttribute("crs_cls").getValue() == true) 
        {
            Xrm.Page.ui.tabs.get("common_questions").setVisible(true);
            //Common Question 6 Logic
            if(Xrm.Page.getAttribute("crs_cmnquestion6").getValue() == true)
            {
                    Xrm.Page.ui.controls.get("crs_parentcharityname").setVisible(true);
                    Xrm.Page.getAttribute("crs_parentcharityname").setRequiredLevel("required"); 
                    Xrm.Page.ui.controls.get("crs_njcharitynumbofparentorg").setVisible(true);
                    Xrm.Page.getAttribute("crs_njcharitynumbofparentorg").setRequiredLevel("required");        
            }
            else
            {
                Xrm.Page.ui.controls.get("crs_parentcharityname").setVisible(false);
                Xrm.Page.getAttribute("crs_parentcharityname").setRequiredLevel("none");     
                Xrm.Page.ui.controls.get("crs_njcharitynumbofparentorg").setVisible(false);
                Xrm.Page.getAttribute("crs_njcharitynumbofparentorg").setRequiredLevel("none");  
            }
            //Common Question 12 Logic
            if (Xrm.Page.getAttribute("crs_cmnquestion12").getValue() == true) {
                //Show the Multi line textbox and make it required
                //Xrm.Page.getControl("crs_cmnquestion12yes").setVisible(true);
                Xrm.Page.ui.controls.get("crs_cmnquestion12yes").setVisible(true);
                Xrm.Page.getAttribute("crs_cmnquestion12yes").setRequiredLevel("required");
            }
            else {
                //Do not show the multi line textbox and set the field level to be not required
                //Xrm.Page.getControl("crs_cmnquestion12yes").setVisible(false);
                Xrm.Page.ui.controls.get("crs_cmnquestion12yes").setVisible(false);
                Xrm.Page.getAttribute("crs_cmnquestion12yes").setRequiredLevel("none");
            }
            //Common Question 13 Logic
            if (Xrm.Page.getAttribute("crs_cmnquestion13").getValue() == true) {
                //Show the Multi line textbox and make it required
                Xrm.Page.ui.controls.get("crs_cmnquestioncurrentdba").setVisible(true);
                Xrm.Page.getAttribute("crs_cmnquestioncurrentdba").setRequiredLevel("required");
            }
            else {
                //Do not show the multi line textbox and set the field level to be not required
                Xrm.Page.ui.controls.get("crs_cmnquestioncurrentdba").setVisible(false);
                Xrm.Page.getAttribute("crs_cmnquestioncurrentdba").setRequiredLevel("none");
            }
            //Common Question 14 Logic
            if (Xrm.Page.getAttribute("crs_cmnquestion14").getValue() == true) {
                //Show tthe PFR CoVenture subgrid  
                Xrm.Page.ui.tabs.get("common_questions").sections.get("common_charity_information_pfr_coventure").setVisible(true);
                Xrm.Page.ui.controls.get("crs_cmnquestion14yes").setVisible(true);
                Xrm.Page.getAttribute("crs_cmnquestion14yes").setRequiredLevel("required");
                
            }
            else {
                //Hide the PFR CoVenture subgrid 
                Xrm.Page.ui.tabs.get("common_questions").sections.get("common_charity_information_pfr_coventure").setVisible(false);
                //Do not show the multi line textbox and set the field level to be not required
                Xrm.Page.ui.controls.get("crs_cmnquestion14yes").setVisible(false);
                Xrm.Page.getAttribute("crs_cmnquestion14yes").setRequiredLevel("none");
                
            }


            //If type long form, show longform tab and hide the shortform tab
            if (Xrm.Page.getAttribute("crs_typeofform").getValue() != null && Xrm.Page.getAttribute("crs_typeofform").getValue() == '170960000') {
                Xrm.Page.ui.tabs.get("long_form").setVisible(true);
                Xrm.Page.ui.tabs.get("short_form").setVisible(false);

                //Long Form  Question 1 Logic
                if(Xrm.Page.getAttribute("crs_longquestion1").getValue() == true)
                {
                    //Show the Longform States solicited in Subgrid
                    Xrm.Page.ui.tabs.get("long_form").sections.get("long_form_statessolicited").setVisible(true);            
                }
                else
                {
                    //Hide the Longform States solicited in Subgrid
                    Xrm.Page.ui.tabs.get("long_form").sections.get("long_form_statessolicited").setVisible(false);
                }
                ///Long Form  Question 2 Logic
                if(Xrm.Page.getAttribute("crs_longquestion2").getValue() == true)
                {
                    //Show the Longform Charity Affiliates  Subgrid
                    Xrm.Page.ui.tabs.get("long_form").sections.get("long_form_charityaffiliates").setVisible(true);            
                }
                else
                {
                    //Hide the Longform Charity Affiliates Subgrid
                    Xrm.Page.ui.tabs.get("long_form").sections.get("long_form_charityaffiliates").setVisible(false);
                }
                //Long Form  Question 3 Logic
                if(Xrm.Page.getAttribute("crs_longquestion3").getValue() == true)
                {
                        Xrm.Page.ui.controls.get("crs_longquestion3yes").setVisible(true);
                        Xrm.Page.getAttribute("crs_longquestion3yes").setRequiredLevel("required");       
                }
                else
                {
                        Xrm.Page.ui.controls.get("crs_longquestion3yes").setVisible(false);
                        Xrm.Page.getAttribute("crs_longquestion3yes").setRequiredLevel("none"); 
                }
                //Long Form  Question 4 Logic
                if(Xrm.Page.getAttribute("crs_longquestion4").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("long_form").sections.get("longformquestion4yessection").setVisible(true);
                    Xrm.Page.getAttribute("crs_longquestion4yes").setRequiredLevel("required");            
                }
                else
                {
                    //Do not show the multi line textbox and set the field level to be not required
                    Xrm.Page.ui.tabs.get("long_form").sections.get("longformquestion4yessection").setVisible(false);
                    Xrm.Page.getAttribute("crs_longquestion4yes").setRequiredLevel("none");
                }
                //Long Form  Question 11 Logic
                if(Xrm.Page.getAttribute("crs_longquestion11").getValue() == true)
                {
                    //Show the Longform Highest Paid Employees  Subgrid
                    Xrm.Page.ui.tabs.get("long_form").sections.get("long_form_highestpaidemployees").setVisible(true);           
                }
                else
                {
                    //Hide the Longform Highest Paid Employees  Subgrid
                    Xrm.Page.ui.tabs.get("long_form").sections.get("long_form_highestpaidemployees").setVisible(false);    
                }           
            //If type shortform form, show shortform tab and hide the longform tab
            } else if (Xrm.Page.getAttribute("crs_typeofform").getValue() != null && Xrm.Page.getAttribute("crs_typeofform").getValue() == '170960001') {
                Xrm.Page.ui.tabs.get("long_form").setVisible(false);
                Xrm.Page.ui.tabs.get("short_form").setVisible(true);

                //ShorForm Question 1 logic
                if(Xrm.Page.getAttribute("crs_shrtquestion1").getValue() == true)
                {
                    //Show the Short Question States Solicited In Subgrid
                    Xrm.Page.ui.tabs.get("short_form").sections.get("short_form_solicitedstates").setVisible(true);
                }
                else
                {
                    //Hide the Short Question States Solicited In Subgrid
                    Xrm.Page.ui.tabs.get("short_form").sections.get("short_form_solicitedstates").setVisible(false);
                }
                //ShorForm Question 6 logic
                if(Xrm.Page.getAttribute("crs_shrtquestion6").getValue() == true)
                {
                    //Show the Short Question Highest Compensated Employees Subgrid
                    Xrm.Page.ui.tabs.get("short_form").sections.get("short_form_question6").setVisible(true);
                }
                else
                {
                    //Hide the Short Question Highest Compensated Employees Subgrid
                    Xrm.Page.ui.tabs.get("short_form").sections.get("short_form_question6").setVisible(false);
                }
            }
        Xrm.Page.ui.tabs.get("confidential_information").setVisible(true);
        } else {
            Xrm.Page.ui.tabs.get("common_questions").setVisible(false);
            Xrm.Page.ui.tabs.get("short_form").setVisible(false);
            Xrm.Page.ui.tabs.get("long_form").setVisible(false);
            Xrm.Page.ui.tabs.get("confidential_information").setVisible(false);

        }
        
    }else{
            Xrm.Page.ui.tabs.get("common_questions").setVisible(false);
            Xrm.Page.ui.tabs.get("short_form").setVisible(false);
            Xrm.Page.ui.tabs.get("long_form").setVisible(false);
            Xrm.Page.ui.tabs.get("confidential_information").setVisible(false);
    }
    
}






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
    Xrm.Page.getAttribute("crs_charitystate").setSubmitMode("always");
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

                    //If NOT the charity�s CHARITY TYPE is fraternal, patriotic, social, alumni, historical society, or veterans
                    //If use PFR (gross contributions is Not Applicable in this case)   Then  Long Form
                    //If it�s gross contributions > $25,000 (use PFR is Not applicable in this case) Then Long Form

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