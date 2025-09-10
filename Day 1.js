// Exercise 1: Personal Information

const personalInfo=(firstName,lastName,birthYear,currentAge,isStudent)=>{
let firstname=firstName;
let lastname=lastName;
let birthyear=birthYear;
let currentage=currentAge;
let isstudent=isStudent;

console.log(`First Name: ${firstname}\nLast Name: ${lastname}\nBirth Year: ${birthyear}\nCurrent Age: ${currentage}\nIsStudent: ${isstudent}`);
console.log(typeof firstname,typeof lastname,typeof birthyear,typeof currentage,typeof isstudent);  
}

// console.log(personalInfo("Yusuf","Abdullah",1200,24,true))


// Exercise 2: Data Type Detective

const dataTypeDetective=(value1,value2,value3,value4,value5)=>{

    let myStr=`type of ${value1} = ${typeof value1}
                typeoof ${value2} = ${typeof value2}
                typeoof ${value3} = ${typeof value3}
                typeoof ${value4} = ${typeof value4}
                typeoof ${value5} = ${typeof value5}
    `
    console.log(myStr)
}

// console.log(dataTypeDetective("Hello",42,true,null,undefined));



// Exercise 3: Math Operations

const myCalculator=(value1,value2)=>{
    const sum=value1+value2
    const sub=value1-value2
    const multi=value1*value2
    const divide=value1/value2
    const reminder=value1%value2
    console.log(`
        Sum =${sum}
        Subtract =${sub}
        Multiply =${multi}
        Divide =${divide}
        reminder =${reminder}
        
        `)   
}

console.log(myCalculator(2,3))

