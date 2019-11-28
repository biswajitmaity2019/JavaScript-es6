class humen{
  constructor(){
    this.gender='male';
    
  }
  printgender()
  {
    console.log(this.gender);
  }
}

class Person extends humen{
  constructor(){
    super();
    this.name='max';
    this.gender='female';
    
  }
  printname(){
    console.log(this.name);
  }
}
const person=new Person();
person.printname();
person.printgender();