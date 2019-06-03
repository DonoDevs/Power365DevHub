
//<div class="btn-group"><a href="javascript:window.print()" role="button" aria-label="Print" class="btn btn-default btn-lg"><i class="fa fa-print"></i> <span>Print</span></a></div>
<div class="btn-group">
  <a onclick="printDiv('EntityFormControl_19331e3684bfe811a95c000d3a3acde0')" role="button" aria-label="Print" class="btn btn-default btn-lg"><i class="fa fa-print"></i> <span>Print</span></a>
</div>

$(document).ready(function () {
  $('#EntityFormControl_19331e3684bfe811a95c000d3a3acde0_EntityFormView > h2:nth-child(8)').prepend('<h3 class="alert alert-info" id="agencyemployeelistlabel" style="background-color:#000; border-color: #000; text-align:center; color:#FFF"><strong>Online Retirement Application Review</strong></h3>');
  //var printreviewBanner = $('<h3 class="alert alert-info" id="agencyemployeelistlabel" style="background-color:#000; text-align:center; color:#FFF"><strong>Online Retirement Application Review</strong></h3>');
  //var applicationHeader = $('#EntityFormControl_19331e3684bfe811a95c000d3a3acde0_EntityFormView > h2:nth-child(8)');
});

function printDiv(divName) {

  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}
//$('#WebFormControl_a3b5737385bbe811a95b000d3a3ac3f8_ProgressIndicator').append('<div class="btn-group"><a href="javascript:window.print()" role="button" aria-label="Print" class="btn btn-default btn-lg"><i class="fa fa-print"></i> <span>Print</span></a></div>');

  
//$('#NextButton').appendto('<div class="btn-group"><a href="javascript:window.print()" role="button" aria-label="Print" class="btn btn-default btn-lg"><i class="fa fa-print"></i> <span>Print</span></a></div>');
/*Print Buttons CSS*/

