// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for app from public directory
app.use(express.static("public"));

// Import routes and give the server access to them.
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// Start the server
app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});