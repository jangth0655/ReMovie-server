import { gql } from "apollo-server";
export default gql`
  type Query {
    TVRecommend(id: Int!): TV
  }
`;
