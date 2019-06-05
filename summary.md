---
layout: page
title: summary
---

# SPL (Simple programming language)

## Algemeines 

### Writing names

"// Das ist ein Kommentar"

das_ist_ein_Bezeichner

### Reserved for command:

array, else, if, of, proc, ref, type, var, while

### Reserved for symbols:

(), [], {}, =, #, <, <=, >, =>, :=, :, ",", ;, +, -, *, /

### Sample codes

~~~
array [3] of int
// we have an array of 3 integers

array [3] of array of [5] of int
// we have a 3x5 array of integers
~~~

### Typvereinbarung

~~~
type <name> = <typ> ;
// we can rename a type like "int" into sth like "myType"
~~~

for example:

~~~
type myInt = int;
type vector = array [5] of int;
type matrix = array [3] of vector;
type mat3 = array [10] of array [20] of vector;
~~~

#### gleiche/verschiedene Typen?

~~~
type typ1 = array [5] of int;
type typ2 = typ1;
// die sind gleich

type typ1 = array [5] of int;
type typ2 = array [5] of int;
// die sind nicht gleich
~~~

### Prozedurverinbarungen

~~~
proc <name> ( <parameterliste> ) { <deklarationen> <anweisungsliste> }
~~~

#### Parameterliste

2 Formen davon:

~~~
1. <name> : <typ> // Dies bezeichnet nen Wertparameter
2. ref <name> : <typ> // Dies bezeichent Referenzparameter
~~~

getrennt durch Kommata (sl. komma)
Gultigkeit bis Ende der Prozedur

#### Deklarationen

~~~
var <name> : <typ> ; // lokale Var, Gultigkeit bis Ende der Proz
~~~

#### Anweisungsliste

beliebig viele Anweisungen

~~~
proc nothing() {}
proc copy(i: int, ref j: int) { j := i; }
proc swap(ref i: int, ref j: int) {
	var k: int;
	k := i; i := j; j := k;
}
~~~

### Anweisung/Command/Statement

#### Type1

~~~
<lhs> := <rhs> ; // left/right-hand side
~~~

lhs should be a variable of type int and so is rhs. First rhs be evaluated then assigned to lhs. bsp:

~~~
x[3] := x[2] * 2;
~~~

#### Type2

~~~
if ( <ausdruck> ) <anweisung1>
or
if ( <ausdruck> ) <anweisung1> else <anweisung2>
~~~

bsp:

~~~
if (x < 0) x := 42;
if (x < 0) x := 42; else x := 43;
~~~

#### Type3

~~~
while ( <ausdruck> ) <anweisung>
~~~

`<ausdruck>` is an expression that has logical value. Just like any programming language.

bsp:

~~~
while (x <10) x := x + 1;
~~~

#### Type4

A compacted Statement. bsp:

~~~
{ k := i; i := j; j := k; }
~~~

#### Type5

Procedure calling. bsp:

~~~
<name> ( <argumentliste> ) ;
~~~

Argumentliste is expression(s) divided by kommata (sl. komma). bsp:

~~~
swap(n, m);
sum(3 * x + 5, 9 - y / 2, z);
~~~

#### Type6

empty command *shrug*

### Ausdruck/expression

the value can be logical value or integers. Integers can be calculated with 4 basic operations through associativity or precedency (order of math). 6 comparation operators are <, <=, >, =>, =, and # (not equal). They return either right or wrong. bsp:

~~~
1
x
3 + x * y
(3 + x) * y
5 * -a[n-2]
i < n
b - 2 # a + 3
~~~
