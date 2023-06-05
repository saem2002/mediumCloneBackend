const mongoose = require("mongoose");

const url =
  "mongodb+srv://sa873463:KvzOwTohSZG9QkyD@cluster0.hjjpb4w.mongodb.net/";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
