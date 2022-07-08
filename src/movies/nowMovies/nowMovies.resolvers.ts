import fetch from "node-fetch";

const resolvers = {
  Query: {
    nowMovies: async () => {
      try {
        const response = await (
          await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=ko`
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
