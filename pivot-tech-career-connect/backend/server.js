const express = require("express");
const cors = require("cors");
require("dotenv").config();

const jobsRoutes = require("./routes/jobs");
const apprenticeshipsRoutes = require("./routes/apprenticeships");
const internshipsRoutes = require("./routes/internships");
const usersRoutes = require("./routes/users");
const researchRoutes = require("./routes/research");
const supportRoutes = require("./routes/support");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Pivot Tech Career Connect API is running",
  });
});

app.use("/api/jobs", jobsRoutes);
app.use("/api/apprenticeships", apprenticeshipsRoutes);
app.use("/api/internships", internshipsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/research", researchRoutes);
app.use("/api/support", supportRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});