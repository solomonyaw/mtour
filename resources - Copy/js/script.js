
// scroll on buttons
$(document).ready(function(){
    $('.js--discover').click(function(e){
     var linkHref = $(this).attr('href');
     $('html,body').animate({
       scrollTop: $('.section-tours').offset().top},1000);
    
        e.preventDefault();

    });

    $('.item2').click(function(e){
        var linkHref = $(this).attr('href');
        $('html,body').animate({
          scrollTop: $('.features_section').offset().top},1000);
           e.preventDefault();
   
       });
       
      //navigation scroll 
    $('.item1').click(function(e){
        var linkHref = $(this).attr('href');
        $('html,body').animate({
          scrollTop: $('.section-about').offset().top},1000);
       
           e.preventDefault();
   
       });

       $('.item3').click(function(e){
        var linkHref = $(this).attr('href');
        $('html,body').animate({
          scrollTop: $('.section-tours').offset().top},1000);
       
           e.preventDefault();
   
       });

       $('.item4').click(function(e){
        var linkHref = $(this).attr('href');
        $('html,body').animate({
          scrollTop: $('.section-stories').offset().top},1000);
       
           e.preventDefault();
   
       });
       $('.item5').click(function(e){
        var linkHref = $(this).attr('href');
        $('html,body').animate({
          scrollTop: $('.section-book').offset().top},1000);
       
           e.preventDefault();
   
       });

       //mobile nav drop-down
       $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon =$('.js--nav-icon i');
        nav.slideToggle(200);

        if(icon.hasClass('ion-navicon-round'))
        {
           icon.addClass('ion-close-round');
           icon.removeClass('ion-navicon-round');
        }
        else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

       })

      
});


