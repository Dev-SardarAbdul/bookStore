const express = require("express");
const booksRouter = require("./routes/booksRoutes");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/books", booksRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Data base connected");

    app.listen(PORT, () => {
      console.log(`Server listenting on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
