class Car {
    start(){
        console.log("This car is ready to run");
    }
    stop(){
        console.log("This car is ready to stop");
    }
    setBrand(brand){
        this.brand = brand;
    }
}

let tata = new Car();
tata.start();
tata.setBrand("harrier");
console.log(tata)