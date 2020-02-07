const ModelBase = require('./ModelBase');
class Person extends ModelBase {
  static get tableName() {
    return 'persons';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'lastName', 'email'],
      unique: ['email'],
      properties: {
        id: { type: 'integer'},
        firstName: { type: 'string', minLength: 1, maxLength: 255},
        lastName: { type: 'string', minLength: 1, maxLength: 255},
        email: { type: 'string', minlength: 1, maxLength: 255},
        phone: { type: 'string', minLength: 1, maxLength: 20},
        password: { type: 'string', minLength: 1, maxLength: 255},
        createdAt: { type: 'datetime'},
        updatedAt: { type: 'datetime'},
        deleted: { type: 'boolean' }
      }
    }
  }

  static get modifiers() {
    return {

    }
  }

  static get relationMappings() {
    return {

    }
  }
}

module.exports = Person;