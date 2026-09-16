const fs = require('fs');

const getIndex = (request, response,client) => {
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write(fs.readFileSync(`${__dirname}/../client/${client}.html`));
    response.end();
};

module.exports.getIndex = getIndex;
