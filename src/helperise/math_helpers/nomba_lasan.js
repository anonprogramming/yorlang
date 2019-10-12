/** Takes any number
 * Returns absolute value of number
 *
 * @returns {number}
 */
function nombaLasan (args) {
    if (Array.isArray(args)) {
        let [ number, ] = args;

        if (!isNaN(number)) {
            return Math.abs(number);
        }
        throw new Error("Param must be a number");
    }
    throw new Error("Yorlang system error");
}

module.exports = nombaLasan;
