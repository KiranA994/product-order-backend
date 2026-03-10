const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/router");
const productRoutes = require("./routes/productRouter");
const orderRoutes = require("./routes/orderRouter");

require("./db/connection");
require("./db/mongoosedb");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes);

app.use("/api", orderRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
