const { ApolloServer, gql } = require('apollo-server');
const MvrpAPI = require('./datasource');
const CarTypeDef = require('./src/schema/car');
const CarResolvers = require('./src/resolvers/car');

const server = new ApolloServer({
  typeDefs: CarTypeDef,
  resolvers: CarResolvers,
  dataSources: () => ({
    mvrpAPI: new MvrpAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});