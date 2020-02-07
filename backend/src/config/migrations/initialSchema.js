exports.up = knex => {
  return knex.schema
    .createTable('persons', table => {
      table.increments('id').primary()
      table.unique('firstName')
      table.string('firstName')
      table.string('lastName')
      table.string('email')
      table.string('phone')
      table.string('password')
      table.datetime('createdAt')
      table.datetime('updatedAt')
      table.boolean('deleted')
    })
    .createTable('whitelist', table => {
      table.increments('id').primary()
      table.text('token')
      table.datetime('createdAt')
      table.datetime('updatedAt')
      table.boolean('deleted')
    })
}

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('persons')
    .dropTableIfExists('whitelist')
}