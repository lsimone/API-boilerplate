const createResolvers = (models) => ({
  Query: {
    getUserById(root, { id }) {
      console.log('dentro', id)
      return models.User.findById(id).then((response) => response);
    },

    getUserByEmail(root, { email }) {
      return models.User.findOne({ email }).then((response) => response);
    },
  },
  Mutation: {
    createUser(root, args) {
      const user = new models.User(args);
      return user.save().then((response) => response);
    },
  },
});

export default createResolvers