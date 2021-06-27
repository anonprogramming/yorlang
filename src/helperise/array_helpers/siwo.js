// const msg = require("../../feedbackMessages");

// Check if an array contains an element
function siwo (arr, elem) {
    if (Array.isArray(arr) && typeof (elem) !== "undefined") {
        return arr.includes(elem);
    } else {
        throw new Error(`Expected ${typeof ([])} recieved ${typeof (arr)}`);
    }
}

module.exports = siwo;
