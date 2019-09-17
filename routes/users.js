const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const Users = require('../users/users-model');
const restricted = require('../auth/restricted-middleware');

router.get('/', (req, res) => {
    res.status(200).json({ message: 'its working!' })
})
router.post('/register', (req, res) => {
    const { username, password } = req.body;

    const hash = bcrypt.hashSync(password, 8);

    Users.add({ username, password: hash })
        .then(saved => {
            res.status(200).json(saved);
        })
        .catch(err => {
            res.status(400).json(err);
        })
})
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ message: `Welcome ${user.username}!` })
            } else {
                res.status(400).json({ message: 'Invalid credentials'})
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
})

router.get('/users', restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.json(400).json(err)
        })
})

module.exports = router;