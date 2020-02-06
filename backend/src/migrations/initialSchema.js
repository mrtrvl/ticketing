exports.up = knex => {
  return knex.schema
    .createTable('persons', table => {
      table.increments('id').primary()
      table.string('firstName')
      table.string('lastName')
      table.string('email')
      table.string('phone')
      table.string('password')
    })
}

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('persons')
}