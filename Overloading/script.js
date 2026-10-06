// Function Overloading
function print(){
    console.log("hello");
}

function print(name){
    console.log(name);
}

function print(name, age){
    console.log(name, "age is ", age);
}

print();
print("Abhishek");
print("Abhishek", 21);


// Function Overriding

class Animal{
    sound(){
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal{
    sound(){
        console.log("Dog barks");
    }
}

// let dog = new Dog();
// dog.sound();