const nombaLasan = require("../../../helperise/math_helpers/nomba_lasan.js");

describe("nombaLasan Test Suite", () => {
    test("It should return absolute value of number", ()=> {
        const number = -2;
        expect(nombaLasan([number])).toBe(2);
    });

    test("It should fail because helper function takes only numbers", ()=> {
        expect(()=> nombaLasan(["string"])).toThrow("Param must be a number");
    });

    test("It should fail because helper function nombaLasan expects array as argument", () => {
        expect(() => nombaLasan(1)).toThrow("Yorlang system error");
    });

});
