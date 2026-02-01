import express from "express";
import db from "./db.js";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/applications", async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM applications ORDER BY id ASC");
    res.json(rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/applications", async (req, res) => {
  const { company_name, position, status } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO applications (company_name, position, status) VALUES ($1, $2, $3) RETURNING *",
      [company_name, position, status]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to add application" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});