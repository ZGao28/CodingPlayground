const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { buildSchema } = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Query {
    hello: String,
    goodbye: String
  }
`;

// The root provides a resolver function for each API endpoint
const resolvers = {
  Query: {
    hello: () => 'hello',
    goodbye: () => 'bye'
  }
};


const schema = makeExecutableSchema({typeDefs, resolvers});



// Start express server
var app = express();
app.use(cors(), bodyParser.json());
app.use('/graphql', graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}))
app.listen(9000, ()=>{console.log('Server is up and running on port 9000')});
