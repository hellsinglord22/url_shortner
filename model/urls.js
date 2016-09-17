// ^)^ some constants for my server //
const mongo   = require('mongodb').MongoClient;
const CONNECTION_STRING = 'mongodb://localhost:27017/url';
const COLLECTION_NAME = 'urls';

/**
 * This function simply insert a new url and it's short url into the database
 * and it return nothing after this
 */
exports.insert = function (urlObject, callback) {
    mongo.connect(CONNECTION_STRING, function(error, databaseInstance) {

        // send error to the first argument if occure
        if (error) {
            callback(error, null);
        }

        // insert data into the database
        databaseInstance.collection(COLLECTION_NAME).insert(urlObject, function(error, data) {
            if (error) {
                callback(error, null);
                databaseInstance().close();
            }

            callback(null, data);
        });

        // close database
        databaseInstance.close();
    });
}



/**
 * Search for a short_url and get the real one to redirect
 * to it
 * @param  {[type]}   shortUrl      [short_url we going to use to find the original one]
 * @param  {Function} callback [function to be excuted after the search is complete, it also
 *                                  have the result of the search ]
 */
exports.find = function (shortUrl, callback) {
    mongo.connect(CONNECTION_STRING, function(error, databaseInstance) {
        if (error) {
            callback(error);
        }

        databaseInstance.collection(COLLECTION_NAME).findOne({shortUrl: shortUrl}, function(error, doc) {
            if (error) {
                callback(error);
            }

            callback(null, doc);
        });

        databaseInstance.close();

    });
}
