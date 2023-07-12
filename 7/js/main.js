const api = 'https://fakestoreapi.com';
const catalog = $('#catalog');
const navbarAccountMenu = $('.navbar-account-menu');

$('.navbar-catalog').click(function(){
    showIfNotVisibled(catalog);    
})

//onmouseenter, onmouseleave
$('.navbar-account').hover(function(){
    //showIfNotVisibled(navbarAccountMenu, 0)
    navbarAccountMenu.css({display: "flex"})
}, function(){
    showIfNotVisibled(navbarAccountMenu, 0)
})

navbarAccountMenu.hover(function(){
    //showIfNotVisibled(navbarAccountMenu, 0)
    navbarAccountMenu.css({display: "flex"})
}, function(){
    showIfNotVisibled(navbarAccountMenu, 0)
})

function showIfNotVisibled(element, duration = 500){
    if(element.is(':visible')){
        element.fadeOut(duration);
    }else{
        element.fadeIn(duration);
    }
}


$('.advertising').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
});