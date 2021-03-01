const inputs = document.querySelectorAll('.controls input');

function handleUpdate () {
const suffix = this.dataset.sizing ||''; //This is defined where the function is called in an arrow function
document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

