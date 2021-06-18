module.exports = {
  populate: async (ctx) => {
    console.log("starting to populate");

    const options = {
      sort: "popularity",
      page: "1",
      ...ctx.query,
    };

    await strapi.services.game.populate(options);

    console.log("Finish populating!");
    ctx.send("Finish populating!");
  },
};
