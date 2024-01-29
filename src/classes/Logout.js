class Logout {
    constructor() {
        this.logout();
    };

    logout() {   
        firebase.auth().signOut()
        .then(() => window.location.href = '/login')
        .catch((error) => alert(error));
    };
};


export { Logout };