const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
}

function find() {
    return db('user_credentials')
        .select('id', 'username', 'password')
}
function findBy(filter) {
    return db('user_credentials')
        .where(filter)
        .first()
}
function add(data) {
    return db('user_credentials')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id)
        })
}

function findById(id) {
    return db('user_credentials')
        .where({ id })
        .first()
}