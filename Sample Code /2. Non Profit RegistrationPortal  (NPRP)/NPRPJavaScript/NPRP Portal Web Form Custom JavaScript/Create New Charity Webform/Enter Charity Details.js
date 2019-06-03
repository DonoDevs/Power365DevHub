$(document).ready(function() {
  $('#crs_sameasmailingaddress').change(function() {
    if($(this).is(":checked")) {
            //Physical Address Line 1
            $('#address1_line1').val($('#crs_addressline1').val());
            $('#address1_line1').attr('readonly', true);
            
            //Physical Address Line 2
            $('#address1_line2').val($('#crs_addressline2').val());
            $('#address1_line2').attr('readonly', true);
            
            //Physical Address City
            $('#address1_city').val($('#crs_city').val());
            $('#address1_city').attr('readonly', true);
            
            //Physical Address State
            $('#crs_physicaladdressstate').val($('#crs_state').val());
            $('#crs_physicaladdressstate').attr('readonly', true);
            
            //Physical Address ZIP
            $('#address1_postalcode').val($('#crs_zipcode').val());
            $('#address1_postalcode').attr('readonly', true);
        }
        else
        {
          //alert('Unchecked');
          //Physical Address Line 1
          $('#address1_line1').attr('readonly', false);
          //Physical Address Line 2
          $('#address1_line2').attr('readonly', false);
          //Physical Address City
          $('#address1_city').attr('readonly', false);
          //Physical Address State
          $('#crs_physicaladdressstate').attr('readonly', false);
          //Physical Address ZIP
          $('#address1_postalcode').attr('readonly', false);
        }
  });
  $('#crs_sameasmailingaddress2').change(function() {
    if($(this).is(":checked")) {
            
//Records Address Line 1
            $('#address2_line1').val($('#crs_addressline1').val());
            $('#address2_line1').attr('readonly', true);
            //Records Address Line 2
            $('#address2_line2').val($('#crs_addressline2').val());
            $('#address2_line2').attr('readonly', true);           
            //Records Address City
            $('#address2_city').val($('#crs_city').val());
            $('#address2_city').attr('readonly', true);          
             
//Records Address State
            $('#crs_recordsaddressstate').val($('#crs_state').val());
            $('#crs_recordsaddressstate').attr('readonly', true);
            
  
//Records Address ZIP
            $('#address2_postalcode').val($('#crs_zipcode').val());
            $('#address2_postalcode').attr('readonly', true);
        }
        else
        {
          
//Records Address Line 1
          $('#address2_line1').attr('readonly', false);
          
//Records Address Line 2
          $('#address2_line2').attr('readonly', false);
          
//Records Address City
          $('#address2_city').attr('readonly', false);
          
//Records Address State
          $('#crs_recordsaddressstate').attr('readonly', false);
          
//Records Address ZIP
          $('#address2_postalcode').attr('readonly', false);
        }
  });
});
