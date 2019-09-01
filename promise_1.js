function getdata(method, url)
{
    return new Promise(function(resolve, reject)
    {
        var xhr= new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload=function(){
            if(this.status>=200 && this.status<300)
            {
                resolve(xhr.response);

            }
            else
            {
                reject({
                    status:this.status,
                    statusText:this.statusText
                });
            }
        };
        xhr.send();
    });
}
getdata('GET', 'https://jsonplaceholder.typicode.com/todos').then(function(data){
  let todes=JSON.parse(data);
  let output='';
  for(let todo of todes)
  {
      output +=`
      <li>
      <h3>${todo.title}</h3>
      <p>Completed : ${todo.completed}</p>
      </li>
      `
      document.getElementById('data').innerHTML=output;
  }
  console.log(data);

}).catch(function(err){
    console(err);
});