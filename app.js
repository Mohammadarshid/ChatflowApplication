const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectdb = require("./config/db");
//  rest object

const app = express();
//  middlewares

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
dotenv.config();


// db connection
connectdb();

// route

app.use("/api/v1/test",require("./Routes/Userroutes"))



// route
app.get("/test", (req, res) => {
  return res.status(200).send("<h1> welcome to the chat Flow application</h1>");
});

const port = 8080;

// listen  to the port

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bgCyan.white);
});
