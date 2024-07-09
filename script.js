/* Custom Work */

const imageElement = document.getElementById('changingImage');
const images = [
    "https://res.cloudinary.com/inside-plastics/image/upload/v1719594528/Everything%20Plastis/EverythingPlastics_Graphic2023_color_scbahi.png",
    "https://res.cloudinary.com/inside-plastics/image/upload/v1688729737/Calsak/MicrosoftTeams-image_4_brzugt.jpg",
    "https://res.cloudinary.com/inside-plastics/image/upload/v1688729737/Calsak/MicrosoftTeams-image_7_mxnuxb.jpg",
    "https://res.cloudinary.com/inside-plastics/image/upload/v1688729737/Calsak/MicrosoftTeams-image_3_isb8fh.jpg"
];

let currentImageIndex = 0;

function changeImage() {
    imageElement.classList.add('fade-out');

    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.src = images[currentImageIndex];
        imageElement.classList.remove('fade-out');
    }, 100); // Duration should match the CSS transition duration
}

setInterval(changeImage, 3000); // Change image every 3 seconds
