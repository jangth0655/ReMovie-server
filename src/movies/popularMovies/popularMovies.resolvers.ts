const fetch = require("node-fetch");

const resolvers = {
  Query: {
    popularMovies: async () => {
      try {
        const response = await (
          await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=ko`
          )
        ).json();
        return response;
      } catch (e) {
        console.log(e);
        return;
      }
    },
  },
};

export default resolvers;
