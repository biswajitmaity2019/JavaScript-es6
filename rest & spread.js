//rest operator
const filter=(...args)=>{
  return args.filter(el=>el);
}
console.log(filter(1,2,3,4));

//spread operator
//array split up
const arr=[1,2,4,6,7];
const newarr=[...arr,9,5];
console.log(newarr);

//spread operator
//object split up
const person={
  name:'max'
};
const newperson={
  ...person,
  age:28
};
console.log(newperson);