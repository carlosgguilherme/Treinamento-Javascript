function count() {
  var init = document.getElementById("init");
  var end = document.getElementById("end");
  var count = document.getElementById("count");
  var res = document.getElementById("res");

  if (
    init.value.length == 0 ||
    end.value.length == 0 ||
    count.value.length == 0
  ) {
    alert("ERRO!! Veja se oque botou está correto.");
  } else {
    res.innerHTML = 'Contando: '
    let i = Number(init.value);
    let e = Number(end.value);
    let c = Number(count.value);

    for (let r = i; r <= e; r += c) {
      res.innerHTML += ` ${r} \u{1F449}`
    }
    res.innerHTML += `\u{1F3C1}`
  }
}
