const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');

const UsersRouter = require('./routes/users');

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan());
server.use(express.json());

server.use('/api/', UsersRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: 'API up...' })
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`))