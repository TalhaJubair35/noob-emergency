let heartButtons = document.getElementsByClassName('heart-button');

for (const button of heartButtons) {
  button.addEventListener("click", function () {
    let heartNumber = document.getElementById('heart-number');
    heartNumber.innerText = parseInt(heartNumber.innerText)+1;
  });
}

