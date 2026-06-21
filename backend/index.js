require("dotenv").config();
const express = require("express");
const db = require("./models");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize
  .authenticate()
  .then(() => {
    console.log("✓ Koneksi ke database MySQL berhasil!");
  })
  .catch((err) => {
    console.error("✗ Koneksi ke database gagal:", err.message);
    process.exit(1);
  });

const trainerRoute = require("./routes/trainerRoute");
app.use("/api/trainer", trainerRoute);

app.get("/", (req, res) => {
  res.json({
    message: "Server berjalan dengan baik",
    status: "active",
    timestamp: new Date(),
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: err.message,
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`);
  console.log(`✓ API available at http://localhost:${PORT}`);
});
