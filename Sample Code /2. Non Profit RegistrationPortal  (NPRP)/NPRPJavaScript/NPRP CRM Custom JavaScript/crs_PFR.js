// This function is added for Requirement No - 58811 to Populate the Physical Address from Mailing address when "Same as Mailing Address" has been set as Yes
function PFROnSave() {
    if (Xrm.Page.getAttribute("crs_sameasmailingaddress").getValue() != null && Xrm.Page.getAttribute("crs_sameasmailingaddress").getValue() == 1) {
        if (Xrm.Page.getAttribute("crs_sameasmailingaddress").getValue() == 1) {
            if (Xrm.Page.getAttribute("crs_pfrmailingaddress1").getValue() != null)
                Xrm.Page.getAttribute("crs_pfrphysicaladdress1").setValue(Xrm.Page.getAttribute("crs_pfrmailingaddress1").getValue());

            if (Xrm.Page.getAttribute("crs_pfrmailingaddress2").getValue() != null)
                Xrm.Page.getAttribute("crs_pfrphysicaladdress2").setValue(Xrm.Page.getAttribute("crs_pfrmailingaddress2").getValue());

            if (Xrm.Page.getAttribute("crs_pfrmailingcity").getValue() != null)
                Xrm.Page.getAttribute("crs_pfrphysicalcity").setValue(Xrm.Page.getAttribute("crs_pfrmailingcity").getValue());

            if (Xrm.Page.getAttribute("crs_pfrmailingstate").getValue() != null)
                Xrm.Page.getAttribute("crs_pfrphysicalstate").setValue(Xrm.Page.getAttribute("crs_pfrmailingstate").getValue());

            if (Xrm.Page.getAttribute("crs_pfrmailingzipcode4").getValue() != null)
                Xrm.Page.getAttribute("crs_pfrphysicalzipcode4").setValue(Xrm.Page.getAttribute("crs_pfrmailingzipcode4").getValue());

            Xrm.Page.getAttribute("crs_sameasmailingaddress").setValue(0);
        }
    }
}