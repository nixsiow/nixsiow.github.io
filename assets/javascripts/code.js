$(document).ready(function() {
  // Hide button at first load.
  $('.scrollToTop').hide();

  //open project info
  $('.slide-out-effect').find('ul a').on('click', function(event) {
    event.preventDefault();
    var selected_member = $(this).data('type');
    $('main').addClass('slide-out');
    $('.cd-member-bio.' + selected_member + '').addClass('slide-in');
    $('.cd-member-bio-close').addClass('is-visible');
    $('body').addClass('overflow-hidden');
  });

  //close project info
  $(document).on('click', '.cd-overlay, .cd-member-bio-close', function(event) {
    event.preventDefault();
    $('main').removeClass('slide-out');
    $('.cd-member-bio').removeClass('slide-in');
    $('.cd-member-bio-close').removeClass('is-visible');
    $('body').removeClass('overflow-hidden');
  });


  // ------------------------
  // For Jump to Top button
  // ------------------------

  //Check to see if the window is top if not then display button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').hide();
    }
  });

  //Click event to scroll to top
  $('.scrollToTop').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

});
