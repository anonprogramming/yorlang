const irinKeji = require("../../../helperise/math_helpers/irin_keji.js");

describe("irinKeji Test Suite", () => {
    test("It should return square root of number", ()=> {
        const firstNumber = 25;
        const secondNumber = 16;
        expect(irinKeji([firstNumber])).toBe(5);
        expect(irinKeji([secondNumber])).toBe(4);
    });

    test("It should fail because helper function takes only numbers", ()=> {
        expect(()=> irinKeji(["string"])).toThrow("Param must be a number");
    });

    test("It should fail because helper function irinKeji expects array as argument", () => {
        expect(() => irinKeji(1)).toThrow("Yorlang system error");
    });

});
