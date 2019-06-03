$(document).ready(function () {
    // loop through all labels that are in HTML Elements with the class .info (in this case divs)
    $(".info > label").each(function () {
        // if the label doesn't have the adxstudio jquery plugin 'popover' continue to the next label
        if (typeof $(this).popover !== "function")
            return true;
        // set the label tooltip to allow html, show on hover, placed on the bottom, showing immediately, and staying up for 1 second.
        $(this).popover({ html: true, trigger: "hover", placement: "bottom", delay: { show: 0, hide: 1000 } });
        return true;
    });
});




$(document).ready(function () {
    $("#ContentContainer_MainContent_CharityNum").popover({trigger:"hover", placement:"bottom", delay: {show: 0, hide: 1000}});
    $("#ContentContainer_MainContent_CharityName").popover({trigger:"hover", placement:"bottom", delay: {show: 0, hide: 1000}});
    $("#ContentContainer_MainContent_EIN").popover({trigger:"hover", placement:"bottom", delay: {show: 0, hide: 1000}});
});


/****************************************************************JavaScript Content SNippet****************************************************************************************************************** */
/*Turoial
HTML Portal Side MArkup:
 
<input class="hidden" id="mySnippet" type="hidden" value="<%$ Snippet: firstnamerequired %>" />
 
Jquery code:
 
var snippetVal = $("#mySnippet").val();
*/
 
<div>
<input class="hidden" href="#" data-toggle="popover" data-trigger="hover" data-content="<%$ Snippet: EINTooltipSnippet %>" id="EINTooltipSnippet" type="hidden" value="<%$ Snippet: EINTooltipSnippet %>" />
</div>


$(document).ready(function () {
    var EINField = $("#crs_federalein");
    var EINFIeldlabel = $("#crs_federalein_label");
    // loop through all labels on the page
    $(".info > label").each(function () {
        if (typeof $(this).popover !== "function")
            return true;
        //If the hovered label is the EIN Field
        if(EINFIeldlabel || EINField){
            //Set the label tooltip to be the value of the EIN content snippet, show on hover, placed at bottom
            $('[data-toggle="popover"]').popover({snippet: EINTooltipSnippet, trigger:"hover", placement:"bottom", delay: {show: 0, hide: 100}});
        }
    });
});


