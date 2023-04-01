const counter = document.querySelector(".count");
const inc = document.getElementById("increment");
const dec = document.getElementById("decrement");
const reset = document.getElementById("reset");

let count = 0;
inc.addEventListener("click",()=>{
    count++;
    counter.textContent = count;
});

reset.addEventListener("click",()=>{
    count=0;
    counter.textContent = count;
});

dec.addEventListener("click",()=>{
    count--;
    counter.textContent = count;
});
