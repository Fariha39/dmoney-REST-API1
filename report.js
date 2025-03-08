const newman = require('newman');
//require('dotenv').config();
 
newman.run({
    //collection:`https://api.postman.com/collections/42718366-448fa78e-2c38-43c1-991c-864fa6ed4b39?access_key=${process.env.access_key}`,
    collection:require('./collection/dmoney-user-api-collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
