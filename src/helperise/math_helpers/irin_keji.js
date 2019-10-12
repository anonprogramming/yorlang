/** Takes a number
 * Returns square root of number
 *
 * @returns {number}
 */
function irinKeji (args) {
    if (Array.isArray(args)) {
        let [ number, ] = args;

        if (!isNaN(number)) {
            return Math.sqrt(number);
        }
        throw new Error("Param must be a number");
    }
    throw new Error("Yorlang system error");
}

module.exports = irinKeji;
