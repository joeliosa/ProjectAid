document.addEventListener("DOMContentLoaded", event => { 
    const app = firebase.app();
    
    const db = firebase.firestore();

    const myDet = db.collection('Detainees').doc('A');
    db.collection("Detainee")
                    .get()
                    .then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {   
                            var data = doc.data();
                            var firstname = data.FirstName;
                            var lastname = data.LastName;
                            var courtdate = data.CourtDate;
                            var languages = data.Languages;
                            var origin = data.Origin;
                            var residing = data.residing; 
                            document.body.innerHTML = document.body.innerHTML.replace('Maria', firstname);
                            document.body.innerHTML = document.body.innerHTML.replace('Dominigo', lastname);
                            document.body.innerHTML = document.body.innerHTML.replace('Florida', residing);
                            document.body.innerHTML = document.body.innerHTML.replace('Spanish', languages);
                            document.body.innerHTML = document.body.innerHTML.replace('Mexico', origin);
                            document.body.innerHTML = document.body.innerHTML.replace('2/15/2020', courtdate);
                            
                        });
                    })
                    .catch(function(error) {
                        console.log("Error getting documents: ", error);
                    });
});