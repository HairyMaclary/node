module.exports = function(app) {
    
    app.get('/api/person/:id', function(req, res) {
        // get some data from the database
        res.json({ firstName: 'John',  lastName: "Doe"});
    });
    
    app.post('/api/person', jsonParser, function(req, res, next) {
        // save to the database
    });
    
    app.delete('/api/person/:id', function(req, res) {
        // delete a person from the database
    });
}
