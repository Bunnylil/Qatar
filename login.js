import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
 
const firebaseConfig = {
    apiKey: "AIzaSyCNBwv9EYZOpYau9RPflUey97vDoNLnVs8",
    authDomain: "drinks-76337.firebaseapp.com",
    projectId: "drinks-76337",
    storageBucket: "drinks-76337.firebasestorage.app",
    messagingSenderId: "360389301604",
    appId: "1:360389301604:web:997a540b6a67b878709671",
    measurementId: "G-CDEZWQ0D05"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function() {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        console.log(user);
        
        window.location.href = ""; 
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        
        console.error(errorCode, errorMessage, email);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const signinForm = document.getElementById('signinForm');
    const message = document.getElementById('message');

    signinForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Get form values
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Clear previous messages
        message.textContent = '';
        message.classList.remove('success', 'error');

        try {
            // Send sign-in data to the backend
            const response = await fetch('http://localhost:5000/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Sign-in successful
                message.textContent = 'Sign-in successful! Redirecting...';
                message.classList.add('success');

                
                setTimeout(() => {
                    window.location.href = 'homepage.html'; 
                }, 2000);
            } else {
                // Sign-in failed
                message.textContent = data.message || 'Sign-in failed';
                message.classList.add('error');
            }
        } catch (error) {
            console.error('Error:', error);
            message.textContent = 'An error occurred. Please try again.';
            message.classList.add('error');
        }
    });
});