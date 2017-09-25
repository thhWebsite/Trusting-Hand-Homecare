//Link functions
function facebookLink() {
  window.open("https://www.facebook.com/Trusting-Hand-Homecare-1877394315841612/")
}

//object to pass sate along between functions
var state = {
  bannerHeight: $("#banner").height(),
  contactBarHeight: $("#contact-bar").height(),
  row4Height: $("#row-4").height(),
  height: $(window).height(),
  width: $(window).width()
}

//Load page properly if scrolled down and initiate height for elements
$(document).ready( function() {

  setHeight()

  scrollAnimation()

})

//Function to set heights for elements
function setHeight() {

  $("#contact-bar").css({
    'margin-top' : state.bannerHeight + 'px',
    'min-height' : state.height / 10 + 'px'
  })

  $(".body-text").css({
    'min-width' : state.height / 3
  })
}

//Scroll based animatinos for page
$(window).scroll( function() {

  scrollAnimation()

})

function scrollAnimation() {
  //Based on scroll, will ttranslate the content div up to scroll it over the banner
  $('#content').css({
    'transform' : 'translatey(' + $(window).scrollTop()*-0.25 + 'px)'
  })
  $('#contact-bar').css({
    'transform' : 'translatey(' + $(window).scrollTop()*-0.25 + 'px)'
  })

  //Based on scroll, will blur and scale the image
  $('#banner').css({
    'transform' : 'scale(' + (1.1 - (0.25*($(window).scrollTop() / $(window).height()))) + ', ' + (1.1 - (0.25*($(window).scrollTop() / $(window).height()))) + ')',
    'filter' : 'blur(' + (17*($(window).scrollTop() / $(window).height())) + 'px)'
  })

  //Cause contact bar to stickto top of page after scrolling past
  if((state.bannerHeight * 0.8) <= ($(window).scrollTop())) {
    $('#contact-bar').css({
      'position' : 'fixed',
      'top' : '0',
      'margin-top' : '0',
      'transform' : ''
    })
    $('#content').css({
      'margin-top' : state.bannerHeight + state.contactBarHeight + 'px'
    })
  }
  if((state.bannerHeight * 0.8) >= $(window).scrollTop()) {
    $('#contact-bar').css({
      'position' : '',
      'margin-top' : state.bannerHeight + 'px',
      'transform' : 'translatey(' + $(window).scrollTop()*-0.25 + 'px)'
    })
    $('#content').css({
      'margin-top' : '0'
    })
  }
}
