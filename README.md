# Javascriptkurss
### Masīvu izmēģinājumi
 st cars = ["Saab", "Volvo", "BMW"];
undefined
cars
(3) ['Saab', 'Volvo', 'BMW']
cars[0]
'Saab'
cars[1]
'Volvo'
cars[2]
'BMW'
[0]
[0]
var i=0
undefined
cars[i];
'Saab'
++i
1
cars[i];
'Volvo'
+++i
VM773:1 Uncaught SyntaxError: Invalid left-hand side expression in prefix operation
++i
2
cars[i];
'BMW'
const cars = []
undefined
cars;
[]
cars[0]="saab"
'saab'
cars[1]="Volvo"
'Volvo'
cars[2]-"BMW"
NaN
cars[2]="BMW"
'BMW'
cars[20]="VW"
'VW'
cars;
(21) ['saab', 'Volvo', 'BMW', empty × 17, 'VW']
const person=["Anita", "Rozenberga",45]
undefined
person 
(3) ['Anita', 'Rozenberga', 45]
const person=[[""],"AAA",45]
undefined
typeof(person)
'object'
person[0]
['']
person[1]
'AAA'
person["0"]
['']
const person=[["BBB",100], "AAA",45]
undefined
person[0][0]
'BBB'
person[0][1]
100
const coord=[]
undefined
x=0.1
0.1
y=0.5
0.5
coord[0][1]
VM1971:1 Uncaught TypeError: Cannot read properties of undefined (reading '1')
    at <anonymous>:1:9
(anonymous) @ VM1971:1
const cars=[["BMW"],["AUDI"],[["X3","X5"],["Q1"."Q2"]
VM2137:1 Uncaught SyntaxError: Unexpected string
const cars=[["BMW"],["AUDI"],[["X3","X5"],["Q1"."Q2"]]]
VM2145:1 Uncaught SyntaxError: Unexpected string
const cars=[["BMW"],["AUDI"],[["X3","X5"],["Q1"."Q2"]]];
VM2157:1 Uncaught SyntaxError: Unexpected string
const cars=[["BMW"],["AUDI"],[["X3","X5"],["Q1","Q2"]]];
undefined
i=0
0
cars[0][i]+"markas mašīna ir:"+cars[1][i]
'BMWmarkas mašīna ir:AUDI'
i++;
0
cars[0][i]+"markas mašīna ir:"+cars[0][i]
'undefinedmarkas mašīna ir:undefined'
cars[0][i]+"markas mašīnas ir:"+cars[1][i]
'undefinedmarkas mašīnas ir:undefined'