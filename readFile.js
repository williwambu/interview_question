var fs = require('fs');

/**
 * Asynchronously reads the entire contents of a file
 * @param filePath The path to the file to be read
 * @param encoding Character encoding used in the file e.g ascii, utf-8 etc
 * @param callback Function called on read completion
 *        The callback is passed two arguments (err, data), where data is the contents of the file
 *        and err is an error.
 */
function readFile(filePath, encoding, callback) {
    fs.readFile(filePath, encoding, function (err, data) {
        if (err) {
            callback(err);
        }
        callback(null, data);
    });
}

module.exports = readFile;