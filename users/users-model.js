const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
}

function find() {
    return db('usercred')
        .select('id', 'username', 'password')
}
function findBy(filter) {
    return db('usercred')
        .where(filter)
        .first()
}
function add(data) {
    return db('usercred')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id)
        })
}

function findById(id) {
    return db('usercred')
        .where({ id })
        .first()
}