let s=a=>a*a;
console.log(s(2));

let ss=(a)=>{return a*3};
console.log(ss(2));

//use function keyword
let s1=function(){
let that=this;
this.val=1;
setTimeout(function(){
that.val++;
console.log(that.val);
});
};
let sss=new s1();
//s();

//use arrow  function
let s2=function(){
this.val=1;
setTimeout(()=>{
this.val++;
console.log(this.val);
});
};
let ssss=new s2();