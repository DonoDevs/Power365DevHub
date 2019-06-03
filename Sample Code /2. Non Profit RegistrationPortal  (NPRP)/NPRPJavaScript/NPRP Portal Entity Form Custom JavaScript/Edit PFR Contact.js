if (window.jQuery) {
    (function ($) {
    
    function showHideAgency() {
       var target = $('#crs_regagencyname').closest('td');
       if($('#crs_registrationagent_1').is(':checked')) {
         target.show("slow");
         $("#crs_regagencyname_label").parent().addClass('required');
       } else {
         target.hide("slow");
         $("#crs_regagencyname_label").parent().removeClass('required');
       }
     }
     
     function generateInvitationCode() {
         function s4() {
             return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
         }
         return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
     }
     
       $(document).ready(function () {
         /**************************************Phone Numbers Field Mask*****************************************************/
         $("#crs_businesstelephonenumber, #crs_cellphone, #crs_businessfaxnumber").keypress(function (e) {
           var kc = e.keyCode || e.charCode || e.keyCode || 0;
           $phone = $(this);
           // Don't let them remove the starting '('
           if ($phone.val().length === 1 && (kc === 8 || kc === 46)) {
               $phone.val('(');
               return false;
           }
               // Reset if they highlight and type over first char.
           else if ($phone.val().charAt(0) !== '(') {
               $phone.val('(' + $phone.val());
           }
   
           // Auto-format- do not expose the mask as the user begins to type
           if (kc !== 8 && kc !== 9) {
               if ($phone.val().length === 1 && e.which == 49) {
                   return false;
               }
               if ($phone.val().length === 4) {
                   $phone.val($phone.val() + ')');
               }
               if ($phone.val().length === 5) {
                   $phone.val($phone.val() + ' ');
               }
               if ($phone.val().length === 9) {
                   $phone.val($phone.val() + '-');
               }
               if ($phone.val().length === 14) {
                   $phone.val($phone.val() + ' X');
               }
               /*if ($phone.val().length === 20) {
                       e.preventDefault();
               } else if ($phone.value.length > 20) {
                   // Maximum exceeded
                   $phone.value = $phone.value.substring(0, 20);
               }*/
           }
           //Allow numeric (and tab, backspace, delete) keys only
           return (kc == 8
                   ||
                   kc == 9
                   ||
                   kc == 46
                   ||
                   (kc > 47 && kc < 58));
       })
           .bind('focus click', function () {
               $phone = $(this);
   
               if ($phone.val().length === 1) {
                   $phone.val('(');
               }
               else {
                   var val = $phone.val();
                   $phone.val('').val(val); // Ensure cursor remains at the end
               }
           })
           .blur(function () {
               $phone = $(this);
   
               if ($phone.val() === '(') {
                   $phone.val('');
               }
           })
           .prop('maxlength', '20');
 
         
         if(!$('#crs_invitationcode').val()){
             $('#crs_invitationcode').val(generateInvitationCode());
         }
         $('#crs_invitationcode').prop('readonly', true);
         $('#crs_portalaccessstatus').closest( "tr" ).hide();
     
          if (typeof (Page_Validators) == 'undefined') return;        
          
          // Create new validator - Agency Name
          var anValidator = document.createElement('span');
          anValidator.style.display = "none";
          anValidator.id = "RequiredFieldValidatorcrs_regagencyname";
          anValidator.controltovalidate = "crs_regagencyname";
          anValidator.errormessage = "<a href='#crs_regagencyname_label'>Agency Name is a required field.</a>";
          anValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
          anValidator.initialvalue = "";
          anValidator.evaluationfunction = function () {
             if (!$("#crs_registrationagent_1").is(':checked')) return true; 
             
             var value = $("#crs_regagencyname").val();
             if (value == null || value == "") {
             return false;
             } else {
                return true;
             }
          };
  
          // Add the new validator to the page validators array:
          Page_Validators.push(anValidator);
  
          // Wire-up the click event handler of the validation summary link
          $("a[href='#crs_regagencyname_label']").on("click", function () { scrollToAndFocus('crs_regagencyname_label','crs_regagencyname'); });
          
          //Radio Button on change handler
          var registrationAgentRadio_yes = $('#crs_registrationagent_1');
          var registrationAgentRadio_no = $('#crs_registrationagent_0');
          showHideAgency();
          registrationAgentRadio_yes.change(function() { showHideAgency(); });
          registrationAgentRadio_no.change(function() { showHideAgency(); });
       });	  
       
    }(window.jQuery));
 }