// define 4 functions 

// 2,3,4 add grade for a subject to the student object

// 1. create student object called createStudent()
//it should return a newStudentObject
//name and grade should be passed as function arguments
const createStudent = (name, grade) => {
    const newStudentObject = { 
        name: name,
        grade: grade
    }
    
    return newStudentObject
}

//calling the createStudent()function with parameters
//and storing in a variable called student
let student = createStudent("Lanna", "5th")
console.log(student)

const addMathGrade = (studentObject) => {
    studentObject.MathGrade = "B"

    return studentObject
}

//calling addMathcGrade()function and passing -student- as argument
// and storing in a variable called student math
let studentMath = addMathGrade(student)
console.log(studentMath)