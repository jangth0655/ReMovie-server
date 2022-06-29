import { gql } from "apollo-server";
export default gql`
  type Query {
    movieDetail(id: Int!): MovieDetail
  }
`;
