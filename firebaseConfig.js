const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert('serviceAccountKey.json')
});

const db = admin.firestore();

<<<<<<< HEAD
module.exports = { admin, db };
=======
module.exports = {
    admin,
    db
};
>>>>>>> c2768022350812e92da72ff2e4e19526e875bf28
