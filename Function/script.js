function hello(){
    console.log("say hello");
}

hello()


function isAdult(){
    let age = 10;
    if(age >= 18){
        console.log("adult");
    }else{
        console.log("not adult");
    }
}

isAdult();

function table(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}
table(2);