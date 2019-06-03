function PurchaseRequestOnload(){
  
    //Logic to show and hide the sole source document upload tab  if the sole source? field is checked on page load
    if(Xrm.Page.getAttribute("props_solesource").getValue() == true)
     {
         Xrm.Page.ui.tabs.get("RequestDetails").sections.get("RequestDetails_SoleSource").setVisible(true);

     }else{
         Xrm.Page.ui.tabs.get("RequestDetails").sections.get("RequestDetails_SoleSource").setVisible(false);
     }
     //Logic to show and hide the project search by project if the request type field is project
    if(Xrm.Page.getAttribute("props_requesttype").getValue() == '334440000')
    {
        Xrm.Page.ui.tabs.get("RequestDetails").sections.get("RequestDetails_SearchByProject").setVisible(true);

    }else{
        Xrm.Page.ui.tabs.get("RequestDetails").sections.get("RequestDetails_SearchByProject").setVisible(false);
    }
    
    //Logic to show and hide the sharepoint document upload tab for quotes if the request is less than $3,000 on page load
    if(Xrm.Page.getAttribute("props_requestlessthan3000").getValue() == true)
     {
         Xrm.Page.ui.tabs.get("ItemInformation").sections.get("ItemInformation_QuotesDocuments").setVisible(true);

     }else{
         Xrm.Page.ui.tabs.get("ItemInformation").sections.get("ItemInformation_QuotesDocuments").setVisible(false);
     }
     
}

function PurchaseRequestOnChange(){
    
    //Logic to show and hide the sole source document upload tab for quotes if the sole source? field is checked on change
    if(Xrm.Page.getAttribute("props_solesource").getValue() == true)
     {
         Xrm.Page.ui.tabs.get("RequestDetails").sections.get("RequestDetails_SoleSource").setVisible(true);

     }else{
         Xrm.Page.ui.tabs.get("RequestDetails").sections.get("RequestDetails_SoleSource").setVisible(false);
     }
     //Logic to show and hide the project search by project if the request type field is project
    if(Xrm.Page.getAttribute("props_requesttype").getValue() == '334440000')
    {
        Xrm.Page.ui.tabs.get("RequestDetails").sections.get("RequestDetails_SearchByProject").setVisible(true);

    }else{
        Xrm.Page.ui.tabs.get("RequestDetails").sections.get("RequestDetails_SearchByProject").setVisible(false);
    }
    
    //Logic to show and hide the sharepoint document upload tab for quotes if the request is less than $3,000 on change
    if(Xrm.Page.getAttribute("props_requestlessthan3000").getValue() == true)
     {
         Xrm.Page.ui.tabs.get("ItemInformation").sections.get("ItemInformation_QuotesDocuments").setVisible(true);

     }else{
         Xrm.Page.ui.tabs.get("ItemInformation").sections.get("ItemInformation_QuotesDocuments").setVisible(false);
     }
     //Logic to show or hide the approval history section subgrid if the manager chooses approval on change 
     if(Xrm.Page.getAttribute("props_branchmanagerapproval").getValue() == '334440000')
     {
         Xrm.Page.ui.tabs.get("BranchManagerApproval").sections.get("BranchManagerApproval_ApprovalHistory").setVisible(true);

     }else{
         Xrm.Page.ui.tabs.get("BranchManagerApproval").sections.get("BranchManagerApproval_ApprovalHistory").setVisible(false);
     }
     
}