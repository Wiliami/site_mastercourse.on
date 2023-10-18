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
        addUsersToScreen(users);
    });
  }


  function addUsersToScreen(users) {
    users.forEach(user => {
        const name = document.getElementById('username');
        name.innerHTML = user.name;

        const email = document.getElementById('user-email');
        email.innerHTML = user.email;
    });
  }
  