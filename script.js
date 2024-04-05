// Replace this with your birth date and time in "YYYY-MM-DDTHH:MM:SS" format
const birthDate = "2001-09-09T05:05:00";
const parentsDOM = "2000-04-26T00:00:00";

function millisecondsToYears(milliseconds) {
    // Define the number of milliseconds in a year
    var millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

    // Calculate the number of years
    var years = milliseconds / millisecondsInYear;

    return years;
}

function updateClock(birthDate) {
    const now = new Date();
    const birthDateTime = (new Date(birthDate));//india do = -64803000
    const birthDateTime1 = (new Date(birthDate)) - 64803000;
    const elapsedTime = now - birthDateTime;
    const elapsedTime1 = now - birthDateTime1;
    const milliseconds = elapsedTime1;

    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60)) % 24;
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    // const birthYear = birthDateTime.getFullYear();
    // const currentYear = now.getFullYear();
    const age = millisecondsToYears(milliseconds);

    const timeString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    // const ageString = "";
    // if(age==1)
    // {
    //     ageString = `Age: ${age} year`;
    // }
    // else
    // {
    const ageString = `Age: ${age} years`;
    // }
    const PresentDayString = `Present Day : ${days+1}`;

    var UserName = "Siddu Ganesh Musa";
    document.getElementById('name').textContent = UserName;
   // document.getElementById('name').textContent = UserName;
    document.getElementById('time').textContent = timeString;
    if(age>=1)
    document.getElementById('age').textContent = ageString;
    else
    document.getElementById('age').textContent = "";
    document.getElementById('PresentDay').textContent = PresentDayString;
}

function updateClockP(parentsDOM) {
    const now = new Date();
    const birthDateTime = (new Date(parentsDOM));//india do = -64803000
    // const birthDateTime1 = (new Date(birthDate)) - 64803000;
    const elapsedTime = now - birthDateTime;
    // const elapsedTime1 = now - birthDateTime1;
    const milliseconds = elapsedTime1;

    const Pseconds = Math.floor(elapsedTime / 1000) % 60;
    const Pminutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    const Phours = Math.floor(elapsedTime / (1000 * 60 * 60)) % 24;
    const Pdays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    // const birthYear = birthDateTime.getFullYear();
    // const currentYear = now.getFullYear();
    const age = millisecondsToYears(milliseconds);

    const timeString = `${Pdays} days, ${Phours} hours, ${Pminutes} minutes, ${Pseconds} seconds`;
    // const ageString = "";
    // if(age==1)
    // {
    //     ageString = `Age: ${age} year`;
    // }
    // else
    // {
    const ageString = `Age: ${age} years`;
    // }
    const PresentDayString = `Present Day : ${days+1}`;

    var UserName = "Parents";
    document.getElementById('Pname').textContent = UserName;
   // document.getElementById('name').textContent = UserName;
    document.getElementById('Ptime').textContent = timeString;
    if(age>=1)
    document.getElementById('Page').textContent = ageString;
    else
    document.getElementById('Page').textContent = "";
    document.getElementById('PPresentDay').textContent = PresentDayString;
}

// Update the clock every second
setInterval(() => {
    updateClock(birthDate);
    updateClockP(parentsDOM);
}, 1000);

// Initial update
updateClock(birthDate);
updateClockP(parentsDOM);

