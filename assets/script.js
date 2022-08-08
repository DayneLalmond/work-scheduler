const today = moment();
// today is displayed in the currentday paragraph
$("#currentDay").text(today.format("MMM Do, YYYY"));

// saves variable for the auto displayed saving 
var saves = ['hourNine', 'hourTen', 'hourEleven', 'hourTwelve', 'hourOne', 'hourTwo', 'hourThree', 'hourFour', 'hourFive'];
// userInput variable array for the text within the forms
var userInput = ['textNine', 'textTen', 'textEleven', 'textTwelve', 'textOne', 'textTwo', 'textThree', 'textFour', 'textFive'];

// 9am
userInput.textNine = document.querySelector('#form1');
// the local storage key value pair is the ["9am"], ["10am"], etc. and the value of the text typed by the user
if (localStorage["9am"]) {
      userInput.textNine.value = localStorage["9am"];
}    
userInput.textNine.addEventListener("keyup", function() {
localStorage["9am"] = userInput.textNine.value;
saves.hourNine = $('#9');
saves.hourNine.text('Saved Changes').removeClass('badge-secondary').addClass('badge-success');
});

// 10am
userInput.textTen = document.querySelector('#form2');
if (localStorage["10am"]) {
      userInput.textTen.value = localStorage["10am"];
}    
userInput.textTen.addEventListener("keyup", function() {
localStorage["10am"] = userInput.textTen.value;
saves.hourTen = $('#10');
saves.hourTen.text('Saved Changes').removeClass('badge-secondary').addClass('badge-success');
});

// 11am
userInput.textEleven = document.querySelector('#form3');
if (localStorage["11am"]) {
      userInput.textEleven.value = localStorage["11am"];
}    
userInput.textEleven.addEventListener("keyup", function() {
localStorage["11am"] = userInput.textEleven.value;
saves.hourEleven = $('#11');
saves.hourEleven.text('Saved Changes').removeClass('badge-secondary').addClass('badge-success');
});

// 12pm
userInput.textTwelve = document.querySelector('#form4');
if (localStorage["12pm"]) {
      userInput.textTwelve.value = localStorage["12pm"];
}    
userInput.textTwelve.addEventListener("keyup", function() {
localStorage["12pm"] = userInput.textTwelve.value;
saves.hourTwelve = $('#12');
saves.hourTwelve.text('Saved Changes').removeClass('badge-secondary').addClass('badge-success');
});

// 1pm
userInput.textOne = document.querySelector('#form5');
if (localStorage["1pm"]) {
      userInput.textOne.value = localStorage["1pm"];
}    
userInput.textOne.addEventListener("keyup", function() {
localStorage["1pm"] = userInput.textOne.value;
saves.hourOne = $('#1');
saves.hourOne.text('Saved Changes').removeClass('badge-secondary').addClass('badge-success');
});

// 2pm
userInput.textTwo = document.querySelector('#form6');
if (localStorage["2pm"]) {
      userInput.textTwo.value = localStorage["2pm"];
}    
userInput.textTwo.addEventListener("keyup", function() {
localStorage["2pm"] = userInput.textTwo.value;
saves.hourTwo = $('#2');
saves.hourTwo.text('Saved Changes').removeClass('badge-secondary').addClass('badge-success');
});

// 3pm
userInput.textThree = document.querySelector('#form7');
if (localStorage["3pm"]) {
      userInput.textThree.value = localStorage["3pm"];
}    
userInput.textThree.addEventListener("keyup", function() {
localStorage["3pm"] = userInput.textThree.value;
saves.hourThree = $('#3');
saves.hourThree.text('Saved Changes').removeClass('badge-secondary').addClass('badge-success');
});

// 4pm
userInput.textFour = document.querySelector('#form8');
if (localStorage["4pm"]) {
      userInput.textFour.value = localStorage["4pm"];
}    
userInput.textFour.addEventListener("keyup", function() {
localStorage["4pm"] = userInput.textFour.value;
saves.hourFour = $('#4');
saves.hourFour.text('Saved Changes').removeClass('badge-secondary').addClass('badge-success');
});

// 5pm
userInput.textFive = document.querySelector('#form9');
if (localStorage["5pm"]) {
      userInput.textFive.value = localStorage["5pm"];
}    
userInput.textFive.addEventListener("keyup", function() {
localStorage["5pm"] = userInput.textFive.value;
saves.hourFive = $('#5');
saves.hourFive.text('Saved Changes').removeClass('badge-secondary').addClass('badge-success');
});