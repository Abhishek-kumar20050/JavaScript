class Bank{
    roi(){
        console.log("RBI Interest rate: 4.2");
    }
}
class PNB extends Bank{
    roi(){
        console.log("PNB Interest rate: 6.2");
    }
}
class HDFC extends Bank{
    roi(){
        console.log("HDFC Interest rate: 8.2");
    }
}
class SBI extends Bank{
    roi(){
        console.log("SBI Interest rate: 7.2");
    }
}

// pnb
const p = new PNB();
p.roi();

// sbi
const s = new SBI();
s.roi();

// hdfc
const h = new HDFC();
h.roi();

