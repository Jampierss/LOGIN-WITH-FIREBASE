const signUpBtnLink = document.getElementById("signUpBtn-link");

const signInBtnLink = document.getElementById("signInBtn-link");

const wrapper = document.querySelector(".wrapper");

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

// Remove text from entries after submitting

const username_signUp = document.getElementById('username_signUp');
const email_signUp = document.getElementById('email_signUp');
const password_signUp = document.getElementById('password_signUp');
const email_signIn = document.getElementById('email_signIn');
const password_signIn = document.getElementById('password_signIn');

document.getElementById('btnSignIn').addEventListener('click', () => {
    username_signUp.value = "";
    email_signUp.value = "";
    password_signUp.value = "";
    email_signIn.value = "";
    password_signIn.value = "";
});