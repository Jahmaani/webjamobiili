$('#mtb-hamburger').on('click', function() {
  $('.nav-mobile-wrapper').fadeToggle();
  $(this).toggleClass('change');
})

$('.mobile-drop-down').on('click', function() {
  $('.nav-mobile-wrapper .sub-menu').slideToggle();
  $(this).toggleClass('toogle-change');
})


// LINKS AND RENDER


// $('.articles').on('click', function() {
//   $('#mtb-hamburger').removeClass('change');
//   $('.nav-mobile-wrapper').fadeOut();
//   $('#content').hide();
//   $('#content').load('articles.html');
//   $('#content').fadeIn();
// })

// $('.frontpage').on('click', function() {
//   $('#mtb-hamburger').removeClass('change');
//   $('.nav-mobile-wrapper').fadeOut();
//   $('#content').hide();
//   $('#content').load('frontpage.html');
//   $('#content').fadeIn();
// })

// $('.menu-item a').removeAttr("href");