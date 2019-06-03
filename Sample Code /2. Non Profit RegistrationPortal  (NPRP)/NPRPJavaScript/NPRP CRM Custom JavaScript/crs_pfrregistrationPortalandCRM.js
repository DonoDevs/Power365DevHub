function PFRRegistrationPortalandCRMOnLoad(){

    //Check to see if it was created through the portal or CRM
    if(Xrm.Page.getAttribute("crs_createdbyprocess").getValue() == '170960001')
    {
        //Check to see the the PFR Date Check Field the show/hide the new pfr registration sections
        if (Xrm.Page.getAttribute("crs_pfrdatecheck").getValue() == true) 
        {
            //Show Part 1 Tab
            Xrm.Page.ui.tabs.get("pfrregistrationdetails_part1").setVisible(true);
            //Show Part 2 Tab    
            Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").setVisible(true);
                //PFR Question 4a logic
                if(Xrm.Page.getAttribute("crs_pfrregownership").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfrreg_10percentOrMoreOwners").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfrreg_10percentOrMoreOwners").setVisible(false);
                }
                //PFR Question 4b logic
                if(Xrm.Page.getAttribute("crs_crs_pfrregownershipotherbusinesses").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfrowner_otherbusinesses").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfrowner_otherbusinesses").setVisible(false);
                }
                //PFR Question 4c logic
                if(Xrm.Page.getAttribute("crs_pfrregcapitalstockowner").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfr_capitalstockowners").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfr_capitalstockowners").setVisible(false);
                }
                //PFR Question 4d logic
                if(Xrm.Page.getAttribute("crs_pfrregcapitalstockownercharorg").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfr_contractedcharitableorg").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfr_contractedcharitableorg").setVisible(false);
                }
                //PFR Question 5a logic
                if(Xrm.Page.getAttribute("crs_pfrregindependentnjcharorgcontract").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("PFR_Charitable_Organization_Independent").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("PFR_Charitable_Organization_Independent").setVisible(false);
                }
                //PFR Question 5b logic
                if(Xrm.Page.getAttribute("crs_usesasubcontractor").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("PFR_Subcontractor").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("PFR_Subcontractor").setVisible(false);
                }
                //PFR Question 5c logic
                if(Xrm.Page.getAttribute("crs_conductedcampaigns").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("PFRReg_CharitableCampaign").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("PFRReg_CharitableCampaign").setVisible(false);
                }
                //PFR Question 5d logic
                if(Xrm.Page.getAttribute("crs_engagedorretainedsolicitationactivities").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfrreg_charitablesolicitationactivities").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfrreg_charitablesolicitationactivities").setVisible(false);
                }
                //PFR Question 6 logic
                if(Xrm.Page.getAttribute("crs_pfrregistrantpermitsandlicenses").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfrreg_registrantpermits").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfrreg_registrantpermits").setVisible(false);
                }

                //PFR Question 7 logic
                if(Xrm.Page.getAttribute("crs_registrantorofficersconvictedofcharges").getValue() == true)
                {
                    Xrm.Page.ui.controls.get("crs_criminaloffenseinformation").setVisible(true);
                    Xrm.Page.getAttribute("crs_criminaloffenseinformation").setRequiredLevel("required");

                }else{
                    Xrm.Page.ui.controls.get("crs_criminaloffenseinformation").setVisible(false);
                    Xrm.Page.getAttribute("crs_criminaloffenseinformation").setRequiredLevel("none");
                }
            //Show Part 3 Tab
            Xrm.Page.ui.tabs.get("pfrregistrationdetails_part3").setVisible(true);
                //PFR Question 8 logic
                if(Xrm.Page.getAttribute("crs_registrantorderedceaseanddesistfromunlawf").getValue() == true)
                {
                    Xrm.Page.ui.controls.get("crs_registrantunlawfulpracticeinfo").setVisible(true);
                    Xrm.Page.getAttribute("crs_registrantunlawfulpracticeinfo").setRequiredLevel("required");

                }else{
                    Xrm.Page.ui.controls.get("crs_registrantunlawfulpracticeinfo").setVisible(false);
                    Xrm.Page.getAttribute("crs_registrantunlawfulpracticeinfo").setRequiredLevel("none");
                }
                //PFR Question 9 logic
                if(Xrm.Page.getAttribute("crs_fundraisinglicenserevoked").getValue() == true)
                {
                    Xrm.Page.ui.controls.get("crs_fundraisinglicenserevokedinfo").setVisible(true);
                    Xrm.Page.getAttribute("crs_fundraisinglicenserevokedinfo").setRequiredLevel("required");

                }else{
                    Xrm.Page.ui.controls.get("crs_fundraisinglicenserevokedinfo").setVisible(false);
                    Xrm.Page.getAttribute("crs_fundraisinglicenserevokedinfo").setRequiredLevel("none");
                }
                //PFR Question 10 logic
                if(Xrm.Page.getAttribute("crs_voluntaryassuranceordiscontinuance").getValue() == true)
                {
                    Xrm.Page.ui.controls.get("crs_voluntaryassuranceordiscontinuanceinfo").setVisible(true);
                    Xrm.Page.getAttribute("crs_voluntaryassuranceordiscontinuanceinfo").setRequiredLevel("required");

                }else{
                    Xrm.Page.ui.controls.get("crs_voluntaryassuranceordiscontinuanceinfo").setVisible(false);
                    Xrm.Page.getAttribute("crs_voluntaryassuranceordiscontinuanceinfo").setRequiredLevel("none");
                }               
                //PFR Question 11a logic
                if(Xrm.Page.getAttribute("crs_registrantrepresentedticket").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part3").sections.get("pfrreg_chartiableorgdonatedtickets").setVisible(true);
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part3").sections.get("registrant_represented_tickets_questions").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part3").sections.get("pfrreg_chartiableorgdonatedtickets").setVisible(false);
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part3").sections.get("registrant_represented_tickets_questions").setVisible(false);
                }
            
                //PFR Question 11b logic
                if(Xrm.Page.getAttribute("crs_preventeddonatedticketsolicitation").getValue() == true)
                {
                    Xrm.Page.ui.controls.get("crs_nonpreventionexplanation").setVisible(true);
                    Xrm.Page.getAttribute("crs_nonpreventionexplanation").setRequiredLevel("required");

                }else{
                    Xrm.Page.ui.controls.get("crs_nonpreventionexplanation").setVisible(false);
                    Xrm.Page.getAttribute("crs_nonpreventionexplanation").setRequiredLevel("none");
                }
                //PFR Question 11c logic
                if(Xrm.Page.getAttribute("crs_ensuredticketssoldnotgreater").getValue() == true)
                {
                    Xrm.Page.ui.controls.get("crs_ticketssoldexplanation").setVisible(true);
                    Xrm.Page.getAttribute("crs_ticketssoldexplanation").setRequiredLevel("required");

                }else{
                    Xrm.Page.ui.controls.get("crs_ticketssoldexplanation").setVisible(false);
                    Xrm.Page.getAttribute("crs_ticketssoldexplanation").setRequiredLevel("none");
                }
            
        }else{
            Xrm.Page.ui.tabs.get("pfrregistrationdetails_part1").setVisible(false);
            Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").setVisible(false);
            Xrm.Page.ui.tabs.get("pfrregistrationdetails_part3").setVisible(false);       
        }
    }else{
        Xrm.Page.ui.tabs.get("pfrregistrationdetails_part1").setVisible(false);
        Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").setVisible(false);
        Xrm.Page.ui.tabs.get("pfrregistrationdetails_part3").setVisible(false);
    }

}

function PFRRegistrationPortalandCRMOnChange(){

    //Check to see if it was created through the portal or CRM
    if(Xrm.Page.getAttribute("crs_createdbyprocess").getValue() == '170960001')
    {
        //Check to see the the PFR Date Check Field the show/hide the new pfr registration sections
        if (Xrm.Page.getAttribute("crs_pfrdatecheck").getValue() == true) 
        {
            //Show Part 1 Tab
            Xrm.Page.ui.tabs.get("pfrregistrationdetails_part1").setVisible(true);
            //Show Part 2 Tab    
            Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").setVisible(true);
                //PFR Question 4a logic
                if(Xrm.Page.getAttribute("crs_pfrregownership").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfrreg_10percentOrMoreOwners").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfrreg_10percentOrMoreOwners").setVisible(false);
                }
                //PFR Question 4b logic
                if(Xrm.Page.getAttribute("crs_crs_pfrregownershipotherbusinesses").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfrowner_otherbusinesses").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfrowner_otherbusinesses").setVisible(false);
                }
                //PFR Question 4c logic
                if(Xrm.Page.getAttribute("crs_pfrregcapitalstockowner").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfr_capitalstockowners").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfr_capitalstockowners").setVisible(false);
                }
                //PFR Question 4d logic
                if(Xrm.Page.getAttribute("crs_pfrregcapitalstockownercharorg").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfr_contractedcharitableorg").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfr_contractedcharitableorg").setVisible(false);
                }
                //PFR Question 5a logic
                if(Xrm.Page.getAttribute("crs_pfrregindependentnjcharorgcontract").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("PFR_Charitable_Organization_Independent").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("PFR_Charitable_Organization_Independent").setVisible(false);
                }
                //PFR Question 5b logic
                if(Xrm.Page.getAttribute("crs_usesasubcontractor").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("PFR_Subcontractor").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("PFR_Subcontractor").setVisible(false);
                }
                //PFR Question 5c logic
                if(Xrm.Page.getAttribute("crs_conductedcampaigns").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("PFRReg_CharitableCampaign").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("PFRReg_CharitableCampaign").setVisible(false);
                }
                //PFR Question 5d logic
                if(Xrm.Page.getAttribute("crs_engagedorretainedsolicitationactivities").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfrreg_charitablesolicitationactivities").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfrreg_charitablesolicitationactivities").setVisible(false);
                }
                //PFR Question 6 logic
                if(Xrm.Page.getAttribute("crs_pfrregistrantpermitsandlicenses").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfrreg_registrantpermits").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").sections.get("pfrreg_registrantpermits").setVisible(false);
                }

                //PFR Question 7 logic
                if(Xrm.Page.getAttribute("crs_registrantorofficersconvictedofcharges").getValue() == true)
                {
                    Xrm.Page.ui.controls.get("crs_criminaloffenseinformation").setVisible(true);
                    Xrm.Page.getAttribute("crs_criminaloffenseinformation").setRequiredLevel("required");

                }else{
                    Xrm.Page.ui.controls.get("crs_criminaloffenseinformation").setVisible(false);
                    Xrm.Page.getAttribute("crs_criminaloffenseinformation").setRequiredLevel("none");
                }
            //Show Part 3 Tab
            Xrm.Page.ui.tabs.get("pfrregistrationdetails_part3").setVisible(true);
                //PFR Question 8 logic
                if(Xrm.Page.getAttribute("crs_registrantorderedceaseanddesistfromunlawf").getValue() == true)
                {
                    Xrm.Page.ui.controls.get("crs_registrantunlawfulpracticeinfo").setVisible(true);
                    Xrm.Page.getAttribute("crs_registrantunlawfulpracticeinfo").setRequiredLevel("required");

                }else{
                    Xrm.Page.ui.controls.get("crs_registrantunlawfulpracticeinfo").setVisible(false);
                    Xrm.Page.getAttribute("crs_registrantunlawfulpracticeinfo").setRequiredLevel("none");
                }
                //PFR Question 9 logic
                if(Xrm.Page.getAttribute("crs_fundraisinglicenserevoked").getValue() == true)
                {
                    Xrm.Page.ui.controls.get("crs_fundraisinglicenserevokedinfo").setVisible(true);
                    Xrm.Page.getAttribute("crs_fundraisinglicenserevokedinfo").setRequiredLevel("required");

                }else{
                    Xrm.Page.ui.controls.get("crs_fundraisinglicenserevokedinfo").setVisible(false);
                    Xrm.Page.getAttribute("crs_fundraisinglicenserevokedinfo").setRequiredLevel("none");
                }
                //PFR Question 10 logic
                if(Xrm.Page.getAttribute("crs_voluntaryassuranceordiscontinuance").getValue() == true)
                {
                    Xrm.Page.ui.controls.get("crs_voluntaryassuranceordiscontinuanceinfo").setVisible(true);
                    Xrm.Page.getAttribute("crs_voluntaryassuranceordiscontinuanceinfo").setRequiredLevel("required");

                }else{
                    Xrm.Page.ui.controls.get("crs_voluntaryassuranceordiscontinuanceinfo").setVisible(false);
                    Xrm.Page.getAttribute("crs_voluntaryassuranceordiscontinuanceinfo").setRequiredLevel("none");
                }               
                //PFR Question 11a logic
                if(Xrm.Page.getAttribute("crs_registrantrepresentedticket").getValue() == true)
                {
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part3").sections.get("pfrreg_chartiableorgdonatedtickets").setVisible(true);
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part3").sections.get("registrant_represented_tickets_questions").setVisible(true);

                }else{
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part3").sections.get("pfrreg_chartiableorgdonatedtickets").setVisible(false);
                    Xrm.Page.ui.tabs.get("pfrregistrationdetails_part3").sections.get("registrant_represented_tickets_questions").setVisible(false);
                }
            
                //PFR Question 11b logic
                if(Xrm.Page.getAttribute("crs_preventeddonatedticketsolicitation").getValue() == true)
                {
                    Xrm.Page.ui.controls.get("crs_nonpreventionexplanation").setVisible(true);
                    Xrm.Page.getAttribute("crs_nonpreventionexplanation").setRequiredLevel("required");

                }else{
                    Xrm.Page.ui.controls.get("crs_nonpreventionexplanation").setVisible(false);
                    Xrm.Page.getAttribute("crs_nonpreventionexplanation").setRequiredLevel("none");
                }
                //PFR Question 11c logic
                if(Xrm.Page.getAttribute("crs_ensuredticketssoldnotgreater").getValue() == true)
                {
                    Xrm.Page.ui.controls.get("crs_ticketssoldexplanation").setVisible(true);
                    Xrm.Page.getAttribute("crs_ticketssoldexplanation").setRequiredLevel("required");

                }else{
                    Xrm.Page.ui.controls.get("crs_ticketssoldexplanation").setVisible(false);
                    Xrm.Page.getAttribute("crs_ticketssoldexplanation").setRequiredLevel("none");
                }
            
        }else{
            Xrm.Page.ui.tabs.get("pfrregistrationdetails_part1").setVisible(false);
            Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").setVisible(false);
            Xrm.Page.ui.tabs.get("pfrregistrationdetails_part3").setVisible(false);       
        }
    }else{
        Xrm.Page.ui.tabs.get("pfrregistrationdetails_part1").setVisible(false);
        Xrm.Page.ui.tabs.get("pfrregistrationdetails_part2").setVisible(false);
        Xrm.Page.ui.tabs.get("pfrregistrationdetails_part3").setVisible(false);
    }

}