const cite = require('citation')

exports.CitationFinder = function(event, context, callback) {
    let input = event.text;
    let results = cite.find(input, { links: true, excerpt: 25 });
    context.succeed(results);
}
