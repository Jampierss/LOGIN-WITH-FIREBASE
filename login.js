const firebaseConfig = {
    apiKey: "AIzaSyCOT5IuB5TgXAPprRGwYBAM57JddizPxJ0",
    authDomain: "x-ripple-398322.firebaseapp.com",
    projectId: "x-ripple-398322",
    storageBucket: "x-ripple-398322.appspot.com",
    messagingSenderId: "542438615191",
    appId: "1:542438615191:web:f151f84563c5e282e0e1d2",
    measurementId: "G-RYZ85FKXWS"
};

firebase.initializeApp(firebaseConfig);

const containerForm = document.getElementById("wrapper");
const inPage = document.querySelector('#inPage');
const btnSignUp = document.getElementById("btnSignUp");
const btnSignIn = document.getElementById("btnSignIn");
const signOutBtn = document.getElementById("signOutBtn");
inPage.style.display = 'none';

const provider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogleBtn = document.getElementById('signInWithGoogle');

const signUp = async() => {
    const email = document.getElementById("email_signUp").value;
    const password = document.getElementById("password_signUp").value;
    console.log(email, password)

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((ee) => {
        console.log(ee.code)
        console.log(ee.message)
    })
};

const signIn = async() => {
    const email = document.getElementById("email_signIn").value;
    const password = document.getElementById("password_signIn").value;
    console.log(email, password)

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
        console.log(response.user);
    })
    .catch((err) => {
        console.log(err.code);
        console.log(err.message);
    })
};

const checkAuthState = async() => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            containerForm.style.display = "none";
            inPage.style.display = "block";
        } else {
            containerForm.style.display = "block";
            inPage.style.display = "none";
        }
    });
};

const signOut = async() => {
    await firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("Sign out succcessful")
        
    }).catch((error) => {
        // An error happened.
        console.log(error)
    });
};

const signInWithGoogle = async() => {
    firebase.auth().signInWithPopup(provider)
    .then((response) => {
        console.log(response.user)
    })
    .catch((err) => {
        console.log(err.message)
    })
};

checkAuthState();

btnSignUp.addEventListener('click', signUp);
btnSignIn.addEventListener('click', signIn);
signOutBtn.addEventListener('click', signOut)
signInWithGoogleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithGoogle();
});
