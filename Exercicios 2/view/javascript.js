function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var year = document.getElementById('ano')
    var res = document.querySelector('div#res')
  
    
    if(year.value.length == 0 || Number(year.value) >= ano){
        alert('ERRO!! Veja se a data está correta.')
    }else{
        var select = document.getElementById('genero');
        var opcaoValor = select.options[select.selectedIndex].value;
        var idade = ano - Number(year.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(opcaoValor == 0){
            alert('Selecione seu gênero')
        }else if (opcaoValor == 1){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'https://images.pexels.com/photos/15466059/pexels-photo-15466059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
            }else if(idade < 21){
                img.setAttribute('src', 'img/fotonoite.png')
            }else if(idade < 50){

            }else{

            }
            
        }if (opcaoValor == 2){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){

            }else if(idade < 21){
                
            }else if(idade < 50){

            }else{
                
            }
            
        }
        res.innerHTML = `Você tem ${idade} anos e é ${genero}`
        res.appendChild(img)
        
    }
}