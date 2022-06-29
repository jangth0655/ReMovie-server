const resolvers = {
  Query: {
    multiSearch: async (_, { keyword }) => {
      const response = await (
        await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&language=ko&query=${keyword}`
        )
      ).json();
      return response;
    },
  },
};

export default resolvers;
