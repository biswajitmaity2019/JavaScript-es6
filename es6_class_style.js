class humen{
  
    gender='male';
    
  
  printgender=()=>{
    console.log(this.gender);
  }
}

class Person extends humen{
 
    name='max';
   gender='female';
    
 
  printname=()=>{
    console.log(this.name);
  }
}
const person=new Person();
person.printname();
person.printgender();