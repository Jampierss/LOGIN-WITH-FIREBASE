const signUpBtnLink = document.getElementById("signUpBtn-link");

const signInBtnLink = document.getElementById("signInBtn-link");

const wrapper = document.querySelector(".wrapper");

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
