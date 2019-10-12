const pipoto = require("../../../helperise/string_helpers/pipoto.js");

describe("pipoto Test Suite", () => {
    test("It should return length of a string", ()=> {
        const string = 'Zacchaeus';
        expect(pipoto([string])).toBe(9);
    });

    test("It should fail because helper function takes only string", ()=> {
        expect(()=> pipoto([34])).toThrow("Argument should be 1 string");
    });

    test("It should fail because helper function pipoto expects array as argument", () => {
        expect(() => pipoto('Zacchaeus')).toThrow("Yorlang system error");
    });

});
