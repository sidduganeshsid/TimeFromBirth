const now = new Date()
console.log(now);
const birthDate = "2001-09-09T00:00:00";
const birthDateTime = new Date(birthDate);
const elapsedTime = (now - birthDateTime);
console.log(elapsedTime);


function millisecondsToYears(milliseconds) {
    // Define the number of milliseconds in a year
    var millisecondsInYear = 1000 * 60 * 60 * 24 * 365;

    // Calculate the number of years
    var years = milliseconds / millisecondsInYear;

    return years;
}

// Example usage

console.log(years);
