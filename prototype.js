let x=function(j){
this.i=0;
this.j=j;

/* this.getj=function(){
return this.j;
}; */
};

x.prototype.getj=function(){
return this.j;
};

let x1=new x(1);
let x2=new x(2);

console.log(x1.getj());
console.log(x2.getj());