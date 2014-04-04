//JavaScript Exercise from Nashville Software School
//
//Exercise: Create a multidimensional array to store the names and grades of 10 students. Then write a function that calculates the average grade of the class. Then write a function that turns that number grade into a letter grade.

var students = [
  ["Alice", 56],
  ["Brandon", 80],
  ["Casey", 67],
  ["Dominic", 78],
  ["Elise", 89],
  ["Fred", 91],
  ["Gayle", 65],
  ["Harrison", 99],
  ["Isla", 77],
  ["Jamison", 59]
];

var totalScore = 0;
  var gradeAverage;
  var gradeLetter;

for (var i = 0; i < students.length; i++) {
  totalScore += students[i][1];
};

gradeAverage = totalScore / students.length;

if (gradeAverage >= 90) {
  gradeLetter = "A";
} else if (gradeAverage >= 80) {
  gradeLetter = "B";
} else if (gradeAverage >= 70) {
  gradeLetter = "C";
} else if (gradeAverage >= 60) {
  gradeLetter = "D";
} else {
  gradeLetter = "F";
};

//Write out grade average and grade letter
console.log("<center><p>Grade Average:" + " " + gradeAverage.toFixed(0) + " "  + "</p></center>");

console.log("<center><p>Grade Letter:" + " " + gradeLetter + "</p></center>");

//List students
var linebreak = "<br />";
console.log(linebreak);
for (i = 1; i < students.length; i++) {
  console.log("Student " + i + " =" + " " + students[i]);
};