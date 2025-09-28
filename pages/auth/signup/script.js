const email = document.getElementById('email');
const password = document.getElementById('password');
const signupButton = document.getElementById('signup-button');
const users = JSON.parse(localStorage.getItem('users')) || [];

signupButton.addEventListener('click', () => {
    // validation(check email exist, password length >= 6)
    const user = {
        id: users.length + 1,
        role: 'user', // user || admin
        createdAt: new Date(),
        email: email.value,
        password: password.value
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = "../signin/"
});