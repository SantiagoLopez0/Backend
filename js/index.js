/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}

/*
  Funcion que inicializa todos los procesos del Proyecto
*/
function init(){
    $("#mostrarTodos").on('click', ()=>{
        var reg = $(".registro").length;
        if(reg > 0){
            $(this).attr("disabled", "true");
        }else{
            showRecords();
        }
        
    })
}

/*
  Funciones que crean las listas desplegables de Ciudad y Tipo
*/
function createOptions(){
        $.ajax({
        url: "./filtroOpciones.php",
        dataType: "json",
        type: 'POST',
        data: {iterator:iterator},    
        success: function(response){
            alert(response.op1);
            //alert(response.opcion2);
        }
      })
      
}


/*
  Funcion que muestra todos los registros
*/
function showRecords(){
    for(var iterator=0; iterator<101; iterator++){
        $.ajax({
        url: "./buscador.php",
        dataType: "json",
        type: 'POST',
        data: {iterator:iterator},    
        success: function(response){
            createCard(response.Direccion, response.Ciudad, response.Telefono, response.Codigo_Postal, response.Tipo, response.Precio)
        }
      })
    }
}

//Funcion que crea el card que muestra el registro y lo añade al contenedor
function createCard(direccion, ciudad, telefono, codigoP, tipo, precio){
    var contenedor = $(".colContenido");
    var registro = '<div class="row registro">'+
                  '<div class="col s12">'+
                      '<div class="card componenteReg">'+
                          '<div class="card-image">'+
                              '<img src="img/home.jpg">'+
                          '</div>'+
                          '<div class="card-stacked ">'+
                            '<div class="card-content">'+
                                '<ul class="listaReg">'+
                                    '<li><strong>Dirección:</strong>'+direccion+'</li>'+
                                    '<li><strong>Ciudad:</strong>'+ciudad+'</li>'+
                                    '<li><strong>Teléfono:</strong>'+telefono+'</li>'+
                                    '<li><strong>Código Postal:</strong>'+codigoP+'</li>'+
                                    '<li><strong>Tipo:</strong>'+tipo+'</li>'+
                                    '<li><strong>Precio:</strong>'+precio+'</li>'+
                                '</ul>'+
                            '</div>'+
                            '<div class="card-action">'+
                              '<a href="#">VER MAS</a>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'   
    $(contenedor).append(registro);
}

inicializarSlider();
playVideoOnScroll();

$(document).ready(function(){
    $('select').material_select();
    init();
    createOptions();
});
