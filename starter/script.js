// * Display the current day at the top of the calender when a user opens the planner. # because it's an id. $ identifier, identifies object in the same way that a name or variable does. variables, functions, properties, events, and objects can be identified by the $ sign - codedamn definition.
 var currentDayEl = $("#currentDay"); 

 //set it as a function so that it actually displays

 function displayTime () {
    var now = moment("DD-MM-YY").format("MMMM Do, YYYY", "h:mm:ss a");
    currentDayEl.text(now);
 }

 displayTime ();
// * Present timeblocks for standard business hours when the user scrolls down.
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page



