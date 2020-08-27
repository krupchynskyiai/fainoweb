function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function writeCookie() {
// функция записывает cookie на 1 день, с которой мы не показываем окно
    var date = new Date;
    date.setDate(date.getDate() + 1);    
    document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();        
}    
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
var alertwin = getCookie("alertwin");
if (alertwin != "no") {
    window.setTimeout(function() { // запускаем таймер на 15 секунд
        if ($(".exitblock").is(':hidden')) { // если блок не показывается, то убираем его навсегда
            $(".exitblock").remove();     
        }
        writeCookie(); 
// Устанавливаем куку через 15 секунд, видел ли или нет посетитель всплывающее окно
    }, 25000);        
    $(document).mouseleave(function(e){
        if (e.clientY < 0) {
            $(".exitblock").fadeIn("fast");      
            writeCookie(); 
// Устанавливаем куку когда посетитель увидел окно, даже если не прошло 15 секунд
        }    
    });
    $(document).click(function(e) {
        if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
            $(".exitblock").remove();
        }
    });  
}