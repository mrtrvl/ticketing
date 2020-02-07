
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('persons').del()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
        {
          id: 1,
          firstName: 'admin',
          lastName: 'admin',
          email: 'admin@admin.ee',
          phone: '123456789',
          password: '$2y$10$Op/h22qb3kdI7hwWpaloSulRsDYYFmLWRPMaAIc/mrrAGcrkVHdhC',
        }
      ]);
    });
};
