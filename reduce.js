  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
//acc - accumulator, curr - current value
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr);

console.log(sum);



//Summing an array of numbers specifying an initial value for accumulator
//Though it's technically optional, as an advanced  JavaScript developer you should always specify the  
//initial value to use for the accumulator in order to be explicit with your intentions.
//As you’ll see in the next video, not doing so can lead to  unexpected behavior and strange bugs in your code.  

const nums2 = [0, 1, 2, 3, 4];
let sum2 = nums2.reduce((acc, curr) => {
  return acc + curr;
}, 10);

console.log(sum2);




const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property

let totalYrs = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalYrs);


// Grouping by a property, and totaling it too
// {Developer:12, Designer: 4} <-- this is what we want!
//I’ll create a new variable called experienceByProfession and set it to teamMembers.reduce, 
//with an arrow  function and our initial value of an empty object.  
//I’m using the longer arrow function form here which includes curly braces since this function  
//will be a few lines of code and will need a return statement. Just to be crystal clear, this first  
//set of curly braces is the boundaries of the callback function, and the second set after the  
//comma is our initial value, an empty object. This is what the accumulator will be on the first pass.
//if you dont specify an initial acccumulator value it will default to the first element in the array.
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if(!acc[key]){
    acc[key] = curr.yrsExperience;
  }
  else{
    acc[key] += curr.yrsExperience;
  }
  return acc;

}, {}); 

console.log(experienceByProfession);
