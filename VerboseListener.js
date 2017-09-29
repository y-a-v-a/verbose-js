// Generated from Verbose.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by VerboseParser.
function VerboseListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

VerboseListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
VerboseListener.prototype.constructor = VerboseListener;

// Enter a parse tree produced by VerboseParser#program.
VerboseListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#program.
VerboseListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#statement.
VerboseListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#statement.
VerboseListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#push.
VerboseListener.prototype.enterPush = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#push.
VerboseListener.prototype.exitPush = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#pop.
VerboseListener.prototype.enterPop = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#pop.
VerboseListener.prototype.exitPop = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#duplicate.
VerboseListener.prototype.enterDuplicate = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#duplicate.
VerboseListener.prototype.exitDuplicate = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#swap.
VerboseListener.prototype.enterSwap = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#swap.
VerboseListener.prototype.exitSwap = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#add.
VerboseListener.prototype.enterAdd = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#add.
VerboseListener.prototype.exitAdd = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#subtract.
VerboseListener.prototype.enterSubtract = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#subtract.
VerboseListener.prototype.exitSubtract = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#multiply.
VerboseListener.prototype.enterMultiply = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#multiply.
VerboseListener.prototype.exitMultiply = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#divide.
VerboseListener.prototype.enterDivide = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#divide.
VerboseListener.prototype.exitDivide = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#modulo.
VerboseListener.prototype.enterModulo = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#modulo.
VerboseListener.prototype.exitModulo = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#jump.
VerboseListener.prototype.enterJump = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#jump.
VerboseListener.prototype.exitJump = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#inputLetter.
VerboseListener.prototype.enterInputLetter = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#inputLetter.
VerboseListener.prototype.exitInputLetter = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#inputNumber.
VerboseListener.prototype.enterInputNumber = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#inputNumber.
VerboseListener.prototype.exitInputNumber = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#outputLetter.
VerboseListener.prototype.enterOutputLetter = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#outputLetter.
VerboseListener.prototype.exitOutputLetter = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#outputNumber.
VerboseListener.prototype.enterOutputNumber = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#outputNumber.
VerboseListener.prototype.exitOutputNumber = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#nr.
VerboseListener.prototype.enterNr = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#nr.
VerboseListener.prototype.exitNr = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#thousands.
VerboseListener.prototype.enterThousands = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#thousands.
VerboseListener.prototype.exitThousands = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#thous_part.
VerboseListener.prototype.enterThous_part = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#thous_part.
VerboseListener.prototype.exitThous_part = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#hundreds.
VerboseListener.prototype.enterHundreds = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#hundreds.
VerboseListener.prototype.exitHundreds = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#hun_part.
VerboseListener.prototype.enterHun_part = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#hun_part.
VerboseListener.prototype.exitHun_part = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#hun_rep.
VerboseListener.prototype.enterHun_rep = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#hun_rep.
VerboseListener.prototype.exitHun_rep = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#tens.
VerboseListener.prototype.enterTens = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#tens.
VerboseListener.prototype.exitTens = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#tens_part.
VerboseListener.prototype.enterTens_part = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#tens_part.
VerboseListener.prototype.exitTens_part = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#tens_rep.
VerboseListener.prototype.enterTens_rep = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#tens_rep.
VerboseListener.prototype.exitTens_rep = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#ones.
VerboseListener.prototype.enterOnes = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#ones.
VerboseListener.prototype.exitOnes = function(ctx) {
};


// Enter a parse tree produced by VerboseParser#ones_rep.
VerboseListener.prototype.enterOnes_rep = function(ctx) {
};

// Exit a parse tree produced by VerboseParser#ones_rep.
VerboseListener.prototype.exitOnes_rep = function(ctx) {
};



exports.VerboseListener = VerboseListener;