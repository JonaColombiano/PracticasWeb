const niveles = 15
let key = generarTeclas(niveles)

function generarTeclas(niveles){
    return new Array(niveles).fill(0).map(generarTeclaAleatoria)
}

function generarTeclaAleatoria(){
    const min = 65
    const max = 90
    return Math.round(Math.random() * (max-min)+min)
}

function getElementByKeyCode(keyCode){
    return document.querySelector(`[data-key="${keyCode}"]`);
}

function active(keyCode, opts={}){
    const el = getElementByKeyCode(keyCode)
    el.classList.add('active')
    if(opts.sucess){
       el.classList.add('sucess')
       }else if (opts.fail){
           el.classList.add('fail')
       }
    setTimeout(()=>desactive(el),500)
}

function desactive (el){
    el.className = 'letra'
}