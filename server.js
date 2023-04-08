const mongoose = require("mongoose");
const password = "4XViTn9csmAdhbvo";

const DB_HOST =
  "mongodb+srv://Molni:4XViTn9csmAdhbvo@molni.kjubpv6.mongodb.net/contacts_reader?retryWrites=true&w=majority";

const app = require("./app");

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch((error) => console.log(error.message));
