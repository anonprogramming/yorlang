/**
 * receives a string and returns an array using the optional limiter
 * @returns array
 */
function pinOro (args) {
    if (Array.isArray(args)) {
        const [ string, limiter, ] = args;
        if ((typeof string === "string") && ((limiter && typeof limiter === "string") || !limiter)) {
            return string.split(limiter || "");
        }
        throw new Error("Yorlang system error: arguments should be strings");
    }
    throw new Error("Yorlang system error");
}

module.exports = pinOro;
