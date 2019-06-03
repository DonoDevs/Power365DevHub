$(document).ready(function () {
    
        $(".section[data-name='section_Pfr1']").closest("fieldset").hide();
        $('#crs_haspaidfundraiserbeencontracted').on('change', function() {
            //use toggle for ease of use
        $(".section[data-name='section_Pfr1']").closest("fieldset").toggle(this.value == 170960000)
        });
  
    });