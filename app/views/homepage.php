<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="assets/styles/style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ewen Buhot</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
</head>
<body>
    <div id="header">
        <a class="btnHeader" href="#mesCompetences">Mes competences</a>
        <a class="btnHeader" href="#mesProjets">Mes projets</a>
        <a id="titreHeader" class="btnHeader" href="#presentation">Ewen Buhot</a>
    </div>
    <div id="presentation">
        <div id="titrePresentation">Qui suis-je ?</div>
        <div id="imageEtDescription">
            <div id="description">
                <p>Hello world, je m'appelle Ewen BUHOT et je suis actuellement en deuxième année d'études en informatique à Laval. Passionné par les défis techniques et l'innovation, j'ai maîtrisé plusieurs langages de programmation, dont Python, C, Java, et aussi HTML, CSS, JS, et PHP.</p>
                <p>J'ai réalisé plusieurs projets, dont une application JavaFX pour créer des séquenciers de pictogrammes et un jeu de morpion. Mes compétences en leadership et ma détermination à résoudre les problèmes font de moi un candidat idéal pour une carrière dans le management d'équipe ou l'enseignement.</p>
                <p>Je vous invite à découvrir mes projets ci-dessous. N'hésitez pas à me contacter pour toute question. Merci de votre visite!</p>
            </div>
            <img id="PP" src="assets/img/photo/PhotoDeProfile.png" alt="PP">
        </div>
    </div>
    <div id="mesCompetences">
        <div class="titreParti">Mes compétences</div>
        <div class="barDeSeparation"></div>
        <div id="conteneurCompetence">
            <div id="mesExperiences">
                <p>Mes experiences</p>
                <div id="conteneurImageTitreCompetences">
                    <div class="imageTitre">
                        <img class="Logo" src="assets/img/photo/industrie.png" alt="Image Usine">
                        <div class="titreImage">Usine</div>
                    </div>
                    <div class="imageTitre">
                        <img class="Logo"src="assets/img/photo/camionDePompier.png" alt="Camion">
                        <div class="titreImage">Pompier</div>
                    </div>
                    <div class="imageTitre">
                        <img class="Logo"src="assets/img/photo/cours-de-maths.png" alt="Cour de soutien">
                        <div class="titreImage">Cours de soutien</div>
                    </div>
                    <div class="imageTitre">
                        <img class="Logo"src="assets/img/photo/diplome.png" alt="Camion de pompier">
                        <div class="titreImage">Bac général</div>
                    </div>
                </div>
            </div>
            <div id="conteneurLogicielsHobbies">
                <div id="mesLogiciels">
                    <p>Mes logiciels</p>
                    <div class="conteneurImageTitre">
                        <div class="imageTitre">
                            <img src="assets/img/photo/powerpoint.png" alt="Logo powerpoint">
                            <div class="titreImage">powerpoint</div>
                        </div>
                        <div class="imageTitre">
                            <img src="assets/img/photo/fusion360.png" alt="Logo Fusion 360">
                            <div class="titreImage">Fusion 360</div>
                        </div>
                        <div class="imageTitre">
                            <img src="assets/img/photo/figma.png" alt="Logo Figma">
                            <div class="titreImage">Figma</div>
                        </div>
                    </div>
                </div>
                <div id="mesHobbies">
                    <p>Mes Hobbies</p>
                    <div class="conteneurImageTitre">
                        <div class="imageTitre">
                            <img src="assets/img/photo/pompier.png" alt="Pompier">
                            <div class="titreImage">Pompier</div>
                        </div>
                        <div class="imageTitre">
                            <img src="assets/img/photo/musique.png" alt="Musique">
                            <div class="titreImage">Musique</div>
                        </div>
                        <div class="imageTitre">
                            <img src="assets/img/photo/rugby.png" alt="rugby">
                            <div class="titreImage">Rugby</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button id="buttonCV">Voir mon CV</button>
    </div>
    <div id="mesProjets">
        <div class="titreParti">Mes projets</div>
        <div class="barDeSeparation"></div>
        <div id="carrouselle">
            <button class="btnCarrouselle" id="btnNavLeft">◀</button>
            <div id="carrouselleVisible">
                <div id="carrouselleImage">
                    <!-- Injection js des cartes-->
                </div>
            </div>
            <button class="btnCarrouselle" id="btnNavRight">▶</button>
        </div>
    </div>
    <div id="meContacter">
        <div class="titreParti">Me contacter</div>
        <div class="barDeSeparation"></div>
        <div id="mesReseaux">
            <button class="reseaux">
                <a href="mailto:ewenbuhot@outlook.fr" target="_blank">
                    <img class="logoContacte" src="assets/img/photo/Email.png" alt="Email">
                </a>
            </button>
            <button class="reseaux">
                <a href="https://github.com/ewenman5137" target="_blank">
                    <img class="logoContacte" src="assets/img/photo/github.png" alt="Github">
                </a>
            </button>
            <button class="reseaux">
                <a href="https://www.linkedin.com/in/ewen-buhot-995434251/" target="_blank">
                    <img class="logoContacte" src="assets/img/photo/linkedin.png" alt="Linkedin">
                </a>
            </button>
        </div>
    </div>
    <div id="footer">
        <div id="containeurPolitiqueContact">
            <a class="textFooter" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Politique de confidentialité</a>
            <a class="textFooter" href="mailto:ewenbuhot@outlook.fr" target="_blank">Me Contacter</a>
        </div>
        <div id="ligneCopyright" >© Copyright 2023. Designer par Ewen</div>
    </div>
    <script src="assets/scripts/index.js"></script>
</body>
</html>