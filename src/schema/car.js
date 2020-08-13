const { gql } = require('apollo-server');

const Car = gql`
  type Car {
    id: Int!
    plateNumber: String!
    color: String!
    model: String!
    chasisNumber: String!
    vehicleStatus: String!
    yearOfManufacture: Int!
    issueDate: String!
    expiryDate: String!
  }
  type Query {
    car(id: Int!): Car
    cars: [Car]
  }
`;

module.exports = Car;
