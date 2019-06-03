var timeAway = 0;
var logout = 'Your Portal Signought URL Here'; // URL to logout page.
$(document).ready(function () {
    //Increment time away counter
    var timeAwayCount = setInterval(timeAwayCounter, 60000); // Sets the timing time away unit to minutes

    //Restart the time away interval count 
    $(this).mousemove(function (mouseMove) {
        timeAway = 0;
    });
    $(this).keypress(function (mouseMove) {
        timeAway = 0;
    });
});

function timeAwayCounter() {
    timeAway = timeAway + 1;
    if (timeAway > 0.5) { //Based on minutes. So this is 30 seconds
           //Send alert to user
           alert("Your Session has timed out. Please Sign out and sign back in");
           //Disabled the next button so they can’t proceed
           $("#NextButton").attr("disabled", true);
           //Logs the user out of the portal
           window.location = logout;
    }
}





var idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 0.1) { // 20 minutes
        window.location.reload();
        //$("#NextButton").attr("disabled", true);
    }
}