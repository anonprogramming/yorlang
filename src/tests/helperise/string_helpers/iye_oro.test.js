const iyeOro = require("../../../helperise/string_helpers/iye_oro.js");

describe("iyeOro Test Suite", () => {
    test("It should return number of words in a string", ()=> {
        const sentence = 'Hello World';
        expect(iyeOro([sentence])).toBe(2);
    });

    test("It should fail because helper function takes only string", ()=> {
        expect(()=> iyeOro([34])).toThrow("Param must be a string");
    });

    test("It should fail because helper function iyeOro expects array as argument", () => {
        expect(() => iyeOro('Zacchaeus')).toThrow("Yorlang system error");
    });

});
