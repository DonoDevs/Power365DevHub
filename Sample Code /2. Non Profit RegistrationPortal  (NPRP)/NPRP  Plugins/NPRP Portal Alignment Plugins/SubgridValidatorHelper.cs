namespace NPRP.PortalAlignment.Plugins
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Microsoft.Xrm.Sdk;
    using Microsoft.Xrm.Sdk.Query;

    public class SubgridValidatorHelper
    {
       

        public bool SubgridRecordCountIsValid(IOrganizationService service, Guid pfregid, string childSubgrid, string parentLookupFieldName, Int32 limit) 
        {
            try
            {
            
            
                QueryExpression query = new QueryExpression(childSubgrid);
                query.Criteria.AddCondition(parentLookupFieldName, ConditionOperator.Equal, pfregid);
                query.ColumnSet = new ColumnSet();
                query.ColumnSet.Columns.Add("crs_name");
                //throw new InvalidPluginExecutionException("The child entity is: " + childSubgrid +"The Parent look up is:"+ parentLookupFieldName + "Parent PFR Registration Record is guid is:" + pfregid);
                //var results = service.RetrieveMultiple(query);
                EntityCollection results = service.RetrieveMultiple(query);
                //throw new InvalidPluginExecutionException("Your record count is: " + results.Entities.Count());
                if (results.Entities.Count() < limit)
                    
                    return false;
                else
                return true;
            /*
                //throw new InvalidPluginExecutionException("Reached th Query Expression");
                QueryByAttribute query = new QueryByAttribute("crs_pfrpercentageowner");
                //query.Criteria.AddCondition(parentLookupFieldName, ConditionOperator.Equal, pfregid);
                query.ColumnSet = new ColumnSet("crs_name");
                //  Attribute to query.
                query.Attributes.AddRange(parentLookupFieldName);

                //  Value of queried attribute to return.
                query.Values.AddRange(pfregid);
                //query.ColumnSet.Columns.Add("crs_name");
                //throw new InvalidPluginExecutionException("The child entity is: " + childSubgrid + "The Parent look up is:" + parentLookupFieldName + "Parent PFR Registration Record is guid is:" + pfregid);
                //var results = service.RetrieveMultiple(query);
                EntityCollection results = service.RetrieveMultiple(query);
                throw new InvalidPluginExecutionException("Your record count is: " + results.Entities.Count());
                if (results.Entities.Count() < limit)

                    return false;
                else
                    return true;
               */
                

            //}
            catch (Exception ex)
            {

                throw new InvalidPluginExecutionException();
            }
        }

        /*
       public void DetermineifUserGoNextPFRPercentOwner(EntityReference pfrRegpercentOwnerLookupId, ITracingService tracingService, IOrganizationService service)
       {
           if (PFRPercentOwnerIsNotValid(service, pfrRegpercentOwnerLookupId.Id))
           {
               throw new InvalidPluginExecutionException("You answered yes to the question but don't have at least 5 records.");
           }
       }
        */
        /*
        private bool PFRPercentOwnerIsNotValid(IOrganizationService service, Guid pfrpercentowner)
        {
            
            //Fecth Call to see how many records there are  
            var fetchXml = string.Format(@"<fetch distinct='false' mapping='logical' output-format='xml-platform' version='1.0' >
                                    <entity name='crs_pfrpercentageowner' >
                                        <attribute name='crs_pfrpercentageownerid' />
                                        <attribute name='crs_name' />
                                        <attribute name='createdon' />
                                        <order descending='false' attribute='crs_name' />
                                        <filter type='and' >
                                            <condition attribute='crs_pfrpercentageownerid' value='{0}' uitype='crs_pfrpercentageowner' uiname='' operator='eq' />
                                        </filter>
                                    </entity>
                                </fetch>", pfrpercentowner.ToString());

            EntityCollection result = service.RetrieveMultiple(new FetchExpression(fetchXml));
            //throw new InvalidPluginExecutionException(" fetchXml : " + fetchXml + " result : "  + result.Entities.Count());
            if (result.Entities.Count() < 5)
            {
                //throw new InvalidPluginExecutionException("You answered yes to the question but don't have at least 5 records. You currently have: "+ result.Entities.Count() + "Records");
                return true;
            }
            else
                return false;
        }
         */
        

       
        
    }
}
