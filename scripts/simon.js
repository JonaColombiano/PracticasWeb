const niveles = 15
let teclas = generarTeclas(niveles)

function siguienteNivel(nivelActual){
    if(nivelActual==niveles){
        return Swal.fire({
            title:'ganaste',
            type:'success',
        })
    }
    Swal.fire({
        timer:800,
        title:`Nivel ${nivelActual+1}`,
        showConfirmButton:false,
    })
    
    for(let i=0; i<=nivelActual; i++){
        setTimeout(()=>active(teclas[i]),1000*i+1500)
    }
    
    let i=0
    let teclaActual=teclas[i]
    window.addEventListener('keydown', onkeydown)
    
    function onkeydown(ev){
        if(ev.keyCode==teclaActual){
            active(teclaActual, {success:true})
           i++
            if(i>nivelActual){
               window.removeEventListener('keydown', onkeydown)
                setTimeout(()=>siguienteNivel(i),1500)
               }
            teclaActual=teclas[i]
           }else{
                active(ev.keyCode, {fail:true});
                window.removeEventListener('keydown', onkeydown);
                Swal.fire({
                    title:'Perdiste',
                    text:'¿Quieres Jugar de Nuevo?'
                }).then((result)=>{
                    if(result.value){
                        teclas=generarTeclas(niveles)
                        siguienteNivel(0)
                    }
                })

                }
            }
     }
    


siguienteNivel(0)

function generarTeclas(niveles){
    return new Array(niveles).fill(0).map(generarTeclaAleatoria)
}

function generarTeclaAleatoria(){
    const min = 65
    const max = 90
    return Math.round(Math.random() * (max-min)+ min )
}

function getElementByKeyCode(keyCode){
    return document.querySelector(`[data-key="${keyCode}"]`);
}

function active(keyCode, opts={}){
    const el = getElementByKeyCode(keyCode)
    el.classList.add('active')
    if(opts.success){
       el.classList.add('success')
       }else if (opts.fail){
           el.classList.add('fail')
       }
    setTimeout(()=>desactive(el),500)
}

function desactive (el){
    el.className = 'letra'
}