//test map & parseInt
console.log(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'].map(parseInt));

//test float calculate
console.log(0.1 + 0.2 == 0.3);

//test NaN
console.log(NaN == NaN);

// == & ===
console.log(1 == '1', 1 === '1');
console.log([1] == 1);

// toString
// console.log(1.toString());
console.log(1 .toString());
console.log(1.0 .toString());
console.log(1 .toString());

//JSON
var obj1 = {a:Infinity};
var obj2 = {a:function(){}};
var obj3 = {a:undefined};
console.log(JSON.stringify(obj1),JSON.stringify(obj2),JSON.stringify(obj3));

//+
console.log([1,2]+1);