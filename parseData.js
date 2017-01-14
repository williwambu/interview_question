/**
 * Manipulates data to obtain values
 * @param data String containing the values to be parsed
 * @returns {Array} An array of arrays of the parsed data
 */
function parseData(data) {
    //Split the string using newline ter
    var rows = data.split('\n');
    //Remove the empty line separating the headers from the values
    rows.splice(1, 1);

    return rows.map(function (row, index) {
        //trim the spaces at the beginning and end of string
        rows[index] = rows[index].trim();

        //Replace multiple spaces with one space
        //then split the string using space delimiter
        return rows[index] = rows[index].replace(/\s+/g, ' ').split(' ');
    });
}

module.exports = parseData;