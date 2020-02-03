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

    // $(".accordion__caption").click(function() {
    //     let ul = $(this).next(),
    //         clone = ul.clone().css({"height":"auto"}).appendTo(".mini-menu"),
    //         height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
    //     clone.remove();
    //     ul.animate({"height":height});
    //     if(!$(this).next().hasClass('active')){
    //         $(this).next().addClass('active');
    //     } else {
    //         $(".accordion > .accordion__content ").removeClass('active');
    //     }
    //     return false;
    // });

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

});