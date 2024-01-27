
console.log("Hello World !");
console.log(document.getElementById('actuel')); // Vérifie si 'actuel' est trouvé
console.log(document.getElementById('enCours')); // Vérifie si 'actuel' est trouvé
console.log(document.getElementById('Sup')); // Vérifie si 'actuel' est trouvé


const outilsActuels = [
  { img: "assets/img/outils/html.png", name: "HTML5" },
  { img: "assets/img/outils/css.png", name: "CSS3" },
  { img: "assets/img/outils/js.png", name: "JavaScript" },
  { img: "assets/img/outils/php.png", name: "PHP" },
  { img: "assets/img/outils/mysql.png", name: "MySql" },
  { img: "assets/img/outils/react.png", name: "REACT" },
  { img: "assets/img/outils/python.png", name: "Python" },
  { img: "assets/img/outils/git.png", name: "GIT" },
  { img: "assets/img/outils/figma.png", name: "FIGMA" },
  { img: "assets/img/outils/java.png", name: "Java" },
];

const outilsEnCours = [
  { img: "assets/img/outils/nodejs.png", name: "NODEJS" },
  { img: "assets/img/outils/sass.png", name: "SASS" },
  { img: "assets/img/outils/mongodb.png", name: "MONGODB" },
  { img: "assets/img/outils/typescript.png", name: "TYPESCRIPT" },
];

const competencesSupplementaires = [
  { img: "assets/img/outils/anglais.png", name: "Anglais B1" },
  { img: "assets/img/outils/fusion360.png", name: "Modélisation 3D" },
  { img: "assets/img/outils/book.png", name: "Rédaction de livrable" },
  { img: "assets/img/outils/electronique.png", name: "C" },
];

function generateToolsHtml(tools) {
  return tools.map(tool => `
    <div class="outil">
      <img src="${tool.img}" alt="${tool.name}">
      <h2>${tool.name}</h2>
    </div>
  `).join('');
}

document.querySelector('#actuel').innerHTML = generateToolsHtml(outilsActuels);
document.querySelector('#enCours').innerHTML = generateToolsHtml(outilsEnCours);
document.querySelector('#Sup').innerHTML = generateToolsHtml(competencesSupplementaires);


const projets = [
  {name: "Comparateur algorythmique", desc: "Mon projet de fin de terminale compare cinq algorithmes de tri (tri à bulle, tri par insertion, tri fusion, tri par max et tri par insertion optimisé) à l'aide d'une interface en tkinter", img: "assets/img/Projet/ComparateurAlgo.png"},
  {name: "Mini-jeux de Scrabble", desc: "Le projet Scrabble est un mini-jeu dans lequel l'utilisateur doit, en un temps imparti, trouver le plus de mots possibles avec 7 lettres. L'objectif était de s'entraîner à faire le maximum de points au Scrabble.", img: "assets/img/Projet/Scrabble.png"},
  {name: "Pictoclipse", desc: "Ce projet est une application réalisée dans le cadre de ma première année d'études en BUT. En utilisant JavaFX, j'ai créé une application permettant à l'utilisateur de créer des séquenciers de pictogrammes. Cette application est destinée aux hôpitaux et centres d'éducation.", img: "assets/img/Projet/Pictoclipse.png"},
  {name: "Application Pizzeria (Design)", desc: "J'ai créé le design d'une application mobile pour une pizzeria, axé sur la facilité de commande et la livraison. Le projet a été structuré autour d'un storyboard pour visualiser le parcours utilisateur. Il s'agit d'un design complet, sans développement d'application.", img: "assets/img/Projet/Pizza.png"},
  {name: "Site boulangerie (Design)", desc: "Dans ce projet, vous trouverez mon design pour un site de boulangerie de style parisien de luxe. L'objectif est de cibler une clientèle aisée avec un design sobre et chic.", img: "assets/img/Projet/boulangerie.png"},
  {name: "TicTacToe", desc: "Dans ce projet, nous avons développé une version du jeu très connu du morpion. Vous pourrez défier vos amis, personnaliser votre profil ou jouer en solo contre un robot avec différents niveaux de difficulté. Amusez-vous bien !", img: "assets/img/Projet/Tictactoe.png"}
];

function generateProjetsHtml(projets) {
  return projets.map(projet => `
    <div class="card">
    <h3> ${projet.name} </h3>
      <img src="${projet.img}" alt="${projet.name}">
      <p>${projet.name}</p>
    </div>
  `).join('');
}

document.querySelector('#containeurProjets').innerHTML = generateProjetsHtml(projets);


// Carrousel

document.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementById('containeurProjets');
  console.log(container.offsetWidth); // largeur + bordures + padding (si border-box)
  console.log(container.clientWidth); // largeur + padding (pas de bordures, pas de scrollbar)
  console.log(window.getComputedStyle(container).width); // largeur définie en CSS
  // Mesurer la largeur y compris les marges
  console.log(container.getBoundingClientRect().width);

  let autoSlideInterval;
  let animationFrameId; // Variable pour stocker l'ID de la requête d'animation
  const ANIMATION_DURATION = 1000; // Durée de l'animation en millisecondes

  function animateScroll(targetScroll) {
      if (animationFrameId) {
          cancelAnimationFrame(animationFrameId); // Annuler l'animation en cours si elle existe
      }
      clearInterval(autoSlideInterval); // Arrêter le défilement automatique pendant l'animation
      let start = container.scrollLeft,
          change = targetScroll - start,
          startTime = null;
      
      function animateScrollStep(timestamp) {
          if (startTime === null) startTime = timestamp;
          const timeElapsed = timestamp - startTime;
          const progress = Math.min(timeElapsed / ANIMATION_DURATION, 1); // S'assurer que le progrès ne dépasse pas 1
          
          container.scrollLeft = start + change * Math.easeInOutQuad(progress);

          if (timeElapsed < ANIMATION_DURATION) {
              animationFrameId = requestAnimationFrame(animateScrollStep);
          } else {
              autoSlideInterval = setInterval(slideRight, 5000); // Redémarrer le défilement automatique après l'animation
          }
      }
      animationFrameId = requestAnimationFrame(animateScrollStep);
  }

  Math.easeInOutQuad = function (t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  function slideLeft() {
      let targetScroll = container.scrollLeft - container.offsetWidth;

      if (targetScroll <= -container.offsetWidth) {
          // Si targetScroll est égal ou inférieur à -container.offsetWidth, aller à l'autre bout
          targetScroll = container.scrollWidth - container.offsetWidth;
      } else if (targetScroll < 0) {
          // Si targetScroll est négatif mais supérieur à -container.offsetWidth, remettre à 0
          targetScroll = 0;
      }

      console.log("Défilement cible après ajustement : ", targetScroll);
      animateScroll(targetScroll);
  }


  function slideRight() {
      let targetScroll = container.scrollLeft + container.offsetWidth; // ajustement pour les marges
      console.log(targetScroll);
      if (targetScroll >= container.scrollWidth) {
          targetScroll = 0;
      }
      animateScroll(targetScroll);
  }

  // Boutons flèches
  document.getElementById('slide-left').addEventListener('click', slideLeft);
  document.getElementById('slide-right').addEventListener('click', slideRight);

  // Défilement automatique
  autoSlideInterval = setInterval(slideRight, 10000); // Le slider bougera toutes les 10 secondes
});