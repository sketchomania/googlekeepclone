import { buildSchema } from "graphql";

const graphQLSchema = buildSchema(`
type Label {
 _id: ID!
 name: String!
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
 name: String!
}

input NoteCreateInput {
 title: String!
 description: String!
 labels: [String!]
}

input UserInput {
 email: String!
 password: String!
}

type RootQuery {
 notes: [Note!]!
 note(id: ID!): Note

 labels: [Label!]!
 label(id: ID!): label
}

type RootMutation {
 createNote(noteCreateInput: NoteCreateInput): Note
//  updateNote(id: ID!, noteUpdateInput!): Note!
 createLabel(labelInput: LabelInput): Label
//  updateLabel(id: ID!, labelUpdateInput!): Label!
 createUser(userInput: UserInput): User
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);

export default graphQLSchema;

// # // type Note {
// # //     _id: ID!
// # //     title: String!
// # //     description: String!
// # //     background: String
// # //     pinned: Boolean
// # //     selected: Boolean
// # //     listMode: Boolean
// # //     archived: Boolean
// # //     addedLabels: [Label]
// # //     creator: User!
// # //     createdAt: String!
// # //     updatedAt: String!
// # //    }

// # // input NoteInput {
// # //     title: String!
// # //     description: String!
// # //     background: String
// # //     pinned: Boolean
// # //     selected: Boolean
// # //     listMode: Boolean
// # //     archived: Boolean
// # //     addedLabels: [String]
// # //    }

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

// # // type User {
// # // _id: ID!
// # // email: String!
// # // password: String!
// # // createdLabels: [Label!]
// # // createdNotes: [Note!]
// # // darkMode: Boolean!
// # // }

// # // assignedNotes: [String!]
