
$(document).ready(function () {
    var requestType = $('#props_requesttype');
    var soleSource = $('#props_solesource');
    var requestLessThan3k = $('#props_requestlessthan3000')
    
    soleSource.click(function() {showhide(); });
    showhide();
    
});	  

function showhide(){
    if(soleSource.is(":checked"))
    {
         //Show the Sole Source Requirements Tab for document upload
         $(".section[data-name='RequestDetails_SoleSource']").show("slow");

    }else{
         //Hide the Sole Source Requirements Tabe for document upload
         $(".section[data-name='RequestDetails_SoleSource']").hide("slow");
    }


}


/******************************working code********************************************** */
$(document).ready(function () {
    var requestType = $('#props_requesttype');
    var soleSource = $('#props_solesource');
    var requestLessThan3k = $('#props_requestlessthan3000')

    /****************On PageLoad****************/
    //if request Type = Project
    if(requestType.val() == " ")
    {
        //Hide search by project section
        $(".section[data-name='RequestDetails_SearchByProject']").closest("fieldset").hide("slow");
        //alert("is a project");
    }
    if(requestType.val() == '334440000')
    {
        //Show search by project section
        $(".section[data-name='RequestDetails_SearchByProject']").closest("fieldset").show("slow");
        //alert("is a project");
    }
    else{
        //Hide search by project section
        $(".section[data-name='RequestDetails_SearchByProject']").closest("fieldset").show("slow");
        //alert("not a project");
    }
    if(soleSource.is(":checked"))
    {
          //Show the Sole Source Requirements Tab for document upload
         $(".section[data-name='RequestDetails_SoleSource']").closest("fieldset").show("slow");

    }else{
        //Hide the Sole Source Requirements Tabe for document upload
        $(".section[data-name='RequestDetails_SoleSource']").closest("fieldset").hide("slow");
    }
    
    if(requestLessThan3k.is(":checked"))
    {
          //Show the Sole Source Requirements Tab for document upload
        
        $(".section[data-name='ItemInformation_QuotesDocuments']").closest("fieldset").show("slow");
        
    }else{
        //Hide the Sole Source Requirements Tabe for document upload
        $(".section[data-name='ItemInformation_QuotesDocuments']").closest("fieldset").hide("slow");
        
    }


    /****************On change****************/

    requestType.change(function(){
        //If checked
        if(requestType.val()=='334440000')
        {
            //Show the Search by Project Section
            $(".section[data-name='RequestDetails_SearchByProject']").closest("fieldset").show("slow");
           // alert("is a project");

        }else{
            //Hide the Search by Project Section
            $(".section[data-name='RequestDetails_SearchByProject']").closest("fieldset").hide("slow");
            //alert("is not a project");
        }

    });
    soleSource.click(function(){
        //If checked
        if(soleSource.is(":checked"))
        {
            //Show the Sole Source Requirements Tab for document upload
            $(".section[data-name='RequestDetails_SoleSource']").closest("fieldset").show("slow");

        }else{
            //Hide the Sole Source Requirements Tabe for document upload
            $(".section[data-name='RequestDetails_SoleSource']").closest("fieldset").hide("slow");
        }

    });
    
    requestLessThan3k.click(function(){
        //If checked
        if(requestLessThan3k.is(":checked"))
        {
            //Show the Sole Source Requirements Tab for document upload
            $(".section[data-name='ItemInformation_QuotesDocuments']").closest("fieldset").show("slow");
            
        }else{
            //Hide the Sole Source Requirements Tabe for document upload
            $(".section[data-name='ItemInformation_QuotesDocuments']").closest("fieldset").hide("slow");
            
        }

    });
    
    
});	  