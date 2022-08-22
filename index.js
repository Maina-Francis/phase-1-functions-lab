// Code your solution in this file!

function distanceFromHqInBlocks(location) {
  let scuberHq = 42;
  if (location >= scuberHq) {
    return location - scuberHq;
  } else {
    return scuberHq - location;
  }
}

function distanceFromHqInFeet(location) {
  let blocks = distanceFromHqInBlocks(location);
  return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start >= destination) {
    return (start - destination) * 264;
  } else {
    return (destination - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let feet = distanceTravelledInFeet(start, destination);
  if (feet <= 400) {
    return 0;
  } else if (feet <= 2000) {
    return (feet - 400) * 0.02;
  } else if (feet > 2000 && feet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

console.log(calculatesFarePrice(43, 51));
