import { Router } from 'express';
const router = Router();

const routes = [
    { path: '/posts', view: 'posts'},
    { path: '/checkout', view: 'checkout'},
    { path: '/account/user-profile', view: 'account/user-profile'},
    { path: '/area-membro/courses/area-curso', view: 'area-membro/courses/area-curso' },
    { path: '/area-membro/courses/meus-cursos', view: 'area-membro/courses/meus-cursos' },
    { path: '/area-membro/courses/purchase-user', view: 'area-membro/courses/purchase-user' },
    { path: '/area-membro/courses/course-pending', view: 'area-membro/courses/course-pending' },
    { path: '/area-membro/courses/course-details', view: 'area-membro/courses/course-details' },
    { path: '/area-membro/courses/course-completed', view: 'area-membro/courses/course-completed' },
    { path: '/area-membro/products/produtos-pendentes', view: 'area-membro/products/produtos-pendentes' },
]

routes.forEach(({ path, view }) => {
    router.get(path, (req, res) => res.render(view))
})

router.post('/area-membro/courses/meus-cursos', async(req, res) => {
  const query = req.body.query;
    
    try {
        const coursesRef = db.collection('courses');

        // const lowerCaseQuery = query.toLowerCase();
        const snapshot = await coursesRef
        .where('nameCourseLowerCase', '>=', query)
        .where('nameCourseLowerCase', '<=', query + '\uf8ff') // Garante que seja um prefixo
        .get();  

        const courses = snapshot.docs.map(doc => doc.data());

        res.json(courses);
    
    } catch (error) {
        console.log('Erro ao obter dados: ', error);
        res.status(500).send('Erro ao obter os dados.');
    }
    
});

export default router;