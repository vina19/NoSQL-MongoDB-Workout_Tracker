const path = require("path");

module.exports = function(app) {

    // HTML ROUTES
    // Send the user to the index page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    

};