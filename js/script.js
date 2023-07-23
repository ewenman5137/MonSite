const items = Array.from(document.querySelectorAll('.carte'));
const nbSlide = items.length;
const suivant = document.querySelector("#btnNavRight");
const precedent = document.querySelector("#btnNavLeft");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        var headerOffset = 80;  // hauteur de la barre de navigation
        var elementPosition = document.querySelector(this.getAttribute('href')).offsetTop;
        var offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

document.getElementById("ButtonCV").addEventListener("click", function() {
    window.open("/Document/CVEwenBuhot.pdf");
});

function slideSuivante(){
    items.forEach((item) => {
        let currentColumn = parseInt(window.getComputedStyle(item).getPropertyValue('grid-column-start'));
        item.style.display='grid';
        if(currentColumn==nbSlide*2){
            currentColumn=0;
        }
        item.style.gridColumn = (currentColumn +2).toString();
        if(currentColumn>=6){
            item.style.display='none';
            console.log(item.id,"colonne :",currentColumn)
        }
        console.log("je suis ",item.id,"et je suis a la colonne :",currentColumn)
    });
}

function slidePrecedente(){
    items.forEach((item) => {
        let currentColumn = parseInt(window.getComputedStyle(item).getPropertyValue('grid-column-start'));
        item.style.display='grid';
        if(currentColumn==2){
            currentColumn=nbSlide*2+2;
        }
        if(currentColumn>8){
            item.style.display='none';
        }
        item.style.gridColumn = (currentColumn - 2).toString();
    });
}

suivant.addEventListener('click', slideSuivante);
precedent.addEventListener('click', slidePrecedente);

