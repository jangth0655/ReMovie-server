const resolvers = {
  Query: {
    upcomingMovies: async () => {
      console.log(process.env.API_KEY);
      const response = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=ko`
        )
      ).json();
      return response;
    },
  },
};

export default resolvers;
