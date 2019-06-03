$(document).ready(function () {
    var receiveMilitaryRetiredPay = $('#govmod_applicanteligibleformilitaryretiredpay');
    var waivedMilitaryPay = $('#govmod_waivedmilitarypay').closest('td');
    var select = this.value;
    //Hide on page load
    waivedMilitaryPay.hide();

    receiveMilitaryRetiredPay.change(function() {
        if ($(this).val() == '100000001') {
            waivedMilitaryPay.show("slow");
        }
        else{
            waivedMilitaryPay.hide("slow");
        } 
   });
   
 });	 