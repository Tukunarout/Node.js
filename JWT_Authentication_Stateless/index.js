const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const { connectionToMongoDB } = require("./connection");
const URL = require("./models/url");
const {restrictToLoggedinUserOnly,checkAuth} = require("./middlewares/auth")

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require ("./routes/users")

const app = express();
const PORT = 8000;

//connection

connectionToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected successfully")
);

//ejs view engine set
app.set("view engine", "ejs");
// all the ejs file are stored in views folder
app.set("views", path.resolve("./views"));

//to parse the json file
app.use(express.json());
//to parse the form data from ejs
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/url",restrictToLoggedinUserOnly, urlRoute);
app.use("/user",userRoute);
app.use("/", checkAuth, staticRoute);


app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log(`Servre listen at port: ${PORT}`);
});
