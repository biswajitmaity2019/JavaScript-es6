function* gl(){
    console.log("Hello");
    yield 1;
    console.log("world");
    yield 2;
    return "Returned...";
    
   }
   var gg = gl();
   console.log(gg.next().value);
   console.log(gg.next().value);
   console.log(gg.next().value);
   console.log(gg.next().value);
   /*
   for(let g of gg)
    {
      console.log(g);
   }
   */