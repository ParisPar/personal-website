$(document).ready(function() {

  var navbarHeight = 80;

  //If the pages loads and isn't at the top position, add the navbar
  if($(this).scrollTop() > 100) {
    $('.navbar').addClass(('navbar-on'));
  } else {
    $('.navbar').removeClass(('navbar-on'));
  };

  //Smooth scrolling
  $('.navbar-default .navbar-nav > li > a, .jumbotron .scroll-icon a').on('click',function(event){
    event.preventDefault();
    $(this).blur();
    var dest = $(this).attr("href");
    var scrollTo;
    if(dest == '#'){
      scrollTo = 0;
    } else {
      scrollTo = $(dest).offset().top - navbarHeight;
    }
    $('html,body').animate({
      scrollTop: scrollTo
    }, 400);
  });

  //On page scroll, check if navbar is needed. Also keep track of position to update navigation links
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
      $('.navbar').addClass(('navbar-on'));
    } else {
      $('.navbar').removeClass(('navbar-on'));
    };
  });

  //Populate skills list using Vue.js
  $.getJSON('data/skillsByCategory.json', function(data) {
    new Vue({
      el: '#skills',
      data: {
        message: "Hello Vue",
        skillsData: data
      }
    });
  });
  
});