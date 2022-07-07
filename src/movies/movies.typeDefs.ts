import { gql } from "apollo-server";
export default gql`
  type VideoResult {
    name: String
    key: String
    id: String
  }

  type Video {
    id: Int
    results: [VideoResult]
  }

  type Genres {
    id: Int
    name: String
  }

  type Cast {
    id: Int
    profile_path: String
    cast_id: String
    character: String
    name: String
    original_name: String
  }

  type MovieResult {
    poster_path: String
    backdrop_path: String
    overview: String
    id: Int!
    original_title: String
    title: String
    vote_count: Int
    video: Boolean
    vote_average: Float
    release_date: String
  }

  type MovieDetail {
    id: Int!
    poster_path: String
    backdrop_path: String
    genres: [Genres]
    imdb_id: String
    original_title: String
    title: String
    overview: String
    video: Boolean
    vote_average: Float
    release_date: String
    isLiked: Boolean
  }

  type MovieCast {
    id: Int
    cast: [Cast]
  }

  type Movie {
    page: Int
    results: [MovieResult]!
    total_pages: Int
    total_results: Int
  }
`;
