//ejemplo 1
function iniciar(){
    origen1 = document.getElementById('imagen')
    origen1.addEventListener('dragstart', arrastrado, false)
    
    destino = document.getElementById('cajasoltar')
    destino.addEventListener('dragenter', function(e){
        e.preventDefault()}, false) //se le quitan los eventos que estan por default en el navegador
    
    destino.addEventListener('dragover', function(e){
        e.preventDefault()}, false)
    destino.addEventListener('drop', soltado, false)
}

function arrastrado(e){
    var codigo = '<img src="'+origen1.getAttribute('src')+'">'
    e.dataTransfer.setData('Text', codigo)
}

function soltado(e){
    e.preventDefault()
    destino.innerHTML=e.dataTransfer.getData('Text')
}

//ejemplo2
function iniciar2(){
    origen2 = document.getElementById('imagen2')
    origen2.addEventListener('dragstart', arrastrado2, false)
    origen2.addEventListener('dragend', finalizado, false)
    
    soltar=document.getElementById('cajasoltar2')
    soltar.addEventListener('dragenter', entrado, false)
    soltar.addEventListener('dragleave', saliendo, false)
    soltar.addEventListener('dragover', function(e){
        e.preventDefault();}, false)
    soltar.addEventListener('drop', soltado2, false)
}

function entrado(e){
    e.preventDefault()
    soltar.style.background='rgba(0,150,0,0.2)'
}

function saliendo(e){
    e.preventDefault()
    soltar.style.background='#ffffff'
}

function finalizado(e){
    elemento=e.target
    elemento.style.visibility='hidden'
}

function arrastrado2(e){
    var codigo = '<img src="'+origen2.getAttribute('src')+'">'
    e.dataTransfer.setData('Text', codigo)
}

function soltado2(e){
    e.preventDefault()
    soltar.style.background='#ffffff'
    soltar.innerHTML=e.dataTransfer.getData('Text')
}

function archivo(){
    soltar2=document.getElementById('cajasoltar3')
    soltar2.addEventListener('dragenter', function (e){
            e.preventDefault();},false)
    soltar2.addEventListener('dragover', function (e){
            e.preventDefault();},false)
    soltar2.addEventListener('drop',soltado3, false)
}

function soltado3(e){
    e.preventDefault();
    var archivo=e.dataTransfer.files;
    var lista= ''
    for(var i=0; i<archivo.length; i++){
        lista+='Archivo: '+archivo[i].name+' '+archivo[i].size+'<br>'
    }
    soltar2.innerHTML=lista;
}



window.addEventListener('load', function (){
    iniciar();
    iniciar2();
    archivo();
    }, false)