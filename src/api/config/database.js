console.log('DATABASE_URL==>>>', process.env.DATABASE_URL);
module.exports = {
  dialect: "postgres",
  "url": process.env.DATABASE_URL,
  //host: "localhost",
  //username: "postgres",
  //password: "docker",
  //database: "webproj2",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
