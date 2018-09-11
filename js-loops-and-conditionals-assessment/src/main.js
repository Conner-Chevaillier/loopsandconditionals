// Write a for loop that will print only even numbers from an array:
// For example: question0([ 5, 20, 11, 42, 2, 19 ]) >> [ 20, 42, 2 ]
var a = [5, 20, 11, 42, 2, 19];

var evenNumbers = function (nums) {
  var numberEven = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      numberEven.push(nums[i])
    }
  }
  console.log(numberEven)
}


function question0(array) {


  // Write your code here! Make sure not to modify the function
  // declaration above or the `module.exports` code below
}

// Write a for loop that doubles each number in the following array. If the
// resulting number is greater than 12, print it to the console:
// For example: [ 2, 4, 8, 16 ] would print the numbers 16 and 32

function question1(array) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] * 2 > 12) {
      console.log(array[i] * 2)

    }

  }
}
question1([2, 4, 8, 16])

// Write your code here! Make sure not to modify the function
// declaration above or the `module.exports` code below


// Write a for loop to iterate over every element in the following array:
// [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun' ]

var days = ['Mon'];
switch (days) {
  case 'Mon':
    console.log("I hate Mondays more than Garfield.");
    break;
  case 'Tues':
  case 'Wed':
  case 'Thurs':
    console.log("everyone is working for the weekend.");
    break;
  case 'Fri':
    console.log("Almost there...");
    break;
  case 'Sat':
  case 'Sun':
    console.log("Yay, it's the weekend");
}


// Using a switch statement, do the following:
// - If the day is on a weekend, print "Yay, it's the weekend!"
// - If the day is Friday, print "Almost there..."
// - If the day is Monday, print "I hate Mondays more than Garfield."
// - Otherwise, print "Everybody's working for the weekend."

function question2(array) {
  // Write your code here! Make sure not to modify the function
  // declaration above or the `module.exports` code below
}

module.exports = {
  question0,
  var a = [5, 20, 11, 42, 2, 19];

  var evenNumbers = function (nums) {
    var numberEven = [];
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
        numberEven.push(nums[i])
      }
    }
    console.log(numberEven)
  }
  question1,
  function question1(array) {

    for (let i = 0; i < array.length; i++) {
      if (array[i] * 2 > 12) {
        console.log(array[i] * 2)

      }

    }
  }
  question1([2, 4, 8, 16])
  question2
  var days = ['Mon'];
  switch (days) {
    case 'Mon':
      console.log("I hate Mondays more than Garfield.");
      break;
    case 'Tues':
    case 'Wed':
    case 'Thurs':
      console.log("everyone is working for the weekend.");
      break;
    case 'Fri':
      console.log("Almost there...");
      break;
    case 'Sat':
    case 'Sun':
      console.log("Yay, it's the weekend");
  }
}