console.log("hello world!");

if(jQuery) {
    console.log("jquery loaded");
}
else {
    console.log("no jquery");
}

$('.faq-question').click(function(){
    $(this).children('p').slideToggle(1000);
    $(this).children('button').toggleClass("closed open");
});


$('#menu-button').click(function(){
    $("#overlay-menu-container").fadeIn();
});

$('#close-menu').click(function(){
    $("#overlay-menu-container").fadeOut();
});