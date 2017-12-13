$(document).ready(function () {
  /*splash*/
  setTimeout(function () {
    $(".splash").fadeOut(500);
  }, 4000);
  setTimeout(function () {
    $(".principal").fadeIn(500);
  });

});

/** funcion para mostrar la comida rápida */
$('#chatarra').click(function(){
  $('.fotitos').html('<h3>Comida Rápida</h3>'+
                    '<div class= "col s4 col m4">'+
                      '<img src="assets/img/chatarra/mcdonalds.jpg" alt="" class="circle responsive-img comidas">'+
                      '<div class="encima">'+
                        '<p class="txt">McDonalds</p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="col s4 col m4">'+
                      '<img src="assets/img/chatarra/kfc.jpg" alt="" class="circle responsive-img comidas">'+
                      '<div class="encima">'+
                        '<p class="txt">KFC</p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="col s4 col m4">'+
                      '<img src="assets/img/chatarra/pjd.jpg" alt="" class="circle responsive-img comidas pjd">'+
                      '<div class="encima">'+
                        '<p class="txt">Pedro, Juan Y Diego</p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="col s4 col m4">'+
                      '<img src="assets/img/chatarra/doggis.jpg" alt="" class="circle responsive-img comidas doggis">'+
                      '<div class="encima">'+
                        '<p class="txt">Doggis</p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="col s4 col m4">'+
                      '<img src="assets/img/chatarra/juanMaestro.jpg" alt="" class="circle responsive-img comidas maestro">'+
                      '<div class="encima">'+
                        '<p class="txt">Juan Maestro</p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="col s4 col m4">'+
                      '<img src="assets/img/chatarra/pincheira.jpg" alt="" class="circle responsive-img comidas pincheira">'+
                      '<div class="encima">'+
                        '<p class="txt">Los Pincheira</p>'+
                      '</div>'+
                    '</div>'
  );
});

/** funcion para mostrar la comida mexicana */
$('#mexicana').click(function () {
  $('.fotitos').html('<h3>Comida Mexicana</h3>' +
                      '<div class= "col s4 col m4">' +
                        '<img src="assets/img/mexicana/cuates.jpg" alt="" class="circle responsive-img comidas">' +
                        '<div class="encima">' +
                          '<p class="txt">Los Cuates</p>' +
                        '</div>' +
                      '</div>' +
                      '<div class="col s4 col m4">' +
                        '<img src="assets/img/mexicana/garibaldi.jpg" alt="" class="circle responsive-img comidas">' +
                        '<div class="encima">' +
                          '<p class="txt">Restaurante Plaza Garibaldi</p>' +
                        '</div>' +
                      '</div>' +
                      '<div class="col s4 col m4">' +
                        '<img src="assets/img/mexicana/mexicana.jpg" alt="" class="circle responsive-img comidas pjd">' +
                        '<div class="encima">' +
                          '<p class="txt">Mexicana Restoran</p>' +
                        '</div>' +
                      '</div>' +
                      '<div class="col s4 col m4">' +
                        '<img src="assets/img/mexicana/taqueria.jpg" alt="" class="circle responsive-img comidas doggis">' +
                        '<div class="encima">' +
                          '<p class="txt">Taquería El Ranchero</p>' +
                        '</div>' +
                      '</div>' +
                      '<div class="col s4 col m4">' +
                        '<img src="assets/img/mexicana/tortilla.jpg" alt="" class="circle responsive-img comidas maestro">' +
                        '<div class="encima">' +
                          '<p class="txt">Tortilla Factory</p>' +
                        '</div>' +
                      '</div>' +
                      '<div class="col s4 col m4">' +
                        '<img src="assets/img/mexicana/comidita.jpg" alt="" class="circle responsive-img comidas pincheira">' +
                        '<div class="encima">' +
                          '<p class="txt">Comida Mexicana</p>' +
                        '</div>' +
                      '</div>'
  );
});

/** funcion para mostrar la comida china */
$('#china').click(function () {
  $('.fotitos').html('<h3>Comida China</h3>' +
                    '<div class= "col s4 col m4">' +
                      '<img src="assets/img/china/ricos.jpg" alt="" class="circle responsive-img comidas">' +
                      '<div class="encima">' +
                        '<p class="txt">Los Chinos Ricos</p>' +
                      '</div>' +
                    '</div>' +
                    '<div class="col s4 col m4">' +
                      '<img src="assets/img/china/kuncheng.jpg" alt="" class="circle responsive-img comidas">' +
                      '<div class="encima">' +
                        '<p class="txt">Restaurant Kun Cheng y Cia.</p>' +
                      '</div>' +
                    '</div>' +
                    '<div class="col s4 col m4">' +
                      '<img src="assets/img/china/hao.jpg" alt="" class="circle responsive-img comidas pjd">' +
                      '<div class="encima">' +
                        '<p class="txt">Restaurante Hao Hwa</p>' +
                      '</div>' +
                    '</div>' +
                    '<div class="col s4 col m4">' +
                      '<img src="assets/img/china/panda.jpg" alt="" class="circle responsive-img comidas doggis">' +
                      '<div class="encima">' +
                        '<p class="txt">Panda Junior</p>' +
                      '</div>' +
                    '</div>' +
                    '<div class="col s4 col m4">' +
                      '<img src="assets/img/china/chino.jpg" alt="" class="circle responsive-img comidas maestro">' +
                      '<div class="encima">' +
                        '<p class="txt">Restaurant Chino</p>' +
                      '</div>' +
                    '</div>' +
                    '<div class="col s4 col m4">' +
                      '<img src="assets/img/china/nan.jpg" alt="" class="circle responsive-img comidas pincheira">' +
                      '<div class="encima">' +
                        '<p class="txt">Restaurant Jiang Nan</p>' +
                      '</div>' +
                    '</div>'
  );
});

/** funcion para mostrar la comida japonesa */
$('#japonesa').click(function () {
  $('.fotitos').html('<h3>Comida Japonesa</h3>' +
                    '<div class= "col s4 col m4">' +
                      '<img src="assets/img/japonesa/sushi.jpg" alt="" class="circle responsive-img comidas">' +
                      '<div class="encima">' +
                        '<p class="txt">Sushi Japón Ya</p>' +
                      '</div>' +
                    '</div>' +
                    '<div class="col s4 col m4">' +
                      '<img src="assets/img/japonesa/kintaro.jpg" alt="" class="circle responsive-img comidas">' +
                      '<div class="encima">' +
                        '<p class="txt">Ramen Kintaro</p>' +
                      '</div>' +
                    '</div>' +
                    '<div class="col s4 col m4">' +
                      '<img src="assets/img/japonesa/saori.jpg" alt="" class="circle responsive-img comidas pjd">' +
                      '<div class="encima">' +
                        '<p class="txt">Saori</p>' +
                      '</div>' +
                    '</div>' +
                    '<div class="col s4 col m4">' +
                      '<img src="assets/img/japonesa/japon.jpg" alt="" class="circle responsive-img comidas doggis">' +
                      '<div class="encima">' +
                        '<p class="txt">Restaurant Japon</p>' +
                      '</div>' +
                    '</div>' +
                    '<div class="col s4 col m4">' +
                      '<img src="assets/img/japonesa/yoko.jpg" alt="" class="circle responsive-img comidas maestro">' +
                      '<div class="encima">' +
                        '<p class="txt">Izakaya Yoko</p>' +
                      '</div>' +
                    '</div>' +
                    '<div class="col s4 col m4">' +
                      '<img src="assets/img/japonesa/aomori.jpg" alt="" class="circle responsive-img comidas pincheira">' +
                      '<div class="encima">' +
                        '<p class="txt">Aomori Nikkei & Sushi</p>' +
                      '</div>' +
                    '</div>'
  );
});


/** funcion para mostrar la comida italiana */
$('#italiana').click(function () {
  $('.fotitos').html('<h3>Comida Italiana</h3>' +
                      '<div class= "col s4 col m4">' +
                        '<img src="assets/img/italiana/taverna.jpg" alt="" class="circle responsive-img comidas">' +
                        '<div class="encima">' +
                          '<p class="txt">La Taverna della Piazza</p>' +
                        '</div>' +
                      '</div>' +
                      '<div class="col s4 col m4">' +
                        '<img src="assets/img/italiana/dacesare.jpg" alt="" class="circle responsive-img comidas">' +
                        '<div class="encima">' +
                          '<p class="txt">Da Cesare&Paolo Pizzeria Ristorante</p>' +
                        '</div>' +
                      '</div>' +
                      '<div class="col s4 col m4">' +
                        '<img src="assets/img/italiana/nostra.jpg" alt="" class="circle responsive-img comidas pjd">' +
                        '<div class="encima">' +
                          '<p class="txt">La Pizza Nostra IL Ristorante Italiano</p>' +
                        '</div>' +
                      '</div>' +
                      '<div class="col s4 col m4">' +
                        '<img src="assets/img/italiana/signore.jpg" alt="" class="circle responsive-img comidas doggis">' +
                        '<div class="encima">' +
                          '<p class="txt">Signore</p>' +
                        '</div>' +
                      '</div>' +
                      '<div class="col s4 col m4">' +
                        '<img src="assets/img/italiana/fuente.jpg" alt="" class="circle responsive-img comidas maestro">' +
                        '<div class="encima">' +
                          '<p class="txt">Fuente Italiana</p>' +
                        '</div>' +
                      '</div>' +
                      '<div class="col s4 col m4">' +
                        '<img src="assets/img/italiana/insaciables.jpg" alt="" class="circle responsive-img comidas pincheira">' +
                        '<div class="encima">' +
                          '<p class="txt">Los Insaciables</p>' +
                        '</div>' +
                      '</div>'
  );
});

/** funcion para mostrar la comida vegetariana */
$('#vegetariana').click(function () {
  $('.fotitos').html('<h3>Comida Vegetariana</h3>' +
                      '<div class= "col s4 col m4">' +
                        '<img src="assets/img/vege/manati.jpg" alt="" class="circle responsive-img comidas">' +
                        '<div class="encima">' +
                          '<p class="txt">Manatí</p>' +
                        '</div>' +
                      '</div>' +
                      '<div class="col s4 col m4">' +
                        '<img src="assets/img/vege/chakra.jpg" alt="" class="circle responsive-img comidas">' +
                        '<div class="encima">' +
                          '<p class="txt">La Chakra</p>' +
                        '</div>' +
                      '</div>' +
                      '<div class="col s4 col m4">' +
                        '<img src="assets/img/vege/huerto.jpg" alt="" class="circle responsive-img comidas pjd">' +
                        '<div class="encima">' +
                          '<p class="txt">El Huerto</p>' +
                        '</div>' +
                      '</div>' +
                      '<div class="col s4 col m4">' +
                        '<img src="assets/img/vege/govindas.jpg" alt="" class="circle responsive-img comidas doggis">' +
                        '<div class="encima">' +
                          '<p class="txt">Govindas Restaurant Vegetariano</p>' +
                        '</div>' +
                      '</div>' +
                      '<div class="col s4 col m4">' +
                        '<img src="assets/img/vege/verde.jpg" alt="" class="circle responsive-img comidas maestro">' +
                        '<div class="encima">' +
                          '<p class="txt">Puro Verde</p>' +
                        '</div>' +
                      '</div>' +
                      '<div class="col s4 col m4">' +
                        '<img src="assets/img/vege/chancho.jpg" alt="" class="circle responsive-img comidas pincheira">' +
                        '<div class="encima">' +
                          '<p class="txt">El Chancho Seis</p>' +
                        '</div>' +
                      '</div>'
  );
});

/** funcion para mostrar la comida peruana */
$('#peruana').click(function () {
  $('.fotitos').html('<h3>Comida Peruana</h3>' +
    '<div class= "col s4 col m4">' +
    '<img src="assets/img/vege/manati.jpg" alt="" class="circle responsive-img comidas">' +
    '<div class="encima">' +
    '<p class="txt">Manatí</p>' +
    '</div>' +
    '</div>' +
    '<div class="col s4 col m4">' +
    '<img src="assets/img/vege/chakra.jpg" alt="" class="circle responsive-img comidas">' +
    '<div class="encima">' +
    '<p class="txt">La Chakra</p>' +
    '</div>' +
    '</div>' +
    '<div class="col s4 col m4">' +
    '<img src="assets/img/vege/huerto.jpg" alt="" class="circle responsive-img comidas pjd">' +
    '<div class="encima">' +
    '<p class="txt">El Huerto</p>' +
    '</div>' +
    '</div>' +
    '<div class="col s4 col m4">' +
    '<img src="assets/img/vege/govindas.jpg" alt="" class="circle responsive-img comidas doggis">' +
    '<div class="encima">' +
    '<p class="txt">Govindas Restaurant Vegetariano</p>' +
    '</div>' +
    '</div>' +
    '<div class="col s4 col m4">' +
    '<img src="assets/img/vege/verde.jpg" alt="" class="circle responsive-img comidas maestro">' +
    '<div class="encima">' +
    '<p class="txt">Puro Verde</p>' +
    '</div>' +
    '</div>' +
    '<div class="col s4 col m4">' +
    '<img src="assets/img/vege/chancho.jpg" alt="" class="circle responsive-img comidas pincheira">' +
    '<div class="encima">' +
    '<p class="txt">El Chancho Seis</p>' +
    '</div>' +
    '</div>'
  );
});
/*
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 16
  });
  var infoWindow = new google.maps.InfoWindow({ map: map });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Aquí estoy.');
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}*/
