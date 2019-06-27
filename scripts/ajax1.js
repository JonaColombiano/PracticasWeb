function iniciar(){
    cajadatos= document.getElementById('cajadatos')
    
    var boton = document.getElementById('boton')
    boton.addEventListener('click', leer, false)


}

function leer(){
    var url ="texto.txt"
    var solicitud= new XMLHttpRequest();
    solicitud.addEventListener('load', mostrar, false)
    solicitud.open("GET", url, true);
    solicitud.send(null)
}

function mostrar(e){
    cajadatos.innerHTML=e.target.responseText;
}

window.addEventListener('load', iniciar, false)