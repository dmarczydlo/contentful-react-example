const contentful = require('contentful');
const config = require('../config.json');

exports.getPost = function(entryID) {
    const params = {
        accessToken: config.ACCESS_TOKEN,
        space: config.SPACE_ID
    };
    const client = contentful.createClient(params);
    return client.getEntries({'sys.id': entryID})
        .then((response) => {
            return response.items[0].fields;
        });
};
