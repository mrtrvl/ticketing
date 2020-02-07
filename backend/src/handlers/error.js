/* Objection error handling example:
*  http://vincit.github.io/objection.js/recipes/error-handling.html#examples
*
*/

const {
  ValidationError,
  NotFoundError,
  DBError,
  ConstraintViolationError,
  UniqueViolationError,
  NotNullViolationError,
  ForeignKeyViolationError,
  CheckViolationError,
  DataError
} = require('objection');

module.exports = {
  async errorHandler (ctx, next) {
    try {
      next();
    } catch (error) {
      if (error instanceof ValidationError) {
        switch (error.type){
          case 'ModelValidation':
            ctx.status = 400;
            ctx.body = {
              message: error.message,
              type: error.type,
              data: error.data
            }
            break;
          case 'RealtionExpression':
            ctx.status = 400;
            ctx.body = {
              message: error.message,
              type: 'RealtionExpression',
              data: {}
            }
            break;
          case 'UnallowedRelation':
            ctx.status = 400;
            ctx.body = {
              message: error.message,
              type: error.type,
              data: {}
            }
            break;
          case 'InvalidGraph':
            ctx.status = 400;
            ctx.body = {
              message: error.message,
              type: error.type,
              data: {}
            }
            break;
          default:
            ctx.status = 400;
            ctx.body = {
              message: error.message,
              type: 'UnknownValidationError',
              data: {}
            }
            break;
        }
      } else if (error instanceof NotFoundError) {
        ctx.status = 404;
        ctx.body = {
          message: error.message,
          type: 'NotFound',
          data: {}
        }
      } else if (error instanceof UniqueViolationError) {
        ctx.status = 409;
        ctx.body = {
          message: error.message,
          type: 'UniqueViolation',
          data: {
            columns: error.columns,
            table: error.table,
            constraint: error.constraint
          }
        }
      } else if (error instanceof NotNullViolationError) {
        ctx.status = 409;
        ctx.body = {
          message: error.message,
          type: 'NotNullViolation',
          data: {
            columns: error.columns,
            table: error.table
          }
        }
      } else if (error instanceof ForeignKeyViolationError) {
        ctx.status = 409;
        ctx.body = {
          message: error.message,
          type: 'ForeignKeyViolation',
          data: {
            table: error.table,
            constraint: error.constraint
          }
        }
      } else if (error instanceof CheckViolationError) {
        ctx.status = 400;
        ctx.body = {
          message: error.message,
          type: 'CheckViolation',
          data: {
            table: error.table,
            constraint: error.constraint
          }
        }
      } else if (error instanceof DataError) {
        ctx.status = 400;
        ctx.body = {
          message: error.message,
          type: 'InvalidData',
          data: {}
        }
      } else if (error instanceof DBError) {
        ctx.status = 500;
        ctx.body = {
          message: error.message,
          type: 'UnknownDatabaseError',
          data: {}
        }
      } else {
        ctx.status = 500;
        ctx.body = {
          message: error.message,
          type: 'UnknownError',
          data: {}
        }
      }
    }
  }
}
  