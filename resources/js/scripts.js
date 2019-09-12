$(document).ready(function(){
//    $('h1').click(function(){
//        $(this).css('background-color','red');
//    })
    $('.js--section-about').waypoint(function(direction){
        if(direction == "down"){
           $('nav').addClass('sticky'); 
        }else{
           $('nav').removeClass('sticky');  
        }
    }, {
  offset: '60px'
})
});

$('.js--scroll-safari').click(function(){
    $('html,body').animate({
        scrollTop:$('.js--scroll-safari-section').offset().top},1000);
});

$('.js--scroll-signup').click(function(){
    $('html,body').animate({
        scrollTop:$('.js--scroll--signup-section').offset().top},1000);
});


$('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn');
},{
    offset:'45%'
})
$('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInUp');
},{
    offset:'45%'
})
$('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated zoomIn');
},{
    offset:'45%'
})
$('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated pulse');
},{
    offset:'45%'
})
$('.js--nav-icon').click(function(){
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    nav.slideToggle(1000);
    
    if(icon.hasClass('ion-navicon')){
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon');
    }else{
          icon.addClass('ion-navicon');
        icon.removeClass('ion-close-round');
    }
})

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


//var waypoints = $('#handler-first').waypoint(function(direction) {
//  notify(this.element.id + ' hit 25% from top of window') 
//}, {
//  offset: '25%'
//})