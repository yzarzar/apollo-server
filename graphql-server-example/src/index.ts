import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Book {
    id: ID
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }`;

  const books = [
    {
      id: 1,
      title: "The Awakening",
      author: "Kate Chopin",
    },
    {
      id: 2,
      title: "City of Glass",
      author: "Paul Auster",
    },
    {
      id: 3,
      title: "City of Glass",
      author: "Paul Auster",
    },
    {
      id: 4,
      title: "City of Glass",
      author: "Paul Auster",
    },
    {
      id: 5,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
    },
    {
      id: 6,
      title: "1984",
      author: "George Orwell",
    },
    {
      id: 7,
      title: "Pride and Prejudice",
      author: "Jane Austen",
    },
  ];
  

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
