const MainInterpreter = require("../../interpreters/maininterpreter.js");
const Environment = require("../../environment.js");
const Parser = require("../../parsers/parser.js");
const Lexer = require("../../lexer.js");
const InputStream = require("../../inputstream.js");
const constants = require("../../constants.js");

describe("INodeFun test suite", () => {
    let mainInterpreter, parser;

    beforeEach(() => {
        parser = new Parser(new Lexer(new InputStream()));
        mainInterpreter = new MainInterpreter(new Environment());
        global.console.log = jest.fn();
    });

    test("it should interprete a valid yi node", () => {
        parser.lexer.inputStream.code = `
        ${constants.KW.TI} oruko = "femi";

        ${constants.KW.YI} (oruko) {
            ${constants.KW.EJO} "anu":
                ${constants.KW.SOPE} "it is anu";
            ${constants.KW.EJO} "femi":
                ${constants.KW.SOPE} "it is femi";
        }`;

        const program = parser.parseProgram();
        mainInterpreter.astList = program.astList;
        mainInterpreter.evaluateAst();
        expect(global.console.log).toHaveBeenCalledWith("it is femi");
    });

    test("it should interprete a nested yi node", () => {
        parser.lexer.inputStream.code = `
        ${constants.KW.TI} oruko = 1;

        ${constants.KW.YI} (oruko) {
            ${constants.KW.EJO} 1:
                ${constants.KW.YI} (1+2) {
                    ${constants.KW.EJO} 1:
                        ${constants.KW.SOPE} "it is anu";
                    ${constants.KW.EJO} 3:
                        ${constants.KW.SOPE} "it is three";
                }            
            ${constants.KW.EJO} 2:
                ${constants.KW.SOPE} "it is femi";
        }`;

        const program = parser.parseProgram();
        mainInterpreter.astList = program.astList;
        mainInterpreter.evaluateAst();
        expect(global.console.log).toHaveBeenCalledWith("it is three");
    });

    test("it should interprete yi node with padasi", () => {
        parser.lexer.inputStream.code = `
        ${constants.KW.TI} oruko = "funmi";

        ${constants.KW.YI} (oruko) {
            ${constants.KW.EJO} "anu":
                ${constants.KW.SOPE} "it is anu";
            ${constants.KW.EJO} "femi":
                ${constants.KW.SOPE} "it is femi";
            ${constants.KW.PADASI}: 
                ${constants.KW.SOPE} "i don't know";
                ${constants.KW.SOPE} "Yoruba - mi o mo";
        }`;

        const program = parser.parseProgram();
        mainInterpreter.astList = program.astList;
        mainInterpreter.evaluateAst();
        expect(global.console.log).toHaveBeenCalledWith("i don't know");
        expect(global.console.log).toHaveBeenCalledWith("Yoruba - mi o mo");
    });

});