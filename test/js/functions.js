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


  // select

  $('.select-help').select2({
    placeholder: "Help",
    //allowClear: true,
    minimumResultsForSearch: Infinity
  });
  
  $('.select-curr').select2({
    minimumResultsForSearch: Infinity
  });

  $('.select-lang').select2({
    placeholder: "Language",
    minimumResultsForSearch: Infinity
  });

  $('.select-category').select2({
    placeholder: "Category",
    minimumResultsForSearch: Infinity
  });


  // slider-range

  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 1000,
    values: [ 50, 750 ],
    slide: function( event, ui ) {
      $( "#amount-min" ).val( "$" + ui.values[ 0 ]  );
      $( "#amount-max" ).val( "$" + ui.values[ 1 ] );
    }
  });
    $( "#amount-min" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );

    $( "#amount-max" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );

});


  // modal

  document.addEventListener('DOMContentLoaded', function(){
    var modal = document.getElementById('modal');
    var btn = document.getElementById("liSingIn");
    var span = document.getElementsByClassName("close")[0];
  
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }


    // btn filter

    var btnFilter = document.querySelector('.btn__filter');
    var grop = document.querySelector('.accordion-group');
    //console.log(btnFilter);
    btnFilter.addEventListener(
      "click",
      function() {
        if (grop.classList.contains("active")){
					grop.classList.remove("active");
				} else {
					grop.classList.add("active");
				}
      }
    )
  });