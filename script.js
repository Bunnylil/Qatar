const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.querySelector('.hamburger');
        const hamburgerMenu = document.querySelector('.hamburger-menu');

        hamburger.addEventListener('click', () => {
            const isMenuVisible = hamburgerMenu.style.display === 'flex';
            hamburgerMenu.style.display = isMenuVisible ? 'none' : 'flex';
        });
    });

    const images = [
      'images/FOOD1.png',
      'images/FOOD2.png',
      'images/FOOD3.png',
    ];
    
    let currentImageIndex = 0;
    
    
    setInterval(function() {
      currentImageIndex = (currentImageIndex + 1) % images.length; 
      document.getElementById('foodImage').src = images[currentImageIndex];
    }, 5000); 

  function changeShoeImage(imageUrl) {
      const shoeImage = document.getElementById('foodImage');
      shoeImage.src = imageUrl;
  }