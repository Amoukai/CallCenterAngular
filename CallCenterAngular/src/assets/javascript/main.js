/*-----------------------header------------------------*/
//收合NAV
function close_Nav() {
    if ($('.vertical_nav').hasClass('vertical_nav__opened') === true) {
        $('.vertical_nav').removeClass('vertical_nav__opened');
        $('.wrapper').removeClass('toggle-content');
    }
}
//大小網更正NAV顯示
$(window).on("resize", function () {
    var $wW = $(window).width();
    if ($wW > 800) {
        $('.vertical_nav').removeClass('vertical_nav__opened');
    }
    if ($wW < 800) {
        $('.vertical_nav').removeClass('vertical_nav__minify');
        $('.wrapper').removeClass('wrapper__minify');
    }
});
//NAV_卷軸
$(window).on("load resize", function () {
    try {
        $(".menu").mCustomScrollbar();
    }
    catch (err) { }
});

//下拉選單，預設第一個option顏色是灰色
$(function () {
    var unSelected = "#959595";
    var selected = "#313131";
    const firstItem = "";
    $("option").css("color", selected);
    $("select").change(function () {
        var selItem = $(this).val();
        if (selItem === firstItem) {
            $(this).css("color", unSelected);
        } else {
            $(this).css("color", selected);
        }
    });
});
