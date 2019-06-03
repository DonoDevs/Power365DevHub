/// <reference path="../../mcs.webresources/scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../mcs.webresources/scripts/typings/jquery/jquery-adxstudio.d.ts" />
"use strict";
$(document).ready(function () {
    // loop through all HTML Elements with the class .info (in this case divs)
    $(".info").each(function () {
        // get the label and description
        var label = $(this).find("label");
        var description = $(this).next(".description");
        // if we don't have popover exit (and check the box for tooltips on the webformstep
        if (typeof label.popover !== "function")
            return true;
        // set the title equal to the description text and clear out the description
        label.attr("title", description.text());
        description.text("");
        // set the label tooltip to allow html, show on hover, placed on the bottom, showing immediately, and staying up for 1 second.
        label.popover({ html: true, trigger: "hover", placement: "top", delay: { show: 50, hide: 250 } });
        return true;
    });
});
//# sourceMappingURL=Convert Description to Tooltip - Web Template.js.map