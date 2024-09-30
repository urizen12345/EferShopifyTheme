jQuery(function($){

$(document).ready(function () {
    $(".testimonial-wrapper").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    autoplaySpeed: 800,
    infinite: true,
    autoplay: false,
    dots: false,
    centerMode: true,
    centerPadding: "0",
    arrow: true,
    nextArrow: '<span class="prev-btn"><img class="img-responsive" src="https://cdn.shopify.com/s/files/1/0849/7158/5851/files/snug-testimonial-prev.png?v=1706662108"></span>', //Allows to next the slider and customize the HTML for the "Next" arrow.
    prevArrow: '<span class="next-btn"><img class="img-responsive" src="https://cdn.shopify.com/s/files/1/0849/7158/5851/files/snug-testimonial-next.png?v=1706662108" alt="next-icon"></span></span>',
    responsive: [{
                        breakpoint: 1025, 
                        settings: {
                        slidesToShow: 2, 
                        }
                    },
                    {
                        breakpoint: 768,  //Breakpoint of the slider on the mobile view.
                        settings: {
                        slidesToShow: 1, //This will indicate the number of slides that will show on the mobile view.
                        }
                    }
              ]
    });
  });

    $(document).ready(function () {
    $(".slider-popup-container").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 700,
    autoplaySpeed: 800,
    infinite: true,
    autoplay: false,
    dots: false,
    arrow: true,
    nextArrow: '<span class="prev-btn"><img class="img-responsive" src="https://cdn.shopify.com/s/files/1/0849/7158/5851/files/snug-testimonial-prev.png?v=1706662108"></span>', //Allows to next the slider and customize the HTML for the "Next" arrow.
    prevArrow: '<span class="next-btn"><img class="img-responsive" src="https://cdn.shopify.com/s/files/1/0849/7158/5851/files/snug-testimonial-next.png?v=1706662108" alt="next-icon"></span></span>',
    responsive: [{
                        breakpoint: 1025, //Breakpoint of the slider on the Tablet view.
                        settings: {
                        slidesToShow: 3, //This will indicate the number of slides that will show on the tablet view.
                        }
                    },
                    {
                        breakpoint: 768,  //Breakpoint of the slider on the mobile view.
                        settings: {
                        slidesToShow: 1, //This will indicate the number of slides that will show on the mobile view.
                        }
                    }
              ]
    });
  });


  /* HOME */ 
 
 

  $('.icon-content-item').click(function () {
      var tab_class = $(this).attr('href');
  
      $('.icon-content-item').removeClass('current');
      $('.tab-content').removeClass('current');
      $('.side-tab').removeClass('current');
  
      $(this).addClass('current');
      $("." + tab_class).addClass('current');
  })
  
  
   
  var targetElement1 = document.querySelector(".icon-content-item");
  var targetElement2 = document.querySelector(".tab-content");
  var targetElement3 = document.querySelector(".side-tab");
  targetElement1.classList.add("current");
  targetElement2.classList.add("current");
  targetElement3.classList.add("current");
  
 });  

  /* product */ 
  $('.tab-btn').click(function () {
        var tab_class = $(this).attr('href');

        $('.tab-btn').removeClass('current');
        $('.tab-content').removeClass('current');
        $('.side-tab').removeClass('current');

        $(this).addClass('current');
        $("." + tab_class).addClass('current');
})


 
  var targetElement1 = document.querySelector(".tab-btn");
  var targetElement2 = document.querySelector(".tab-content");
  var targetElement3 = document.querySelector(".side-tab");
  targetElement1.classList.add("current");
  targetElement2.classList.add("current");
  targetElement3.classList.add("current");