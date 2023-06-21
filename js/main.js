let main = document.getElementById("myButton");
let mainButton = main.querySelectorAll(".btn");
for (let btnBox of mainButton) {
  btnBox.addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";


  let first = document.querySelectorAll(".btn.active")[0].innerText;

   document.getElementsByTagName("SECTION")[0].removeAttribute("class");
  // document.getElementsByTagName("SECTION")[0].className.replace("default", ""); 
   document.getElementsByTagName("SECTION")[0].classList.add(first);
 });
}

