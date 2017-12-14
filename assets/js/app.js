$(document).ready(function () {
  $('.mcdo').hide();
  $('.chi').hide();
  $('.veg').hide();

  $('.modal').modal();
});

function splash(){
  /*splash*/
  setTimeout(function () {
    $(".splash").fadeOut(500);
  }, 3000);
  setTimeout(function () {
    $(location).attr('href', 'principal.html').fadeIn(500)
  }, 3000);
}

/** funcion para mostrar la comida rápida */
$('#chatarra').click(function(){
  $('.mcdo').show();
  $('.chi').hide();
  $('.veg').hide();
});



/** funcion para mostrar la comida china */
$('#china').click(function () {
  $('.chi').show();
  $('.mcdo').hide();
  $('.veg').hide();
});


/** funcion para mostrar la comida vegetariana */
$('#vegetariana').click(function () {
  $('.veg').show();
  $('.mcdo').hide();
  $('.chi').hide();
});



