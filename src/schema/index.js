import { gql } from 'apollo-server-express';
//Fake Database
const user = [
  {
    id: 1,
    name: "สมดุ๋ย",
    username: "somduii",
    password: "2543",
    email: "somduii2543@gmail.com",
  },
  {
    id: 2,
    name: "สมเพช",
    username: "sompesh",
    password: "6666",
    email: "sompesh@gmail.com",
  },
];

export const resolvers = {
  Query: {
    user: (parent, args, context, info) => {
        return user.filter((user) => user.id.toString() === args.id)[0]; 
    },
    user: (parent, args, context, info) => {return user},
  },
};

export const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
        password: String!
        email: String!
    }

    type Query{
        user(id:ID): User
        users:[User]!

    }


`;
