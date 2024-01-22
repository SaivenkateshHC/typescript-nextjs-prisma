import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://typescript-nextjs-prisma.vercel.app/api/graphql',
  cache: new InMemoryCache(),
})

export default client