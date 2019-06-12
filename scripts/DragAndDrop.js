function iniciar(){
    origen1 = document.getElementById('imagen')
    origen1.addEventListener('dragstar', arrastrado, false)
    
    destino = document.getElementById('cajasoltar')
    destino.addEventListener('dragenter', soltar, false)
    
    destino.addEventListener('dragover', function(e){
        e.preventDefault()}, false)
    destino.addEventListener('dragover', function(e){
        e.preventDefault();}, false)
}

function arrastrado(){
    var codigo = 'img src="'+origen.getAttribute('src')+'">'
    e.dataTransfer.setData('Text', codigo)
}

function soltado(){
    e.preventDefault()
    destino.innerHTML=e.dataTransfer.getData('Text')
}

windows.addEventListener('load', iniciar, false)