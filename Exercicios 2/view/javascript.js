function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var year = document.getElementById('ano')
    var res = document.querySelector('div#res')
  
    
    if(year.value.length == 0 || Number(year.value) > ano){
        alert('ERRO!! Veja se a data está correta.')
    }else{
        var select = document.getElementById('genero');
        var opcaoValor = select.options[select.selectedIndex].value;
        var idade = ano - Number(year.value)
        var genero = ''
        if(opcaoValor == 0){
            alert('Selecione seu gênero')
        }else if (opcaoValor == 1){
            genero = 'Homem'
            res.innerHTML = `Vc tem ${idade} e é ${genero}`
        }else if (opcaoValor == 2){
            genero = 'Mulher'
            res.innerHTML = `Vc tem ${idade} e é ${genero}`
        }
        
    }
}