const products = require('../controllers/products');

module.exports = function(app){
    
    app.get('/api', products.index);
    app.get('/api/products', products.getProducts)
    app.post('/api/product/new', products.createProduct);
}