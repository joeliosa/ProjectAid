
document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    
    const db = firebase.firestore();

    const myOrg = db.collection('organizations').doc('firstorg');

    const names = ['Allison',
    'Arthur',
    'Ana',
    'Alex',
    'Arlene',
    'Alberto',
    'Barry',
    'Bertha',
    'Bill',
    'Bonnie',
    'Bret',
    'Beryl',
    'Chantal',
    'Cristobal',
    'Claudette',
    'Charley',
    'Cindy',
    'Chris',
    'Dean',
    'Dolly',
    'Danny',
    'Danielle',
    'Dennis',
    'Debby',
    'Erin',
    'Edouard',
    'Erika',
    'Earl',
    'Emily',
    'Ernesto',
    'Felix',
    'Fay',
    'Fabian',
    'Frances',
    'Franklin',
    'Florence',
    'Gabielle',
    'Gustav',
    'Grace',
    'Gaston',
    'Gert',
    'Gordon',
    'Humberto',
    'Hanna',
    'Henri',
    'Hermine',
    'Harvey',
    'Helene',
    'Iris',
    'Isidore',
    'Isabel',
    'Ivan',
    'Irene',
    'Isaac',
    'Jerry',
    'Josephine',
    'Juan',
    'Jeanne',
    'Jose',
    'Joyce',
    'Karen',
    'Kyle',
    'Kate',
    'Karl',
    'Katrina',
    'Kirk',
    'Lorenzo',
    'Lili',
    'Larry',
    'Lisa',
    'Lee',
    'Leslie',
    'Michelle',
    'Marco',
    'Mindy',
    'Maria',
    'Michael',
    'Noel',
    'Nana',
    'Nicholas',
    'Nicole',
    'Nate',
    'Nadine',
    'Olga',
    'Omar',
    'Odette',
    'Otto',
    'Ophelia',
    'Oscar',
    'Pablo',
    'Paloma',
    'Peter',
    'Paula',
    'Philippe',
    'Patty',
    'Rebekah',
    'Rene',
    'Rose',
    'Richard',
    'Rita',
    'Rafael',
    'Sebastien',
    'Sally',
    'Sam',
    'Shary',
    'Stan',
    'Sandy',
    'Tanya',
    'Teddy',
    'Teresa',
    'Tomas',
    'Tammy',
    'Tony',
    'Van',
    'Vicky',
    'Victor',
    'Virginie',
    'Vince',
    'Valerie',
    'Wendy',
    'Wilfred',
    'Wanda',
    'Walter',
    'Wilma',
    'William',
    'Kumiko',
    'Aki',
    'Miharu',
    'Chiaki',
    'Michiyo',
    'Itoe',
    'Nanaho',
    'Reina',
    'Emi',
    'Yumi',
    'Ayumi',
    'Kaori',
    'Sayuri',
    'Rie',
    'Miyuki',
    'Hitomi',
    'Naoko',
    'Miwa',
    'Etsuko',
    'Akane',
    'Kazuko',
    'Miyako',
    'Youko',
    'Sachiko',
    'Mieko',
    'Toshie',
    'Junko'];
    const lang = ["Spanish", "Chinese", "English"];
    const origin = ["Spain", "Mexico", "China", "Panama", "Canada"];
    const residing = ["California", "Texas", "Florida"];
    const courtdate = ["2/15/2020", "5/19/2020", "3/31/2020"];
    let docName = ["A","B","C","D","E","F","G","H","I"];
    for(let i = 0; i < 10; ++i){
        console.log("got here");
        db.collection("Detainee").doc(docName[Math.floor(Math.random() * 9)]).set({
            CourtDate: courtdate[Math.floor(Math.random() * 2)],
            FirstName: names[Math.floor(Math.random() * 150)],
            Languages: lang[Math.floor(Math.random() * 2)],
            LastName: names[Math.floor(Math.random() * 5)],
            Origin: origin[Math.floor(Math.random() * 4)],
            residing: residing[Math.floor(Math.random() * 2)]
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        
    }
});

document.getElementById("loginbutton").addEventListener("click", emailLogin);


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
    event.preventDefault();

    const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;

    if (!email || !password){
        console.log('Please enter your email and password');
        return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
        console.log("success");
        window.location.replace("detainees.html")
        
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Incorrect email or password");
        console.log('sign in error', error);
        return;
      });
    
}

function updateOrg(e){
    const db = firebase.firestore();
    const myOrg = db.collection('organizations').doc('firstorg');
    myOrg.update({name : e.target.value});
}
