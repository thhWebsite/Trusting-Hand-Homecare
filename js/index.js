var initState = {
  contactBarTop: $('#contact-bar').offset().top
}

//Link functions
function facebookLink() {
  window.open("https://www.facebook.com/Trusting-Hand-Homecare-1877394315841612/")
}

//Load page properly if scrolled down
$(document).ready( function() {

  scrollAnimation()

})


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
  if((initState.contactBarTop * 0.8) <= ($(window).scrollTop())) {
    $('#contact-bar').css({
      'position' : 'fixed',
      'top' : '0',
      'margin-top' : '0',
      'transform' : ''
      // 'animation' : 'contact-bar-down 2s forwards'
    })
    $('#content').css({
      'margin-top' : '30vw'
    })
  }
  if((initState.contactBarTop * 0.8) >= $(window).scrollTop()) {
    $('#contact-bar').css({
      'position' : '',
      'margin-top' : '25vw',
      'transform' : 'translatey(' + $(window).scrollTop()*-0.25 + 'px)'
      // 'animation' : 'contact-bar-up 1s forwards'
    })
    $('#content').css({
      'margin-top' : '0'
    })
  }
}
