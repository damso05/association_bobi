/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


/* =========================
   POPUP PRODUITS
========================= */

function ouvrirProduit(
    nom,
    prix,
    description,
    stock,
    images
) {

    const modal = document.getElementById("modal-produit");

    const modalNom =
        document.getElementById("modal-nom");

    const modalPrix =
        document.getElementById("modal-prix");

    const modalDescription =
        document.getElementById("modal-description");

    const modalStock =
        document.getElementById("modal-stock");

    const imagePrincipale =
        document.getElementById("modal-image-principale");

    const miniatures =
        document.getElementById("modal-miniatures");


    /* Informations du produit */

    modalNom.textContent = nom;

    modalPrix.textContent = prix;

    modalDescription.textContent = description;

    modalStock.textContent = stock;


    /* Première image */

    imagePrincipale.src = images[0];

    imagePrincipale.alt = nom;


    /* On supprime les anciennes miniatures */

    miniatures.innerHTML = "";


    /* Création automatique des miniatures */

    images.forEach(function (image, index) {

        const miniature =
            document.createElement("img");

        miniature.src = image;

        miniature.alt =
            nom + " - photo " + (index + 1);


        miniature.addEventListener(
            "click",
            function () {

                imagePrincipale.src = image;

            }
        );


        miniatures.appendChild(miniature);

    });


    /* Affichage popup */

    modal.classList.add("active");

}


/* =========================
   FERMER POPUP
========================= */

function fermerProduit() {

    const modal =
        document.getElementById("modal-produit");

    modal.classList.remove("active");

}


/* =========================
   FERMER EN CLIQUANT
   SUR LE FOND
========================= */

const modalProduit =
    document.getElementById("modal-produit");


if (modalProduit) {

    modalProduit.addEventListener(
        "click",
        function (event) {

            if (event.target === modalProduit) {

                fermerProduit();

            }

        }
    );

}


/* =========================
   FERMER AVEC ÉCHAP
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            fermerProduit();

        }

    }
);