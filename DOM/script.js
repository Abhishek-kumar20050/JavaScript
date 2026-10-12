let btns = document.querySelectorAll("button");
// btn.onclick = function(){
//     console.log("button was clicked.")
//     alert("button was clicked.")
// }

for(btn of btns){
    // btn.onmouseenter = function(){
    //     console.log("Button was clicked 2")
    // }

    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayWelcome);
    btn.addEventListener("dblclick", function(){
        console.log("you clicked double");
    });
}

function sayHello(){
    console.log("Hello");
}

function sayWelcome(){
    console.log("Welcome");
}