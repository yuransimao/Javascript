function tabuada() {
    var num = document.getElementById('num')
    var ta= document.getElementById('tabuada')
    if (num.value.length==0) {
        window.alert('digite um numero, por favor')
    } else{
        var n= Number(num.value)
        ta.innerHTML=''
        for (c=1; c <= 12; c++) {
            var item=  document.createElement('option')
            item.text= `${n}x ${c}= ${n*c}`
            ta.appendChild(item)
            
            }
        }
        
}
    