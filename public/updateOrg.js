function updateOrg(e) {
    const db = firebase.firestore();
    const myOrg = db.collection('organizations').doc('firstorg');
    myOrg.update({ name: e.target.value });
}
