firebase.auth().onAuthStateChanged(userAuthenticated => {
    if (userAuthenticated) {
        userAuthenticated.getIdToken().then(token => token); // Pegar o Token do usuário
        findCourses(userAuthenticated);
    }
});


function findCourses() {
    firebase.firestore()
    .collection('courses')
    .get()
    .then(snapshot => {
        const courses = snapshot.docs.map(doc => doc.data());
        console.log(courses);
        // courses.forEach(course => {
        // })
    }); 
}


