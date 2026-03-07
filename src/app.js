const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema, root } = require('./graphql/schema');

const app = express();

app.use(express.json());

// Starter route is complete.
app.get('/', (_req, res) => {
  res.status(200).json({
    message: 'Welcome to the GHCR lab starter API'
  });
});

// TODO 1: Add GET /health endpoint.
// Expected JSON response:
// { status: 'ok', service: 'ghcr-demo-api' }

app.get('/health', (_req, res) => {
  res.status(200).json({
    "status": "ok",
    "service": "ghcr-demo-api"
  });
});

// TODO 2: Mount GraphQL endpoint at /graphql with:
// - schema
// - rootValue: root
// - graphiql: true
// Hint:
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

module.exports = app;
