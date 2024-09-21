
// slider start 
let index = 0;
let intervalId =null;


  const Slider = document.querySelectorAll('.slider');

  const startSlide = () => {
    intervalId = setInterval(() => {
      index++;
      Slider.forEach((slide, i) => {
        slide.style.transition = 'transform 0.7s ease-in-out';
        slide.style.transform = `translateX(-${100 * index}%)`;
      });

      if (index >= Slider.length-1) {
        setTimeout(() => {
          Slider.forEach((slide) => {
            slide.style.transition = 'none';
            index = 0;
            index--;
            slide.style.transform = `translateX(-${100 * index}%)`;
          });
        }, 700);
      }
    }, 4000);
  };

  startSlide();


//slider end 


// brand start 

const brand = document.querySelectorAll('.brand');
const brandprev = document.querySelector('.brandprev');
const brandnext = document.querySelector('.brandnext');

let indexx = 0; // Initialize the index

brandprev.addEventListener("click", () => {
    indexx--; // Decrement the index for previous

    if (indexx < 0) {
        indexx = brand.length - 1; // If index goes below 0, set it to the last slide
    }

    brand.forEach((slide) => {
        slide.style.transition = 'transform 0.7s ease-in-out';
        slide.style.transform = `translateX(-${100 * indexx}%)`;
    });
});

brandnext.addEventListener("click", () => {
    indexx++; // Increment the index for next

    if (indexx >= brand.length) {
        indexx = 0; // If index exceeds the last slide, reset it to 0
    }

    brand.forEach((slide) => {
        slide.style.transition = 'transform 0.7s ease-in-out';
        slide.style.transform = `translateX(-${100 * indexx}%)`;
    });
});




//brand end 


// catgory start 
const catagory = document.querySelectorAll('.catagory');
const catagoryprev = document.querySelector('.catagoryprev');
const catagorynext = document.querySelector('.catagorynext');

let indexxx = 0; // Initialize the index

catagoryprev.addEventListener("click", () => {
    indexxx--; // Decrement the index for previous

    if (indexxx < 0) {
        indexxx = catagory.length - 1; // If index goes below 0, set it to the last slide
    }

    catagory.forEach((slide) => {
        slide.style.transition = 'transform 0.7s ease-in-out';
        slide.style.transform = `translateX(-${100 * indexxx}%)`; // Remove +4px unless you need it for specific spacing
    });
});

catagorynext.addEventListener("click", () => {
    indexxx++; // Increment the index for next

    if (indexxx >= catagory.length) {
        indexxx = 0; // If index exceeds the last slide, reset it to 0
    }

    catagory.forEach((slide) => {
        slide.style.transition = 'transform 0.7s ease-in-out';
        slide.style.transform = `translateX(-${100 * indexxx}%)`; // No need for +4px here
    });
});


// catgory end














(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // attractions carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

