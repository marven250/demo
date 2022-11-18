const personData = [
    {id:1, name: "Ronaldo P.", age: 30},
    {id:2, name: "Pablo E.", age: 20},
    {id:3, name: "Michael J.", age: 40},
    {id:4, name: "Messi L.", age: 50},
    {id:5, name: "Sarah K.", age: 34},
    {id:6, name: "Sandra P.", age: 28},
    {id:7, name: "Liz F.", age: 41}
];

const carData = [
    {id:1, userId:6, make: "Toyota", model: "Tundra", year: 2022},
    {id:2, userId:4, make: "Honda", model: "Accord", year: 2020},
    {id:3, userId:1, make: "Hyundai", model: "Elantra", year: 2018},
    {id:4, userId:2, make: "Acura", model: "Ilx", year: 2019},
    {id:5, userId:7, make: "Honda", model: "Civic", year: 2023}
];

const listCars = () => {
    return [...carData] 
  }; 
  
const findCar = (id) => {
    const post = carData.find(post => post.id == id);
    return {...post};
  }

  const listPeople = () => {
    return [...personData] 
  }; 
  
const findPerson = (id) => {
    const post = personData.find(post => post.id == id);
    return {...post};
  }


module.exports = {
    listCars,
    findCar,
    listPeople,
    findPerson
};