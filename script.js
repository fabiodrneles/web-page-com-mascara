let diaNoite = document.querySelector('.diaNoite')
let menuToggle = document.querySelector('.menuToggle')
let body = document.querySelector('body')
let navegacao = document.querySelector(".navegacao")

diaNoite.onclick = function(){
    body.classList.toggle('escuro')
    diaNoite.classList.toggle('active')
}

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navegacao.classList.toggle('active')
}