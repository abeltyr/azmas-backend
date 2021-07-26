const Ticket = /* GraphQL */ `
  extend type Query {
    ticket(id: ID!): Ticket
    tickets(filter: FilterInput!, eventId: ID!): [Ticket!]
  }

  extend type Mutation {
    createTicket(data: CreateTicketInput): Ticket!
    updateTicket(data: UpdateTicketInput, id: ID!): Ticket!
    deleteTicket(id: ID!): Boolean!
  }

  type Ticket {
    id: ID!
    user: User
    userId: ID!
    group: Group
    groupId: ID!
    event: Event
    eventId: ID!
    price: Float!
    used: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CreateTicketInput {
    userId: ID!
    eventId: ID!
    price: Float!
    used: Boolean
  }

  input UpdateTicketInput {
    userId: ID!
    eventId: ID!
    price: Float!
    used: Boolean
  }
`;

export default Ticket;
