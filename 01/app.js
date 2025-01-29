"use strict";
const data = {
    name: "John",
    age: 30,
    location: "New York",
};
const features = {
    work: "Software Developer",
    experience: 5,
};
const cities = ["New York", "Los Angeles"];
const fullName = "John Doe";
function createCombinedObject(obj, obj2) {
    const mergedObject = Object.assign(Object.assign({}, obj), obj2);
    return mergedObject;
}
const mergedData = createCombinedObject(data, features);
// const mergedData2 = createCombinedObject(data, fullName); 
console.log(mergedData);
