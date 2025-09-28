const email = document.getElementById('email');
const password = document.getElementById('password');
const signinButton = document.getElementById('signin-button');
const users = JSON.parse(localStorage.getItem('users')) || [];

signinButton.addEventListener('click', () => {
    const user = users.find(user => user.email == email.value && user.password == password.value);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Sign in successfully!');
        window.location.href = "../../dashboard/";
    } else {
        alert('Email or password is incorrect!');
    }
});