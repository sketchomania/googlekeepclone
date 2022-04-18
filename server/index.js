import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";

import graphQLSchema from "./graphql/schema/index.js";
import graphQLResolvers from "./graphql/resolvers/index.js";

const app = express();

const HOSTUSER = process.env.DB_USER;
const HOSTPASS = process.env.DB_PASS;
const HOSTNAME = process.env.DB_NAME;
const PORT = process.env.PORT;

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true,
  })
);

const CONNECTION_URL = `mongodb+srv://${HOSTUSER}:${HOSTPASS}@cluster0.nylpb.mongodb.net/${HOSTNAME}?retryWrites=true&w=majority`;
const port = PORT || 6000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server running on port: ${port}`))
  )
  .catch((error) => console.log(error));
