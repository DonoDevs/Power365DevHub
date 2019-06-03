namespace NJDCA.PortalAlignment.Plugins
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
                query.ColumnSet = new ColumnSet(false);
                //query.ColumnSet.Columns.Add("crs_name");
                //throw new InvalidPluginExecutionException("The child entity is: " + childSubgrid +"The Parent look up is:"+ parentLookupFieldName + "Parent PFR Registration Record is guid is:" + pfregid);
                //var results = service.RetrieveMultiple(query);
                EntityCollection results = service.RetrieveMultiple(query);
                //throw new InvalidPluginExecutionException("Your record count is: " + results.Entities.Count());
                if (results.Entities.Count() < limit)
                    
                    return false;
                else
                return true;
           
                

            }
            catch (Exception ex)
            {

                throw new InvalidPluginExecutionException();
            }
        }

       

       
        
    }
}
