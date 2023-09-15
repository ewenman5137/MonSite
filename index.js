document.getElementById("buttonCV").addEventListener("click", function() {
    window.open("/Document/CVEwenBuhot.pdf");
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.btnHeader').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      let targetID = this.getAttribute('href').substring(1); // Enlever le '#' du href
      let targetElement = document.getElementById(targetID);
      
      let offsetPosition = targetElement.offsetTop - 50;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });
});



var carouselleImage = document.querySelector('#carrouselleImage');
var position = 0;

const projets = [
  {nom: "Comparateur algorythmique", desc: "Mon projet de fin de terminale compare cinq algorithmes de tri (tri à bulle, tri par insertion, tri fusion, tri par max et tri par insertion optimisé) à l'aide d'une interface en tkinter", image: "Projet/ComparateurAlgo.png"},
  {nom: "Mini-jeux de Scrabble", desc: "Le projet Scrabble est un mini-jeu dans lequel l'utilisateur doit, en un temps imparti, trouver le plus de mots possibles avec 7 lettres. L'objectif était de s'entraîner à faire le maximum de points au Scrabble.", image: "Projet/Scrabble.png"},
  {nom: "Pictoclipse", desc: "Ce projet est une application réalisée dans le cadre de ma première année d'études en BUT. En utilisant JavaFX, j'ai créé une application permettant à l'utilisateur de créer des séquenciers de pictogrammes. Cette application est destinée aux hôpitaux et centres d'éducation.", image: "Projet/Pictoclipse.png"},
  {nom: "Application Pizzeria (Design)", desc: "J'ai créé le design d'une application mobile pour une pizzeria, axé sur la facilité de commande et la livraison. Le projet a été structuré autour d'un storyboard pour visualiser le parcours utilisateur. Il s'agit d'un design complet, sans développement d'application.", image: "Projet/Pizza.png"},
  {nom: "Site boulangerie (Design)", desc: "Dans ce projet, vous trouverez mon design pour un site de boulangerie de style parisien de luxe. L'objectif est de cibler une clientèle aisée avec un design sobre et chic.", image: "Projet/boulangerie.png"},
  {nom: "TicTacToe", desc: "Dans ce projet, nous avons développé une version du jeu très connu du morpion. Vous pourrez défier vos amis, personnaliser votre profil ou jouer en solo contre un robot avec différents niveaux de difficulté. Amusez-vous bien !", image: "Projet/Tictactoe.png"}
];

const carrouselleImage = document.getElementById('carrouselleImage');

projets.forEach((projet) => {
  const card = document.createElement('div');
  card.className = 'card';

  const front = document.createElement('div');
  front.className = 'front';

  const title = document.createElement('div');
  title.className = 'title';
  title.textContent = projet.nom;

  const img = document.createElement('img');
  img.src = projet.image;
  img.alt = 'image';

  front.appendChild(title);
  front.appendChild(img);

  const back = document.createElement('div');
  back.className = 'back';

  const desc = document.createElement('div');
  desc.className = 'desc';
  desc.textContent = projet.desc;

  back.appendChild(desc);

  card.appendChild(front);
  card.appendChild(back);

  carrouselleImage.appendChild(card);
});

function moveLeft() {
  if (position < 0) {
    position += 400; // Déplace d'une image vers la gauche
    carouselleImage.style.transform = 'translateX(' + position + 'px)';
  }
  console.log("gauche : "+position);
}

function moveRight() {
  if (position > -projets.length-2*400) { // Position la plus à droite (deux images à droite)
    position -= 400; // Déplace d'une image vers la droite
  }
  else{
    position =0;
  }
  carouselleImage.style.transform = 'translateX(' + position + 'px)';
  console.log("Droite : "+position+" projets.lenght : "+projets.length);
}

document.querySelector('#btnNavLeft').addEventListener('click', moveLeft);
document.querySelector('#btnNavRight').addEventListener('click', moveRight);