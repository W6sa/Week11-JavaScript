const myButton = document.querySelector('button');
const image = document.querySelector ('img');
const images = ["img1.webp", "img2.webp", "img3.jpeg", "img4.jpeg"];


myButton.addEventListener('click', changeImage);

function changeImage () {

    console.log(image);

    let randomImage = Math.floor(Math.random() * images.length);
    console.log(randomImage);
    image.src = "images/" + images[randomImage];
    
}