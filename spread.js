/**
 * Helper method for calculating the spread in a day, spread = max - min
 * @param min Minimum temperature of a day
 * @param max Maximum temperature of a day
 * @returns {number} spread of temperature
 */
function calculateSpread(min, max) {
    //check if parameters are numbers
    if (isNaN(min) || isNaN(max)) {
        throw new TypeError("Minimum and maximum temperature must be numbers");
    }
    return max - min;
}

/**
 * @param weather_data Array containing arrays of weather data
 * @returns {string} A string concatenation of the month with maximum spread, maximum spread and space in between e.g 2 16
 */
function compareSpread(weather_data) {
    var current_month = 0;
    var current_spread = 0;

    //Loop starts at index 1 to exclude header row
    var len= weather_data.length;
    for (var i = 1; i < len - 2; i++) {
        var daily_data = weather_data[i];
        var month = daily_data[0];
        var max = parseInt(daily_data[1]);
        var min = parseInt(daily_data[2]);

        try {
            var spread = calculateSpread(min, max);
            if (spread > current_spread) {
                current_spread = spread;
                current_month = month;
            }
            console.log(spread);
        }
        catch (e) {
            console.error(e.message);
        }
    }

    return current_month + ' ' + current_spread;
}

module.exports = compareSpread;