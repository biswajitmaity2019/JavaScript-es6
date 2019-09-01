let map1=new Map();
map1.set('2','string');
map1.set(2,'number');
map1.set(true,'boolean');
console.log(map1.get('2'));
console.log(map1.get(2));
console.log(map1.get(true));
console.log(map1.size);


let user={name:'john'};
let map2=new Map();
map2.set(user,'innerMap');
console.log(map2.get(user));


let mapdata=new Map([
    ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
])
for (let vegetableName of mapdata.keys()) {
    console.log(vegetableName); // cucumber, tomatoes, onion
  }
  for (let amount of mapdata.values()) {
    console.log(amount); // 500, 350, 50
  }
  for (let entry of mapdata.entries()) { 
    console.log(entry); // cucumber,500 (and so on)
  }
  mapdata.forEach((value,key,map)=>{
      console.log(`${key} : ${value} `);
  });


  let obj = {
    name: "John",
    age: 30
  };
  let map3 = new Map(Object.entries(obj));
  console.log( map3.get('name') ); 


  let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
  console.log(prices);
  console.log(prices.banana);