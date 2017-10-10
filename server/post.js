const contentful = require('contentful');

const SPACE_ID = 'n0nk9z80ij31';
const ACCESS_TOKEN = '3ae2dba116eaf174d4a24b9b0cdc75beb452ac58c46bdef2673d36b2c484d316';


exports.getPost = function(entryID) {
    const params = {
        accessToken: ACCESS_TOKEN,
        space: SPACE_ID
    };
    const client = contentful.createClient(params);
    return client.getEntries({'sys.id': entryID})
        .then((response) => {
            return response.items[0].fields;
        });
};
