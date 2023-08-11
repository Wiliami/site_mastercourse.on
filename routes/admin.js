const express = require("express");
const db = require("../model/db");
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const router = express.Router();

 
router.get('/users/create', (req, res) => res.render('admin/users/create'));
router.get('/users/list', (req, res) => res.render('admin/users/list'));
router.get('/users/update', (req, res) => res.render('admin/users/update'));
router.get('/users/delete', (req, res) => res.render('admin/users/delete'));
router.get('/users/example', (req, res) => res.render('admin/users/example'));

module.exports = router;