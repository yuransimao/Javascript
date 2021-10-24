function Verificar() { 
    var data= new Date()
    var ano= data.getFullYear()
    var fano= document.getElementById('ano')
    var res= document.getElementById('res')
    if (fano.value.length ==0 || Number(fano.value) > ano) {
        window.alert('[Erro]Verifique os dados tente novamente')
        
    }else{
        var fsex= document.getElementsByName('sex')
        var idade= ano- Number(fano.value)
        var genero= ''
        var img= document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero='Homem'
            if (idade>0 && idade <10) {
                //criança
                img.setAttribute('src', 'criançahomem.png')
                } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem.png')
                    
                }else if (idade< 50) {
                    //adulto
                    img.setAttribute('src', 'adultohomem.png')
                    
                } else{
                    //idoso
                    img.setAttribute('src', 'idosohomem.png')
                }
        }else if (fsex[1].checked) {
            genero='Mulher'
            if (idade>0 && idade <10) {
                //criança
                img.setAttribute('src', 'criançamulher.png')
                } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
                    
                }else if (idade< 50) {
                    //adulto
                    img.setAttribute('src', 'adultomulher.png')
                    
                } else{
                    //idoso
                    img.setAttribute('src', 'idosamulher.png')
                }
            }
            res.style.textAlign='center'
            res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
    }       res.appendChild(img)
}
