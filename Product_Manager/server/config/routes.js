const products = require('../controllers/products');

module.exports = function(app){
    
    app.get('/api', products.index); // Works
    app.get('/api/products', products.getProducts) // Works
    app.post('/api/product/new', products.createProduct); // Works
}