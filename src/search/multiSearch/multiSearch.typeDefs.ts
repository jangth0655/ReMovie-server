import { gql } from "apollo-server";
export default gql`
  type Query {
    multiSearch(keyword: String!): Search!
  }
`;
