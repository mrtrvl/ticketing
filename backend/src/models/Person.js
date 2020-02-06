const { Model } = require('objection');
class Person extends Model {
  static get tableName() {
    return 'persons';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'lastName'],
      properties: {
        id: { type: 'integer'},
        firstName: { type: 'string', minLength: 1, maxLength: 255},
        lastName: { type: 'string', minLength: 1, maxLength: 255},
        email: { type: 'string', minlength: 1, maxLength: 255},
        phone: { type: 'string', minLength: 1, maxLength: 20},
        password: { type: 'string', minLength: 1, maxLength: 255}
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