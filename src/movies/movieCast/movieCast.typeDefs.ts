import { gql } from "apollo-server";
export default gql`
  type Query {
    movieCast(id: Int!): MovieCast!
  }
`;
