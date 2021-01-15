const authors = require('../controllers/authors');
const PersonController = require('../controllers/person');

module.exports = function(app){
    
    // AUTHORS
    app.get('/api/authors', authors.index); // POSTMAN: Works
    app.get('/api/allAuthors', authors.getAuthors) // POSTMAN: Works
    app.get('/api/author/:id',authors.getAuthorByid); // POSTMAN: Works
    app.delete('/api/author/:id',authors.deleteAuthor); // POSTMAN: Works
    app.post('/api/author/new', authors.createAuthor); // POSTMAN: Works
    app.put('/api/author/update/:id',authors.updateAuthor); // POSTMAN: Works

    // PEOPLE
    app.get('/api/people', PersonController.personIndex);
    app.post('/api/createPerson', PersonController.createPerson);
}