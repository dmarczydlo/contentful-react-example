const contentful = require('contentful');

const config = require('../config.json');

exports.getPosts = function() {
    const params = {
        accessToken: config.ACCESS_TOKEN,
        space: config.SPACE_ID
    };

    const client = contentful.createClient(params);
    return client.getEntries()
        .then((response) => {
            return response.items.map((elem) =>  {
                return {data: elem.fields, id: elem.sys.id};
            });
        });
};
