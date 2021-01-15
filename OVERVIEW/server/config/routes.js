const authors = require('../controllers/authors');

module.exports = function(app){
    
    app.get('/api', authors.index); // POSTMAN: Works
    app.get('/api/authors', authors.getAuthors) // POSTMAN: Works
    app.get('/api/author/:id',authors.getAuthorByid); // POSTMAN: Works
    app.delete('/api/author/:id',authors.deleteAuthor); // POSTMAN: Works
    app.post('/api/author/new', authors.createAuthor); // POSTMAN: Works
    app.put('/api/author/update/:id',authors.updateAuthor); // POSTMAN: Works
}