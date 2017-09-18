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
  if((initState.contactBarTop * 0.79) <= ($(window).scrollTop())) {
    $('#contact-bar').css({
      'position' : 'fixed',
      'top' : '0',
      'margin-top' : '0'
    })
    $('#content').css({
      'margin-top' : '60vh'
    })
    $('#contact-bar').css({
      'transform' : ''
    })
  }
  if((initState.contactBarTop * 0.79) >= $(window).scrollTop()) {
    $('#contact-bar').css({
      'position' : '',
      'margin-top' : '50vh'
    })
    $('#content').css({
      'margin-top' : '0'
    })
    $('#contact-bar').css({
      'transform' : 'translatey(' + $(window).scrollTop()*-0.25 + 'px)'
    })
  }
})
