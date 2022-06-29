const resolvers = {
  Query: {
    popularMovies: async () => {
      const response = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=ko`
        )
      ).json();
      return response;
    },
  },
};

export default resolvers;
