$(document).ready(function () {
    $(".section[data-name='section_Pfr1']").closest("fieldset").hide();
    /*$('#crs_haspaidfundraiserbeencontracted').on('change', function() {
        //use toggle for ease of use
        $(".section[data-name='section_Pfr1']").closest("fieldset").toggle(this.value == 170960000)
        $(".section[data-name='section_Pfr2']").closest("fieldset").toggle(this.value == 170960000)
        $(".section[data-name='section_Pfr3']").closest("fieldset").toggle(this.value == 170960000)
      });
    */
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $('#crs_haspaidfundraiserbeencontracted').on('change', function() {
        //use toggle for ease of use
        $(".section[data-name='section_Pfr1']").closest("fieldset").toggle(this.value == 170960000)
        $(".section[data-name='section_Pfr2']").closest("fieldset").toggle(this.value == 170960000)
        $(".section[data-name='section_Pfr3']").closest("fieldset").toggle(this.value == 170960000)
      });
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    var  paidFunRaiserBeenContacted = $("#crs_haspaidfundraiserbeencontracted").val()

    if (paidFunRaiserBeenContacted.val() == "" ||paidFunRaiserBeenContacted.val()==170960001)
    {
        $(".section[data-name='section_Pfr1']").closest("fieldset").hide();
        $(".section[data-name='section_Pfr2']").closest("fieldset").hide();
        $(".section[data-name='section_Pfr2']").closest("fieldset").hide();
    }


    $('#crs_haspaidfundraiserbeencontracted').on('change', function() {
        //use toggle for ease of use
        $(".section[data-name='section_Pfr1']").closest("fieldset").toggle(this.value == 170960000)
        $(".section[data-name='section_Pfr2']").closest("fieldset").toggle(this.value == 170960000)
        $(".section[data-name='section_Pfr3']").closest("fieldset").toggle(this.value == 170960000)
      });



})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    //Question 5: Has a paid fundraiser or paid fund-raising counsel been contracted to run the solicitation campaign?
    //Yes = 170960000
    //No = 170960001
    var paidFunRaiserBeenContacted_null = $('#crs_haspaidfundraiserbeencontracted').val(" ");
    var paidFunRaiserBeenContacted_yes = $('#crs_haspaidfundraiserbeencontracted').val(170960000);
    var paidFunRaiserBeenContacted_no = $('#crs_haspaidfundraiserbeencontracted').val(170960001);

    paidFunRaiserBeenContacted_null.change(function() { showHideQuestions(); });
    paidFunRaiserBeenContacted_yes.change(function() { showHideQuestions(); });
    paidFunRaiserBeenContacted_no.change(function() { showHideQuestions(); });
    showHideQuestions(); 
});	 

function showHideQuestions() {
    //I question 5 is Yes, then show the sections for PFR grids (question6)
    if($("#crs_haspaidfundraiserbeencontracted").val() == ){
        $(".section[data-name='section_Pfr1']").closest("fieldset").show(); 
        $(".section[data-name='section_Pfr2']").closest("fieldset").show(); 
        $(".section[data-name='section_Pfr3']").closest("fieldset").show(); 
    }else{
        $(".section[data-name='section_Pfr1']").closest("fieldset").hide(); 
        $(".section[data-name='section_Pfr2']").closest("fieldset").hide(); 
        $(".section[data-name='section_Pfr3']").closest("fieldset").hide(); 
    }
    
}



$(document).ready(function () {
    //Question 5: Has a paid fundraiser or paid fund-raising counsel been contracted to run the solicitation campaign?
    //Yes = 170960000
    //No = 170960001
    var paidFunRaiserBeenContacted = $("#crs_haspaidfundraiserbeencontracted").val();
    paidFunRaiserBeenContacted.change(function() { showHideQuestions(); });
    showHideQuestions(); 
});	 

function showHideQuestions() {
    //I question 5 is Yes, then show the sections for PFR grids (question6)
    if( $("#crs_haspaidfundraiserbeencontracted").val() == '170960000'){
        $(".section[data-name='section_Pfr1']").closest("fieldset").show(); 
        $(".section[data-name='section_Pfr2']").closest("fieldset").show(); 
        $(".section[data-name='section_Pfr3']").closest("fieldset").show(); 
    }else{
        $(".section[data-name='section_Pfr1']").closest("fieldset").hide(); 
        $(".section[data-name='section_Pfr2']").closest("fieldset").hide(); 
        $(".section[data-name='section_Pfr3']").closest("fieldset").hide(); 
    }
    
}

$(document).ready(function () {
    var paidFunRaiserBeenContacted = $("#crs_haspaidfundraiserbeencontracted").val();
    //paidFunRaiserBeenContacted.change(function() { showHideQuestions(); });
    $(".section[data-name='section_Pfr1']").closest("fieldset").hide(); 
    $(".section[data-name='section_Pfr2']").closest("fieldset").hide(); 
    $(".section[data-name='section_Pfr3']").closest("fieldset").hide();
    paidFunRaiserBeenContacted.change(function(){
        if( $(paidFunRaiserBeenContacted).val() == '170960000'){
            $(".section[data-name='section_Pfr1']").closest("fieldset").show(); 
            $(".section[data-name='section_Pfr2']").closest("fieldset").show(); 
            $(".section[data-name='section_Pfr3']").closest("fieldset").show(); 
        }else{
            $(".section[data-name='section_Pfr1']").closest("fieldset").hide(); 
            $(".section[data-name='section_Pfr2']").closest("fieldset").hide(); 
            $(".section[data-name='section_Pfr3']").closest("fieldset").hide(); 
        }

    });
      
});	 



$(function() {
    $('#row_dim').hide(); 
    $('#type').change(function(){
        if($('#type').val() == 'parcel') {
            $('#row_dim').show(); 
        } else {
            $('#row_dim').hide(); 
        } 
    });
});



$(document).ready(function () {
    //var paidFunRaiserBeenContacted = $("#crs_haspaidfundraiserbeencontracted").val();
    //paidFunRaiserBeenContacted.change(function() { showHideQuestions(); });
    $('#crs_haspaidfundraiserbeencontracted').on('change', function() {
        //use toggle for ease of use
        $(".section[data-name='section_Pfr1']").closest("fieldset").toggle(this.value == 170960000);

        $(".section[data-name='section_Pfr2']").closest("fieldset").toggle(this.value == 170960000);
        
        $(".section[data-name='section_Pfr3']").closest("fieldset").toggle(this.value == 170960000);
      });
})
      
var formOfSolicitation = $("crs_solicitation_name");


$(document).ready(function () {
    var formOfSolicitation = $("crs_solicitation_name");
    formOfSolicitation.on('change', function() {
        $("#crs_name").val(formOfSolicitation);
      });
})