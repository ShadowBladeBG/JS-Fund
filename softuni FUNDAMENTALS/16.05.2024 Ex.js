// function ages(age) {
//     if (age>=0 && age<=2) {
//         console.log(`baby`);
//     }else if (age>=3 && age<=13) {
//         console.log(`child`);
//     }else if (age>=14 && age<=19) {
//         console.log(`teenager`);
//     }else if (age>=20 && age<=65) {
//         console.log(`adult`);
//     }else if (age>=66) {
//         console.log(`elder`);
//     }else console.log(`out of bounds`);
// }

// ages(1000)

// function rounding(num,precision) {
//     if (precision>15) {
//         precision=15
//     }
//     let roundedNum = num.toFixed(precision)
//     let trimmedNum=parseFloat(roundedNum)
//     // trimmedNum=parseFloat(num.toFixed(precision))
//     console.log(trimmedNum);
// }
// rounding(3.1415926535897932384626433832795,2)
// rounding(3.5,13)

// function division(num) {
//     if (num%10 === 0) {
//         console.log(`The number is divisible by 10`);
//     }else if (num%7 === 0) {
//         console.log(`The number is divisible by 7`);
//     }else if (num%6 === 0) {
//         console.log(`The number is divisible by 6`);
//     }else if (num%3 === 0) {
//         console.log(`The number is divisible by 3`);
//     }else if (num%2 === 0) {
//         console.log(`The number is divisible by 2`);
//     }else console.log(`Not divisible`);
// }

// division(1643)


// function vacAtion(ppl,type,day) {
//     let sum = 0
//     switch (type) {
//         case `Students`:
//             if (day === `Friday`) {
//                 sum=ppl*8.45
//                 if (ppl>=30) {
//                     sum=sum*0.85
//                 }
//             }else if (day === `Saturday`) {
//                 sum=ppl*9.80
//                 if (ppl>=30) {
//                     sum=sum*0.85
//                 }
//             }else if (day === `Sunday`) {
//                 sum=ppl*10.46
//                 if (ppl>=30) {
//                     sum=sum*0.85
//                 }
//             }
//             break;
//         case `Business`:
//             if (day === `Friday`) {
//                 if (ppl>=100) {
//                     ppl=ppl-10
//                 }
//                 sum=ppl*10.90
                
//             }else if (day === `Saturday`) {
//                 if (ppl>=100) {
//                     ppl=ppl-10
//                 }
//                 sum=ppl*15.60
//             }else if (day === `Sunday`) {
//                 if (ppl>=100) {
//                     ppl=ppl-10
//                 }
//                 sum=ppl*16
//             }
//             break
//         case `Regular`:
//             if (day === `Friday`) {
//                 sum=ppl*15
//                 if (ppl>=10 && ppl<=20) {
//                     sum=sum*0.95
//                 }
//             }else if (day === `Saturday`) {
//                 sum=ppl*20
//                 if (ppl>=10 && ppl<=20) {
//                     sum=sum*0.95
//                 }
//             }else if (day === `Sunday`) {
//                 sum=ppl*22.50
//                 if (ppl>=10 && ppl<=20) {
//                     sum=sum*0.95
//                 }
//             }
//             break
//         default:
//             break;
//     }
//     console.log(`Total price: ${sum.toFixed(2)}`);
// }

// vacAtion(30,"Students","Sunday")
// vacAtion(40,"Regular","Saturday")
// vacAtion(110,`Business`,`Sunday`)

//function leapYear(year) {
//    if (year%4 === 0 && year%100 !== 0) {
//        console.log(`yes`);
//    }else if(year%400===0){
//        console.log(`yes`);
//    }else console.log(`no`);
//}

//leapYear(1900) // 1900 ne e visokosna ... the more you know

// function sumOfPrint(num1,num2) {
//     let line=``
//     let sum=0
//     for (num1; num1 <=num2; num1++) {
//         sum+=num1
//         line+=num1+` `
//     }
//     console.log(line);
//     console.log(`Sum: ${sum}`);
// }
// sumOfPrint(50, 60)

// function triangleOfNums(num) {
//     for (let i = 1; i <= num; i++) {
//         let list = ""
//         for (let j = 1; j <= i; j++) {
//             list+=i + ` `
//         }
//         console.log(list);
//     }
// }
// triangleOfNums(6)

// function multTable(times) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${times} X ${i} = ${i*times}`);
//     }
// }
// multTable(100)

//-------------------------------------------------------------------------------------

//zad 9

// function login(input) {
//     const password =  Array.from(input[0]).reverse().join("");
//     for (let i = 1; i <= 4; i++) {
//         let check = input[i]
//         if (check===password) {
//             console.log(`User ${input[0]} logged in.`);
//             return
//         }else if (i<4) {
//             console.log(`Incorrect password. Try again.`);
//         } 
//     }
//     console.log(`User ${input[0]} blocked!`);
// }

// login(['Acer','login','go','let me in','recA'])
// login(['momo','omom'])
// login(['sunny','rainy','cloudy','sunny','not sunny'])



