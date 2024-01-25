import admin from 'firebase-admin'

class Create {
    
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

export default Create;

const createUser = new Create();
createUser.createUser('teste@gmail.com', '123456');
console.log(createUser);