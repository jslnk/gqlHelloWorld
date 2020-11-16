// import gql from 'apollo-server'
const{gql, ApolloServer} = require('apollo-server');

const typeDefs=`

type Query{
    greeting :String
}

`;

const resolvers ={
    Query:{
        greeting:()=> 'Hello GraphQL world!'
    }
}

const server = new ApolloServer({typeDefs, resolvers});

server.listen({port:9000})
.then((serverInfo) => console.log(`Server running at ${serverInfo.url}`));

//console.log(typeDefs);