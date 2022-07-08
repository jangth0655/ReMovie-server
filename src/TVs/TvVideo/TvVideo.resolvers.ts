import fetch from "node-fetch";

const resolvers = {
  Query: {
    TvVideo: async (_, { id }) => {
      const response = await (
        await fetch(
          `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.API_KEY}&language=ko`
        )
      ).json();
      return response;
    },
  },
};

export default resolvers;
