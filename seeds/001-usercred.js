
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_credentials').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_credentials').insert([
        {username: 'bob', password: 'abcd'},
        {username: 'alice', password: 'efgh'},
        {username: 'eve', password: 'ijkl'},
        {username: 'ted', password: 'mnop'},
        {username: 'carol', password: 'qrst'},
        {username: 'trudy', password: 'uvwx'},
        {username: 'bill', password: 'yz'},
      ]);
    });
};
