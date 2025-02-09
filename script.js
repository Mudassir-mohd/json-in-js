// Create an object
let user = {
    name: "mudassir",
    age: 23,
    email: "mudassirmohd9022@gmail.com"
};

// Convert the object to a JSON string
let userString = JSON.stringify(user);

// Store in localStorage
localStorage.setItem("userData", userString);

// OR store in sessionStorage
// sessionStorage.setItem("userData", userString);

// Retrieve and parse from storage
const retrievedData = JSON.parse(localStorage.getItem("userData"));
console.log(retrievedData);
