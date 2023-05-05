import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { dbConnect } from '../src/db';
import dotenv from  'dotenv';
 
dotenv.config();
async function startServer() {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();



    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, async () =>{
        
     

        if (!process.env.MONGO_STRING) {
            process.exit(1)
        }
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
        await dbConnect();
    }
    );

}

startServer();
