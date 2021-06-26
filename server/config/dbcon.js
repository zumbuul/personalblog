const connectDB = () => {
  const mongoose = require("mongoose");
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("error", err => {
    console.log(err);
  });
};
module.exports = connectDB;
