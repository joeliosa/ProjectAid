//import firebase from "firebase/app";
//require('firebase/firestore')
//require('firebase/auth')
//var firebaseConfig = {
  //apiKey: "AIzaSyCyoYFbIY_-vM_j8zBSmyvTSauBXo10lc8",
  //authDomain: "lawyermatch.firebaseapp.com",
  //databaseURL: "https://lawyermatch.firebaseio.com",
  //projectId: "lawyermatch",
  //storageBucket: "lawyermatch.appspot.com",
  //messagingSenderId: "sender-id",
  //appId: "1:751073412439:web:9a8d7e94d891ecd929ea12",
//};
//firebase.initializeApp(firebaseConfig);
document.addEventListener("DOMContentLoaded", event => {
    console.log("hello");
    const app = firebase.app();
    
    const db = firebase.firestore();

    const myOrg = db.collection('organizations').doc('firstorg');

    myOrg.onSnapshot(doc => {
        const data = doc.data();
        document.getElementById('a').innerHTML = "org is: " + data.name
    })

});

function showDetainee(){

}
function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
        
            .then(result => {
                const user = result.user;
                document.write(`Hello ${user.displayName}`)       
            }) 
            .catch(console.log) 
}
function emailLogin(){
    var email = app.email;
    var password = app.password;

    if (!email || !password){
        return console.log('Please enter your email and password')
    }
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('sign in error', error)
        // ...

      });
}

function updateOrg(e){
    const db = firebase.firestore();
    const myOrg = db.collection('organizations').doc('firstorg');
    myOrg.update({name : e.target.value});
}
