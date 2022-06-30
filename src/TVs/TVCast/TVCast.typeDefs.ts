import { gql } from "apollo-server";
export default gql`
  type Query {
    TVCast(id: Int!): TVCast!
  }
`;
