let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");

let main = document.querySelector("main");

function b1Addh3(){
    let newE1 = document.createElement("h3");
    newE1.innerHTML = "foo";
    main.appendChild(newE1);
}

function b2Addh3() {
    let newE1 = document.createElement("h3");
    newE1.innerHTML = "bar";
    main.appendChild(newE1);
}

function b3Addh2() {
    let newE1 = document.createElement("h2");
    newE1.innerHTML= "foobar";
    main.appendChild(newE1);
}

b1.addEventListener("click", b1Addh3, false);
b2.addEventListener("click", b2Addh3, false);
b3.addEventListener("click", b3Addh2, false);
