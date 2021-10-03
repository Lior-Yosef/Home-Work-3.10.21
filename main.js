
//////////////////  1 //////////////////////

// let Ages=[23,10,99,34,24,5,17,43];

// let NewAges=[];

// for (ageItems of Ages){
//     if(ageItems>20)NewAges.push(ageItems)
// }
// console.log(NewAges);

////////////////////////////////////////////



//////////////////  2 //////////////////////

// let car={
//     color:"black",
//     year:2021,
//     model:"tesla"
// }

// for( carKey in car){
//     console.log(`${carKey}: ${car [carKey]}`);
// }


////////////////////////////////////////////


//////////////////  3 //////////////////////

// let names=["lior", "matan","marcos","haim"];
// let counter=0;
// let arrayWaitIndex=[];

// names.forEach((nameItems) => {
//     arrayWaitIndex.push(`${counter} ${nameItems}`)
//     counter++
// });

// console.log(arrayWaitIndex);

// ///////////////////// דרך שניה ///////////////////////


// let arrayIndex=[];
// for (let nameItem of names){
//     arrayIndex.push(`${counter}. ${nameItem}`)
//     counter++
// }
// console.log(arrayIndex);

////////////////////////////////////////////


//////////////////  4 //////////////////////

// let numbers=[23,10,99,34,24,5,17,43];
// let newNumbers=[]

// numbers.forEach((numberItems) =>{
//     if(numberItems%2==0)numberItems="even"
//     newNumbers.push(numberItems)
// })
// console.log(newNumbers);


////////////////////////////////////////////

//////////////////  5 //////////////////////

// const car={
//     color:"black",
//     year:2021,
//     model:"mercedes-benz"
// }
// for (let carKey in car){
//     document.write(`${[carKey]} : ${car [carKey]} <br>`);
// }


////////////////////////////////////////////


//////////////////  6 //////////////////////

//  const car={
//      color:"black",
//      year:2021,
//      model:"mercedes-benz"
//  }
//  for (let carKey in car){
//     console.log(`${[carKey]} : ${car [carKey]} Hi`);
//  }

////////////////////////////////////////////



//////////////////  7 //////////////////////

// const STUDENT=[
//     {
//         nameStudent:"lior",
//         age:24,
//         class:9
//     },
//     {
//         nameStudent:"avi",
//         age:19,
//         class:7
//     },
//     {
//         nameStudent:"eily",
//         age:16,
//         class:3
//     }
// ];

// const newArray=[]

// STUDENT.forEach((studentItems=>{
    
//     newArray.push(`${studentItems.nameStudent} "sir" ${studentItems.age} ${studentItems.class}`)
//         console.log(newArray);
    
// }))


////////////////////////////////////////////



//////////////////  7 //////////////////////

const student=[
    {
        nameStudent:"lior",
        age:24,
        class:9
    },
    {
        nameStudent:"avi",
        age:19,
        class:7
    },
    {
        nameStudent:"eily",
        age:16,
        class:3
    }
];

const newArray=[]

student.forEach((studentItems=>{
    if(studentItems.age>17)newArray.push(studentItems)
}))
console.log(newArray);

////////////////////////////////////////////