console.log('barre_progression.js chargé !');

var competences = [
    {
        titreTableau: "",
            "competences": [
                {
                    "titre": "AC 1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
                    "progressBars": [
                        {
                            "label": "Acquis",
                            "desc": "Compréhension des Exigences : Démontre une compréhension approfondie des exigences fonctionnelles et non fonctionnelles, y compris les aspects techniques et complexes. \nDéveloppement de Spécifications : Élabore des spécifications complètes, claires et détaillées qui répondent précisément aux exigences. \nMise en Œuvre des Spécifications : Implémente efficacement les spécifications dans le produit ou le projet, en assurant une adéquation avec les exigences. \nCommunication : Communique efficacement avec toutes les parties prenantes, fournissant des explications claires et précises sur les spécifications et les exigences. \nGestion de Projet : Intègre de manière experte les spécifications dans la gestion de projet, contribuant à la planification, au suivi et à la livraison réussie du projet.",
                            "value": 2
                        }
                    ]
                },
                {
                    "titre": "AC 2 : Appliquer des principes d’accessibilité et d’ergonomie",
                    "progressBars": [
                        {
                            "label": "En Cours d'Acquisition",
                            "desc": "Connaissance des Principes : Comprend les principes de base de l'accessibilité et de l'ergonomie, mais peut avoir des difficultés à les mettre en œuvre de manière complète. \nApplication des Principes : Applique certains principes d'accessibilité et d'ergonomie, mais de manière incohérente ou incomplète. \nTest d'Accessibilité : Réalise des tests d'accessibilité de base, mais peut ne pas couvrir tous les aspects nécessaires. \nDesign et Interface Utilisateur : Efforts pour créer des designs et interfaces prenant en compte certains besoins des utilisateurs, mais avec des lacunes dans l'application. \nRéactivité aux Retours : Prend en compte les retours sur l'accessibilité et l'ergonomie, mais n'agit pas toujours de manière appropriée ou efficace.",
                            "value": 1
                        }
                    ]
                },
                {
                    "titre": "AC 3 : Adopter de bonnes pratiques de conception et de programmation",
                    "progressBars": [
                        {
                            "label": "Acquis",
                            "desc": "Connaissance des Bonnes Pratiques : Démontre une compréhension approfondie et l'application consistante des bonnes pratiques en conception et programmation. \nQualité du Code : Produit du code propre, bien organisé, lisible et conforme aux standards de l'industrie. \nUtilisation des Outils : Utilise efficacement les outils de développement, de débogage, de versionnage et d'autres outils pertinents. \nConception de Logiciel : Applique des compétences avancées en conception logicielle, créant des architectures robustes, évolutives et maintenables. \nOptimisation et Sécurité : Intègre de manière proactive l'optimisation et la sécurité dans le processus de développement, démontrant une compréhension des meilleures pratiques et des menaces actuelles.",
                            "value": 2
                        }
                    ]
                },
                {
                    "titre": "AC 4 : Vérifier et valider la qualité de l’application par les tests",
                    "progressBars": [
                        {
                            "label": "En Cours d'Acquisition",
                            "desc": "Compréhension des Tests : Comprend les principes fondamentaux des tests logiciels mais a du mal à les appliquer efficacement. \nRéalisation de Tests : Réalise des tests simples, mais manque de cohérence et d'exhaustivité dans les tests effectués. \nAnalyse des Résultats : Analyse les résultats des tests, mais peut avoir du mal à interpréter correctement ces données ou à les utiliser de manière constructive. \nCorrection d’Erreurs : Commence à utiliser les résultats des tests pour identifier des erreurs, mais n'est pas toujours efficace dans leur correction. \nDocumentation : Fournit une documentation de base sur les tests effectués, mais celle-ci peut être incomplète ou manquer de détails.",
                            "value": 1
                        }
                    ]
                },
                {
                    "titre": "AC 1 : Choisir des structures de données complexes adaptées au problème",
                    "progressBars": [
                        {
                            "label": "En Cours d'Acquisition",
                            "desc": "Compréhension des Structures de Données : Comprend les bases des structures de données complexes, mais peut avoir des difficultés avec des concepts plus avancés. \nSélection Appropriée : Sélectionne des structures de données pour certains problèmes, mais les choix peuvent ne pas être optimaux ou entièrement adaptés. \nImplémentation : Implémente des structures de données complexes avec une certaine compétence, mais peut rencontrer des difficultés avec des cas plus complexes ou des optimisations. \nAnalyse de l'Adéquation : Effectue une analyse de base pour évaluer l'adéquation des structures de données, mais cette analyse peut manquer de profondeur ou de précision.",
                            "value": 1
                        }
                    ]
                },
                {
                    "titre": "AC 2 : Utiliser des techniques algorithmiques adaptées pour des problèmes complexes",
                    "progressBars": [
                        {
                            "label": "Acquis",
                            "desc": "Compréhension des Techniques : Démontre une compréhension approfondie et nuancée des techniques algorithmiques avancées pour résoudre des problèmes complexes. \nApplication des Techniques : Applique efficacement et de manière experte diverses techniques algorithmiques pour résoudre une gamme de problèmes complexes. \nRésolution de Problèmes : Résout de manière autonome et efficace des problèmes complexes en utilisant des approches algorithmiques, même dans des situations nouvelles ou non familières. \nAdaptabilité et Créativité : Fait preuve d'une grande adaptabilité et de créativité dans l'application et l'innovation des techniques algorithmiques pour des problèmes uniques ou difficiles.",
                            "value": 2
                        }
                    ]
                },
                {
                    "titre": "AC 3 : Comprendre les enjeux et moyens de sécurisation des données et du code",
                    "progressBars": [
                        {
                            "label": "En Cours d'Acquisition",
                            "desc": "Connaissance des Enjeux de Sécurité : Comprend les bases des enjeux de sécurité, mais manque de profondeur ou de détail dans cette compréhension. \nPratiques de Sécurité : Met en œuvre des pratiques de base de sécurisation, mais de manière incohérente ou sans suivre les meilleures pratiques actuelles. \nRéactivité aux Menaces : Prend conscience des menaces et vulnérabilités, mais peut ne pas savoir comment y répondre efficacement. \nFormation et Sensibilisation : A une certaine formation en matière de sécurité, mais peut ne pas être pleinement à jour avec les dernières tendances et outils.",
                            "value": 1
                        }
                    ]
                },
                {
                    "titre": "AC 4 : Évaluer l’impact environnemental et sociétal des solutions proposées",
                    "progressBars": [
                        {
                            "label": "Acquis",
                            "desc": "Conscience de l'Impact : Démontre une compréhension approfondie et nuancée de l'impact environnemental et sociétal des solutions technologiques. \nAnalyse d'Impact : Réalise des analyses complètes et détaillées de l'impact, prenant en compte une gamme de facteurs et de conséquences. \nPrise de Décision : Intègre de manière proactive et systématique les considérations environnementales et sociétales dans la conception et la prise de décision. \nStratégies de Réduction d'Impact : Propose et met en œuvre des stratégies efficaces pour minimiser les impacts négatifs, en tenant compte de la durabilité et de l'éthique.",
                            "value": 2
                        }
                    ]
                },
                {
                    "titre": "AC 1 : Concevoir et développer des applications communicantes",
                    "progressBars": [
                        {
                            "label": "Acquis",
                            "desc": "Connaissance des Technologies de Communication : Possède une connaissance approfondie des technologies et protocoles de communication, y compris des aspects avancés et des dernières tendances. \nConception d’Applications : Conçoit efficacement des applications communicantes complexes avec des architectures robustes et des interactions optimisées. \nDéveloppement et Implémentation : Développe et implémente de manière experte des fonctionnalités de communication avancées dans les applications. \nTests et Débogage : Réalise des tests complets et efficaces pour assurer la fiabilité de la communication au sein de l'application, identifiant et résolvant rapidement les problèmes.",
                            "value": 2
                        }
                    ]
                },
                {
                    "titre": "AC 2 : Utiliser des serveurs et des services réseaux virtualisés",
                    "progressBars": [
                        {
                            "label": "En Cours d'Acquisition",
                            "desc": "Connaissance de la Virtualisation : Comprend les principes de base de la virtualisation, mais peut avoir des difficultés avec des concepts plus avancés ou complexes. \nMise en Place et Gestion : Capable de mettre en place et de gérer des environnements virtualisés simples, mais rencontre des difficultés avec des configurations plus complexes. \nUtilisation des Outils : Utilise les outils de virtualisation de base, mais n'exploite pas pleinement leurs capacités ou fonctionnalités avancées. \nDiagnostic et Résolution de Problèmes : Réussit parfois à diagnostiquer et résoudre des problèmes dans des environnements virtualisés, mais manque de constance ou d'efficacité.",
                            "value": 1
                        }
                    ]
                },
                {
                    "titre": "AC 3 : Sécuriser les services et données d’un système",
                    "progressBars": [
                        {
                            "label": "Acquis",
                            "desc": "Connaissance des Risques de Sécurité : Possède une compréhension approfondie et détaillée des divers risques et menaces de sécurité affectant les services et les données. \nMesures de Sécurité : Implémente de manière experte des mesures de sécurité complètes et robustes, conformément aux normes et meilleures pratiques de l'industrie. \nRéactivité aux Incidents : Gère efficacement les incidents de sécurité, avec une réponse rapide, appropriée et conforme aux procédures établies. \nPolitiques de Sécurité : Développe et applique des politiques et procédures de sécurité rigoureuses, assurant une protection complète des services et des données.",
                            "value": 2
                        }
                    ]
                },
                {
                    "titre": "AC 1 : Optimiser les modèles de données de l’entreprise",
                    "progressBars": [
                        {
                            "label": "En Cours d'Acquisition",
                            "desc": "Compréhension des Modèles de Données : Comprend les principes de base des modèles de données et leur rôle dans l'entreprise, mais peut manquer de compétences pour traiter des modèles complexes. \nCapacité d'Optimisation : Capable d'apporter des améliorations mineures aux modèles de données, mais les optimisations peuvent être limitées en portée ou en efficacité. \nPerformance des Données : A une notion de base de la façon dont la structure des données affecte la performance, mais manque de compétences pour effectuer des optimisations majeures. \nApplication des Meilleures Pratiques : Applique certaines meilleures pratiques, mais pas de manière systématique ou complète.",
                            "value": 1
                        }
                    ]
                },
                {
                    "titre": "AC 2 : Assurer la confidentialité des données (intégrité et sécurité)",
                    "progressBars": [
                        {
                            "label": "Acquis",
                            "desc": "Compréhension de la Confidentialité : Démontre une compréhension approfondie et détaillée des enjeux de confidentialité, d'intégrité et de sécurité des données. \nMise en Œuvre de la Sécurité : Implémente des stratégies de sécurité avancées et robustes pour protéger les données contre les accès non autorisés, les altérations et les fuites. \nGestion des Accès : Gère efficacement les accès aux données, en assurant que seules les parties autorisées peuvent y accéder, et en suivant les meilleures pratiques de l'industrie. \nRéactivité aux Incidents : Réagit rapidement et efficacement aux incidents de sécurité, minimisant les dommages et restaurer l'intégrité des données.",
                            "value": 2
                        }
                    ]
                },
                {
                    "titre": "AC 3 : Organiser la restitution de données à travers la programmation et la visualisation",
                    "progressBars": [
                        {
                            "label": "En Cours d'Acquisition",
                            "desc": "Compétences en Programmation : Possède des compétences de base en programmation pour organiser des données, mais peut être limité dans les techniques avancées ou l'optimisation. \nCapacités de Visualisation : Capable de créer des visualisations de données de base, mais ces dernières peuvent ne pas être entièrement efficaces ou peuvent manquer de sophistication. \nCompréhension des Données : Comprend comment préparer et organiser des données pour la visualisation, mais peut rencontrer des difficultés avec des ensembles de données complexes. \nUtilisation d'Outils de Visualisation : Utilise des outils de visualisation de données, mais n'exploite pas pleinement leurs fonctionnalités ou capacités.",
                            "value": 1
                        }
                    ]
                },
                {
                    "titre": "AC 4 : Manipuler des données hétérogènes",
                    "progressBars": [
                        {
                            "label": "Non Acquis",
                            "desc": "Compréhension des Données Hétérogènes : Ne montre aucune compréhension de ce que sont les données hétérogènes et de leur manipulation. \nTraitement des Données : Incapable de traiter ou d'analyser des données hétérogènes provenant de sources multiples. \nIntégration des Données : Ne parvient pas à intégrer efficacement des données de différents formats ou sources. \nQualité et Nettoyage des Données : Ne reconnaît pas ou ne sait pas comment gérer les problèmes de qualité des données dans des ensembles de données hétérogènes.",
                            "value": 0
                        }
                    ]
                },
                {
                    "titre": "AC 1 : Identifier les processus présents dans une organisation en vue d’améliorer les systèmes d'informations",
                    "progressBars": [
                        {
                            "label": "En Cours d'Acquisition",
                            "desc": "Identification des Processus : Identifie les processus de base de l'organisation, mais peut avoir des difficultés avec des processus plus complexes ou moins évidents. \n Analyse des Systèmes d'Information : Analyse certains aspects de l'interaction entre les processus et les systèmes d'information, mais l'analyse peut manquer de profondeur ou d'intégralité. \n Proposition d'Améliorations : Propose des améliorations pour les systèmes d'information, mais ces propositions peuvent ne pas être entièrement alignées avec les besoins de l'organisation ou être peu réalisables. \n Communication avec les Parties Prenantes : Communique avec les parties prenantes pour recueillir des informations, mais la communication peut ne pas être toujours efficace ou approfondie.",
                            "value": 1
                        }
                    ]
                },
                {
                    "titre": "AC 2 : Formaliser les besoins du client et de l’utilisateur",
                    "progressBars": [
                        {
                            "label": "Acquis",
                            "desc": "Compréhension des Besoins : Démontre une compréhension approfondie et nuancée des besoins des clients et des utilisateurs, y compris des besoins implicites ou non formulés. \n Communication avec le Client : Communique efficacement avec les clients pour identifier leurs besoins, en utilisant des techniques de questionnement et d'écoute active. \n Documentation des Besoins : Formalise et documente les besoins de manière complète, structurée et claire, facilitant la compréhension et la référence ultérieures. \n Analyse des Besoins : Analyse et priorise les besoins de manière experte, en prenant en compte la faisabilité, l'impact et l'importance stratégique.",
                            "value": 2
                        }
                    ]
                },
                {
                    "titre": "AC 3 : Identifier les critères de faisabilité d’un projet informatique",
                    "progressBars": [
                        {
                            "label": "Acquis",
                            "desc": "Connaissance des Critères de Faisabilité : Possède une connaissance approfondie des critères de faisabilité, y compris des aspects techniques, financiers et opérationnels. \n Analyse de Faisabilité : Réalise des analyses de faisabilité complètes et précises, prenant en compte tous les aspects pertinents du projet informatique. \n Évaluation des Ressources : Évalue avec précision les ressources nécessaires, en assurant une allocation et une planification efficaces. \n Anticipation des Risques : Identifie et évalue systématiquement les risques potentiels, en proposant des stratégies de mitigation appropriées.",
                            "value": 2
                        }
                    ]
                },
                {
                    "titre": "AC 4 : Définir et mettre en œuvre une démarche de suivi de projet",
                    "progressBars": [
                        {
                            "label": "Non Acquis",
                            "desc": "Compréhension du Suivi de Projet : Ne montre aucune compréhension des principes de suivi et de gestion de projet. \n Planification et Organisation : Incapable de planifier efficacement ou d'organiser les activités de suivi de projet. \n Outils de Suivi de Projet : Ne connaît pas ou utilise incorrectement les outils de suivi de projet. \n Communication et Reporting : Manque de compétences en communication pour le reporting et l'échange d'informations sur l'avancement du projet.",
                            "value": 0
                        }
                    ]
                },
                {
                    "titre": "AC 1 : Comprendre la diversité, la structure et la dimension de l’informatique dans une organisation (ESN, DSI, …)",
                    "progressBars": [
                        {
                            "label": "En Cours d'Acquisition",
                            "desc": "Connaissance de l'Informatique Organisationnelle : Comprend les principes de base de la structure informatique dans les organisations, mais peut manquer de détails ou de compréhension des aspects complexes. \nReconnaissance des Rôles et Fonctions : Identifie les principaux rôles et fonctions informatiques dans une organisation, mais peut ne pas comprendre pleinement leurs interactions ou leur importance relative. \nAppréciation des Enjeux : Commence à apprécier les enjeux de l'informatique dans les organisations, mais peut manquer de perspective stratégique. \nInteraction avec les Services Informatiques : Interagit avec les services informatiques, mais peut ne pas être entièrement efficace ou conscient des meilleures pratiques de collaboration.",
                            "value": 1
                        }
                    ]
                },
                {
                    "titre": "AC 2 : Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation",
                    "progressBars": [
                        {
                            "label": "Acquis",
                            "desc": "Compréhension de l'Intégration d'Équipe : Possède une compréhension approfondie de la manière d'intégrer efficacement une équipe informatique dans une organisation. \nPlanification de l'Intégration : Planifie et met en œuvre avec succès des stratégies d'intégration complètes, en tenant compte des besoins et objectifs organisationnels. \nCollaboration Interdépartementale : Facilite une collaboration forte et efficace entre l'équipe informatique et les autres départements, favorisant un environnement de travail synergique. \nAdaptation aux Cultures et Processus Organisationnels : S'adapte et intègre habilement aux cultures et processus organisationnels, en favorisant une intégration harmonieuse et productive.",
                            "value": 2
                        }
                    ]
                },
                {
                    "titre": "AC 3 : Mobiliser les compétences interpersonnelles pour intégrer une équipe informatique",
                    "progressBars": [
                        {
                            "label": "Non Acquis",
                            "desc": "Compétences de Communication : Manque de compétences de base en communication; difficulté à exprimer des idées ou à écouter les autres. \nTravail d'Équipe : Incapable de travailler efficacement en équipe; ne contribue pas ou perturbe le fonctionnement de l'équipe. \nAdaptabilité : Difficulté à s'adapter aux dynamiques de l'équipe ou à collaborer avec des collègues. \nRésolution de Conflits : Incapacité à gérer ou à contribuer à la résolution de conflits; peut aggraver les tensions au sein de l'équipe.",
                            "value": 0
                        }
                    ]
                },
                {
                    "titre": "AC 4 : Rendre compte de son activité professionnelle",
                    "progressBars": [
                        {
                            "label": "Acquis",
                            "desc": "Communication des Activités : Communique de manière claire, détaillée et cohérente sur ses activités professionnelles. \nDocumentation et Reporting : Fournit des rapports et une documentation complets, bien organisés et réfléchis sur son travail. \nRéflexion et Auto-évaluation : Réalise une auto-évaluation approfondie et objective de ses performances, en identifiant les domaines de succès et ceux nécessitant des améliorations. \nRéactivité aux Feedbacks : Intègre activement les retours dans sa pratique professionnelle pour améliorer continuellement son rendu de compte.",
                            "value": 2
                        }
                    ]
                }

            ]
    },
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

                // Définition du texte à afficher dans la barre de progression en fonction de la valeur
                switch(progressBarData.value) {
                    case 0:
                        progressBar.textContent = "Non acquis";
                        break;
                    case 1:
                        progressBar.textContent = "En cours d'apprentissage";
                        break;
                    case 2:
                        progressBar.textContent = "Validé";
                        break;
                    default:
                        progressBar.textContent = "Non défini"; // au cas où une autre valeur est donnée
                }

                // Création et ajout de la description sous la barre de progression
                var description = document.createElement('p');
                description.textContent = progressBarData.desc;
                description.classList.add('progressDescription');

                progressBarContainer.appendChild(progressBar);
                progressBarContainer.appendChild(description); // Ajouter la description sous la barre
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
        progressBar.style.width = (avancement * 45) + 10 + '%';
        progressBar.style.backgroundColor = avancement == 1 ? 'yellow' : avancement == 2 ? 'green' : '#fc2424';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    generateCompetences();
    updateAllProgressBars();
});
