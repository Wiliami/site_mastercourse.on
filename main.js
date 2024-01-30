import admin from 'firebase-admin';

class CreateUser {
    
    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert('serviceAccountKey.json'),
        });
    }

    async createUser(email, password) {
        try {
            const userRecord = await admin.auth().createUser({
                email: email,
                password: password
            });
            console.log('Usuário cadastrado com sucesso:', userRecord.uid);
            return userRecord.uid;
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            throw error;
        }
    }
}

export default CreateUser;

const userRecord = new CreateUser();
userRecord.createUser('admin.teste1@gmail.com', '123456');
console.log(userRecord);