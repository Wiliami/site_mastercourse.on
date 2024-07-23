import { Router } from 'express';

const router = Router();

const routes = [
    { path: '/', view: 'home' },
    { path: '/sobre', view: 'sobre' },
    { path: '/contatos', view: 'home' },
    { path: '/help', view: 'help' },
    { path: '/forgot-password', view: 'forgot-password' },
    { path: '/courses', view: 'courses' },
    { path: '/course-details', view: 'course-details' },
    { path: '/dashboard', view: 'dashboard' },
]

routes.forEach(({ path, view }) => {
    router.get(path, (req, res) => res.render(view))
})

export default router;