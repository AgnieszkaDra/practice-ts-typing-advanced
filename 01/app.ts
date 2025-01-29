type ObjectItem = object;

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

function createCombinedObject<T extends ObjectItem, U extends ObjectItem>(obj: T, obj2?: U): T & U {
  const mergedObject = { ...obj, ...obj2 } as T & U;
  return mergedObject;
}

const mergedData = createCombinedObject(data, features); 
// const mergedData2 = createCombinedObject(data, fullName); 
console.log(mergedData);