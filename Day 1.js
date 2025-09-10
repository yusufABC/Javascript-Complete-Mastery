const personalInfo=(firstName,lastName,birthYear,currentAge,isStudent)=>{
let firstname=firstName;
let lastname=lastName;
let birthyear=birthYear;
let currentage=currentAge;
let isstudent=isStudent;

console.log(`First Name: ${firstname}\nLast Name: ${lastname}\nBirth Year: ${birthyear}\nCurrent Age: ${currentage}\nIsStudent: ${isstudent}`);
console.log(typeof firstname,typeof lastname,typeof birthyear,typeof currentage,typeof isstudent);  
}

console.log(personalInfo("Yusuf","Abdullah",1200,24,true))
