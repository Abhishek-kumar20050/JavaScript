// class Parent{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
// }
// class Child extends Parent{

//     // constructor(name, email){
//     //     super(name, email);
//     // }
//      hello(){
//         console.log("hello");
//     }
// }

// let obj = new Child("Abhi", "abhi@gmail.com");
// console.log(obj);
// obj.hello();

// multiple inheritance
const Father = {
    work(){
        console.log("Father can work");
    }
}

const Mother = {
    cook(){
        console.log("Mother cooking food");
    }
}

class Child{
    baby(){
        console.log("baby is weeping")
    }
}

Object.assign(Child.prototype, Father, Mother);

let child = new Child();
child.work();
child.cook();
child.baby();

