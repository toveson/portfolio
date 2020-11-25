//required packages
const path = require('path');

module.exports = function (routes) {
    // index route
    app.get('/index',
        (req, res) => {
            res.render('index.html', {
                title: 'Index'
            });
        });
    // index contact
    app.get('/contact',
        (req, res) => {
            res.render('contact.html', {
                title: 'Contact'
            });
        });
    // index portfolio
    app.get('/portfolio',
        (req, res) => {
            res.render('contact.html', {
                title: 'Contact'
            });
        });
};