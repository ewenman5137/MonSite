console.log('barre_progression.js chargé !');

var competences = [
    {
        titreTableau: "Réaliser",
        competences: [
            {
                titre: "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
                progressBars: [
                    {
                        label: "Exigences respectées",
                        value: 2
                    },
                    {
                        label: "Prise en compte de quelques obligations d'accessibilité",
                        value: 1
                    },
                    {
                        label: "Code clair et explicite",
                        value: 2
                    },
                    {
                        label: "Implémentation de tests partiellement acquise",
                        value: 1
                    }
                ]
            }
        ]
    },
    {
        titreTableau: "Optimiser",
        competences: [
            {
                titre: "Choisir des structures de données complexes adaptées au problème",
                progressBars: [
                    {
                        label: "Choix de structure de donnée pertinent",
                        value: 2
                    }
                ]
            },
            {
                titre: "Utiliser des techniques algorithmiques adaptées pour des problèmes complexes",
                progressBars: [
                    {
                        label: "Prise en compte de la complexité d’un algorithme mais mal optimisé",
                        value: 1
                    }
                ]
            },
            {
                titre: "Comprendre les enjeux et moyens de sécurisation des données et du code",
                progressBars: [
                    {
                        label: "Pas de prise en compte de l’empreinte mémoire",
                        value: 0
                    }
                ]
            }
        ]
    },
    {
        titreTableau: "Administrer",
        competences: [
            {
                titre: "Concevoir et développer des applications communicantes",
                progressBars: [
                    {
                        label: "Sais comment récupérer/insérer/modifier/supprimer des données issues de la base de données",
                        value: 2
                    }
                ]
            },
            {
                titre: "Utiliser des serveurs et des services réseaux virtualisés",
                progressBars: [
                    {
                        label: "Sait créer des serveurs sans configuration",
                        value: 2
                    }
                ]
            },
            {
                titre: "Sécuriser les services et données d’un système",
                progressBars: [
                    {
                        label: "Sait gérer les failles de type injection SQL",
                        value: 2
                    }
                ]
            }
        ]
    },
    {
        titreTableau: "Gérer",
        competences: [
            {
                titre: "Optimiser les modèles de données de l’entreprise",
                progressBars: [
                    {
                        label: "Avoir une BDD efficiente (au plus court)",
                        value: 2
                    },
                    {
                        label: "Avoir des mot de passe en clair dans la BDD",
                        value: 0
                    }
                ]
            },
            {
                titre: "Organiser la restitution de données à travers la programmation et la visualisation",
                progressBars: [
                    {
                        label: "Les données sont récupérées via une BDD depuis un script js",
                        value: 2
                    }
                ]
            },
            {
                titre: "Manipuler des données hétérogènes",
                progressBars: [
                    {
                        label: "Capacité partielle à rendre compte de son activité professionnelle",
                        value: 1
                    }
                ]
            }
        ]
    },
    {
        titreTableau: "Conduire",
        competences: [
            {
                titre: "Identifier les processus présents dans une organisation en vue d’améliorer les systèmes d’information",
                progressBars: [
                    {
                        label: "Identifier les processus sans les mettre en œuvre",
                        value: 1
                    }
                ]
            },
            {
                titre: "Formaliser les besoins du client et de l'utilisateur",
                progressBars: [
                    {
                        label: "Peu de questions posées au client sur ses attentes et son organisation",
                        value: 1
                    }
                ]
            },
            {
                titre: "Identifier les critères de faisabilité d’un projet informatique",
                progressBars: [
                    {
                        label: "Ne pas établir la faisabilité d’un projet informatique et se lancer dans le développement",
                        value: 0
                    }
                ]
            },
            {
                titre: "Définir et mettre en œuvre une démarche de suivi de projet",
                progressBars: [
                    {
                        label: "Aucuns objectifs définis au début du projet",
                        value: 0
                    }
                ]
            }
        ]
    },
    {
        titreTableau: "Collaborer",
        competences: [
            {
                titre: "Comprendre la diversité, la structure et la dimension de l’informatique dans une organisation",
                progressBars: [
                    {
                        label: "Compréhension partielle de la diversité, la structure et la dimension de l’informatique dans une organisation",
                        value: 1
                    }
                ]
            },
            {
                titre: "Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation",
                progressBars: [
                    {
                        label: "Aucune adaptation aux normes de développement définies au début du projet",
                        value: 0
                    }
                ]
            },
            {
                titre: "Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique",
                progressBars: [
                    {
                        label: "Mobilisation totale des compétences interpersonnelles pour travailler dans une équipe informatique",
                        value: 2
                    }
                ]
            },
            {
                titre: "Rendre compte de son activité professionnelle",
                progressBars: [
                    {
                        label: "Capacité partielle à rendre compte de son activité professionnelle",
                        value: 1
                    }
                ]
            }
        ]
    }
];



function generateCompetences() {
    var container = document.getElementById('competencesContainer');

    competences.forEach(function(tableau) {
        // Création et ajout du grand titre pour le tableau
        var grandTitreEl = document.createElement('h1');
        grandTitreEl.textContent = tableau.titreTableau;
        container.appendChild(grandTitreEl);

        // Génération des compétences pour ce tableau
        tableau.competences.forEach(function(competence) {
            var competenceEl = document.createElement('div');
            competenceEl.classList.add('competence');

            var titre = document.createElement('h2');
            titre.textContent = competence.titre;
            competenceEl.appendChild(titre);

            competence.progressBars.forEach(function(progressBarData) {
                var progressBarContainer = document.createElement('div');
                progressBarContainer.classList.add('progressBarContainer');

                var progressBar = document.createElement('div');
                progressBar.classList.add('progressBar');
                progressBar.setAttribute('data-avancement', progressBarData.value);
                progressBar.textContent = progressBarData.label; // Optionnel: affiche le label dans la barre

                progressBarContainer.appendChild(progressBar);
                competenceEl.appendChild(progressBarContainer);
            });

            container.appendChild(competenceEl);
        });
    });
}

function updateAllProgressBars() {
    var allProgressBars = document.querySelectorAll('.progressBar');
    allProgressBars.forEach(function(progressBar) {
        var avancement = progressBar.getAttribute('data-avancement');
        progressBar.style.width = (avancement * 50) + '%';
        progressBar.style.backgroundColor = avancement == 1 ? 'yellow' : avancement == 2 ? 'green' : 'red';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    generateCompetences();
    updateAllProgressBars();
});
