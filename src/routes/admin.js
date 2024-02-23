import { Router } from 'express';
const router = Router();
 
router.get('/users/create', (req, res) => res.render('admin/users/create'));
router.get('/users/list', (req, res) => res.render('admin/users/list'));
router.get('/users/update', (req, res) => res.render('admin/users/update'));
router.get('/users/delete', (req, res) => res.render('admin/users/delete'));
router.get('/dashboard1', (req, res) => res.render('dashboard'));

export default router;