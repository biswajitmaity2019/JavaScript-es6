let arr=['Suman','Roy'];
let [firstname, surname]=arr;
//let firstname=arr[0], surname=arr[1];
console.log(`${firstname}  ${surname}`);

let user={};
[user.fname, user.lname]="Rohit Das".split(' ');
console.log(`${user.fname}  ${user.lname}`);


let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  
  console.log(title);  
  console.log(width);  
  console.log(height); 


  let matadata={
      subject:'Scratchpad',
      translations:[
          {
              last_edit:'2016/08/23',
              url:'/doc/docs/tools/scratchpad',
              topic:'javascript language'
          }
      ],
      activation:true
  };
  let {subject,translations:[{last_edit,url,topic}],activation}=matadata;
  console.log(`${subject}  ${last_edit}  ${activation}`);


  const users=[
      {name:'Suman', age:22},
      {name:'Rahul', age:25}
  ]
  for(const {name,age} of users)
  {
      console.log(`${name}   ${age}`);
  }