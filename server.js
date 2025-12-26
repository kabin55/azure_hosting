const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, ".env") });
// app.use(express.static(path.join(__dirname, "../client/dist")));

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));


  const clientPath = path.join(__dirname, 'client' ,'dist');

  app.use(express.static(clientPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(clientPath, "index.html"));
  });

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
