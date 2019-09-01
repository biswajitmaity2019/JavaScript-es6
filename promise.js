var mypromise=Promise.resolve('Hoo');
    mypromise.then((res) =>console.log(res));

   var mypromise=new Promise(function(resolve, reject)
    {
        setTimeout(()=>resolve(10),1000);

    });
    mypromise.then((res)=>{
        res +=12;
        console.log(res);
    });