const constants = require("../../constants.js");
const BaseNode = require("../basenode.js");
const bracketExpressionNl = require("../nodeLiterals/bracketexpressionnl.js");

class KwNodeYi extends BaseNode {

    constructor() {
        super()
        if (!(bracketExpressionNl instanceof BaseNode)) {
            throw new Error("Dependency brackExpressionNl must be of type BaseNode");
        } 
    }

    getNode() {
        const kwNodeEjo = new KwNodeEjo();
        let node = {
            operation: constants.KW.YI,
            yivalue: null,
            yibody: [],
            padasi: []
        };

        this.pushToBlockTypeStack(constants.KW.YI);
        this.skipKeyword(constants.KW.YI);
        node.yivalue = bracketExpressionNl.getNode.call(this);
        this.skipPunctuation(constants.SYM.L_PAREN);

        while (this.lexer.isNotEndOfFile() && this.lexer.peek().value == constants.KW.EJO) {
            node.yibody.push(kwNodeEjo.getNode.call(this));
        }

        node = this.getYiNodeWithPadasi(node);
        this.skipPunctuation(constants.SYM.R_PAREN);
        this.popBlockTypeStack();

        return node;
    }

    getYiNodeWithPadasi(node) {
        if (this.isKeyword(constants.KW.PADASI)) {
            this.skipKeyword(constants.KW.PADASI);
            this.skipPunctuation(constants.SYM.COLON);

            while (this.lexer.isNotEndOfFile() && this.lexer.peek().value !== constants.SYM.R_PAREN) {
                node.padasi.push(this.parseAst());
            }
        }

        return node;
    }
}

class KwNodeEjo extends BaseNode {

    getNode() {
        const node = {
            operation: constants.KW.EJO,
            ejovalue: null,
            ejobody: []
        }

        this.skipKeyword(constants.KW.EJO);
        node.ejovalue = this.parseExpression();
        this.skipPunctuation(constants.SYM.COLON);

        const canParseEjoStatements = () =>  this.lexer.isNotEndOfFile() 
                                        && this.lexer.peek().value !== constants.KW.EJO 
                                        && this.lexer.peek().value !== constants.KW.PADASI  
                                        && this.lexer.peek().value !== constants.SYM.R_PAREN;    
        

        while (canParseEjoStatements()) {
            node.ejobody.push(this.parseAst());
        }

        return node;
    }
}

module.exports = new KwNodeYi();