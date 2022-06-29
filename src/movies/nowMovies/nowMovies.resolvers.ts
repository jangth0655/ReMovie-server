const resolvers = {
  Query: {
    nowMovies: async () => {
      const response = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=ko`
        )
      ).json();
      return response;
    },
  },
};

export default resolvers;
