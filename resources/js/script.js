$(document).ready(function(){

    /* sticky navigation */
    $(".js--section-features").waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px'
    }
    );

    // var waypoint = new Waypoint({
    //     element: document.getElementById('px-offset-waypoint'),
    //     handler: function(direction) {
    //       notify('I am 20px from the top of the window')
    //     },
    //     offset: 20 
    //   })

    // scroll to section when button is clicked
    $('.js--scroll-to-plans').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-section-features').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });


    //navigation scroll or smoorth scrolling
    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
    
  //animation

  $(".js--wp-1").waypoint(function(direction){
    $('.js--wp-1').addClass('animate__fadeIn');
  },{
      offset: '50%'
  }
  );

  $(".js--wp-2").waypoint(function(direction){
    $('.js--wp-2').addClass('animate__fadeInUp');
  },{
      offset: '50%'
  }
  );

  $(".js--wp-3").waypoint(function(direction){
    $('.js--wp-3').addClass('animate__fadeIn');
  },{
      offset: '50%'
  }
  );

  $(".js--wp-4").waypoint(function(direction){
    $('.js--wp-4').addClass('animate__pulse');
  },{
      offset: '50%'
  }
  );


  // mobile navigation
  $('.js--nav-icon').click(function(){
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    nav.slideToggle(200);
    

    if(icon.hasClass('ion-ios-menu')){
      icon.addClass('ion-ios-close');
      icon.removeClass('ion-ios-menu'); 
      
    } else{
      icon.addClass('ion-ios-menu');
      icon.removeClass('ion-ios-close');
    }

  });
  
    
});



