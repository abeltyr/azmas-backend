export const Repeatable = /* GraphQL */ `
  scalar JSON
  scalar DateTime
  scalar Upload

  type Avatar {
    id: ID!
    name: String!
    url: String!
    size: Float!
    avatar: String!
    ext: String!
  }

  input FilterInput {
    offset: Int = 0
    limit: Int = 25
    orderBy: FilterOrderType = createdAt
    order: FilterOrder = asc
  }

  enum FilterOrder {
    asc
    desc
  }

  enum FilterOrderType {
    createdAt
    updatedAt
  }
`;
