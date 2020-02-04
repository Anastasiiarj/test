$(document).ready(function() {

    // tabs for filters

    $('.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
          .addClass('active')
          .siblings()
          .removeClass('active')
          .closest('.tabs')
          .find('.tabs__content')
          .removeClass('active')
          .eq($(this).index())
          .addClass('active');
  });

  // accordion for filters

    $(function() {
      var items = $(".accordion__caption");
    
      items.on("click",function(){
        if($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this).next().removeClass("open");
        } else {
          $(this).siblings().removeClass("active");
          $(this).next().siblings().removeClass("open");
          $(this).toggleClass("active");
          $(this).next().toggleClass("open");
        }
      });
    });

    // all category

    $(".category__title").on('click', function() {
      $(".category__menu").toggleClass("active");
    })


    // hamburger

    $('.hamburger').click(function(){
      $(this).toggleClass("is-active");
      $(".nav-mobile").animate({width:'toggle'}, 600);
  });


  // read more / less

  $('.read-more-link').click(function(e) {
    //e.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().find('.read-more-toggle').toggleClass('active');
    var text = $(this).text() == 'Show more' ? 'Show less' : 'Show more';
    $(this).text(text);
});

});

