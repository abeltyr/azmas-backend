export const Repeatable = /* GraphQL */ `
  scalar JSON
  scalar DateTime
  scalar Upload
  scalar Uploads

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
