
// without use spreed operator
let x=function(){
console.log(arguments[0]+' '+arguments[3]);
};
x('hello',2,3,4);

//use spreed operator
let x1=function(a,b,...n){
console.log(a+' '+b+' '+n[2]);
};
x1(1,2,'hello',4,'hi',6);




