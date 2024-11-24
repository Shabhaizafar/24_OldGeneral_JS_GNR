var myMap = new Map();
console.log(myMap);

// how to add new Property in a Map : 

            // key      value
myMap.set("Firstname","Raj");
myMap.set("Lastname","Shah");
myMap.set(1,123);

console.log(myMap);

//  how to clear/delete full data in a Map : 
// myMap.clear();
// console.log(myMap);


// how to delete specific proprty  : 
// myMap.delete("Zafar");// key 
// console.log(myMap);

// console.log(myMap.entries());
// console.log(myMap.keys());
// console.log(myMap.values());


// how to access specific property value : 
// console.log(myMap.get("Firstname"));

// console.log(myMap.size);

// 
// console.log(myMap.has("1"));

myMap.forEach((value,key,fullMap)=>{
    console.log(value,key,fullMap);
});








// 
// 1
// Basic Operations

// Create a Map to store the names of students and their corresponding grades. Add at least five entries. Retrieve and print all values.
// Write a function to check if a specific key exists in a Map.
// Write a function to delete a specific key-value pair from a Map.



// 2
// Transformations

// Given a Map of products and their prices, create a new Map where all prices are increased by 10%.
// Write a function to reverse the keys and values in a Map.