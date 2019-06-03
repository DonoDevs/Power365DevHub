// <copyright file="PrePFRRegistrationUpdate.cs" company="Microsoft">
// Copyright (c) 2015 All Rights Reserved
// </copyright>
// <author>Microsoft</author>
// <date>12/18/2015 11:24:29 AM</date>
// <summary>Implements the PrePFRRegistrationUpdate Plugin.</summary>

namespace NPRP.PortalAlignment.Plugins
{
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Linq;
    using System.ServiceModel;
    using System.Text;
    using System.Threading.Tasks;
    using Microsoft.Xrm.Sdk;
    /// <summary>
    /// Pre PFR RegistrationUpdate
    /// </summary>
    public class PrePFRRegistrationUpdate : Plugin
    {
        /// <summary>
        /// Alias of the image registered for the snapshot of the 
        /// primary entity's attributes before the core platform operation executes.
        /// The image contains the following attributes:
        /// Charity ID
        /// </summary>
        private readonly string preImageAlias = "PreImage";

        /// <summary>
        /// Initializes a new instance of the <see cref="PrePFRRegistrationUpdate"/> class.
        /// </summary>
        public PrePFRRegistrationUpdate()
            : base(typeof(PrePFRRegistrationUpdate))
        {
            RegisteredEvents.Add(new Tuple<int, string, string, Action<LocalPluginContext>>(20, "Update", "crs_pfrrenewal", new Action<LocalPluginContext>(this.ExecutePrePFRRegistrationUpdate)));
        }

        /// <summary>
        /// Executes the plug-in.
        /// </summary>
        /// <param name="localContext">The <see cref="LocalPluginContext"/> which contains the
        /// <see cref="IPluginExecutionContext"/>,
        /// <see cref="IOrganizationService"/>
        /// and <see cref="ITracingService"/>
        /// </param>
        /// <remarks>
        /// For improved performance, Microsoft Dynamics CRM caches plug-in instances.
        /// The plug-in's Execute method should be written to be stateless as the constructor
        /// is not called for every invocation of the plug-in. Also, multiple system threads
        /// could execute the plug-in at the same time. All per invocation state information
        /// is stored in the context. This means that you should not use global variables in plug-ins.
        /// </remarks>
        protected void ExecutePrePFRRegistrationUpdate(LocalPluginContext localContext)
        {
            if (localContext == null)
            {
                throw new ArgumentNullException("localContext");
            }

            ITracingService tracingService = localContext.TracingService;
            IPluginExecutionContext context = localContext.PluginExecutionContext;
            IOrganizationService orgService = localContext.OrganizationService;

            Entity targetEntity = context.InputParameters.ContainsKey(Resource.Target) ? context.InputParameters[Resource.Target] as Entity : null;
            Entity preImageEntity = (context.PreEntityImages != null && context.PreEntityImages.Contains(this.preImageAlias)) ? context.PreEntityImages[this.preImageAlias] : null;
            //throw new InvalidPluginExecutionException("Target entity:" + targetEntity.LogicalName + "PreimageEntity is:"+ preImageEntity.LogicalName);
            if (targetEntity == null || preImageEntity == null)
            {
                return;
            }

            try
            {
                //targetEntity["crs_webformsteppageid"] = 0;
                //Initialize the preimageEntity webform step to 0 so that the record can be created, if not, the lugin will throw a given key dictionary error


                
                //Integer Field to determine what webform step the user is on
                //int pfrWebformStep = (int)preImageEntity["crs_webformsteppageid"];
                string targetpfrWebformStep = (string)targetEntity["crs_webformstepid"];
                //throw new InvalidPluginExecutionException("does it  exists (preimage) " + preImageEntity.Contains("crs_webformsteppageid") + "-" + (preImageEntity["crs_webformsteppageid"] == null + "does it  exists (preimage) " + targetEntity.Contains("crs_webformsteppageid") + "-" + (targetEntity["crs_webformsteppageid"] == null)));
                //throw new InvalidPluginExecutionException("does it  exists (targetimage) " + targetEntity.Contains("crs_webformsteppageid") + "-" + (targetEntity["crs_webformsteppageid"] == null));

                SubgridValidatorHelper subgridHelper = new SubgridValidatorHelper();
                //throw new InvalidPluginExecutionException("Webform step:" + targetpfrWebformStep);
                
                
                
                if (targetpfrWebformStep != null && targetpfrWebformStep == "cff0a988-e567-e711-80f3-005056900bb7")
                {
                    //throw new InvalidPluginExecutionException(" In webform 4.2 Logic:" + targetpfrWebformStep);
                    //Boolean field For the PFR Percentage Owners (crs_pfrpercentageowner) subgrid
                    //bool officersOwnTenPercentOrMore = (bool)preImageEntity["crs_pfrregownership"];
                    bool officersOwnTenPercentOrMore = (bool)targetEntity["crs_pfrregownership"];
                    //Boolean field For the PFR Percentage Owners other Businesses (crs_pfrpercentageownersotherbusiness) subgrid
                    bool officersOtherbusiness = (bool)targetEntity["crs_crs_pfrregownershipotherbusinesses"];
                    //Boolean field for the  PFR Capital Stock Owners (crs_pfrregcapitalstockowner) subgrid
                    bool pfrRegCapitalStockOwner = (bool)targetEntity["crs_pfrregcapitalstockowner"];
                    //Boolean field for the PFR Contracted Charitable Organizations (crs_pfrcontractedcharitableorganization) subgrid
                    bool pfrRegCapitalStockOwnerCharitableOrg = (bool)targetEntity["crs_pfrregcapitalstockownercharorg"];
                    //Boolean field for the PFR Charitable Organization Independent (crs_pfrindependentcharitableorg) subgrid
                    bool registrantHaveCharitableOrgContractsIndependent = (bool)targetEntity["crs_pfrregindependentnjcharorgcontract"];
                    //Boolean field for the PFR Uses SubContractors(crs_pfrusessubcontractor) subgrid
                    bool usesSubcontractor = (bool)targetEntity["crs_usesasubcontractor"];
                    //Boolean field for the PFR Campaign Lists (crs_pfrcampaignlist) subgrid
                    bool conductedCharitableCampaigns = (bool)targetEntity["crs_conductedcampaigns"];
                    //Boolean field for the PFR Charitable Org Solicitations (crs_pfrcharitableorgsolicitation) subgrid
                    bool retainedSolicitationActivities = (bool)targetEntity["crs_engagedorretainedsolicitationactivities"];
                    //Boolean field for the PFR Registrant Permits and License (crs_pfrregistrantpermitsandlicense) subgrid
                    bool permitsAndLicenses = (bool)targetEntity["crs_pfrregistrantpermitsandlicenses"];
                   
                    if (officersOwnTenPercentOrMore == true)
                    {
                        
                        Boolean subgrid1 = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_pfrpercentageowner", "crs_pfrreg10percentormoreownerid", 5);
                       
                        if (!subgrid1)//if(subgrid1== false)
                        {
                            throw new InvalidPluginExecutionException("You answered yes to the question: 'Do any of the registrant’s officers, directors, partners and shareholders own 10% or more?' You must enter at least 5 records.");
                        }

                    }
                    if (officersOtherbusiness == true)
                    {
                        Boolean subgrid2 = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_pfrpercentageownersotherbusiness", "crs_pfrregpercentageownerotherbusinid", 5);
                        if (!subgrid2)//if(subgrid2== false)
                        {
                            throw new InvalidPluginExecutionException("You answered yes to the question:'Do any of the registrant’s officers, directors, executive personnel, employees or owners of ten percent (10%) or more of its capital stock also own, control, manage or operate any other business besides the business of fundraising?' You must enter at least 5 records.");
                        }
                    }
                    if (pfrRegCapitalStockOwner == true)
                    {
                        Boolean subgrid3 = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_pfrregcapitalstockowner", "crs_pfrcapitalstockownerid", 5);
                        if (!subgrid3)//if(subgrid3== false)
                        {
                            throw new InvalidPluginExecutionException("You answered yes to the question:'Are any of the registrant’s members, officers, directors, executive personnel or employees the owners of ten percent (10%) or more of its capital stock?' You must enter at least 5 records.");
                        }
                    }
                    if (pfrRegCapitalStockOwnerCharitableOrg == true)
                    {
                        Boolean subgrid4 = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_pfrcontractedcharitableorganization", "crs_pfrregcontractedcharitableorgid", 5);
                        if (!subgrid4)//if(subgrid4== false)
                        {
                            throw new InvalidPluginExecutionException("You answered yes to the question:'Do any of the registrant’s members, officers, directors, executive personnel, employees or owners of ten percent (10%) or more of its capital stock also have any affiliation or association with any client (contracted charitable organization)?' You must enter at least 5 records.");
                        }
                    }
                    if (registrantHaveCharitableOrgContractsIndependent == true)
                    {
                        Boolean subgrid5 = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_pfrindependentcharitableorg", "crs_pfrregcharitableorgindependentid", 5);
                        if (!subgrid5)//if(subgrid5== false)
                        {
                            throw new InvalidPluginExecutionException("You answered yes to the question:'Does the registrant have any contracts with charitable organizations which currently retain the registrant to act as an independent paid fund raiser or fund-raising counsel in the State of New Jersey or partly in the State of New Jersey?' You must enter at least 5 records.");
                        }
                    }
                    if (usesSubcontractor == true)
                    {
                        Boolean subgrid6 = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_pfrusessubcontractor", "crs_pfrregsubcontractorid", 5);
                        if (!subgrid6)//if(subgrid6== false)
                        {
                            throw new InvalidPluginExecutionException("You answered yes to the question:'Does the registrant currently subcontract or assign its rights under contract to any independent paid fund raiser, fund-raising counsel or other entity, or accept responsibility as assigned subcontractor?' You must enter at least 5 records.");
                        }
                    }
                    if (conductedCharitableCampaigns == true)
                    {
                        Boolean subgrid7 = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_pfrcampaignlist", "crs_pfrregcampaignlistid", 5);
                        if (!subgrid7)//if(subgrid7== false)
                        {
                            throw new InvalidPluginExecutionException("You answered yes to the question:'Did the registrant conduct any charitable campaigns in whole or in part during its last fiscal year?' You must enter at least 5 records.");
                        }
                    }
                    if (retainedSolicitationActivities == true)
                    {
                        Boolean subgrid8 = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_pfrcharitableorgsolicitation", "crs_pfrregcharitableorgsolicitationid", 5);
                        if (!subgrid8)//if(subgrid8== false)
                        {
                            throw new InvalidPluginExecutionException("You answered yes to the question:'Have any charitable organizations, within the last five (5) years, engaged or retained the registrant’s services to plan or conduct solicitation activities in the State of New Jersey?' You must enter at least 5 records.");
                        }
                    }
                    if (permitsAndLicenses == true)
                    {
                        Boolean subgrid8 = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_pfrregistrantpermitsandlicense", "crs_pfrregistrantpermitsid", 5);
                        if (!subgrid8)//if(subgrid8== false)
                        {
                            throw new InvalidPluginExecutionException("You answered yes to the question:'Does the registrant have a license, registration or permit from any other state agency where the registrant's services can be engaged or retained as an independent paid fund raiser or fund-raising counsel by a charitable organization (whether or not the registrant actually conducts solicitations for the charity)?' You must enter at least 5 records.");
                        }
                    }

                }
                
                //throw new InvalidPluginExecutionException("Exited 4.2 Logic:" + targetpfrWebformStep);

                if (targetpfrWebformStep != null && targetpfrWebformStep == "407b06b1-e567-e711-80f3-005056900bb7")
                {

                    //throw new InvalidPluginExecutionException(" In webform 4.3 Logic:" + targetpfrWebformStep);
                    //Boolean field for the PFR Charitable Org Donated Tickets (crs_pfrcharitableorgdonatedticket) subgrid
                    bool registrantRepresentedTicket = (bool)targetEntity["crs_registrantrepresentedticket"];
                    

                    if (registrantRepresentedTicket == true)
                    {
                        
                        Boolean subgrid9 = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_pfrcharitableorgdonatedticket", "crs_pfrregcharitableorgticketsdonatid", 5);              
                        if (!subgrid9)//if(subgrid9== false)
                        {
                            throw new InvalidPluginExecutionException("You answered yes to the question: 'Did the registrant, during its solicitations in the last year, represent that tickets to an event would be donated by another for the benefit of a charitable organization?' You must enter at least 5 records.");
                        }
                    }
                }
                if (targetpfrWebformStep == null)
                {
                    return;
                }
                
                
                this.PerformOperation(orgService, targetEntity, preImageEntity);
                // Clear off the acknowledgement related fields which are displayed on the declaration page. This is to ensure that the user explicitly checks them each time
                targetEntity["crs_p_decl_inforeviewed"] = false; 
                targetEntity["crs_p_decl_supportingdocumentsuploaded"] = false;
                targetEntity["crs_p_decl_madeupdaterequestbyNPRP"] = false;
                
            }
            catch (FaultException<OrganizationServiceFault> e)
            {
                Logger.Log(string.Format(CultureInfo.InvariantCulture, "{0} {1}", "Exception: {0}", e.ToString()), null, tracingService);
                throw;
            }
            finally
            {
                Logger.Log(string.Format(CultureInfo.InvariantCulture, "{0} {1}", "Exiting {0}.Execute()", this.ChildClassName), null, tracingService);
            }
        }

        /// <summary>
        /// Perform Operation
        /// </summary>
        /// <param name="orgService">CRM service</param>
        /// <param name="targetEntity">Target Entity</param>
        /// <param name="preImageEntity">Pre Image</param>

        private void PerformOperation(IOrganizationService orgService, Entity targetEntity, Entity preImageEntity)
        {
            PrePFRRegistrationUpdateHelper helper = new PrePFRRegistrationUpdateHelper();
            helper.SetRegistrationDates(targetEntity);
            helper.SetDueAmounts(targetEntity, preImageEntity);


        }

    }
}
