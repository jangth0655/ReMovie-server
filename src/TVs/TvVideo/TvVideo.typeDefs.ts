import { gql } from "apollo-server";
export default gql`
  type Query {
    TvVideo(id: Int!): Video
  }
`;
