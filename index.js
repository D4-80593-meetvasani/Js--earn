var myName = 'Meet Vasani';
var myAge = 26;

console.log(myName);
console.log(myAge);

// var a=5;
// var b=10;
// console.log(a);
// console.log(b);
// var t=b;
// b=a;
// a=t
// console.log(a);
// console.log(b);

// var a=5;
// var b=10;
// console.log(a);
// console.log(b);
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a);
// console.log(b);

// var myFriends=['nirmal','sanskar','jayesh','saad']

// // myFriends.forEach(function(element,index,array){
// //     console.log(element + " indeXX :" + index + " array : " +array);
// // });

// myFriends.forEach((element,index,array) => {
//     console.log(element + " indeXX :" + index + " array : " +array);
// });

// const Price=[200,300,350,400,500,600,700,800];

// const newPrice = Price.filter((elem, index)=>{
//     return elem >= 400;
// })
// console.log(newPrice);


// const animals=['meet','nirmal','sanskar']

// console.log(animals.shift);

// const months = ['Jan','march','April','June','July']

// const IndexofMonth = months.indexOf('march')
// const IndexofMonth2 = months.indexOf('June')

// if (IndexofMonth != -1) {

//     const newMonth = months.splice(IndexofMonth,1,"March");
// }else{
//     console.log("No Data Found");
// }
// if (IndexofMonth2 != -1) {

//     const newMonth = months.splice(IndexofMonth2,1);
// }else{
//     console.log("No Data Found");
// }

// const newMonth = months.splice(5,0,"Dec");
// console.log(months);
// console.log(newMonth);

// let arr=[25,36,49,64,81];

// let newArr=arr.map((curElm,index,arr)=>{
//     return `Squareroot of ${curElm} at index ${index} is ${Math.sqrt(curElm)}`
// })

// console.log(newArr);

// let arr=[2,3,4,6,8];

// let newArr= arr.map((currElm,index,array)=>{


//         return 2*currElm


// }).filter((currElem)=>{ return currElem>10}).reduce((accumulator,currElemm)=>
// {return accumulator += currElemm })
// console.log(newArr);

// myTweet= "RIP to nightingale of India Lata Mangeshkar Ji....May her soul rest in piece  "

// myActualTweet = myTweet.slice(0,46)
// console.log(myActualTweet);
// console.log(myActualTweet.length);

// let curDate = new Date();
// console.log(curDate);

// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

// (function(){
//         setInterval(() => {
//         var d= new Date().toLocaleTimeString();
//         document.getElementById("demo").innerHTML=d;
// }, 1000)
// })();

// let bioData ={
//     myName:"meet",
//     myAge:20,
//     myPlace:"Valsad",

//     getData : function () {
//         console.log(`My name is ${bioData.myName}, my age is ${bioData.myAge} and i am from ${bioData.myPlace}`);
//     }
// }
// getData()

// console.log(this);

// const BioData = ['meet' , 'vasani ' ,20]
// let[Fname,lname,age,myDegree="cs"]= BioData;
// console.log(myDegree);

// let colors = ["red",'green','blue','pink']
// let myFavcolors = [ ...colors,'yellow','black']
// console.log(myFavcolors)

// let oldNum=Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(9007199254740991n+12n);


// const add = (a,b) => {
//     return a+b;
// }
// const sub = (a,b) => {
//     return Math.abs(a-b);
// }
// const div = (a,b) => {
//     return a/b;
// }

// const calculator = (num1,num2,operator)=>{
//     return operator(num1,num2);
// }
// console.log(calculator(5,2,div));

// const sum = (num1)=>(num2)=>(num3)=>console.log(num1+num2+num3);
// sum(5)(2)(3);





// setTimeout(() => {
//     console.log("1 works is done");
//     setTimeout(()=>{
//         console.log("2 works is done");
//         setTimeout(() => {
//             console.log("3 works is done");
//             setTimeout(() => {
//                 console.log("4 works is done");
//                 setTimeout(() => {
//                     console.log("5 works is done");
//                     setTimeout(() => {
//                         console.log("6works is done");
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)










