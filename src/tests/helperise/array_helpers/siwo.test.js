const siwo = require("../../../helperise/array_helpers/siwo.js");

describe("Siwo Test suite", () => {
    test("It should return true", () => {
        const array = [1, 2, 3, ];
        expect(siwo(array, 2)).toBe(true);
    });

    test("It should fail because siwo expects an array and elem as arguments", () => {
        const array = 2;
        expect(() => siwo(array)).toThrow();
    });
});
