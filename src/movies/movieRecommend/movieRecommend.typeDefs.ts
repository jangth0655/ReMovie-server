import { gql } from "apollo-server";
export default gql`
  type Query {
    movieRecommend(id: Int!): Movie
  }
`;
