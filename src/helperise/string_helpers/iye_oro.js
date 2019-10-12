/**
 * Returns number of words in a string
 *
 * @returns {number}
 */
function iyeOro (args) {
    if (Array.isArray(args)) {
        let [ string, ] = args;

        if (typeof string === "string") {
            let split = string.split(" ");
            return split.length;
        }
        throw new Error("Param must be a string");
    }
    throw new Error("Yorlang system error");
}

module.exports = iyeOro;
