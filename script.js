const backgroundImages = [
  './images/image1.jpg',
  './images/image2.jpeg', 
  './images/image3.jpeg',
  './images/image4.jpg',
  './images/image5.jpg',
  './images/image6.jpg',
  './images/image7.jpg',
  './images/image8.jpg',
];

let currentIndex = 0;

function changeBackground() {
  const backgroundSection = document.querySelector('.hero');
  backgroundSection.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
  currentIndex++;
  if (currentIndex >= backgroundImages.length) {
    currentIndex = 0;
  }
}

setInterval(changeBackground, 3000);

const navBtn = document.getElementById("nav-toggle");
const lists = document.getElementById("nav-lists");
navBtn.addEventListener("click", () => {
    lists.classList.toggle("show-lists");
});

const date = (document.getElementById("date").innerHTML = new Date().getFullYear());