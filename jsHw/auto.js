const car = {
    manufacturer: "Toyota",
    model: "Camri",
    year: 2022,
    averageSpeed: 70, 
};

function displayCarInfo(car) {
    console.log(`Manufacturer: ${car.manufacturer}`);
    console.log(`Model: ${car.model}`);
    console.log(`Year: ${car.year}`);
    console.log(`Average Speed: ${car.averageSpeed} mph`);
}

function calculateTravelTime(distance) {
    const hours = distance / car.averageSpeed;
    const restPeriods = Math.floor(hours / 4);
    const totalTime = hours + restPeriods; 
    return totalTime;
}
displayCarInfo(car);
const distance = 200;
const travelTime = calculateTravelTime(distance);
console.log("Time to trave ${distance} and miles ${travelTime} hours");