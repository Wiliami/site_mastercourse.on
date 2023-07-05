firebase.auth().onAuthStateChanged(userAuthenticated => {
    if (userAuthenticated) {
        findUsers(userAuthenticated);
    }
});



function findUsers() {
    firebase.firestore()
    .collection('users')
    .get()
    .then(snapshot => {
        const users = snapshot.docs.map(doc => doc.data());
        addUserstoScreen(users);
    });
}



function addUserstoScreen(users) {
    const orderedList = document.getElementById('users');

    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.classList.add(user.listUsers);

        const name = document.createElement('td');
        name.innerHTML = user.name;
        tr.appendChild(name);

        const email = document.createElement('td');
        email.innerHTML = user.email;
        tr.appendChild(email);

        const password = document.createElement('td');
        password.innerHTML = user.password;
        tr.appendChild(password);


        orderedList.appendChild(tr);
    });
}