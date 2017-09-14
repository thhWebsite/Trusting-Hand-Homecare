const state = {
  bannerWidth: window.getComputedStyle(document.getElementById("banner")).getPropertyValue('width')
}

$(window).scroll( function() {
  $('#content').css({
    'transform' : 'translatey(' + $(window).scrollTop()*-0.25 + 'px)'
  })
  $('#banner').css({
    'transform' : 'scale(' + (1.1 - (0.25*($(window).scrollTop() / $(window).height()))) + ', ' + (1.1 - (0.25*($(window).scrollTop() / $(window).height()))) + ')'
  })
})
