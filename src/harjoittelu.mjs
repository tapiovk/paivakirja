const valikkopainikkeet = document.querySelectorAll(".valikkopainike");
for (let i = 0; i < valikkopainikkeet.length; i++) {
  valikkopainikkeet[i].addEventListener("onmouseover", muutaTaustavari(this, '#8C7987'));
  valikkopainikkeet[i].addEventListener("onmouseleave", muutaTaustavari(this, '#8C8C8C'));
}

function muutaTaustavari(elementti, hexArvo) {
    elementti.style.backgroundColor = hexArvo;
};
