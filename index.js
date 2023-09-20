// Code your solution in this file!

function distanceFromHqInBlocks(input){
    let result = Math.abs(input - 42)
    return result
}


function distanceFromHqInFeet(blocks){
    let blockDistance = distanceFromHqInBlocks(blocks)
    let feetAway = blockDistance * 264
    return feetAway
}
console.log(distanceFromHqInFeet(43))

function distanceTravelledInFeet(start, destination){
    let calculateBlock =    Math.abs(destination - start)
    let result = calculateBlock * 264
    return result
}

console.log(distanceTravelledInFeet(43, 48))

function calculatesFarePrice(pickup, dropoff){
    let distance = distanceTravelledInFeet(pickup, dropoff)
    let ans = distance

    let charges
    if (distance < 400){
        return 0
    }
    if (distance > 400 && distance <= 2000){
        let distanceCharged = distance - 400
        charges = 0.02 * distanceCharged
        return charges
    }
    if (distance > 2000 && distance <= 2500){
        return 25
    }
    if (distance  > 2500){
        return "cannot travel that far"
    }
}
console.log(calculatesFarePrice(34, 32))