import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { graphqlHTTP } from "express-graphql";

import isAuth from "./middleware/is-auth.js";
import graphQLSchema from "./graphql/schema/index.js";
import graphQLResolvers from "./graphql/resolvers/index.js";

dotenv.config();
const app = express();

const HOST_USER = process.env.DB_USER;
const HOST_PASS = process.env.DB_PASS;
const HOST_NAME = process.env.DB_NAME;
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(isAuth);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true,
  })
);

const CONNECTION_URL = `mongodb+srv://${HOST_USER}:${HOST_PASS}@cluster0.nylpb.mongodb.net/${HOST_NAME}?retryWrites=true&w=majority`;
const port = PORT || 8000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server running on port: ${port}`))
  )
  .catch((error) => console.log(error));
