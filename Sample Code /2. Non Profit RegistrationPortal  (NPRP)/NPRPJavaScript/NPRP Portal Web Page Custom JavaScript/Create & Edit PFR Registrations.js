$(document).ready(function () {
    // loop through all labels that are in HTML Elements with the class .info (in this case divs)
    $(".info > label")
        .each(function () {
            // if the label doesn't have the adxstudio jquery plugin 'popover' continue to the next label
            if (typeof $(this).popover !== "function")
                return true;
            // set the label tooltip to allow html, show on hover, placed on the bottom, showing immediately, and staying up for 1 second.
            $(this).popover({ html: true, trigger: "hover", placement: "bottom", delay: { show: 0, hide: 100 } });
            return true;
        });
    $("#crs_businesstelephonenumber, #crs_cellphone, #crs_businessfaxnumber,#crs_pfrphonenumber,#crs_pfrfaxnumber,#crs_pfrexecoffphone, #crs_inancialoffphone").keypress(function (e) {
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


    $('#crs_federalemployeridnumber').keypress(function (e) {
        var kc = e.keyCode;

        if (kc == 8 ||
            kc == 9 ||
            //kc == 46 ||
            //kc == 95 ||
            (kc > 47 && kc < 58)) {
            return true;
        }
        else {
            return false;
        }
    }).prop('maxlength', '9');

});


