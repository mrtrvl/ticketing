const { Model } = require('objection');
class ModelBase extends Model {
  $beforeUpdate() {
    this.updatedAt = new Date();
  }

  $beforeInsert() {
    this.createdAt = new Date();
    this.deleted = false;
  }
}

module.exports = ModelBase;