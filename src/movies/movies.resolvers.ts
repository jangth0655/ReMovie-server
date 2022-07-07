const resolvers = {
  MovieDetail: {
    isLiked: ({ id }) => {
      return false;
    },
  },
};
export default resolvers;
