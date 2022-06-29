const resolvers = {
  Query: {
    actorDetail: async (_, { id }) => {
      const response = await (
        await fetch(
          `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.API_KEY}&language=ko`
        )
      ).json();
      return response;
    },
  },
};

export default resolvers;
