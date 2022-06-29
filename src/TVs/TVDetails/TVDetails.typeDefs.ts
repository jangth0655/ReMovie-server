import { gql } from "apollo-server";
export default gql`
  type Query {
    TVDetails(id: Int!): TVDetail!
  }
`;
