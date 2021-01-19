const authorController = require('../controllers/authorController');
const personController = require('../controllers/personController');
const productController = require('../controllers/productController');

module.exports = function(app){
    
    // AUTHORS
    app.get('/api/authors', authorController.index);
    app.get('/api/allAuthors', authorController.getAuthors)
    app.get('/api/author/:id',authorController.getAuthorByid);
    app.delete('/api/author/:id',authorController.deleteAuthor);
    app.post('/api/author/new', authorController.createAuthor);
    app.put('/api/author/update/:id',authorController.updateAuthor);

    // PEOPLE
    app.get('/api/people', personController.personIndex);
    app.post('/api/createPerson', personController.createPerson);
    
    // PRODUCTS
    app.get('/api/products', productController.index);
    app.get('/api/allProducts', productController.getProducts)
    app.get('/api/product/:id',productController.getProductByid);
    app.delete('/api/product/:id',productController.deleteProduct);
    app.post('/api/product/new', productController.createProduct);
    app.put('/api/product/update/:id',productController.updateProduct);
}