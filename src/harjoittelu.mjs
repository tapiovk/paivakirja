const valikkopainikkeet = document.querySelectorAll(".valikkopainike");

for (let i = 0; i < valikkopainikkeet.length; i++) {
  valikkopainikkeet[i].addEventListener("mouseover", function() {
    valikkopainikkeet[i].style.backgroundColor = '#8C7987';
  });
  valikkopainikkeet[i].addEventListener("mouseleave", function() {
    valikkopainikkeet[i].style.backgroundColor =  '#8C8C8C';
  });
}
