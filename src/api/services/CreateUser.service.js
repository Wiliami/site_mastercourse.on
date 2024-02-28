import admin from 'firebase-admin';
import FirebaseService from './Firebase.service.js';

const firebase = new FirebaseService();
firebase.initializeApp();

class CreateUser {    
    /**
     * @param {string} email 
     * @param {string} password 
     * @returns 
     */
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


const createUser = new CreateUser();
createUser.createUser('teste@gmail.com', '12345678');
console.log(createUser);