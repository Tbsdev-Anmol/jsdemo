console.log("More Events");
let btn= document.getElementById('btn');

btn.addEventListener('click', func1);

function func1(e) {
console.log("Thanks", e);
e.preventDefault();

} 