const cite = require('citation')

exports.CitationFinder = function(event, context, callback) {
    let input = event.text;
    let results = cite.find(input, { links: true });

    
    callback(null, {
        statusCode: '200',
        body: results,
        headers: { 
            'Content-Type': 'application/json', 
        }
    })
    
}
