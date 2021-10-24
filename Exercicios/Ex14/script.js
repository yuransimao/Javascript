function carregar() {
        var msg= document.getElementById('msg')
        var img= document.getElementById('imagem')
        var data= new Date()
        var hora= data.getHours()
        msg.innerHTML= `Agora são ${hora} Horas`
        if (hora >= 0  && hora <= 12) {
            //Bom Dia
            img.src = 'manha.png'
            document.body.style.background= '#c49f7e'
        } else if (hora >= 12 && hora <= 18 ) { 
            //Boa tarde
            img.src = 'tarde.png'
            document.body.style.background= '#ac682a'
        }else{
            //Boa noite
            img.src= 'noite.png'
            document.body.style.background= '#093e87'
        }
    
}
