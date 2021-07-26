const Event = /* GraphQL */ `
  extend type Query {
    event(id: ID!): Event
    events(filter: FilterInput!): [Event!]
  }

  extend type Mutation {
    createEvent(data: CreateEventInput): Event!
    updateEvent(data: UpdateEventInput, id: ID!): Event!
    deleteEvent(id: ID!): Boolean!
  }

  type Event {
    id: ID!
    user: User
    creatorId: ID!
    group: Group
    groupId: ID!
    title: String
    description: String
    # //Todo: add the array of image
    eventStartDate: DateTime
    eventEndDate: DateTime
    category: String
    location: String
    price: Int
    # tickets        Ticket[]
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CreateEventInput {
    creatorId: ID!
    groupId: ID!
    title: String
    description: String
    eventStartDate: DateTime!
    eventEndDate: DateTime!
    category: String
    location: String
    price: Int!
  }

  input UpdateEventInput {
    creatorId: ID!
    groupId: ID!
    title: String
    description: String
    eventStartDate: DateTime!
    eventEndDate: DateTime!
    category: String
    location: String
    price: Int!
  }
`;

export default Event;
