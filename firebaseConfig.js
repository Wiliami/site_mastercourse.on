const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert('serviceAccountKey.json')
});

const db = admin.firestore();

module.exports = {
    admin,
    db
};