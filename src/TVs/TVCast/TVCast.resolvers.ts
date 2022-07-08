const fetch = require("node-fetch");

const resolver = {
  Query: {
    TVCast: async (_, { id }) => {
      try {
        const response = await (
          await fetch(
            `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.API_KEY}&language=ko`
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

export default resolver;
