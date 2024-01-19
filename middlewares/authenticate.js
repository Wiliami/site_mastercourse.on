const { db } = require('../firebaseConfig');

const firebaseAuthMiddleware = (req, res, next) => {
  const idToken = req.headers.authorization;

  if (!idToken) {
    return res.status(403).json({ error: 'Acesso não autorizado!' });
  }

  firestore.auth().verifyIdToken(idToken)
    .then((decodedToken) => {
    // O token é válido, e decodedToken contém informações do usuário autenticado
      req.user = decodedToken;
      return next();
    })
    .catch((error) => {
      console.error('Erro ao verificar o token:', error);
      return res.status(403).json({ error: 'Acesso não autorizado!' });
    });
};

module.exports = firebaseAuthMiddleware;