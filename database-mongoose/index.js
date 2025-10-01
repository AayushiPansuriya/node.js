const express = require("express");
const mongoose = require("mongoose");

const studentRoute = require("./routes/studentRoute");
const app = express();
const PORT = 80;
app.use(express.json());

mongoose.connect(
  "mongodb+srv://aayushipansuriya87_db_user:123@aayushi.tot69gu.mongodb.net/song",
);

app.use("/song", studentRoute);

app.listen(PORT, () => {
  console.log("server is running : 127.0.0.1" + PORT);
});