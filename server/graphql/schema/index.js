import { buildSchema } from "graphql";

const graphQLSchema = buildSchema(`
type Label {
 _id: ID!
 title: String!
 assignedNotes: [Note!]
 creator: User!
}

type Note {
 _id: ID!
 title: String!
 description: String!
 labels: [String!]
}

type User {
 _id: ID!
 email: String!
 password: String!
 createdLabels: [Label!]
 createdNotes: [Note!]
 darkMode: Boolean!
}

input LabelInput {
 title: String!
 assignedNotes: [String]
}

input NoteInput {
 title: String!
 description: String!
 labels: [String!]
}

input UserInput {
 email: String!
 password: String!
}

type RootQuery {
 labels: [Label!]!
 notes: [Note!]!
}

type RootMutation {
 createLabel(labelInput: LabelInput): Label
 createNote(noteInput: NoteInput): Note
 createUser(userInput: UserInput): User
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);

export default graphQLSchema;


// type Note {
//     _id: ID!
//     title: String!
//     description: String!
//     background: String
//     pinned: Boolean 
//     selected: Boolean
//     listMode: Boolean
//     archived: Boolean
//     addedLabels: [Label]
//     creator: User!
//     createdAt: String!
//     updatedAt: String!
//    }

// input NoteInput {
//     title: String!
//     description: String!
//     background: String
//     pinned: Boolean 
//     selected: Boolean
//     listMode: Boolean
//     archived: Boolean
//     addedLabels: [String]
//    }
