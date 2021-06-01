

function criadorDePaletas(){
  let cPaleta = document.querySelector('#color-palette');
  let cores = ["black", "pink", "red", "olive"]

  for (index = 0; index <= 3; index += 1) {
    let li = document.createElement('li');
    let cor = index;

    for (let j = 0; j < cores.length; j++) {
      li.className = "color";
      li.style.backgroundColor = cores[index];
      cPaleta.appendChild(li);
    }
  }
}

criadorDePaletas();