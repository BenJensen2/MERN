const products = require('../controllers/products');

module.exports = function(app){
    
    app.get('/api', products.index); // Works: Postman
    app.get('/api/products', products.getProducts) // Works: Postman
    app.get('/api/product/:id',products.getProductByid); // Works: Postman
    app.post('/api/product/new', products.createProduct); // Works: Postman
}