function GetNumberOfAssociated() {
    var paginator = $("#Contacts .entity-grid").find(".view-pagination");
    if (paginator != null && paginator.attr("data-count") != null) {
        return parseInt(paginator.attr("data-count"));
    }
    else {
        var dataRows = $(".entity-grid").children(".view-grid").find("table tbody tr");
        if (dataRows == null) {
            return 0;
        }
        else {
            return dataRows.length;
        }
    }
}

function ToAddressValidator(args) {
    if (GetNumberOfAssociated() > 0) {
        return true;
    }
    else {
        return false;
    }
}

function loadPage(settings) {

    if (typeof (Page_Validators) == 'undefined') return;
    var toAddressValidator = document.createElement('span');
    toAddressValidator.style.display = "none";
    toAddressValidator.id = "toAddressValidator";
    toAddressValidator
            .errormessage =
    "<a href='#section_contacts' onclick='javascript:scrollToAndFocus(\"contacts_label\", \"contacts_label\")'>" +
            settings.labels.toAddressRequired +
            "</a>";
    toAddressValidator.validationGroup = "Send Resource";
    toAddressValidator.initialvalue = "";
    toAddressValidator.evaluationfunction = ToAddressValidator;
    Page_Validators.push(toAddressValidator);

}

