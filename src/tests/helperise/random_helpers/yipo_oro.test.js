const yipoOro = require("../../../helperise/random_helpers/yipo_oro.js");

describe("yipoOro Test Suite", () => {
    test("It should return random string of specified length", ()=> {
        const length = 10;
        expect(yipoOro([length]).length).toBe(length);
    });

    test("It should fail because helper function takes only numbers", ()=> {
        expect(()=> yipoOro(["string"])).toThrow("Length must be a number");
    });

    test("It should fail because helper function yipoOro expects array as argument", () => {
        expect(() => yipoOro(1)).toThrow("Yorlang system error");
    });

});
