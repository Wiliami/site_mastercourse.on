const express = require("express");
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const router = express.Router();


router.get('/', (req, res) => res.render('home'));
router.get('/dashboard', (req, res) => res.render('dashboard'));
router.get('/sobre', (req, res) => res.render('sobre'));
router.get('/contatos', (req, res) => res.render('contatos'));
router.get('/help', (req, res) => res.render('help'));
router.get('/forgot-password', (req, res) => res.render('forgot-password'));
router.get('/courses', (req, res) => res.render('courses'));
router.get('/course-details', (req, res) => res.render('course-details'));

module.exports = router;