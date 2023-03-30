jQuery( document ).ready(function(){


    // ------------header-sec----------------

  

    $(".menu-items").clone().prependTo(".mobile-menu");

    $(".menu-trigger").on('click', function(){
        $(this).toggleClass("active");
        $(".mobile-menu").slideToggle();
       
    })
    
 
  
//---------------our-brands-sec--------------------

$(".slider-wrap").owlCarousel({
    items:1,
    loop:true,
    center:true,
    // autoplay:true,
    smartSpeed:600,
    animateOut: 'fadeOut'
});

// -----------------stories-sec-----------------------------
$('.postcard-wrapper').isotope({
    itemSelector: '.postcard',
    percentPosition: true,
    masonry:{
        columnWidth: '.postcard'
    }
});




});