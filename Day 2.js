//1. Even or Odd Checker
const oddEvenChecker=(num)=>{
    if(num%2==0){
        console.log("Even")

    }else{
        console.log("odd")
    }
}
// console.log(oddEvenChecker(3))


//2.Grade Calculator

// Write a program that assigns a grade based on a score (e.g., 90+ = A, 80-89 = B, 70-79 = C, below 70 = F) using a ternary operator.

const gradeProgramme=(grade)=>{
const compare= (grade>=90) ?"A":(grade>=80)?"B":(grade>=70)?"C":(grade>=60) ?"D":"F"
console.log(compare)
}

// console.log(gradeProgramme(90))


//3 Leap Year Checker


const checkLeapYear=(year)=>{
const leapyear=(year%4==0 && year%100!==0 || year%400==0) ? "Leap Year" : "Not a Leap Year"
console.log(leapyear)
}
// console.log(checkLeapYear(2020))


// 5  Voting Eligibility Checker

const votingSystem=(age)=>{
    const aligiblePerson=age>=18?"Eligible for voting": "You are under 18 cannot vote"
    console.log(aligiblePerson)
}

// console.log(votingSystem(30))




