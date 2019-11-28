
let s=141;
var c ,sum=0,b;
c=s;
while(c>0)
{
 b=c%10;
sum=(sum*10)+b;
//console.log(sum);
c=Math.floor(c/10);
}
console.log(sum);
if(s==sum)
console.log("palindrom");
else
console.log("not palindrom");

