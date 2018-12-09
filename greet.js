console.log('Dur to require(), this appears automatically in app.js');

var greet = function() {
    console.log("hello");
};

module.exports.greet = greet;

