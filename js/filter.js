    /*Dropdown Menu*/
$('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(500);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(500);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/

$('.dropdown-menu li').click(function () {
  var input = $(this).parents('.dropdown').find('input').val();
 
    if (input == "all") {
    $('.cont div').removeClass('hidden');
  } else {
    $('.cont div').addClass('hidden');
    $('.cont div[data-eventtype="' + input + '"]').removeClass('hidden');
  }
    
    
});  
      