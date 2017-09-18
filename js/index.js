var initState = {
  contactBarTop: $('#contact-bar').offset().top
}

//Scroll based animatinos for page
$(window).scroll( function() {

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
      'margin-top' : '60vh'
    })
  }
  if((initState.contactBarTop * 0.8) >= $(window).scrollTop()) {
    $('#contact-bar').css({
      'position' : '',
      'margin-top' : '50vh',
      'transform' : 'translatey(' + $(window).scrollTop()*-0.25 + 'px)'
      // 'animation' : 'contact-bar-up 1s forwards'
    })
    $('#content').css({
      'margin-top' : '0'
    })
  }
})
