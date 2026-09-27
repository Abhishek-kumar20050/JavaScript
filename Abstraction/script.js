class CoffeeMachine{
    #startMachine(){
        return "Start the machine";
    }

    #brewCoffee(){
        return "Brewing coffee";
    }

    makeCoffee(){
        this.#startMachine();
        this.#brewCoffee();
        return "Coffee is ready";
    }
}

let drink = new CoffeeMachine();
console.log(drink.makeCoffee());