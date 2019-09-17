const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const UsersRouter = require('./routes/users');

const dbConnection = require('./database/dbConfig');

const server = express();

const sessionConfig = {
    name: 'myCookie',
    secret: process.env.SESSION_SECRET || 'keep it secret, keep it safe',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: true,
    store: new KnexSessionStore({
        knex: dbConnection,
        tablename: 'knexsessions',
        sidfieldname: 'sessionid',
        createtable: true,
        clearInterval: 1000 * 60 * 30
    })
}

server.use(helmet());
server.use(cors({
    credentials: true
}));
server.use(morgan());
server.use(express.json());
server.use(session(sessionConfig));

server.use('/api/', UsersRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: 'API up...' })
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`))