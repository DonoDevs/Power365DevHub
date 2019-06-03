function Mask(field, format) {
    //  JavaScript source code
    //  Seeing if attribute exists
    var gCtrl = Xrm.Page.getControl(field);
    if (gCtrl != null) {
        //gCtrl.setFocus(true);
        $("#" + field + "_i").mask(format);
    }
}

function MaskFields() {

    //  Function to be called on form load event
    Mask("icm_phone", "(999) 999-9999");
    Mask("icm_ocompphone", "(999) 999-9999");
    Mask("icm_ocomptin", "999-99-9999");
    Mask("icm_comptin", "999-99-9999");
    Mask("icm_tin", "999-99-9999");
    Mask("telephone1", "(999) 999-9999");
    Mask("mobilephone", "(999) 999-9999");
}
