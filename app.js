const boxes = document.querySelector("#input-boxes");
const form = document.querySelector("#matrix-form");
const calculateButton = document.querySelector("#calculate");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const matrixLength = Number(event.target.children[0].value);
    boxes.innerHTML = ""; // Clear the box for new input fields

    // Create input fields based on matrix length
    for(let i = 0; i < matrixLength; i++) {
        for(let j = 0; j < matrixLength; j++) {
            boxes.innerHTML += `<input type="number" class="matrix-input" style="width: 30px;" value="0">`;
        } 
        boxes.innerHTML += '<br>';
    }
});

calculateButton.addEventListener("click", () => {
    let sum = 0;
    const inputs = document.querySelectorAll(".matrix-input");
    
    inputs.forEach(input => {
        sum += Number(input.value);
    });

    result.textContent = `The sum of all matrix elements is: ${sum}`;
});
