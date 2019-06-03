/**When Dollar amount text box has data, make the percentage to charity disable and vice versa**/
$(document).ready(function() {
    $("#crs_amounttocharity").keyup(function(e) {
        if($(this).val() != '') {
            $("#crs_percentagetocharity").not(this).attr('disabled','disabled');
        } else {
            $("#crs_percentagetocharity").removeAttr('disabled');
        }
    });
    
    $("#crs_percentagetocharity").keyup(function(e) {
        if($(this).val() != '') {
            $("#crs_amounttocharity").not(this).attr('disabled','disabled');
        } else {
            $("#crs_amounttocharity").removeAttr('disabled');
        }
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



$(document).ready(function() {

    var conQuestion3_yes = $('#crs_conquestion3_1');
    var conQuestion3_no = $('#crs_conquestion3_0');
    conQuestion3_yes.change(function() { showHideQuestions(); conQ3addNoticeMessages(); });
    conQuestion3_no.change(function() { showHideQuestions(); conQ3addNoticeMessages(); });

    showHideQuestions();
    conQ3addNoticeMessages();

    $("#crs_amounttocharity").keyup(function(e) {
        if($(this).val() != '') {
            $("#crs_percentagetocharity").not(this).prop('disabled','disabled');
        } else {
            $("#crs_percentagetocharity").removeProp('disabled');
        }
    });
    
    $("#crs_percentagetocharity").keyup(function(e) {
        if($(this).val() != '') {
            $("#crs_amounttocharity").not(this).prop('disabled','disabled');
        } else {
            $("#crs_amounttocharity").removeProp('disabled');
        }
    });


});


//Function to Show and hide the fields
function showHideQuestions() {

    //Contract Question 13 Logic
     if($('#crs_conquestion3_1').is(':checked')) {
      $(".section[data-name='amount_to_charity_info']").closest("fieldset").show();
    } else {
      $(".section[data-name='amount_to_charity_info']").closest("fieldset").hide();
    }
}

function conQ3addNoticeMessages(){
    //Contract Question 3 prepend message variable
    var conQ3prependMessage = $('<divconq3> <u><i> Please fill out the "Dollar Amount to Charity" field or the "Percentage to Charity" field. If you do not answer one of the question, your contract will be denied.</i></u><br/></divconq3>').css({"background-color":"#f2dede","color":"#337ab7","font-size":"14px"});
    //Contract Question 3 notice message logic
        if($('#crs_conquestion3_1').is(':checked')) {
            conQ3prependMessage.prependTo('#EntityFormView > div.tab.clearfix > div > div > fieldset:nth-child(4) > table')
  
        } else {
         $( "divconq3" ).remove();
        }
  }


   /////////////////////////////////////////Final Version with the message being Appended to the bottom of the tabe of Con Question  NJDCADevCRM//////////////////////////////////
   $(document).ready(function() {
    
        var conQuestion3_yes = $('#crs_conquestion3_1');
        var conQuestion3_no = $('#crs_conquestion3_0');
        conQuestion3_yes.change(function() { showHideQuestions(); conQ3addNoticeMessages(); });
        conQuestion3_no.change(function() { showHideQuestions(); conQ3addNoticeMessages(); });
    
        showHideQuestions();
        conQ3addNoticeMessages();
    
        $("#crs_amounttocharity").keyup(function(e) {
            if($(this).val() != '') {
                $("#crs_percentagetocharity").not(this).prop('disabled','disabled');
            } else {
                $("#crs_percentagetocharity").removeProp('disabled');
            }
        });
        
        $("#crs_percentagetocharity").keyup(function(e) {
            if($(this).val() != '') {
                $("#crs_amounttocharity").not(this).prop('disabled','disabled');
            } else {
                $("#crs_amounttocharity").removeProp('disabled');
            }
        });
    
    
    });
    
    
    //Function to Show and hide the fields
    function showHideQuestions() {
    
        //Contract Question 13 Logic
         if($('#crs_conquestion3_1').is(':checked')) {
          $(".section[data-name='amount_to_charity_info']").closest("fieldset").show();
        } else {
          $(".section[data-name='amount_to_charity_info']").closest("fieldset").hide();
        }
    }
    
    function conQ3addNoticeMessages(){
        //Contract Question 3 prepend message variable
        var conQ3prependMessage = $('<divconq3> <u><i> Please fill out the "Dollar Amount to Charity" field or the "Percentage to Charity" field. If you do not answer one of the questions, your contract will be denied.</i></u></divconq3>').css({"background-color":"#f2dede","color":"#337ab7","font-size":"14px"});
        //Contract Question 3 notice message logic
            if($('#crs_conquestion3_1').is(':checked')) {
                conQ3prependMessage.appendTo('#EntityFormView > div.tab.clearfix > div > div > fieldset:nth-child(4) > table')
      
            } else {
             $( "divconq3" ).remove();
            }
      }

  /////////////////////////////////////////Final Version with the message being Appended to the bottom of the tabe of Con Question  July TestRun//////////////////////////////////
  $(document).ready(function() {
    
        var conQuestion3_yes = $('#crs_conquestion3_1');
        var conQuestion3_no = $('#crs_conquestion3_0');
        conQuestion3_yes.change(function() { showHideQuestions(); conQ3addNoticeMessages(); });
        conQuestion3_no.change(function() { showHideQuestions(); conQ3addNoticeMessages(); });
    
        showHideQuestions();
        conQ3addNoticeMessages();
    
        $("#crs_amounttocharity").keyup(function(e) {
            if($(this).val() != '') {
                $("#crs_percentagetocharity").not(this).prop('disabled','disabled');
            } else {
                $("#crs_percentagetocharity").removeProp('disabled');
            }
        });
        
        $("#crs_percentagetocharity").keyup(function(e) {
            if($(this).val() != '') {
                $("#crs_amounttocharity").not(this).prop('disabled','disabled');
            } else {
                $("#crs_amounttocharity").removeProp('disabled');
            }
        });
    
    
    });
    
    
    //Function to Show and hide the fields
    function showHideQuestions() {
    
        //Contract Question 13 Logic
         if($('#crs_conquestion3_1').is(':checked')) {
          $(".section[data-name='amount_to_charity_info']").closest("fieldset").show();
        } else {
          $(".section[data-name='amount_to_charity_info']").closest("fieldset").hide();
        }
    }
    
    function conQ3addNoticeMessages(){
        //Contract Question 3 prepend message variable
        var conQ3prependMessage = $('<divconq3> <u><i> Please fill out the "Dollar Amount to Charity" field or the "Percentage to Charity" field. If you do not answer one of the questions, your contract will be denied.</i></u></divconq3>').css({"background-color":"#f2dede","color":"#337ab7","font-size":"14px"});
        //Contract Question 3 notice message logic
            if($('#crs_conquestion3_1').is(':checked')) {
                conQ3prependMessage.appendTo('#EntityFormView > div.tab.clearfix > div > div > fieldset:nth-child(3) > table')
      
            } else {
             $( "divconq3" ).remove();
            }
      }

      