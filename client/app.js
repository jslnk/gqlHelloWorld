const GraphQL_ULR ='http://localhost:9000/';

async function fetchGreeting(){
    const response=await fetch(GraphQL_ULR, {
        method:'POST',
        headers:{
            'content-type':'application/json'            
        },
        body:JSON.stringify({
            query:`
            query{
                greeting
              }              
            `
        })
    });

    const {data} = await response.json();
   return data;
    // const responseBody = await response.json();
    // console.log(responseBody);
}

fetchGreeting().then(({greeting}) =>{
    const title = document.querySelector('h1');
    title.textContent = greeting;
});