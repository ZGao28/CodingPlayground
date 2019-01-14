# This is a learning folder for GQL
Follows a udemy course to build out an application that uses GraphQL apis instead of the standard REST apis.
Uses Apollo client and server, as well as Node.JS, Express, and React.

### Pros of using GQL
* Avoid overfetching data and underfetching data at the same time - get exactly what you need in just one request.
* Api schema in place to know exactly what the api will return.
* Can be used along with any backend and front end technology.
* Makes everything more scalable and maintainable.
* Go to GraphQL website for more info https://graphql.org/

### Cons of using GQL
 

### Process
1. Install required packages
    * graphql: core graphql functionality, parsing GraphQL queries, using the GraphQL schema.
    * apollo-server-express: Acts like a glue, providing support for HTTP(S) requests for GraphQL apis that run on an express server.
    * graphql-tools: Just a tooling package to provide some utilities.

2. Describe data we want to expose using type definition. Top level type of Query is used to define which types can be sent by client.

3. Write code to process a request - done using a resolver.