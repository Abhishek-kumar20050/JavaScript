class Parent{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}
class Child extends Parent{
    
    // constructor(name, email){
    //     super(name, email);
    // }
     hello(){
        console.log("hello");
    }
}

let obj = new Child("Abhi", "abhi@gmail.com");
console.log(obj);
obj.hello();
