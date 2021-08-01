const Event = /* GraphQL */ `
  extend type Query {
    event(id: ID!): Event
    events(filter: FilterInput!): [Event!]
    monthlyevent(
      filter: FilterInput!
      startDate: String
      endDate: String
    ): [Event!]
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
    community: Community
    communityId: ID!
    title: String
    description: String
    image: File
    eventStartDate: DateTime
    eventEndDate: DateTime
    category: String
    location: String
    price: Float
    horizontal: Boolean
    tickets: [Ticket]
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CreateEventInput {
    creatorId: ID!
    communityId: ID!
    title: String
    description: String
    eventStartDate: String!
    eventEndDate: String!
    category: String
    location: String
    price: Int!
  }

  input UpdateEventInput {
    creatorId: ID!
    communityId: ID!
    title: String
    description: String
    eventStartDate: String!
    eventEndDate: String!
    category: String
    location: String
    price: Int!
  }
`;

export default Event;
