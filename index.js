// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//
const returnFirstTwoDrivers = function(array) {
    const newArray = drivers.slice(0,2)
    return newArray;  
}

//
const returnLastTwoDrivers = function(array) {
    const driver = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const lastArray = driver.slice(2,4)
    return lastArray;
}
//
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


//
const createFareMultiplier = function(n){
    return e => n * 5 
}
//
const fareDoubler = createFareMultiplier(4)

//
const fareTripler = createFareMultiplier(7.2)




const selectDifferentDrivers = (drivers, newFunction) => {
    return newFunction(drivers);
}

   


