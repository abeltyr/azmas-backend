export const Repeatable = /* GraphQL */ `
  scalar JSON
  scalar DateTime
  scalar Upload
  scalar Uploads

  type Avatar {
    id: ID!
    name: String!
    url: String!
    size: Float!
    avatar: String!
    ext: String!
  }

  input FilterInput {
    skip: Int = 0
    take: Int = 25
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
