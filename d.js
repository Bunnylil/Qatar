document.addEventListener('DOMContentLoaded', function () {
    const addToBasketButton = document.getElementById('add-to-basket');
    const cartIcon = document.getElementById('cart-icon');
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage

    // Function to update the cart icon with the number of items
    function updateCartIcon() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartIcon.setAttribute('data-count', totalItems); // Update the cart icon badge
    }

    // Add to Cart functionality
    addToBasketButton.addEventListener('click', function () {
        const product = {
            name: document.querySelector('.product-title').innerText,
            price: parseFloat(document.querySelector('.price').innerText.replace('$', '')),
            quantity: 1 // Default quantity
        };

        // Check if the product is already in the cart
        const existingProduct = cart.find(item => item.name === product.name);
        if (existingProduct) {
            existingProduct.quantity += 1; // Increase quantity if already in cart
        } else {
            cart.push(product); // Add new product to cart
        }

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update the cart icon
        updateCartIcon();

        // Optional: Show a confirmation message
        alert(`${product.name} added to cart!`);
    });

    // Initialize the cart icon on page load
    updateCartIcon();
});