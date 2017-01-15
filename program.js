/**
 * Created by williammuli on 13/01/2017.
 */

var readFile = require('./readFile');
var parseData = require('./parseData');
var compareSpread = require('./spread');

function main() {
    var filePath = 'weather.dat';
    var encoding = 'utf-8';

    //Read file
    readFile(filePath, encoding, function (err, data) {
        if (err) {
            console.error('An error occurred ' + err.message);
        }
        //Parse the data
        var parsedData = parseData(data);
        //compare spread
        var month_max_spread = compareSpread(parsedData);
        console.log(month_max_spread);
    });
}

main();