const mssql = require('mssql')

const DataTypes = {
  INT: 'integer',
  STRING: 'string'
}

class DB {
  constructor() {}
  async connect(dbtype, config) {
    try {
      this.pool = new mssql.ConnectionPool(config)
      await this.pool.connect()
    } catch (error) {
      return error
    }
  }
  async disconnect() {
    try {
      await this.pool.close()
    } catch (error) {

    }
  }
  define(modelName , model) {
    return new Model(model)
  }
}

class Model {
  constructor(model) {
    this.model = model
  }
  //
  async create() {
    let record = {}

    return record
  }
  insert(record) {}
  findId(recordId) {}
  update(record) {}
  delete(record) {}
  query() {}
  fields(fieldList) {}
  where(whereClause) {}
  index(indexName) {}
  limit(limit) {}
  offset(offset) {}
  join(relation, fieldList) {}
  tableCreate() {}
  tableMigrate() {}
  //
  validate(mode) {}
  findKey(field1) {}
}

module.exports = {
  DataTypes: DataTypes,
  DB: DB,
  Model: Model
}
