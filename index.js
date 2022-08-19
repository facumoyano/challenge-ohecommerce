$(document).ready(function () {
    $(".submenu").click(function () {
        $(this).children("ul").slideToggle(300);
    });
    $("#menu-toggle-btn").click(function () {
        $("#btn").toggleClass("fa-bars fa-xmark");
        $("#toggle-nav").slideToggle("slow");
    });

    $("#add-cart").click(() => {
        $(".modal-container").css("transform", "scale(1)");
    });

    $("#modal-close").click(() => {
        $(".modal-container").css("transform", "scale(0)");
    });
    $("#btn-compra").click(() => {
        $(".modal-container").css("transform", "scale(0)");
        $(".modal-saludo-container").css("transform", "scale(1)");
    });
    $("#btn-back").click(() => {
        $(".modal-saludo-container").css("transform", "scale(0)");
    });
});
