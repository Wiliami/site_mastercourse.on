const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

router.get('/', (req, res) => res.render('home'));
router.get('/login', (req, res) => res.render('login'));
router.get('/dashboard', (req, res) => res.render('dashboard'));
router.get('/sobre', (req, res) => res.render('sobre'));
router.get('/contatos', (req, res) => res.render('contatos'));
router.get('/help', (req, res) => res.render('help'));
router.get('/forgot-password', (req, res) => res.render('forgot-password'));
router.get('/courses', (req, res) => res.render('courses'));
router.get('/course-details', (req, res) => res.render('course-details'));
router.get('/home', (req, res) => res.render('teste'));
router.get('/home/teste', (req, res) => res.render('teste1'));

module.exports = router;