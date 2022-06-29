const resolvers = {
  Query: {
    popularTVs: async () => {
      const response = await (
        await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=ko`
        )
      ).json();
      return response;
    },
  },
};

export default resolvers;
