let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
// set keeps only unique values
console.log( set.size ); // 3

set.forEach(element => {
    console.log(element.name);
});

for(let setvalue of set)
{
    console.log(setvalue.name);
} 


function unique(arr) {
    let uniquedata=new Set(arr);
    return uniquedata;
  }
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  let functiondata=unique(values);
  console.log(functiondata.size);
  for(let key of functiondata)
  {
      console.log(key);
  }
  
