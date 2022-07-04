import { gql } from "apollo-server";
export default gql`
  type TVResults {
    poster_path: String
    backdrop_path: String
    first_air_date: String
    vote_average: Float
    overview: String
    id: Int!
    original_name: String
    name: String
  }

  type TVDetail {
    poster_path: String
    backdrop_path: String
    id: Int!
    name: String
    overview: String
    first_air_date: String
    last_air_date: String
    genres: [Genres]
    vote_average: Float
    seasons: [Season]
  }

  type Season {
    air_date: Int
    episode_count: Int
    id: Int
    name: String
    overview: String
    poster_path: String
    season_number: Int
  }

  type TVCast {
    id: Int
    cast: [Cast]
  }

  type TV {
    page: Int
    results: [TVResults]!
    total_pages: Int
    total_results: Int
  }
`;
