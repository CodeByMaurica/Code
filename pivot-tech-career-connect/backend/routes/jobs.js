const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const jobsFilePath = path.join(__dirname, "../data/jobs.json");

function readJobs() {
  const data = fs.readFileSync(jobsFilePath, "utf8");
  return JSON.parse(data);
}

function saveJobs(jobs) {
  fs.writeFileSync(jobsFilePath, JSON.stringify(jobs, null, 2));
}

// GET all jobs
router.get("/", (req, res) => {
  const jobs = readJobs();
  res.json(jobs);
});

// POST new job
router.post("/", (req, res) => {
  const jobs = readJobs();

  const newJob = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date().toISOString(),
  };

  jobs.push(newJob);
  saveJobs(jobs);

  res.status(201).json(newJob);
});

// DELETE job
router.delete("/:id", (req, res) => {
  const jobs = readJobs();
  const filteredJobs = jobs.filter((job) => job.id !== req.params.id);

  saveJobs(filteredJobs);

  res.json({
    message: "Job deleted successfully",
  });
});

module.exports = router;