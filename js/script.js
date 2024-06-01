const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('register-username').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        const errorMessageElement = document.getElementById('register-error-message');
        errorMessageElement.style.display = 'none';

        if (!username || !email || !password || !confirmPassword) {
            errorMessageElement.innerText = "All fields are required";
            errorMessageElement.style.display = 'block';
            return;
        }

        if (!validateEmail(email)) {
            errorMessageElement.innerText = "Invalid email format";
            errorMessageElement.style.display = 'block';
            return;
        }

        if (password.length < 8) {
            errorMessageElement.innerText = "Password must be at least 8 characters long";
            errorMessageElement.style.display = 'block';
            return;
        }

        if (password !== confirmPassword) {
            errorMessageElement.innerText = "Passwords do not match";
            errorMessageElement.style.display = 'block';
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.find(user => user.email === email)) {
            errorMessageElement.innerText = "Email is already registered";
            errorMessageElement.style.display = 'block';
            return;
        }

        users.push({ username, email, password: hashPassword(password) });
        localStorage.setItem('users', JSON.stringify(users));

        alert("Registration successful!");
        window.location.href = "login.html";
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;

        const errorMessageElement = document.getElementById('login-error-message');
        errorMessageElement.style.display = 'none';

        if (!email || !password) {
            errorMessageElement.innerText = "All fields are required";
            errorMessageElement.style.display = 'block';
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(user => user.email === email && user.password === hashPassword(password));

        if (user) {
            alert("Login successful!");
            window.location.href = "dash.html";
        } else {
            errorMessageElement.innerText = "Invalid email or password";
            errorMessageElement.style.display = 'block';
        }
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function hashPassword(password) {
    // For demonstration purposes only. Use a proper hashing algorithm like bcrypt in a real application.
    return password.split('').reverse().join('');
}