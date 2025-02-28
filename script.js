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
      'https://www.ulmapackaging.com/en/packaging-solutions/fish-seafood/fresh-fish/fresh-whole-fish-packaging-in-flow-pack-hffs-with/@@images/bd446110-87f6-44a0-a73e-1c8249d16ad5.jpeg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoHQEOTrciXHp8aR9hc4cx4LMr2xYr9wCQqQ&s',
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