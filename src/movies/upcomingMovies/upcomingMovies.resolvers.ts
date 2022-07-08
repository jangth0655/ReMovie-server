const resolvers = {
  Query: {
    upcomingMovies: async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=ko`
        );
        console.log(response);
        return await response.json();
      } catch (e) {
        console.log(e);
        return;
      }
    },
  },
};

export default resolvers;
