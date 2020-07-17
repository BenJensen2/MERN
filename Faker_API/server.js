const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));

class User {
  constructor() {
    this.firstName = faker.commerce.productName();
    this.lastName = faker.address.state();
    this.phoneNumber = faker.address.zipCode();
    this.email = `${faker.address.streetName()} @ ${faker.address.state()}.com`;
    this.password = faker.company.companyName();
  }
}

class Company {
  constructor() {
    this.name = faker.finance.accountName();
    this.address = {
      street: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }
}

const newUser = new User();
const newCompany = new Company();



app.get("/api/users/new", (req, res) => {
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  res.json({user: newUser, company:newCompany});
});