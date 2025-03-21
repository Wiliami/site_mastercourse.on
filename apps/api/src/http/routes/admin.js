import { Router } from 'express';

const router = Router();

const routes = [
    { path: '/users/create', view: 'admin/users/create' },
    { path: '/users/list', view: 'admin/users/list' },
    { path: '/users/update', view: 'admin/users/update' },
    { path: '/users/delete', view: 'admin/users/delete' },
]

routes.forEach(({ path, view }) => {
    router.get(path, (req, res) => res.render(view))
})

export default router;  