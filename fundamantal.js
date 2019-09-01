const pi=3.14;
let name="Harry Potter";
let age="30";
let option=true;
console.log(typeof(pi));
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(option));

let arraydata=[];
arraydata=["Harry","Clinton0","Thoms"];
console.log(arraydata);

let number=[1,4,7,2,9,3,45,6];
console.log(number[0]+number[1]);
console.log(number.sort());
number.push(21);
console.log(number);

let mix=["one",1,"two",2];
console.log(mix);
console.log(typeof(mix[0]));
console.log(typeof(mix[1]));

let pen={
    type:'pinpoint',
    color:'black',
    cost:20
}
console.log(pen.cost);

let hanry={
    age:30,
    school:'HDN',
    class:'MBA',
    subject:['finance','statistic','management']
}
console.log(hanry.subject[0]);

let user = {
    name: "John",
    age: 30
   };

let key = prompt("What do you want to know about the user?", "name");
console.log(key);
console.log(user[key]);
