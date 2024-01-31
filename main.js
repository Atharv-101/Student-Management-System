// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyDtp3_WRAUdLZjwaDOYj5qEWUThIek_1S4",
  authDomain: "pbl-project-78fdf.firebaseapp.com",
  databaseURL: "https://pbl-project-78fdf-default-rtdb.firebaseio.com",
  projectId: "pbl-project-78fdf",
  storageBucket: "pbl-project-78fdf.appspot.com",
  messagingSenderId: "829748583214",
  appId: "1:829748583214:web:cd4585d78ab9520860b8bf",
  measurementId: "G-VDB88YLB5T"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert("Login Successful");
            console.log(result)
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert("Login Failed");
            console.log(error.code);
            console.log(error.message)
        });
}