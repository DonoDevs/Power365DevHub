// Set Campaign Report duedate as 40 days after Contract End date.
function SetReportDueDate() {
    var EndDate = Xrm.Page.getAttribute("crs_contractenddate").getValue();
    if (EndDate != null) {
        var date = new Date(EndDate.setDate(EndDate.getDate() + 40));
        Xrm.Page.getAttribute("crs_firstreportduedate").setValue(date);
        Xrm.Page.data.entity.attributes.get("crs_firstreportduedate").setSubmitMode("always");
    }
}

function DisableFirstReportDateField() {
    var startdate = Xrm.Page.getAttribute("crs_contractstartdate").getValue();
    var enddate = Xrm.Page.getAttribute("crs_contractenddate").getValue();
    if (startdate != null && enddate != null) {
        var Diffbwdates = DifferencebwDates(startdate, enddate);
        if (LeapyearOrNormalyear(Diffbwdates, startdate, enddate)) {
            Xrm.Page.ui.controls.get("crs_firstreportduedate").setDisabled(true);    
        }
else{
Xrm.Page.ui.controls.get("crs_firstreportduedate").setDisabled(false); 
}
    }
}

function DifferencebwDates(date1, date2) {

    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;

    // Convert back to days and return
    return Math.round(difference_ms / one_day);

}

function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function LeapyearOrNormalyear(Diffbwdates, date1, date2) {
    // Checking Start Date year is Leap Year or not
    if (leapYear(date1.getYear())) {
        if (date1.getMonth() <= 1) {// Checking Month is Feb 
            if (Diffbwdates < 366) {
                return true;
            }
        }
        else {
            if (Diffbwdates < 365) {
                return true;
            }
        }
    }
    else if (leapYear(date2.getYear())) {// Checking End Date year is Leap Year or not
        if (date2.getMonth() == 1) {// Checking Month is Feb 
            if (date1.getDate() < 29) {
                if (Diffbwdates < 365) {
                    return true;
                }
            }
            else {
                if (Diffbwdates < 366) {
                    return true;
                }
            }
        }
        else if (date2.getMonth() < 1) {
            if (Diffbwdates < 365) {
                return true;
            }
        }
        else {
            if (Diffbwdates < 366) {
                return true;
            }
        }
    }
    else {
        if (Diffbwdates < 365) {
            return true;
        }
    }
    return false;
}
