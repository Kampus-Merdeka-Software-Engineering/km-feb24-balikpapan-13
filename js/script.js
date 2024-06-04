const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

document.getElementById('show-password').addEventListener('change', function() {
    const passwordField = document.getElementById('register-password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const type = this.checked ? 'text' : 'password';
    passwordField.type = type;
    confirmPasswordField.type = type;
});


if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('register-email').value.trim();
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        const errorMessageElement = document.getElementById('register-error-message');
        errorMessageElement.style.display = 'none';

        if (!email || !password || !confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'All fields are required'
            });
            return;
        }

        if (!validateEmail(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Invalid email format'
            });
            return;
        }

        if (password.length < 8) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Password must be at least 8 characters long'
            });
            return;
        }

        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Passwords do not match'
            });
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.find(user => user.email === email)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Email is already registered'
            });
            return;
        }

        users.push({ email, password: hashPassword(password) });
        localStorage.setItem('users', JSON.stringify(users));

        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Registration successful!'
        }).then(() => {
            window.location.href = "login.html";
        });
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
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'All fields are required'
            });
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(user => user.email === email && user.password === hashPassword(password));

        if (user) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Login successful!'
            }).then(() => {
                window.location.href = "dash.html";
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Invalid email or password'
            });
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
