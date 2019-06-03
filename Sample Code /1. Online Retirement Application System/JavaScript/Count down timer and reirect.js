/*var timer = setTimeout(function() {
            window.location='https://opmfederalretirement.microsoftcrmportals.com/retirement/online-retirement-application/'
        }, 30000);
*/
// Total seconds to wait

/*
<h3 class="alert alert-success" role="alert" style="text-align: center;"><u><strong>{{user.fullname}}</strong></u> Congratulations!<br>
You have successfully submitted your Online Retirement Application!<br>
You will be notified and updated by email on any status changes.<br>
You can also check on your status by visiting your ORA dashboard to view statutes as seen below:</h3>

<div>
  <hr>
</div>

<div style="text-align: center;">
  <img alt="" src="/retirement/online-retirement-application/online-retirement-submission-acknowledgment/orasuccesspagetrackingdetails.png" style="width: 1155px; height: 214px;">
  <br>
  <br>
  <br>&nbsp;
</div>

<div style="text-align: center;"><a class="btn btn-secondary btn-lg" href="/retirement/online-retirement-application/" id="ORAReturnButton" role="button" style="color:#FFF; background:#000;">Return to ORA dashboard</a>
</div>
&nbsp;

<div class="alert alert-warning" role="alert">
  <h5>This page will automatically redirect back to the ORA dashboard in: <span id="countdown">60</span> seconds</h5>
</div>

*/
var seconds = 60;
    
function countdown() {
    seconds = seconds - 1;
    if (seconds < 0) {
        // Chnage your redirection link here
        window.location = "/retirement/online-retirement-application/";
    } else {
        // Update remaining seconds
        document.getElementById("countdown").innerHTML = seconds;
        // Count down using javascript
        window.setTimeout("countdown()", 1000);
    }
}

// Run countdown function
countdown();