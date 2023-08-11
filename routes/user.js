const express = require("express");
const router = express.Router();

router.get('/area-membro/courses/meus-cursos', (req, res) => res.render('area-membro/courses/meus-cursos'));
router.get('/area-membro/courses/course-completed', (req, res) => res.render('area-membro/courses/course-completed'));
router.get('/area-membro/courses/course-pending', (req, res) => res.render('area-membro/courses/course-pending'));
router.get('/area-membro/courses/purchase-user', (req, res) => res.render('area-membro/courses/purchase-user'));
router.get('/area-membro/courses/area-curso', (req, res) => res.render('area-membro/courses/area-curso'));
router.get('/area-membro/courses/course-details', (req, res) => res.render('area-membro/courses/course-details'));
router.get('/account/user-profile', (req, res) => res.render('account/user-profile'));
router.get('/checkout', (req, res) => res.render('checkout'));

module.exports = router;