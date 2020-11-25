// required packages
const express =  require(express);

// Sets up Express app
const app = express();
const PORT = process.env.PORT || 8080;

// routes

// Starts the server to begin listening
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
});