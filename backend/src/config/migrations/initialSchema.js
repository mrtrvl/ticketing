exports.up = knex => {
  return knex.schema
    .createTable('persons', table => {
      table.increments('id').primary()
      table.string('firstName')
      table.string('lastName')
      table.string('email')
      table.string('phone')
      table.string('password')
      table.datetime('createdAt')
      table.datetime('updatedAt')
      table.boolean('deleted')
    })
}

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('persons')
}