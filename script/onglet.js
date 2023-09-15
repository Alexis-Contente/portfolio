// Sélection de tous les liens grâce à la class .onglet
const onglets = document.querySelectorAll(".onglet");

// Boucle sur tous les liens et ajout d'un écouteur d'événement
onglets.forEach((onglet) => {
  onglet.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("Le fichier JavaScript est chargé.");

    // Récupération de l'identifiant de la section ciblée à partir de l'attribut "href" du lien
    const sectionId = onglet.getAttribute("href").substring(1);

    // Récupération de la section cible grâce à identifiant récupéré au-dessus
    const section = document.getElementById(sectionId);

    // Défilement de la page jusqu'à la section ciblée
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});
