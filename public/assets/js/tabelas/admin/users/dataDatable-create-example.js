function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        aa: date.getFullYear().toString().slice(-2),
        aaaa: date.getFullYear()
    }

    return format.replace(/mm|dd|aa|aaaa/gi, matched => map[matched])
}

function createUser() {
    const minhaData = new Date("2023/08/01")
    const user = {
        cad_user: getNameUserCreate('Wiliamis'),
        create_date: formatDate(minhaData, "dd/mm/aa"),
        name: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('mainPassword').value,
        update_user: getNameUserUpdate('Wiliamis')
    }
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(data => {
        firebase.firestore().collection('users').doc(data.user.uid).set(user);
        console.log('Usuário cadastrado com sucesso!');
    }).catch((error) => {
        console.log('Houve um erro ao tentar cadastrar usuário', error);
    })
}

function getNameUserCreate( user ) {
    return
}

function getNameUserUpdate( user ) {
    return
}

function routeListUsers() {
    window.location.href = '/admin/users/list'; 
}    