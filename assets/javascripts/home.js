$(document).ready(function() {
  // Hide the home button at first
  $('.back').hide();
  // Click on 'Contact' and hide the main-container and show up the contacts list. And show the home button.
  $('#div4').click(function(){$('#main-container').hide(); $('#contact-container').fadeIn(); $('.back').show();});
  $('.back').click(function(){$('#contact-container').fadeOut(); $('.back').hide(); $('#main-container').show(); })
});
