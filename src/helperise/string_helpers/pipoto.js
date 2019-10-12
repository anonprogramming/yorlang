/**
 * @returns number
 * @param args
 */
function pipoto (args) {
    if (Array.isArray(args)) {
        const [ string, ] = args;
        if (typeof string === "string") {
            return string.length;
        }
        throw new Error("Argument should be 1 string");
    }
    throw new Error("Yorlang system error");
}

module.exports = pipoto;
