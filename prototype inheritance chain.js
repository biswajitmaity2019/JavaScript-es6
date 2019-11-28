let job=function(){
this.i=true;

};

job.prototype.getresult=function(){
console.log(this.i?'Please hire me':'No thank you');
}; 
let techjob=function(tittle,i){
job.call(this);
this.tittle=tittle;
this.i=i;
};

techjob.prototype=Object.create(job.prototype);
techjob.prototype.constructor=techjob;

techjob.prototype.getresult=function(){
console.log(this.i? this.tittle+'job is great, Please hire me':'I will further learn javascript');
}; 

/* Object.prototype.getresult=function(){
console.log('I am executing from the master object');
}; */

let x1=new techjob('javascript programer', true);
let x2=new techjob('C# programer', false);

console.log(x1.getresult());
console.log(x2.getresult());
