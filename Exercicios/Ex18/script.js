function Contar() {
    
    let inic= document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pas= document.getElementById('passo')
    let res = document.getElementById('res')
    
    if (inic.value.length ==0 || fim.value.length ==0 ||  pas.value.length ==0) {
        window.alert('Erro')
    }else{
        let i= Number(inic.value)
        let f= Number(fim.value)
        let p= Number(pas.value)
        
        if (i < f) {
            for (let c= i; c >= f; c += p) {
                res.innerHTML += `${c}`
            } else{
            for (let c= i; c <=f; c-=p) {
                res.innerHTML +=`${c}`
            }
            
        }
    }
}
res.innerHTML ='contando'
}