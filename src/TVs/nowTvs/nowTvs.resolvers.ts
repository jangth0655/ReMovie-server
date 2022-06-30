const resolvers = {
  Query: {
    nowTvs: async () => {
      try {
        const response = await (
          await fetch(
            `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&language=ko`
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
