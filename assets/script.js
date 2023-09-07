const slides = [
	{
		"image":"slide1.jpg",
    "alt": "Impressions tous formats",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
    "alt": "Tirages haute définition grand format",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
    "alt": "Grand choix de couleurs",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
    "alt": "Autocollants",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// selaction des elements necessaire dans le DOM
const slider = document.getElementById("banner");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const imageElement = document.querySelector(".banner-img");
const tagLineElement = document.querySelector("#banner > p");

// Configuration initiale pour la navigation entre les diapositives
// nb total de diapositives
const totalImages = slides.length - 1;

// Initialisation de l'index de l'image actuelle à 0.
let currentImageIndex = 0


// Fonction pour afficher une image spécifique en fonction de son index et de la direction
  function showImage(direction) {
    // Si l'index est inférieur à zéro, affichez la dernière image.
    currentImageIndex = currentImageIndex + direction;

    if (currentImageIndex === -1) {
      currentImageIndex = totalImages;
    } else if(currentImageIndex > totalImages) {
      currentImageIndex = 0;
    }

    // Mise a jour de l'attribut src de l'élément d'image avec l'image correspondante du tableau.
    imageElement.src = './assets/images/slideshow/'+slides[currentImageIndex].image;
    imageElement.alt = slides[currentImageIndex].alt;

    // Mise a jour du contenu de l'élément de légende avec la légende correspondante du tableau.
    tagLineElement.innerHTML = slides[currentImageIndex].tagLine;

    //Le code  parcourt tous les éléments de la page avec la classe "dot". 
    //Pour chaque élément, il vérifie si son index correspond à une variable  nommée currentImageIndex. 
    //Si c'est le cas, il ajoute la classe "dot_selected" à cet élément, sinon, il retire cette classe. 
    //il met en surbrillance un élément spécifique avec la classe "dot_selected" basé sur l'index de cet élément 

    Array.from(document.querySelectorAll('.dot')).forEach((el,index) => {

      if(index === currentImageIndex){
        el.classList.add('dot_selected');
      }else{
        el.classList.remove('dot_selected');
      }
    });

  }



// on ajoute des écouteurs d'événements aux éléments "leftArrow" et "rightArrow". 
//Lors d'un clic sur ces éléments, il bloque la propagation de l'événement, empêche le comportement par défaut, 
//affiche un message dans la console et appelle une fonction pour afficher une image, 
//soit précédente soit suivante selon l'élément cliqué.
  leftArrow.addEventListener('click', event => {
    event.stopPropagation();
    event.preventDefault();
    console.log('Left Arrow OK');
    showImage(-1);
  });

  rightArrow.addEventListener('click', event => {
    event.stopPropagation();
    event.preventDefault();
    console.log('Right Arrow OK');
    showImage(1);
  });
// Le code donné recherche un élément HTML avec la classe "dots".
// Pour chaque élément du tableau slides, il crée une nouvelle div avec la classe "dot".
// Si c'est le premier élément, une classe "dot_selected" est ajoutée. 
//Cette div est ensuite ajoutée à l'élément initial et un attribut id est défini.
  const dot = document.querySelector('.dots');
  slides.forEach((el,index) => {
    const dotElement = document.createElement('div');
    dotElement.classList.add('dot');
    if(index === 0){dotElement.classList.add('dot_selected');}
    dot.appendChild(dotElement);
    dot.dataset.id = index;
  });

