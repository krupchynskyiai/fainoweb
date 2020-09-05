
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

    $(document).ready(function() {

        //E-mail Ajax Send
        $("#offer-landing-basic").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "../php/mail.php", //Change
                data: th.serialize()
            }).done(function() {
                alert("Спасибо за заявку! Менеджер свяжется с Вами в ближайшее время!");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });
    
    });



function order_name(value) {

    var orderId = document.querySelector("#orderName");
    orderId.setAttribute ("name", value);
        console.log(value);
}
