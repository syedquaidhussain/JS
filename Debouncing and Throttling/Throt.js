
function myThrottle(func,delay)
{ 
    let flag=0;
    return  ()=>{
         const btn = document.getElementById("btn");
         btn.disabled= true;
         
           setTimeout(async()=>{
             
               flag=1;
               func()
          
            },delay)
         
            if(flag===1)
            {
                btn.removeAttribute("disabled");
            }
            

    }
}



const throt = myThrottle(()=>{
console.log("clicked");
document.getElementById("btn").disabled=false;

} ,2000);

