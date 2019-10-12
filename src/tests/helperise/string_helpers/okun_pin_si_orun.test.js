const pinOro = require("../../../helperise/string_helpers/okun_pin_si_orun.js");

describe("pinOro Test Suite", () => {
    test("It should return array of a split string", ()=> {
        const string = 'Zacchaeus';
        expect(pinOro([string])).toEqual(['Z', 'a', 'c', 'c', 'h', 'a', 'e', 'u', 's']);
    });

    test("It should fail because helper function takes only strings", ()=> {
        expect(()=> pinOro([34])).toThrow("Yorlang system error: arguments should be strings");
    });

    test("It should fail because helper function pinOro expects array as argument", () => {
        expect(() => pinOro('Zacchaeus')).toThrow("Yorlang system error");
    });

});
