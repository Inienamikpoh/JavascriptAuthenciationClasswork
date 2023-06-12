// Fire base config
const firebaseConfig = {
    apiKey: "AIzaSyAw_fnXLvHxLoD3eDrXKiuKafZ-HbfE8Yg",
    authDomain: "authenciation-51450.firebaseapp.com",
    projectId: "authenciation-51450",
    storageBucket: "authenciation-51450.appspot.com",
    messagingSenderId: "183218417184",
    appId: "1:183218417184:web:e68e9d69ef27b14fc81645"
  };

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//Signup Function
let signUpButton = document.getElementById("signup");
signUpButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        location.reload();

        // signed in
        var user = userCredential.user;
        console.log("user", user.email);
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code", errorCode);
        console.log("error Message", errorMessage);
    });
});



//Signin Function
let signInButton = document.getElementById("signin");

signInButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        // location.reload();
        // signed in
        var user = userCredential.user;
        console.log("user", user.email);
        window.location = "home.html";
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
});
//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
auth.onAuthStateChanged(function (user) {
    if (user) {
        var email = user.email
        var users = document.getElementById("user");
        var text = document.createTextNode(email);
        users.appendChild(text);
        console.log(users);
    } else{

    }
});
