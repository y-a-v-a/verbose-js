grammar Verbose;

program
  : statement+
  ;

statement
  : push
  | pop
  | duplicate
  | swap
  | add
  | subtract
  | multiply
  | divide
  | modulo
  | jump
  | inputLetter
  | inputNumber
  | outputLetter
  | outputNumber
  ;

push
  : 'PUT THE NUMBER' nr 'ONTO THE TOP OF THE PROGRAM STACK'
  ;

pop
  : 'REMOVE THE CURRENT ELEMENT OF THE PROGRAM STACK'
  ;

duplicate
  : 'GET THE FIRST ELEMENT OF THE PROGRAM STACK AND DUPLICATE IT AND PUT THE RESULT ONTO THE TOP OF THE PROGRAM STACK'
  ;

swap
  : 'MOVE THE FIRST ELEMENT OF THE PROGRAM STACK TO THE SECOND ELEMENT\'S PLACE AND THE SECOND ELEMENT OF THE STACK TO THE FIRST ELEMENT\'S PLACE'
  ;

add
  : 'ADD THE FIRST ELEMENT OF THE PROGRAM STACK AND THE SECOND ELEMENT OF THE PROGRAM STACK TOGETHER AND PUT THE RESULT ONTO THE TOP OF THE PROGRAM STACK'
  ;

subtract
  : 'SUBTRACT THE SECOND ELEMENT OF THE PROGRAM STACK FROM THE FIRST ELEMENT OF THE PROGRAM STACK AND PUT THE RESULT ONTO THE TOP OF THE PROGRAM STACK'
  ;

multiply
  : 'MULTIPLY THE FIRST ELEMENT OF THE PROGRAM STACK BY THE SECOND ELEMENT OF THE PROGRAM STACK AND PUT THE RESULT ONTO THE TOP OF THE PROGRAM STACK'
  ;

divide
  : 'DIVIDE THE FIRST ELEMENT OF THE PROGRAM STACK BY THE SECOND ELEMENT OF THE PROGRAM STACK AND PUT THE RESULT ONTO THE TOP OF THE PROGRAM STACK'
  ;

modulo
  : 'DIVIDE THE FIRST ELEMENT OF THE PROGRAM STACK BY THE SECOND ELEMENT OF THE PROGRAM STACK AND GET THE REMAINDER AND PUT THE REMAINDER ONTO THE TOP OF THE PROGRAM STACK'
  ;

jump
  : 'GET THE FIRST ELEMENT OF THE PROGRAM STACK AND THE SECOND ELEMENT OF THE PROGRAM STACK AND IF THE SECOND ELEMENT OF THE PROGRAM STACK IS NOT ZERO JUMP TO THE INSTRUCTION THAT IS THE CURRENT INSTRUCTION NUMBER AND THE FIRST ELEMENT ADDED TOGETHER\'S RESULT'
  ;

inputLetter
  : 'GET A CHARACTER TYPED IN BY THE CURRENT PERSON USING THIS PROGRAM AND GET THE CHARACTER\'S ASCII CODE AND PUT THE RESULT ONTO THE TOP OF THE PROGRAM STACK'
  ;

inputNumber
  : 'GET A ROMAN NUMERAL TYPED IN BY THE CURRENT PERSON USING THIS PROGRAM AND PUT IT ONTO THE TOP OF THE PROGRAM STACK'
  ;

outputLetter
  : 'GET THE TOP ELEMENT OF THE STACK AND CONVERT IT TO AN ASCII CHARACTER AND OUTPUT IT FOR THE CURRENT PERSON USING THIS PROGRAM TO SEE'
  ;

outputNumber
  : 'GET THE TOP ELEMENT OF THE STACK AND OUTPUT IT FOR THE CURRENT PERSON USING THIS PROGRAM TO SEE'
  ;

nr
   : thousands
   ;

thousands
   : thous_part hundreds
   | thous_part
   | hundreds
   ;

thous_part
   : thous_part M
   | M
   ;

hundreds
   : hun_part tens
   | hun_part
   | tens
   ;

hun_part
   : hun_rep
   | CD
   | D
   | D hun_rep
   | CM
   ;

hun_rep
   : C
   | CC
   | CCC
   ;

tens
   : tens_part ones
   | tens_part
   | ones
   ;

tens_part
   : tens_rep
   | XL
   | L
   | L tens_rep
   | XC
   ;

tens_rep
   : X
   | XX
   | XXX
   ;

ones
   : ones_rep
   | IV
   | V
   | V ones_rep
   | IX
   ;

ones_rep
   : I
   | II
   | III
   ;


M
   : 'M'
   ;


CD
   : 'CD'
   ;


D
   : 'D'
   ;


CM
   : 'CM'
   ;


C
   : 'C'
   ;


CC
   : 'CC'
   ;


CCC
   : 'CCC'
   ;


XL
   : 'XL'
   ;


L
   : 'L'
   ;


XC
   : 'XC'
   ;


X
   : 'X'
   ;


XX
   : 'XX'
   ;


XXX
   : 'XXX'
   ;


IV
   : 'IV'
   ;


V
   : 'V'
   ;


IX
   : 'IX'
   ;


I
   : 'I'
   ;


II
   : 'II'
   ;


III
   : 'III'
   ;

WS
  : [ \t\r\n] -> skip
  ;
