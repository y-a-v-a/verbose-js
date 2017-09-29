// Generated from Verbose.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var VerboseListener = require('./VerboseListener').VerboseListener;
var grammarFileName = "Verbose.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003%\u00ab\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0003\u0002\u0006\u0002:\n\u0002\r\u0002",
    "\u000e\u0002;\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003L\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013s\n\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014z",
    "\n\u0014\f\u0014\u000e\u0014}\u000b\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0084\n\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016",
    "\u008c\n\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0095\n\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019",
    "\u009d\n\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u00a7\n\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0002\u0003&\u001d\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.0246\u0002\u0005\u0003\u0002\u0016\u0018\u0003\u0002\u001c\u001e",
    "\u0003\u0002\"$\u0002\u00b0\u00029\u0003\u0002\u0002\u0002\u0004K\u0003",
    "\u0002\u0002\u0002\u0006M\u0003\u0002\u0002\u0002\bQ\u0003\u0002\u0002",
    "\u0002\nS\u0003\u0002\u0002\u0002\fU\u0003\u0002\u0002\u0002\u000eW",
    "\u0003\u0002\u0002\u0002\u0010Y\u0003\u0002\u0002\u0002\u0012[\u0003",
    "\u0002\u0002\u0002\u0014]\u0003\u0002\u0002\u0002\u0016_\u0003\u0002",
    "\u0002\u0002\u0018a\u0003\u0002\u0002\u0002\u001ac\u0003\u0002\u0002",
    "\u0002\u001ce\u0003\u0002\u0002\u0002\u001eg\u0003\u0002\u0002\u0002",
    " i\u0003\u0002\u0002\u0002\"k\u0003\u0002\u0002\u0002$r\u0003\u0002",
    "\u0002\u0002&t\u0003\u0002\u0002\u0002(\u0083\u0003\u0002\u0002\u0002",
    "*\u008b\u0003\u0002\u0002\u0002,\u008d\u0003\u0002\u0002\u0002.\u0094",
    "\u0003\u0002\u0002\u00020\u009c\u0003\u0002\u0002\u00022\u009e\u0003",
    "\u0002\u0002\u00024\u00a6\u0003\u0002\u0002\u00026\u00a8\u0003\u0002",
    "\u0002\u00028:\u0005\u0004\u0003\u000298\u0003\u0002\u0002\u0002:;\u0003",
    "\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002",
    "<\u0003\u0003\u0002\u0002\u0002=L\u0005\u0006\u0004\u0002>L\u0005\b",
    "\u0005\u0002?L\u0005\n\u0006\u0002@L\u0005\f\u0007\u0002AL\u0005\u000e",
    "\b\u0002BL\u0005\u0010\t\u0002CL\u0005\u0012\n\u0002DL\u0005\u0014\u000b",
    "\u0002EL\u0005\u0016\f\u0002FL\u0005\u0018\r\u0002GL\u0005\u001a\u000e",
    "\u0002HL\u0005\u001c\u000f\u0002IL\u0005\u001e\u0010\u0002JL\u0005 ",
    "\u0011\u0002K=\u0003\u0002\u0002\u0002K>\u0003\u0002\u0002\u0002K?\u0003",
    "\u0002\u0002\u0002K@\u0003\u0002\u0002\u0002KA\u0003\u0002\u0002\u0002",
    "KB\u0003\u0002\u0002\u0002KC\u0003\u0002\u0002\u0002KD\u0003\u0002\u0002",
    "\u0002KE\u0003\u0002\u0002\u0002KF\u0003\u0002\u0002\u0002KG\u0003\u0002",
    "\u0002\u0002KH\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002KJ\u0003",
    "\u0002\u0002\u0002L\u0005\u0003\u0002\u0002\u0002MN\u0007\u0003\u0002",
    "\u0002NO\u0005\"\u0012\u0002OP\u0007\u0004\u0002\u0002P\u0007\u0003",
    "\u0002\u0002\u0002QR\u0007\u0005\u0002\u0002R\t\u0003\u0002\u0002\u0002",
    "ST\u0007\u0006\u0002\u0002T\u000b\u0003\u0002\u0002\u0002UV\u0007\u0007",
    "\u0002\u0002V\r\u0003\u0002\u0002\u0002WX\u0007\b\u0002\u0002X\u000f",
    "\u0003\u0002\u0002\u0002YZ\u0007\t\u0002\u0002Z\u0011\u0003\u0002\u0002",
    "\u0002[\\\u0007\n\u0002\u0002\\\u0013\u0003\u0002\u0002\u0002]^\u0007",
    "\u000b\u0002\u0002^\u0015\u0003\u0002\u0002\u0002_`\u0007\f\u0002\u0002",
    "`\u0017\u0003\u0002\u0002\u0002ab\u0007\r\u0002\u0002b\u0019\u0003\u0002",
    "\u0002\u0002cd\u0007\u000e\u0002\u0002d\u001b\u0003\u0002\u0002\u0002",
    "ef\u0007\u000f\u0002\u0002f\u001d\u0003\u0002\u0002\u0002gh\u0007\u0010",
    "\u0002\u0002h\u001f\u0003\u0002\u0002\u0002ij\u0007\u0011\u0002\u0002",
    "j!\u0003\u0002\u0002\u0002kl\u0005$\u0013\u0002l#\u0003\u0002\u0002",
    "\u0002mn\u0005&\u0014\u0002no\u0005(\u0015\u0002os\u0003\u0002\u0002",
    "\u0002ps\u0005&\u0014\u0002qs\u0005(\u0015\u0002rm\u0003\u0002\u0002",
    "\u0002rp\u0003\u0002\u0002\u0002rq\u0003\u0002\u0002\u0002s%\u0003\u0002",
    "\u0002\u0002tu\b\u0014\u0001\u0002uv\u0007\u0012\u0002\u0002v{\u0003",
    "\u0002\u0002\u0002wx\f\u0004\u0002\u0002xz\u0007\u0012\u0002\u0002y",
    "w\u0003\u0002\u0002\u0002z}\u0003\u0002\u0002\u0002{y\u0003\u0002\u0002",
    "\u0002{|\u0003\u0002\u0002\u0002|\'\u0003\u0002\u0002\u0002}{\u0003",
    "\u0002\u0002\u0002~\u007f\u0005*\u0016\u0002\u007f\u0080\u0005.\u0018",
    "\u0002\u0080\u0084\u0003\u0002\u0002\u0002\u0081\u0084\u0005*\u0016",
    "\u0002\u0082\u0084\u0005.\u0018\u0002\u0083~\u0003\u0002\u0002\u0002",
    "\u0083\u0081\u0003\u0002\u0002\u0002\u0083\u0082\u0003\u0002\u0002\u0002",
    "\u0084)\u0003\u0002\u0002\u0002\u0085\u008c\u0005,\u0017\u0002\u0086",
    "\u008c\u0007\u0013\u0002\u0002\u0087\u008c\u0007\u0014\u0002\u0002\u0088",
    "\u0089\u0007\u0014\u0002\u0002\u0089\u008c\u0005,\u0017\u0002\u008a",
    "\u008c\u0007\u0015\u0002\u0002\u008b\u0085\u0003\u0002\u0002\u0002\u008b",
    "\u0086\u0003\u0002\u0002\u0002\u008b\u0087\u0003\u0002\u0002\u0002\u008b",
    "\u0088\u0003\u0002\u0002\u0002\u008b\u008a\u0003\u0002\u0002\u0002\u008c",
    "+\u0003\u0002\u0002\u0002\u008d\u008e\t\u0002\u0002\u0002\u008e-\u0003",
    "\u0002\u0002\u0002\u008f\u0090\u00050\u0019\u0002\u0090\u0091\u0005",
    "4\u001b\u0002\u0091\u0095\u0003\u0002\u0002\u0002\u0092\u0095\u0005",
    "0\u0019\u0002\u0093\u0095\u00054\u001b\u0002\u0094\u008f\u0003\u0002",
    "\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0094\u0093\u0003\u0002",
    "\u0002\u0002\u0095/\u0003\u0002\u0002\u0002\u0096\u009d\u00052\u001a",
    "\u0002\u0097\u009d\u0007\u0019\u0002\u0002\u0098\u009d\u0007\u001a\u0002",
    "\u0002\u0099\u009a\u0007\u001a\u0002\u0002\u009a\u009d\u00052\u001a",
    "\u0002\u009b\u009d\u0007\u001b\u0002\u0002\u009c\u0096\u0003\u0002\u0002",
    "\u0002\u009c\u0097\u0003\u0002\u0002\u0002\u009c\u0098\u0003\u0002\u0002",
    "\u0002\u009c\u0099\u0003\u0002\u0002\u0002\u009c\u009b\u0003\u0002\u0002",
    "\u0002\u009d1\u0003\u0002\u0002\u0002\u009e\u009f\t\u0003\u0002\u0002",
    "\u009f3\u0003\u0002\u0002\u0002\u00a0\u00a7\u00056\u001c\u0002\u00a1",
    "\u00a7\u0007\u001f\u0002\u0002\u00a2\u00a7\u0007 \u0002\u0002\u00a3",
    "\u00a4\u0007 \u0002\u0002\u00a4\u00a7\u00056\u001c\u0002\u00a5\u00a7",
    "\u0007!\u0002\u0002\u00a6\u00a0\u0003\u0002\u0002\u0002\u00a6\u00a1",
    "\u0003\u0002\u0002\u0002\u00a6\u00a2\u0003\u0002\u0002\u0002\u00a6\u00a3",
    "\u0003\u0002\u0002\u0002\u00a6\u00a5\u0003\u0002\u0002\u0002\u00a75",
    "\u0003\u0002\u0002\u0002\u00a8\u00a9\t\u0004\u0002\u0002\u00a97\u0003",
    "\u0002\u0002\u0002\u000b;Kr{\u0083\u008b\u0094\u009c\u00a6"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'PUT THE NUMBER'", "'ONTO THE TOP OF THE PROGRAM STACK'", 
                     "'REMOVE THE CURRENT ELEMENT OF THE PROGRAM STACK'", 
                     "'GET THE FIRST ELEMENT OF THE PROGRAM STACK AND DUPLICATE IT AND PUT THE RESULT ONTO THE TOP OF THE PROGRAM STACK'", 
                     "'MOVE THE FIRST ELEMENT OF THE PROGRAM STACK TO THE SECOND ELEMENT'S PLACE AND THE SECOND ELEMENT OF THE STACK TO THE FIRST ELEMENT'S PLACE'", 
                     "'ADD THE FIRST ELEMENT OF THE PROGRAM STACK AND THE SECOND ELEMENT OF THE PROGRAM STACK TOGETHER AND PUT THE RESULT ONTO THE TOP OF THE PROGRAM STACK'", 
                     "'SUBTRACT THE SECOND ELEMENT OF THE PROGRAM STACK FROM THE FIRST ELEMENT OF THE PROGRAM STACK AND PUT THE RESULT ONTO THE TOP OF THE PROGRAM STACK'", 
                     "'MULTIPLY THE FIRST ELEMENT OF THE PROGRAM STACK BY THE SECOND ELEMENT OF THE PROGRAM STACK AND PUT THE RESULT ONTO THE TOP OF THE PROGRAM STACK'", 
                     "'DIVIDE THE FIRST ELEMENT OF THE PROGRAM STACK BY THE SECOND ELEMENT OF THE PROGRAM STACK AND PUT THE RESULT ONTO THE TOP OF THE PROGRAM STACK'", 
                     "'DIVIDE THE FIRST ELEMENT OF THE PROGRAM STACK BY THE SECOND ELEMENT OF THE PROGRAM STACK AND GET THE REMAINDER AND PUT THE REMAINDER ONTO THE TOP OF THE PROGRAM STACK'", 
                     "'GET THE FIRST ELEMENT OF THE PROGRAM STACK AND THE SECOND ELEMENT OF THE PROGRAM STACK AND IF THE SECOND ELEMENT OF THE PROGRAM STACK IS NOT ZERO JUMP TO THE INSTRUCTION THAT IS THE CURRENT INSTRUCTION NUMBER AND THE FIRST ELEMENT ADDED TOGETHER'S RESULT'", 
                     "'GET A CHARACTER TYPED IN BY THE CURRENT PERSON USING THIS PROGRAM AND GET THE CHARACTER'S ASCII CODE AND PUT THE RESULT ONTO THE TOP OF THE PROGRAM STACK'", 
                     "'GET A ROMAN NUMERAL TYPED IN BY THE CURRENT PERSON USING THIS PROGRAM AND PUT IT ONTO THE TOP OF THE PROGRAM STACK'", 
                     "'GET THE TOP ELEMENT OF THE STACK AND CONVERT IT TO AN ASCII CHARACTER AND OUTPUT IT FOR THE CURRENT PERSON USING THIS PROGRAM TO SEE'", 
                     "'GET THE TOP ELEMENT OF THE STACK AND OUTPUT IT FOR THE CURRENT PERSON USING THIS PROGRAM TO SEE'", 
                     "'M'", "'CD'", "'D'", "'CM'", "'C'", "'CC'", "'CCC'", 
                     "'XL'", "'L'", "'XC'", "'X'", "'XX'", "'XXX'", "'IV'", 
                     "'V'", "'IX'", "'I'", "'II'", "'III'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, "M", "CD", 
                      "D", "CM", "C", "CC", "CCC", "XL", "L", "XC", "X", 
                      "XX", "XXX", "IV", "V", "IX", "I", "II", "III", "WS" ];

var ruleNames =  [ "program", "statement", "push", "pop", "duplicate", "swap", 
                   "add", "subtract", "multiply", "divide", "modulo", "jump", 
                   "inputLetter", "inputNumber", "outputLetter", "outputNumber", 
                   "nr", "thousands", "thous_part", "hundreds", "hun_part", 
                   "hun_rep", "tens", "tens_part", "tens_rep", "ones", "ones_rep" ];

function VerboseParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

VerboseParser.prototype = Object.create(antlr4.Parser.prototype);
VerboseParser.prototype.constructor = VerboseParser;

Object.defineProperty(VerboseParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

VerboseParser.EOF = antlr4.Token.EOF;
VerboseParser.T__0 = 1;
VerboseParser.T__1 = 2;
VerboseParser.T__2 = 3;
VerboseParser.T__3 = 4;
VerboseParser.T__4 = 5;
VerboseParser.T__5 = 6;
VerboseParser.T__6 = 7;
VerboseParser.T__7 = 8;
VerboseParser.T__8 = 9;
VerboseParser.T__9 = 10;
VerboseParser.T__10 = 11;
VerboseParser.T__11 = 12;
VerboseParser.T__12 = 13;
VerboseParser.T__13 = 14;
VerboseParser.T__14 = 15;
VerboseParser.M = 16;
VerboseParser.CD = 17;
VerboseParser.D = 18;
VerboseParser.CM = 19;
VerboseParser.C = 20;
VerboseParser.CC = 21;
VerboseParser.CCC = 22;
VerboseParser.XL = 23;
VerboseParser.L = 24;
VerboseParser.XC = 25;
VerboseParser.X = 26;
VerboseParser.XX = 27;
VerboseParser.XXX = 28;
VerboseParser.IV = 29;
VerboseParser.V = 30;
VerboseParser.IX = 31;
VerboseParser.I = 32;
VerboseParser.II = 33;
VerboseParser.III = 34;
VerboseParser.WS = 35;

VerboseParser.RULE_program = 0;
VerboseParser.RULE_statement = 1;
VerboseParser.RULE_push = 2;
VerboseParser.RULE_pop = 3;
VerboseParser.RULE_duplicate = 4;
VerboseParser.RULE_swap = 5;
VerboseParser.RULE_add = 6;
VerboseParser.RULE_subtract = 7;
VerboseParser.RULE_multiply = 8;
VerboseParser.RULE_divide = 9;
VerboseParser.RULE_modulo = 10;
VerboseParser.RULE_jump = 11;
VerboseParser.RULE_inputLetter = 12;
VerboseParser.RULE_inputNumber = 13;
VerboseParser.RULE_outputLetter = 14;
VerboseParser.RULE_outputNumber = 15;
VerboseParser.RULE_nr = 16;
VerboseParser.RULE_thousands = 17;
VerboseParser.RULE_thous_part = 18;
VerboseParser.RULE_hundreds = 19;
VerboseParser.RULE_hun_part = 20;
VerboseParser.RULE_hun_rep = 21;
VerboseParser.RULE_tens = 22;
VerboseParser.RULE_tens_part = 23;
VerboseParser.RULE_tens_rep = 24;
VerboseParser.RULE_ones = 25;
VerboseParser.RULE_ones_rep = 26;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitProgram(this);
	}
};




VerboseParser.ProgramContext = ProgramContext;

VerboseParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, VerboseParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 54;
            this.statement();
            this.state = 57; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerboseParser.T__0) | (1 << VerboseParser.T__2) | (1 << VerboseParser.T__3) | (1 << VerboseParser.T__4) | (1 << VerboseParser.T__5) | (1 << VerboseParser.T__6) | (1 << VerboseParser.T__7) | (1 << VerboseParser.T__8) | (1 << VerboseParser.T__9) | (1 << VerboseParser.T__10) | (1 << VerboseParser.T__11) | (1 << VerboseParser.T__12) | (1 << VerboseParser.T__13) | (1 << VerboseParser.T__14))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.push = function() {
    return this.getTypedRuleContext(PushContext,0);
};

StatementContext.prototype.pop = function() {
    return this.getTypedRuleContext(PopContext,0);
};

StatementContext.prototype.duplicate = function() {
    return this.getTypedRuleContext(DuplicateContext,0);
};

StatementContext.prototype.swap = function() {
    return this.getTypedRuleContext(SwapContext,0);
};

StatementContext.prototype.add = function() {
    return this.getTypedRuleContext(AddContext,0);
};

StatementContext.prototype.subtract = function() {
    return this.getTypedRuleContext(SubtractContext,0);
};

StatementContext.prototype.multiply = function() {
    return this.getTypedRuleContext(MultiplyContext,0);
};

StatementContext.prototype.divide = function() {
    return this.getTypedRuleContext(DivideContext,0);
};

StatementContext.prototype.modulo = function() {
    return this.getTypedRuleContext(ModuloContext,0);
};

StatementContext.prototype.jump = function() {
    return this.getTypedRuleContext(JumpContext,0);
};

StatementContext.prototype.inputLetter = function() {
    return this.getTypedRuleContext(InputLetterContext,0);
};

StatementContext.prototype.inputNumber = function() {
    return this.getTypedRuleContext(InputNumberContext,0);
};

StatementContext.prototype.outputLetter = function() {
    return this.getTypedRuleContext(OutputLetterContext,0);
};

StatementContext.prototype.outputNumber = function() {
    return this.getTypedRuleContext(OutputNumberContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitStatement(this);
	}
};




VerboseParser.StatementContext = StatementContext;

VerboseParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, VerboseParser.RULE_statement);
    try {
        this.state = 73;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case VerboseParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 59;
            this.push();
            break;
        case VerboseParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 60;
            this.pop();
            break;
        case VerboseParser.T__3:
            this.enterOuterAlt(localctx, 3);
            this.state = 61;
            this.duplicate();
            break;
        case VerboseParser.T__4:
            this.enterOuterAlt(localctx, 4);
            this.state = 62;
            this.swap();
            break;
        case VerboseParser.T__5:
            this.enterOuterAlt(localctx, 5);
            this.state = 63;
            this.add();
            break;
        case VerboseParser.T__6:
            this.enterOuterAlt(localctx, 6);
            this.state = 64;
            this.subtract();
            break;
        case VerboseParser.T__7:
            this.enterOuterAlt(localctx, 7);
            this.state = 65;
            this.multiply();
            break;
        case VerboseParser.T__8:
            this.enterOuterAlt(localctx, 8);
            this.state = 66;
            this.divide();
            break;
        case VerboseParser.T__9:
            this.enterOuterAlt(localctx, 9);
            this.state = 67;
            this.modulo();
            break;
        case VerboseParser.T__10:
            this.enterOuterAlt(localctx, 10);
            this.state = 68;
            this.jump();
            break;
        case VerboseParser.T__11:
            this.enterOuterAlt(localctx, 11);
            this.state = 69;
            this.inputLetter();
            break;
        case VerboseParser.T__12:
            this.enterOuterAlt(localctx, 12);
            this.state = 70;
            this.inputNumber();
            break;
        case VerboseParser.T__13:
            this.enterOuterAlt(localctx, 13);
            this.state = 71;
            this.outputLetter();
            break;
        case VerboseParser.T__14:
            this.enterOuterAlt(localctx, 14);
            this.state = 72;
            this.outputNumber();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PushContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_push;
    return this;
}

PushContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PushContext.prototype.constructor = PushContext;

PushContext.prototype.nr = function() {
    return this.getTypedRuleContext(NrContext,0);
};

PushContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterPush(this);
	}
};

PushContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitPush(this);
	}
};




VerboseParser.PushContext = PushContext;

VerboseParser.prototype.push = function() {

    var localctx = new PushContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, VerboseParser.RULE_push);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(VerboseParser.T__0);
        this.state = 76;
        this.nr();
        this.state = 77;
        this.match(VerboseParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_pop;
    return this;
}

PopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PopContext.prototype.constructor = PopContext;


PopContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterPop(this);
	}
};

PopContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitPop(this);
	}
};




VerboseParser.PopContext = PopContext;

VerboseParser.prototype.pop = function() {

    var localctx = new PopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, VerboseParser.RULE_pop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.match(VerboseParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DuplicateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_duplicate;
    return this;
}

DuplicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DuplicateContext.prototype.constructor = DuplicateContext;


DuplicateContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterDuplicate(this);
	}
};

DuplicateContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitDuplicate(this);
	}
};




VerboseParser.DuplicateContext = DuplicateContext;

VerboseParser.prototype.duplicate = function() {

    var localctx = new DuplicateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, VerboseParser.RULE_duplicate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.match(VerboseParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SwapContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_swap;
    return this;
}

SwapContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SwapContext.prototype.constructor = SwapContext;


SwapContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterSwap(this);
	}
};

SwapContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitSwap(this);
	}
};




VerboseParser.SwapContext = SwapContext;

VerboseParser.prototype.swap = function() {

    var localctx = new SwapContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, VerboseParser.RULE_swap);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.match(VerboseParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AddContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_add;
    return this;
}

AddContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddContext.prototype.constructor = AddContext;


AddContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterAdd(this);
	}
};

AddContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitAdd(this);
	}
};




VerboseParser.AddContext = AddContext;

VerboseParser.prototype.add = function() {

    var localctx = new AddContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, VerboseParser.RULE_add);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        this.match(VerboseParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubtractContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_subtract;
    return this;
}

SubtractContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubtractContext.prototype.constructor = SubtractContext;


SubtractContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterSubtract(this);
	}
};

SubtractContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitSubtract(this);
	}
};




VerboseParser.SubtractContext = SubtractContext;

VerboseParser.prototype.subtract = function() {

    var localctx = new SubtractContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, VerboseParser.RULE_subtract);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        this.match(VerboseParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MultiplyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_multiply;
    return this;
}

MultiplyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplyContext.prototype.constructor = MultiplyContext;


MultiplyContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterMultiply(this);
	}
};

MultiplyContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitMultiply(this);
	}
};




VerboseParser.MultiplyContext = MultiplyContext;

VerboseParser.prototype.multiply = function() {

    var localctx = new MultiplyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, VerboseParser.RULE_multiply);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        this.match(VerboseParser.T__7);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DivideContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_divide;
    return this;
}

DivideContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DivideContext.prototype.constructor = DivideContext;


DivideContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterDivide(this);
	}
};

DivideContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitDivide(this);
	}
};




VerboseParser.DivideContext = DivideContext;

VerboseParser.prototype.divide = function() {

    var localctx = new DivideContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, VerboseParser.RULE_divide);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.match(VerboseParser.T__8);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ModuloContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_modulo;
    return this;
}

ModuloContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModuloContext.prototype.constructor = ModuloContext;


ModuloContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterModulo(this);
	}
};

ModuloContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitModulo(this);
	}
};




VerboseParser.ModuloContext = ModuloContext;

VerboseParser.prototype.modulo = function() {

    var localctx = new ModuloContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, VerboseParser.RULE_modulo);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.match(VerboseParser.T__9);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function JumpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_jump;
    return this;
}

JumpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JumpContext.prototype.constructor = JumpContext;


JumpContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterJump(this);
	}
};

JumpContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitJump(this);
	}
};




VerboseParser.JumpContext = JumpContext;

VerboseParser.prototype.jump = function() {

    var localctx = new JumpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, VerboseParser.RULE_jump);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.match(VerboseParser.T__10);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InputLetterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_inputLetter;
    return this;
}

InputLetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InputLetterContext.prototype.constructor = InputLetterContext;


InputLetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterInputLetter(this);
	}
};

InputLetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitInputLetter(this);
	}
};




VerboseParser.InputLetterContext = InputLetterContext;

VerboseParser.prototype.inputLetter = function() {

    var localctx = new InputLetterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, VerboseParser.RULE_inputLetter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(VerboseParser.T__11);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InputNumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_inputNumber;
    return this;
}

InputNumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InputNumberContext.prototype.constructor = InputNumberContext;


InputNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterInputNumber(this);
	}
};

InputNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitInputNumber(this);
	}
};




VerboseParser.InputNumberContext = InputNumberContext;

VerboseParser.prototype.inputNumber = function() {

    var localctx = new InputNumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, VerboseParser.RULE_inputNumber);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.match(VerboseParser.T__12);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OutputLetterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_outputLetter;
    return this;
}

OutputLetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OutputLetterContext.prototype.constructor = OutputLetterContext;


OutputLetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterOutputLetter(this);
	}
};

OutputLetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitOutputLetter(this);
	}
};




VerboseParser.OutputLetterContext = OutputLetterContext;

VerboseParser.prototype.outputLetter = function() {

    var localctx = new OutputLetterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, VerboseParser.RULE_outputLetter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this.match(VerboseParser.T__13);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OutputNumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_outputNumber;
    return this;
}

OutputNumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OutputNumberContext.prototype.constructor = OutputNumberContext;


OutputNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterOutputNumber(this);
	}
};

OutputNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitOutputNumber(this);
	}
};




VerboseParser.OutputNumberContext = OutputNumberContext;

VerboseParser.prototype.outputNumber = function() {

    var localctx = new OutputNumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, VerboseParser.RULE_outputNumber);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.match(VerboseParser.T__14);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_nr;
    return this;
}

NrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NrContext.prototype.constructor = NrContext;

NrContext.prototype.thousands = function() {
    return this.getTypedRuleContext(ThousandsContext,0);
};

NrContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterNr(this);
	}
};

NrContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitNr(this);
	}
};




VerboseParser.NrContext = NrContext;

VerboseParser.prototype.nr = function() {

    var localctx = new NrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, VerboseParser.RULE_nr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.thousands();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ThousandsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_thousands;
    return this;
}

ThousandsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThousandsContext.prototype.constructor = ThousandsContext;

ThousandsContext.prototype.thous_part = function() {
    return this.getTypedRuleContext(Thous_partContext,0);
};

ThousandsContext.prototype.hundreds = function() {
    return this.getTypedRuleContext(HundredsContext,0);
};

ThousandsContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterThousands(this);
	}
};

ThousandsContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitThousands(this);
	}
};




VerboseParser.ThousandsContext = ThousandsContext;

VerboseParser.prototype.thousands = function() {

    var localctx = new ThousandsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, VerboseParser.RULE_thousands);
    try {
        this.state = 112;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 107;
            this.thous_part(0);
            this.state = 108;
            this.hundreds();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 110;
            this.thous_part(0);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 111;
            this.hundreds();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Thous_partContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_thous_part;
    return this;
}

Thous_partContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Thous_partContext.prototype.constructor = Thous_partContext;

Thous_partContext.prototype.M = function() {
    return this.getToken(VerboseParser.M, 0);
};

Thous_partContext.prototype.thous_part = function() {
    return this.getTypedRuleContext(Thous_partContext,0);
};

Thous_partContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterThous_part(this);
	}
};

Thous_partContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitThous_part(this);
	}
};



VerboseParser.prototype.thous_part = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Thous_partContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 36;
    this.enterRecursionRule(localctx, 36, VerboseParser.RULE_thous_part, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.match(VerboseParser.M);
        this._ctx.stop = this._input.LT(-1);
        this.state = 121;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Thous_partContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, VerboseParser.RULE_thous_part);
                this.state = 117;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 118;
                this.match(VerboseParser.M); 
            }
            this.state = 123;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function HundredsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_hundreds;
    return this;
}

HundredsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HundredsContext.prototype.constructor = HundredsContext;

HundredsContext.prototype.hun_part = function() {
    return this.getTypedRuleContext(Hun_partContext,0);
};

HundredsContext.prototype.tens = function() {
    return this.getTypedRuleContext(TensContext,0);
};

HundredsContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterHundreds(this);
	}
};

HundredsContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitHundreds(this);
	}
};




VerboseParser.HundredsContext = HundredsContext;

VerboseParser.prototype.hundreds = function() {

    var localctx = new HundredsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, VerboseParser.RULE_hundreds);
    try {
        this.state = 129;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 124;
            this.hun_part();
            this.state = 125;
            this.tens();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 127;
            this.hun_part();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 128;
            this.tens();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Hun_partContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_hun_part;
    return this;
}

Hun_partContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Hun_partContext.prototype.constructor = Hun_partContext;

Hun_partContext.prototype.hun_rep = function() {
    return this.getTypedRuleContext(Hun_repContext,0);
};

Hun_partContext.prototype.CD = function() {
    return this.getToken(VerboseParser.CD, 0);
};

Hun_partContext.prototype.D = function() {
    return this.getToken(VerboseParser.D, 0);
};

Hun_partContext.prototype.CM = function() {
    return this.getToken(VerboseParser.CM, 0);
};

Hun_partContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterHun_part(this);
	}
};

Hun_partContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitHun_part(this);
	}
};




VerboseParser.Hun_partContext = Hun_partContext;

VerboseParser.prototype.hun_part = function() {

    var localctx = new Hun_partContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, VerboseParser.RULE_hun_part);
    try {
        this.state = 137;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 131;
            this.hun_rep();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 132;
            this.match(VerboseParser.CD);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 133;
            this.match(VerboseParser.D);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 134;
            this.match(VerboseParser.D);
            this.state = 135;
            this.hun_rep();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 136;
            this.match(VerboseParser.CM);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Hun_repContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_hun_rep;
    return this;
}

Hun_repContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Hun_repContext.prototype.constructor = Hun_repContext;

Hun_repContext.prototype.C = function() {
    return this.getToken(VerboseParser.C, 0);
};

Hun_repContext.prototype.CC = function() {
    return this.getToken(VerboseParser.CC, 0);
};

Hun_repContext.prototype.CCC = function() {
    return this.getToken(VerboseParser.CCC, 0);
};

Hun_repContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterHun_rep(this);
	}
};

Hun_repContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitHun_rep(this);
	}
};




VerboseParser.Hun_repContext = Hun_repContext;

VerboseParser.prototype.hun_rep = function() {

    var localctx = new Hun_repContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, VerboseParser.RULE_hun_rep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerboseParser.C) | (1 << VerboseParser.CC) | (1 << VerboseParser.CCC))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TensContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_tens;
    return this;
}

TensContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TensContext.prototype.constructor = TensContext;

TensContext.prototype.tens_part = function() {
    return this.getTypedRuleContext(Tens_partContext,0);
};

TensContext.prototype.ones = function() {
    return this.getTypedRuleContext(OnesContext,0);
};

TensContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterTens(this);
	}
};

TensContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitTens(this);
	}
};




VerboseParser.TensContext = TensContext;

VerboseParser.prototype.tens = function() {

    var localctx = new TensContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, VerboseParser.RULE_tens);
    try {
        this.state = 146;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 141;
            this.tens_part();
            this.state = 142;
            this.ones();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 144;
            this.tens_part();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 145;
            this.ones();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Tens_partContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_tens_part;
    return this;
}

Tens_partContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Tens_partContext.prototype.constructor = Tens_partContext;

Tens_partContext.prototype.tens_rep = function() {
    return this.getTypedRuleContext(Tens_repContext,0);
};

Tens_partContext.prototype.XL = function() {
    return this.getToken(VerboseParser.XL, 0);
};

Tens_partContext.prototype.L = function() {
    return this.getToken(VerboseParser.L, 0);
};

Tens_partContext.prototype.XC = function() {
    return this.getToken(VerboseParser.XC, 0);
};

Tens_partContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterTens_part(this);
	}
};

Tens_partContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitTens_part(this);
	}
};




VerboseParser.Tens_partContext = Tens_partContext;

VerboseParser.prototype.tens_part = function() {

    var localctx = new Tens_partContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, VerboseParser.RULE_tens_part);
    try {
        this.state = 154;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 148;
            this.tens_rep();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 149;
            this.match(VerboseParser.XL);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 150;
            this.match(VerboseParser.L);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 151;
            this.match(VerboseParser.L);
            this.state = 152;
            this.tens_rep();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 153;
            this.match(VerboseParser.XC);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Tens_repContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_tens_rep;
    return this;
}

Tens_repContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Tens_repContext.prototype.constructor = Tens_repContext;

Tens_repContext.prototype.X = function() {
    return this.getToken(VerboseParser.X, 0);
};

Tens_repContext.prototype.XX = function() {
    return this.getToken(VerboseParser.XX, 0);
};

Tens_repContext.prototype.XXX = function() {
    return this.getToken(VerboseParser.XXX, 0);
};

Tens_repContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterTens_rep(this);
	}
};

Tens_repContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitTens_rep(this);
	}
};




VerboseParser.Tens_repContext = Tens_repContext;

VerboseParser.prototype.tens_rep = function() {

    var localctx = new Tens_repContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, VerboseParser.RULE_tens_rep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VerboseParser.X) | (1 << VerboseParser.XX) | (1 << VerboseParser.XXX))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OnesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_ones;
    return this;
}

OnesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OnesContext.prototype.constructor = OnesContext;

OnesContext.prototype.ones_rep = function() {
    return this.getTypedRuleContext(Ones_repContext,0);
};

OnesContext.prototype.IV = function() {
    return this.getToken(VerboseParser.IV, 0);
};

OnesContext.prototype.V = function() {
    return this.getToken(VerboseParser.V, 0);
};

OnesContext.prototype.IX = function() {
    return this.getToken(VerboseParser.IX, 0);
};

OnesContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterOnes(this);
	}
};

OnesContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitOnes(this);
	}
};




VerboseParser.OnesContext = OnesContext;

VerboseParser.prototype.ones = function() {

    var localctx = new OnesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, VerboseParser.RULE_ones);
    try {
        this.state = 164;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 158;
            this.ones_rep();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 159;
            this.match(VerboseParser.IV);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 160;
            this.match(VerboseParser.V);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 161;
            this.match(VerboseParser.V);
            this.state = 162;
            this.ones_rep();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 163;
            this.match(VerboseParser.IX);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ones_repContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = VerboseParser.RULE_ones_rep;
    return this;
}

Ones_repContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ones_repContext.prototype.constructor = Ones_repContext;

Ones_repContext.prototype.I = function() {
    return this.getToken(VerboseParser.I, 0);
};

Ones_repContext.prototype.II = function() {
    return this.getToken(VerboseParser.II, 0);
};

Ones_repContext.prototype.III = function() {
    return this.getToken(VerboseParser.III, 0);
};

Ones_repContext.prototype.enterRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.enterOnes_rep(this);
	}
};

Ones_repContext.prototype.exitRule = function(listener) {
    if(listener instanceof VerboseListener ) {
        listener.exitOnes_rep(this);
	}
};




VerboseParser.Ones_repContext = Ones_repContext;

VerboseParser.prototype.ones_rep = function() {

    var localctx = new Ones_repContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, VerboseParser.RULE_ones_rep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        _la = this._input.LA(1);
        if(!(((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (VerboseParser.I - 32)) | (1 << (VerboseParser.II - 32)) | (1 << (VerboseParser.III - 32)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


VerboseParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 18:
			return this.thous_part_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

VerboseParser.prototype.thous_part_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.VerboseParser = VerboseParser;
