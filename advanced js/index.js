// console.log("Hello, World!");
// console.log("This is the index.js file.");
// console.log("Welcome to the project!");
// console.log("Let's get started with coding!");
// console.log("Enjoy your coding journey!");
// console.log("Happy coding!");

// const add = (a, b) => a + b;
// console.log("2 + 3 =", add(2, 3));
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Data received");
//     }, 2000);
// });


// console.log("Starting the promise example...");

// myPromise.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// });



// console.log("ending the promise .");



//event loop

// fetch('https://jsonplaceholder.typicode.com/todos/100')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(error => console.error('Error fetching data:', error));




async function fetchData() {
let data=null
      try{
              const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                data = await response.json();
      }catch(error){
              console.error('Error fetching data:', error);

}


return data;
      
}


fetchData().then(data => console.log(data));



