const path = require("path");

module.exports = function(app) {

    // HTML ROUTES
    // Send the user to the main page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Send the user to the exercise page where the user can submit their workout for the day
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // Send the user to the app dashboard
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};