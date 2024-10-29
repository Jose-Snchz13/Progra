window.onload = () => {
  let botoncito1 = document.getElementsByTagName("button")[0];
  let barrica1 = document.getElementsByTagName("progress")[0];

  botoncito1.onclick = function () {
    hacerCosas(barrica1, botoncito1);
  };
};

function hacerCosas(barra, botoncito) {
  let cont = document.getElementsByClassName("container__monedas")[0];
  botoncito.disabled = true;
  let timer = setInterval(function () {
    if (barra.value == 100) {
      clearInterval(timer);
      botoncito.disabled = false;
      barra.value = 0;
      cont.innerText++;
    }
    barra.value++;
  }, 100);
}
