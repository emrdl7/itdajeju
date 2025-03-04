
$(function(){

    menu();
    outlink();
    mobileSubMenu();
    unit();
    plusminus();


    $(window).on("resize", function(){
        $("nav#main-menu h3 a").unbind();
        menu();
    });


});


/* ----- Window Size ----- */
var windowh = $(window).height();
var windowW = $(window).width();

$(window).on("resize", function(){
    windowh = $(window).height();
    windowW = $(window).width();
});


/* ----- menu ----- */
function menu() {


    $("button.main-menu").on("click", function () {
        $("#main-menu").toggleClass("on");
        
    });

    $("nav#main-menu button.close").on("click", function () {

        $("#main-menu").toggleClass("on");
    });

    // $("nav#main-menu h3 a").on("click", function (e) {
        
    //     $("nav#main-menu h3").removeClass("on");



    //     if (windowW < 1200 && $(this).parent().parent().find("ul").length) {

    //         $(this).parent().addClass("on");
    //         e.preventDefault();

    //     }
    //     else {
    //         $("nav#main-menu h3 a").unbind();

    //     }
    // });

    $("nav#main-menu div.menus h3 a").on("mouseenter", function(){
        $("nav#main-menu div.menus>ul>li").removeClass("on");
        $(this).parent().parent().addClass("on");
    });

    $("nav#main-menu div.menus>ul>li ul").on("mouseleave", function(){
        $(this).parent().removeClass("on");
    });

}


/* ----- outlink ----- */ 
function outlink() {
    $(".site-links button").click(function() {
        $(this).toggleClass("on");
    });
}


/* ----- mobileSubMenu ----- */ 
function mobileSubMenu() {

    $("aside a.on").on("click", function(e) {

        if (windowW < 1200) {

            $("aside ul").toggleClass("on");
            e.preventDefault();

        }
    });
}


/* ----- unit ----- */ 
function unit() {

    $(".order .unit input").change(function() {

        $(".order .unit p").removeClass("on");
        $(".order .unit p."+ $(this).attr("id")).addClass("on");
        
    });
}


/* ----- plusminus ----- */ 
function plusminus() {

    $(".order .number .plus").click(function(){
        var currentValue = parseInt($(this).parent().find("input").val());
        $(this).parent().find("input").val(currentValue + 1);
    });

    $(".order .number .minus").click(function(){
        var currentValue = parseInt($(this).parent().find("input").val());
        if (currentValue > 0) {
            $(this).parent().find("input").val(currentValue - 1);
        }
    });

}