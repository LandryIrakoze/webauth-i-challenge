
exports.up = function(knex) {
    return knex.schema
        .createTable('user_credentials', tbl => {
            tbl
                .increments();
            tbl
                .text('username', 128)
                .notNullable()
                .unique();
            tbl
                .text('password', 128)
                .notNullable()
                .unique();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('user_credentials');
};
