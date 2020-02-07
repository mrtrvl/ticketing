const ModelBase = require('./ModelBase');
class WhiteList extends ModelBase {
  static get tableName() {
    return 'whitelist';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['token'],
      properties: {
        id: { type: 'integer'},
        token: { type: 'text', minLength: 1, maxLength: 2048},
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

module.exports = WhiteList;