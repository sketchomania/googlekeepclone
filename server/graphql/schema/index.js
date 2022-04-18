import { buildSchema } from "graphql";

const graphQLSchema = buildSchema(`
type Note {
 _id: ID!
 title: String!
 description: String!
 labels: [String!]
 Background: String
 creator: User!
 pinned: Boolean!
 selected: Boolean!
 listMode: Boolean!
 archived: Boolean!
 deleted: Boolean!
 createdAt: String!
 updatedAt: String!
}

type Label {
 _id: ID!
 name: String!
 assignedNotes: [Note!]
 creator: User!
}

type User {
 _id: ID!
 email: String!
 password: String!
 createdLabels: [Label!]
 createdNotes: [Note!]
 darkMode: Boolean!
}

type AuthData {
 userId: ID!
 token: String!
 tokenExpirationTime: Int!
}

input NoteCreateInput {
 title: String!
 description: String!
 labels: [String!]
}

input NoteUpdateInput {
 title: String!
 description: String!
}

input LabelCreateInput {
 name: String!
}

input LabelUpdateInput {
 name: String!
}

input UserCreateInput {
 email: String!
 password: String!
}

type RootQuery {
 notes: [Note!]!
 note(id: ID!): Note

 labels: [Label!]!
 label(id: ID!): Label

 login(email: String!, password: String!): AuthData!
}

type RootMutation {
 createNote(noteCreateInput: NoteCreateInput): Note!
 updateNote(id: ID!, noteUpdateInput: NoteUpdateInput): Note!
 deleteNote(id: ID!): Boolean!

 createLabel(labelCreateInput: LabelCreateInput): Label
 updateLabel(id: ID!, labelUpdateInput: LabelUpdateInput): Label!
 deleteLabel(id: ID!): Boolean!

 createUser(userCreateInput: UserCreateInput): User
}

schema {
 query: RootQuery
 mutation: RootMutation
}
`);

export default graphQLSchema;