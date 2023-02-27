function tabuada(){
  let num = document.querySelector('input#number')
  let gen = document.querySelector('div#res')

  if(num.value.length == 0){
    window.alert('Insira um número')
  }else{
    let n = Number(num.value)
    let c = 1

    gen.innerHTML = ''
    
    let selectList = document.createElement("select");
    selectList.id = "mySelect";
    selectList.size = "10"
    gen.appendChild(selectList);

    while(c <= 10){
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      selectList.appendChild(item)
      c++
    }
  }
  
}
function zerar(){
  let gen = document.querySelector('div#res')
  gen.innerHTML = ''
}
