require("dotenv").config();

const express = require("express");

const workoutRoutes = require("./routes/workouts");

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server started on port 3000");
});