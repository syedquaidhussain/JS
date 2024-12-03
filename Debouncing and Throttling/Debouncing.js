let counter =0 ;

function getData() {
    console.log("Fetching data",counter);
    counter++;

    
}

function Debounce(func,delay ) {
    let timer ;
    return ()=>{
  
        if(timer){
            // console.log(timer);
            clearTimeout(timer);
        }
        
        
        timer = setTimeout(()=>{
            func();
        },delay);
    }
     



}


const debounceCaller = Debounce(getData,2000);
  

    
