const antlr4 = require('antlr4');
const VerboseLexer = require('./VerboseLexer');
const VerboseParser = require('./VerboseParser');
const VerboseListener = require('./VerboseListener').VerboseListener;

const fs = require('fs');
const romanDecimal = require('roman-decimal');

var text = fs.readFileSync('./hello-world.verbose').toString();

var chars = new antlr4.InputStream(text);
var lexer = new VerboseLexer.VerboseLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new VerboseParser.VerboseParser(tokens);
parser.buildParseTrees = true;

var tree = parser.program();

VerbosePrinter = function() {
  VerboseListener.call(this);
  return this;
}

var romans = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'M': 1000
};

var stack = [];
var output = '';

VerbosePrinter.prototype = Object.create(VerboseListener.prototype);

VerbosePrinter.prototype.constructor = VerbosePrinter;

VerbosePrinter.prototype.exitProgram = function(ctx) {
  console.log(output);
}

VerbosePrinter.prototype.enterOutputLetter = function(ctx) {
  let element = stack[stack.length - 1];
  element = typeof element === 'string' ? element : String.fromCharCode(element);
  output += element.toString();
};

VerbosePrinter.prototype.enterOutputNumber = function(ctx) {
  let element = stack[stack.length - 1];
  output += romanDecimal.roman(element);
};

VerbosePrinter.prototype.enterPush = function(ctx) {
  var numberBase = ctx.children[1].thousands();
  var result = 0;
  // console.log(ctx.children[1].thousands().hundreds().tens().__proto__);
  // process.exit();
  // console.log(numberBase.hundreds().tens().tens_part().tens_rep().XX().getText());
  // console.log(hun_rep.__proto__);
  // console.log(numberBase.thous_part());

  if (numberBase.thous_part()) {
    const thous_part = numberBase.thous_part();
    function recursiveAddM(thous_part) {
      if (thous_part.M()) {
        result += numberBase.thous_part().M().getText() == 'M' ? 1000 : 0;
      }
      if (thous_part.thous_part()) {
        recursiveAddM(thous_part.thous_part());
      }
    }
    recursiveAddM(thous_part);
  }
  if (numberBase.hundreds()) {
    const hun_part = numberBase.hundreds().hun_part();
    if (hun_part) {
      const hun_rep = hun_part.hun_rep();
      if (hun_rep) {
        if (hun_rep.C()) {
          result += hun_rep.C().getText() === 'C' ? 100 : 0;
        }
        if (hun_rep.CC()) {
          result += hun_rep.CC().getText() === 'CC' ? 200 : 0;
        }
        if (hun_rep.CCC()) {
          result += hun_rep.CCC().getText() === 'CCC' ? 300 : 0;
        }
      }
      if (hun_part.CD()) {
        result += hun_part.CD().getText() === 'CD' ? 400 : 0;
      }
      if (hun_part.D()) {
        result += hun_part.D().getText() === 'D' ? 500 : 0;
      }
      if (hun_part.CM()) {
        result += hun_part.CM().getText() === 'CM' ? 900 : 0;
      }
      // console.log('a',numberBase.hundreds().hun_part().__proto__);
      // process.exit();
    }
    const tens = numberBase.hundreds().tens();
    if (tens) {
      if (tens.tens_part()) {
        const tens_rep = tens.tens_part().tens_rep();
        if (tens_rep) {
          if (tens_rep.X()) {
            result += tens_rep.X().getText() === 'X' ? 10 : 0;
          }
          if (tens_rep.XX()) {
            result += tens_rep.XX().getText() === 'XX' ? 20 : 0;
          }
          if (tens_rep.XXX()) {
            result += tens_rep.XXX().getText() === 'XXX' ? 30 : 0;
          }
        }
        if (tens.tens_part().XL()) {
          result += tens.tens_part().XL().getText() === 'XL' ? 40 : 0;
        }
        if (tens.tens_part().L()) {
          result += tens.tens_part().L().getText() === 'L' ? 50 : 0;
        }
        if (tens.tens_part().XC()) {
          result += tens.tens_part().XC().getText() === 'XC' ? 90 : 0;
        }
      }
      if (tens.ones()) {
        if (tens.ones().IV()) {
          result += tens.ones().IV().getText() === 'IV' ? 4 : 0;
        }
        if (tens.ones().V()) {
          result += tens.ones().V().getText() === 'V' ? 5 : 0;
        }
        if (tens.ones().IX()) {
          result += tens.ones().IX().getText() === 'IX' ? 9 : 0;
        }
        const ones_rep = tens.ones().ones_rep();
        if (ones_rep) {
          if (ones_rep.I()) {
            result += ones_rep.I().getText() === 'I' ? 1 : 0;
          }
          if (ones_rep.II()) {
            result += ones_rep.II().getText() === 'II' ? 2 : 0;
          }
          if (ones_rep.III()) {
            result += ones_rep.III().getText() === 'III' ? 3 : 0;
          }
        }
      }
    }
  }
  // console.log(numberBase.thous_part());
  // console.log(ctx.children[1].thousands().hundreds().tens().tens_part().__proto__);
  stack.push(result);
  // console.log(stack);
  // process.exit();
};

var printer = new VerbosePrinter();

antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);

