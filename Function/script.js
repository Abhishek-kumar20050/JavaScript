// function hello(){
//     console.log("say hello");
// }

// hello()

// function isAdult(){
//     let age = 10;
//     if(age >= 18){
//         console.log("adult");
//     }else{
//         console.log("not adult");
//     }
// }

// isAdult();

// function table(n){
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }
// table(2);

// // Arrow Function
// const addArrow = (a, b) => {
//   return a + b;
// };

// console.log(addArrow(2,2));

//Higher order fn

// let greet = function(){
//     console.log("namaste");
// }

// let call = function(func, count){
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }

// call(greet, 100)

// this keyword
let student = {
    name: "Abhishek",
    age: 22,
    math: 100,
    eng: 97,
    phy: 98,

    getAvg(){
        let avg = (this.math + this.eng + this.phy) / 3;
        console.log(avg);
    }
}

// student.getAvg()


let id = setInterval(()=>{
    console.log("Hello world");
}, 2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("clearInterval called");
}, 12000)
