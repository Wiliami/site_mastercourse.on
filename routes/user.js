const express = require("express");
const router = express.Router();
const admin = require('firebase-admin');
const { json } = require("sequelize");

admin.initializeApp({
    credential: admin.credential.cert('serviceAccountKey.json')
});

router.get('/area-membro/courses/course-completed', (req, res) => res.render('area-membro/courses/course-completed'));
router.get('/area-membro/courses/course-pending', (req, res) => res.render('area-membro/courses/course-pending'));
router.get('/area-membro/courses/purchase-user', (req, res) => res.render('area-membro/courses/purchase-user'));
router.get('/area-membro/courses/area-curso', (req, res) => res.render('area-membro/courses/area-curso'));
router.get('/area-membro/courses/course-details', (req, res) => res.render('area-membro/courses/course-details'));
router.get('/account/user-profile', (req, res) => res.render('account/user-profile'));
router.get('/checkout', (req, res) => res.render('checkout'));



router.get('/area-membro/courses/meus-cursos', (req, res) => {
    res.render('area-membro/courses/meus-cursos');
});


router.post('/area-membro/courses/meus-cursos', async(req, res) => {
    const query = req.body.query;
    
        try {
           const coursesRef = admin.firestore().collection('courses');

           const lowerCaseQuery = query.toLowerCase();
           const snapshot = await coursesRef
           .where('nameCourse', '>=', query, 'i')
           .get();  

            const courses = snapshot.docs.map(doc => doc.data());

            res.json(courses);
     
        } catch (error) {
            console.log('Erro ao obter dados: ', error);
            res.status(500).send('Erro ao obter os dados.');
        }
    
});

module.exports = router;