import { gql } from "apollo-server";
export default gql`
  type Actor {
    birthday: String
    known_for_department: String
    deathday: String
    id: Int
    name: String
    biography: String
    profile_path: String
    place_of_birth: String
  }
`;
