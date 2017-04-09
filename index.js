const cite = require('citation')

exports.CitationFinder = function(event, context, callback) {
    let input = event.text;
    results = cite.find(input, { links: true });
    callback(null, results);
}