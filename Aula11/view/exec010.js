
function calcular(){
    var pais = document.getElementById('caixa')
    var conteudo = document.getElementById('content')
    conteudo.disabled = false
    var res = document.getElementById('res')
    res.disabled = false
    var pais = pais.value
    console.log(conteudo)
    var brasil = 'Brasil'
    if (res == brasil ){
        res.innerHTML = `Você é brasileiro`
    }else{
        res.innerHTML = `Você é estrangeiro`
    }
  

    
 
}

