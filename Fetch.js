/*
async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data)
    }
    
    getData();

*/

    // Basic Syntax 

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error)
    );


//Post Request
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
      })
        .then(response => response.json())
        .then(data => console.log("data is ",data))
        .catch(error => console.error('Error:', error));
     
        //eg3 
        async function fetchData() {
            try {
              const response = await fetch('https://jsonplaceholder.typicode.com/posts');
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              const data = await response.json();
              console.log(data);
            } 
            catch (error) {
              console.error('Error:', error);
            }
          }
          
          fetchData();
          


        //   Note
        // Use .json() for JSON responses and .text() for plain text.


     