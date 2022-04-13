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
 movedToBin: Boolean!
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

// note { movedToBin: Boolean!}
// # // labels: [String!]
// # // This means that the list itself can be null, but it can't have any null members. For example, in JSON:
// # // myField: null // valid
// # // myField: [] // valid
// # // myField: ['a', 'b'] // valid
// # // myField: ['a', null, 'b'] // error

// # // myField: [String]!
// # // This means that the list itself cannot be null, but it can contain null values:
// # // myField: null // error
// # // myField: [] // valid
// # // myField: ['a', 'b'] // valid
// # // myField: ['a', null, 'b'] // valid

// # // [Episode!]! represents an array of Episode objects. Since it is also non-nullable,
// # // you can always expect an array (with zero or more items) when you query the appearsIn field.
// # // And since Episode! is also non-nullable, you can always expect every item of the array to be an Episode object.

// # // labels: [String!]!

// # // assignedNotes: [String!]
