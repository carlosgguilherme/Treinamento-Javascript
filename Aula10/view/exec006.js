var area = document.getElementById('area')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar(){
    area.innerText = 'Clicou!!'
    area.style.background = 'red'
}
function entrar(){
    area.innerText = 'Entrei'
}
function sair(){
    area.innerText = 'Sai'
    area.style.background = 'rgb(102, 246, 102)'
}