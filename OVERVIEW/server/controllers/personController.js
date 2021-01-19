const { Person } = require('../models/Person');

module.exports.personIndex = (request, response) => {
  response.json({
     message: "There's nobody here!!"
  });
}

module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    Person.create({
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}



