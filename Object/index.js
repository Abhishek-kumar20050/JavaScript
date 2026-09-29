const employ = {
    calTax(){
        console.log("Your tax is 10%");
    }
}

const pawan = {
    salary: 10000,
}

pawan.__proto__ = employ;
pawan.calTax();