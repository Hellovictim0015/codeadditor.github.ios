const codeInput = document.getElementById('codeInput');

// Save the user's code input to local storage
codeInput.addEventListener('input', () => {
  localStorage.setItem('userCode', codeInput.value);
});

// Load the user's code input from local storage on page load
window.addEventListener('load', () => {
  const savedCode = localStorage.getItem('userCode');
  if (savedCode) {
    codeInput.value = savedCode;
  }
});

var button = document.getElementById("Darkbtn");
        Darkbtn.addEventListener("click", ()=>{
            document.body.classList.toggle("Darkmode")
        })