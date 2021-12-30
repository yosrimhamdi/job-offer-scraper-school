//document.querySelector("link[href='style.css']").href = ".css";
$('.one').click(function () {
  if ($(this).hasClass('active')) {
    return;
  } else {
    $(this).addClass('active');
    $('.two').removeClass('active');
    $('link[href="style2.css"]').attr('href', 'style.css');
  }
});
$('.two').click(function () {
  if ($(this).hasClass('active')) {
    return;
  } else {
    $(this).addClass('active');
    $('.one').removeClass('active');
    $('link[href="style.css"]').attr('href', '/styles/single-2.css');
  }
});
$(document).on('mouseover', '.land', function () {
  let phrase = $(this).attr('title');
  $('#Gouvernorat').text(phrase);
});
