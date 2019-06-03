//<****************************************************Charity Registration Subgrid Record Validation Plugin Code. Last Updated 8/9/2017*************************************************************************************************>
/*<Code Summary>
 * *Donovan Goode
This part of the plugin is to validate whether or not the child entities(subgrids) on certain webform steps have at least 5 records if the user answers 'Yes' on 
Certain Boolean Fields
 */
namespace NJDCA.PortalAlignment.Plugins
{
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Linq;
    using System.ServiceModel;
    using System.Text;
    using System.Threading.Tasks;
    using Microsoft.Xrm.Sdk;

    public class PreCharityRegistrationUpdateSubgridValidation: Plugin
    {
        /// <summary>
        /// Alias of the image registered for the snapshot of the 
        /// primary entity's attributes before the core platform operation executes.
        /// The image contains the following attributes:
        /// Charity ID
        /// </summary>
        private readonly string preImageAlias = "PreImage";


        /// <summary>
        /// Initializes a new instance of the <see cref="PreCharityRegistrationUpdateSubgridValidation"/> class.
        /// </summary>
        public PreCharityRegistrationUpdateSubgridValidation()
            : base(typeof(PreCharityRegistrationUpdate))
        {
            RegisteredEvents.Add(new Tuple<int, string, string, Action<LocalPluginContext>>(20, "Update", "crs_charityinitialregistration", new Action<LocalPluginContext>(this.ExecutePreCharityRegistrationUpdateSubgridValidation)));
        }




        // <summary>
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
        protected void ExecutePreCharityRegistrationUpdateSubgridValidation(LocalPluginContext localContext)
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

            if (targetEntity == null || preImageEntity == null)
            {
                return;
            }

            try
            {
                //Field to capture the webform step id. This field is set via the client side JavaScript Code written at the webpage level
                string targetCharityRegWebformStep = (string)targetEntity["crs_webformstepid"];

                SubgridValidatorHelper subgridHelper = new SubgridValidatorHelper();

                //Add liquid server server control to the custom rewrite URL for CharitFullPage.aspx. This allows JavaScript and liquid to be ran together to set the webformstep value on page load for the logic to fire.
                //if (targetCharityRegWebformStep != null && targetCharityRegWebformStep == "23f94f36-9d56-e711-80f3-005056900bb7")
                if (targetCharityRegWebformStep != null && targetCharityRegWebformStep == "Charity REG 4.1")
                {
                    bool commonQuestion14 = (bool)targetEntity["crs_cmnquestion14"];

                    if (commonQuestion14 == true)
                    {
                        Boolean cmnsubgrid1 = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_pfrandcoventure", "crs_charityregistrationcoventureidid", 1);

                        if (!cmnsubgrid1)//if(cmnsubgrid1== false)
                        {
                            throw new InvalidPluginExecutionException("You answered yes to the question: 'Has the organization used a commercial co-venture?' Please enter between 1 and 5 records.");
                        }
                    }  
                }
                //Add liquid server server control to the custom rewrite URL for CharitFullPage.aspx. This allows JavaScript and liquid to be ran together to set the webformstep value on page load for the logic to fire.
                //if (targetCharityRegWebformStep != null && targetCharityRegWebformStep == "b504c31b-9f56-e711-80f3-005056900bb7")
                if (targetCharityRegWebformStep != null && targetCharityRegWebformStep == "Charity REG 4.2")
                {
                    bool shortFormQuestion1 = (bool)targetEntity["crs_shrtquestion1"];
                    bool shortFormQuestion6 = (bool)targetEntity["crs_shrtquestion6"];

                    if (shortFormQuestion1 == true)
                    {
                        Boolean shortsubgrid1 = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_statessolicitedin", "crs_charityregstatessolicitedid", 1);

                        if (!shortsubgrid1)//if(shortsubgrid1== false)
                        {
                            throw new InvalidPluginExecutionException("You answered yes to the question: 'Does the organization register or solicit in other states?' Please enter between 1 and 5 records.");
                        }
                    }
                    if (shortFormQuestion6 == true)
                    {
                        Boolean shortsubgrid2 = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_highestpaidemployee", "crs_charityreghighestpaidemployeeid", 1);

                        if (!shortsubgrid2)//if(shortsubgrid2== false)
                        {
                            throw new InvalidPluginExecutionException("You answered yes to the question: 'Does the organization have five employees that are compensated the most?' Please enter between 1 and 5 records.");
                        }
                    }
                    //Added code for the trustees subgrid
                    Boolean shortsubgridTrustees = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_directortrustee", "crs_charityregdirectorid", 1);

                    if (!shortsubgridTrustees)//if(shortsubgrid2== false)
                    {
                        throw new InvalidPluginExecutionException("Please complete the list of Officers, Directors/Trustees.");
                    }
                }
                //Add liquid server server control to the custom rewrite URL for CharitFullPage.aspx. This allows JavaScript and liquid to be ran together to set the webformstep value on page load for the logic to fire.
                //if (targetCharityRegWebformStep != null && targetCharityRegWebformStep == "39f09960-9f56-e711-80f3-005056900bb7")
                if (targetCharityRegWebformStep != null && targetCharityRegWebformStep == "Charity REG 4.3")
                {
                    bool longFormQuestion1 = (bool)targetEntity["crs_longquestion1"];
                    bool longFormQuestion2 = (bool)targetEntity["crs_longquestion2"];
                    bool longFormQuestion11 = (bool)targetEntity["crs_longquestion11"];

                    if (longFormQuestion1 == true)
                    {
                        Boolean longsubgrid1 = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_statessolicitedin", "crs_charityregstatessolicitedid", 1);

                        if (!longsubgrid1)//if(longsubgrid1== false)
                        {
                            throw new InvalidPluginExecutionException("You answered yes to the question: 'Does the organization register or solicit in other states?' Please enter between 1 and 5 records.");
                        }
                    }
                    if (longFormQuestion2 == true)
                    {
                        Boolean longsubgrid2 = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_charityaffiliate", "crs_charityregistrationaffiliateid", 1);

                        if (!longsubgrid2)//if(longsubgrid2== false)
                        {
                            throw new InvalidPluginExecutionException("You answered yes to the question: 'Does the organization have affiliates which share the contributions or other revenue it raised in New Jersey?' Please enter between 1 and 5 records.");
                        }
                    }
                    //Added code for the trustees subgrid
                    Boolean shortsubgridTrustees = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_directortrustee", "crs_charityregdirectorid", 1);

                    if (!shortsubgridTrustees)//if(shortsubgrid2== false)
                    {
                        throw new InvalidPluginExecutionException("Please complete the list of Officers, Directors/Trustees.");
                    }
                    if (longFormQuestion11 == true)
                    {
                        Boolean longsubgrid11 = subgridHelper.SubgridRecordCountIsValid(orgService, targetEntity.Id, "crs_highestpaidemployee", "crs_charityreghighestpaidemployeeid", 1);

                        if (!longsubgrid11)//if(longsubgrid11== false)
                        {
                            throw new InvalidPluginExecutionException("You answered yes to the question: 'Does the organization have five employees that are compensated the most?' Please enter between 1 and 5 records.");
                        }
                    }
                }
                if (targetCharityRegWebformStep == null)
                {
                    return;
                }
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

    }
}
