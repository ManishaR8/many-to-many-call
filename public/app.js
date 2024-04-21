let button = document.querySelectorAll('button')[0]
let container = document.querySelector('.container');

button.addEventListener("click", function(){
    console.log("line 4", button);
    container.style.display = "none";
})

