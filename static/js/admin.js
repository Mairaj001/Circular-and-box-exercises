let neg = localStorage.getItem('user1-neg');
let pos = localStorage.getItem('user1-pos');

if(pos == 100)
{
   right_attempts=0;
}
else{
    right_attempts=100;
}


let right_attempts = 100 - parseInt(neg || 0); // Assuming the total attempts are 100


// Select the elements in your HTML where you want to display the scores
let rightAttemptedElement = document.getElementById('right-ans');
let wrongAttemptedElement = document.getElementById('wrong');
let timeTakenElement = document.getElementById('time-taken');

// Display the number of right and wrong attempts
rightAttemptedElement.textContent = `Right attempted: ${right_attempts}`;
wrongAttemptedElement.textContent = `Wrong attempted: ${neg || 0}`;

// Assuming you want to display time (if stored) - replace 'time' with the correct storage key
let time = localStorage.getItem('time');
timeTakenElement.textContent = time ? `Time Taken: ${time}` : 'Time Taken: Not available';
