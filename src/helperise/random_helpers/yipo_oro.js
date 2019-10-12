/**
 * Returns a random number between two values (0 -> 1 by default)
 * - If only one argument is specified, that will become the maximum range, with 0 as the minimum.
 * - If two arguments are specified, the first will be the minimum, and the second will be the maximum.
 *
 * @returns {string}
 */
function yipoOro (args) {
    if (Array.isArray(args)) {
        const [ length, ] = args;
        if (!isNaN(length)) {
            let result = "";
            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        throw new Error("Length must be a number");
    }
    throw new Error("Yorlang system error");
}

module.exports = yipoOro;
