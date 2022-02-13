import bulidScheme, { buildSchema } from "graphql";

module.exports = buildSchema(`
type Label {
 _id: ID!
 title: Stirng!
 assignedNotes: [Note]
 creator: User!
 createdAt: String!
}

type Note {
 _id: ID!
 title: String!
 description: String!
 background: String
 pinned: Boolean 
 selected: Boolean
 listMode: Boolean
 archived: Boolean
 addedLabels: [Label]
 creator: User!
 createdAt: String!
 updatedAt: String!
}

type User {
 _id: ID!
 email: String!
 password: String!
 createdLabels: [Label]
 createdNotes: [Note]
}

input LabelInput {
 title: String!
 assignedNotes: [Note]
}

input NoteInput {
 title: String!
 description: String!
 background: String
 pinned: Boolean 
 selected: Boolean
 listMode: Boolean
 archived: Boolean
 addedLabels: [Label]
}

input UserInput {
 email: String!
 password: String!
}

type RootQuery {
 Labels: [Label!]!
 Notes: [Note!]!
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
