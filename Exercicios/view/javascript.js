function date() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("img");
  var title = document.getElementById("title");
  var date = new Date();
  var hora = date.getHours();
  var dia = date.toLocaleDateString();

  msg.innerHTML = `Hoje é ${dia}, agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    img.src = "img/fotomanha.png";
    document.body.style.backgroundColor = "#af8b63";
    title.innerHTML = 'Bom dia'
  } else if (hora >= 12 && hora <= 18) {
    img.src = "img/fototarde.png";
    document.body.style.backgroundColor = "#fe9b13";
    title.innerHTML = 'Boa tarde'
  } else {
    img.src = "img/fotonoite.png";
    document.body.style.backgroundColor = "#3a415a";
    title.innerHTML = 'Boa noite'
  }
}
