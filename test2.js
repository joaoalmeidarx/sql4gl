const {DataTypes , DB , Model} = require('./index')

const ProductModel = {
  "table": "product",
  "fields": [
      {"name": "id_product", "type": DataTypes.INT, "format": ">>>>>>>>>9", "label": "Id produto"},
      {"name": "product_name", "type": DataTypes.STRING, "format": "40", "label": "Nome produto"}
  ],
  "indexes":[
    {"name": "idx_key", primary: true, "fields": ["product_name"]},
    {"name": "idx_name", "fields": ["product_name"]}
  ],
  "relations":[]
}

async function start() {
  let db = new DB()
  let Product = db.define('Product' , ProductModel)
  console.log(await Product.create())
}

start()
