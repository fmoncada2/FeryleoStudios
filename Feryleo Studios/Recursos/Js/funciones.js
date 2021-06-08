$(document).ready(function(){

    /* Programar Slider */
    let listaImg = $('#slider img').length;
    let posicionImg = 1;

    $('#slider img').hide();
    $('#slider img:first-child').show(); //Visualizando le 1era Imagen

    // Funcion de Delay, para depues de 4s

    setInterval(function(){
        //Evaluamos si ya no hay imagenes
        if(posicionImg < listaImg){
            posicionImg++;
        } else {
            posicionImg =1;

        }

        $('#slider img').hide();
        $('#slider img:nth-child('+ posicionImg +')').show();

    }, 2000)
});


window.addEventListener('scroll', function(){
    let animacion = this.document.getElementById ('tarjetas');
    let posicion = animacion.getBoundingClientRect().top;
    console.log(posicion);
    let tamañoDePatalla = window.innerHeight/2;

    if(posicion < tamañoDePatalla){
        animacion.style.animation = 'mover 1s ease-out'
    };
});
