
$(() => {

  const $menuItems = $('.nav-item');
  const $toggle = $('.toggle');
  const $showSingle = $('.showSingle');
  const $targetDiv = $('.targetDiv');

  $menuItems.show();

  $toggle.click(function() {
    $menuItems.slideToggle( 'slow');
  });

  $showSingle.click(function(){
    $targetDiv.hide();
    $('#div'+$(this).attr('target')).slideToggle();
  });

});
