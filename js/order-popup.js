
    $('.btn-order').click(function(e) {
        $(".exitblock1").fadeIn("fast");
        $(".exitblock1").show();
        // $('.exitblock').css('display', 'block!important');

    });

    // function openOrder() {
    //     $(".exitblock").fadeIn('fast');
    //     $('.exitblock').css('display', 'block!important');
    // }

    $('.closeblock').click(function(e) {
        if (($(".exitblock1").is(':visible')) && (!$(e.target).closest(".exitblock1 .modaltext1").length)) {
            $('.exitblock1').fadeOut("slow");
            // $(".exitblock").hide();
        }
    });
