const students = [
    { name: 'Alice', age: 20, grade: 85 },
    { name: 'Bob', age: 22, grade: 90 },
    { name: 'Charlie', age: 21, grade: 78 },
    { name: 'Diana', age: 23, grade: 95 },
  ];
  
  // 1. Log each student’s name and grade
students.forEach((student)=> console.log(student))
const gradeChecker = students.filter((student)=> student.grade>80)
console.log(gradeChecker)