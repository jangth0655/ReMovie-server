import { gql } from "apollo-server";
export default gql`
  type SearchResults {
    id: Int!
    vote_average: Int
    backdrop_path: String
    poster_path: String
    overview: String
    title: String
    name: String
    release_date: String
    media_type: String
  }

  type Search {
    page: Int
    results: [SearchResults]!
    total_pages: Int
    total_results: Int
  }
`;
