const resolvers = {
  Query: {
    nowTvs: async () => {
      const response = await (
        await fetch(
          `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&language=ko`
        )
      ).json();
      return response;
    },
  },
};

export default resolvers;
