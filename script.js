// --- Part 2: Functions ---
let counter = 0;

function multiply(a, b) {
  return a * b;
}

function incrementCounter() {
  let localMessage = "Incrementing..."; // local scope
  counter++;
  console.log(localMessage, "Global counter is now:", counter);
  alert(localMessage + " Counter = " + counter);
}


// --- Part 3: JS + CSS ---
function animateBox() {
  const box = document.getElementById("myBox");
  box.classList.toggle("animate");
}

function toggleModal() {
  const modal = document.getElementById("myModal");
  modal.classList.toggle("show");
}
