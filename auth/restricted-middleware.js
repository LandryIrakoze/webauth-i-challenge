// const bcrypt = require('bcryptjs');

// const Users = require('../users/users-model');

// module.exports = (req, res, next) => {
//     let { username, password } = req.headers;

//     Users.find({ username })
//         .first()
//         .then(user => {
//             if (user && bcrypt.compareSync(password, user.password)) {
//                 next()
//             } else {
//                 res.status(400).json({ message: 'restricted route' })
//             }
//         })
//         .catch(err => {
//             res.status(500).json(err)
//         })

//     function fetch() {
//         const reqOptions = {
//             headers: {
//                 username: '',
//                 password: ''
//             }
//         }
//     }
// }
module.exports = (req, res, next) => {
    console.log('session', req.session);
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ message: 'You shall not pass!' })
    }
}