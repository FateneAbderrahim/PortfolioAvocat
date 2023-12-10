(function () {
    [...document.querySelectorAll(".control") ].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
function afficherChoix() {
    // Créez les choix
    const choix1 = document.createElement("div");
    choix1.textContent = "Par téléphone";
    const choix2 = document.createElement("div");
    choix2.textContent = "Par e-mail";
  
    // Insérez les choix sous le bouton
    const parent = document.querySelector(".control[data-id='contact']");
    parent.appendChild(choix1);
    parent.appendChild(choix2);
  }
  
  


