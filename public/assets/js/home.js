firebase.auth().onAuthStateChanged(userAuthenticated => {
  if (userAuthenticated) {
    const displayName = userAuthenticated.displayName;
    const welcome = 'Seja bem-vindo, ';
    $('#usersame').text(welcome + displayName);
  } else {
    console.log('O usuário autenticado não tem um nome definido.');
  }
});


// function findUsers() {
//     firebase.firestore()
//     .collection('users')
//     .get()
//     .then(snapshot => {
//         const users = snapshot.docs.map(doc => doc.data());
//         // addUserstoScreen(users);
//     });
// }

// findUsers();

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