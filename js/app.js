
$(() => {

  $(this).scrollTop(0);

  const $menuItems = $('.nav-item');
  const $toggle = $('.toggle');
  const $showSingle = $('.showSingle');
  const $targetDiv = $('.targetDiv');

  $toggle.click(function() {
    $menuItems.slideToggle('slow');
  });

  $showSingle.click(function(){
    $targetDiv.hide();
    $('#div'+$(this).attr('target')).slideToggle();
  });

});
