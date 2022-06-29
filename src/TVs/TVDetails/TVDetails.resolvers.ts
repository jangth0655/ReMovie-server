const resolvers = {
  Query: {
    TVDetails: async (_, { id }) => {
      const response = await (
        await fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&language=ko`
        )
      ).json();
      return response;
    },
  },
};

export default resolvers;
