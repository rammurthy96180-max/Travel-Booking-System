const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/traveldb")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// Routes
const travelRoutes = require("./routes/travelroutes");

app.use("/api/travels", travelRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Travel Management System");
});

// Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});