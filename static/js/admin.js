let neg = localStorage.getItem('user1-neg') || 0;
let pos = localStorage.getItem('user1-pos') || 0;
let circ_time = localStorage.getItem('time-circ');
let circ_pos = localStorage.getItem('user1-pos-circ') || 0;
let circ_neg = localStorage.getItem('user1-neg-circ') || 0;

const displayElement = (elementId, value) => {
  document.getElementById(elementId).textContent = value;
};

let right_attempts = 100 - parseInt(neg); // Assuming the total attempts are 100

// Display the number of right and wrong attempts for the box exercises
displayElement('right-ans', `Right attempted: ${right_attempts}`);
displayElement('wrong', `Wrong attempted: ${neg}`);

// Display the number of right and wrong attempts for the circular exercises
displayElement('right-ans-circ', `Right attempted: ${circ_pos}`);
displayElement('wrong-circ', `Wrong attempted: ${circ_neg}`);

// Assuming you want to display time (if stored) - replace 'time' with the correct storage key
let timeTakenElement = document.getElementById('time-taken');
let circ_time_elm= document.getElementById('time-taken-circ');

let time = localStorage.getItem('time');
displayElement('time-taken', time ? `Time Taken: ${time}` : 'Time Taken: Not available');
displayElement('time-taken-circ', circ_time ? `Time Taken: ${circ_time}` : 'Time Taken: Not available');