

//variables
const form = document.getElementById('iits-formSubmit');
const userinput = document.getElementById('iits-inp');

// preventdefault
form.addEventListener('submit', function(p) {
  p.preventDefault();

  const arif = parseInt(userinput.value);

  //alert massage for invalid input
  if (isNaN(arif) || arif < 0 || arif > 100) {
    alert('Please enter a valid number between 0 and 100.');
    return;
  }

  //value storing string
  userinput.value = '';

  // condition required for that code
  let result;
  if (arif >= 81 && arif <= 100) {
    result = 'a';
  } else if (arif >= 71 && arif <= 80) {
    result = 'bp';
  } else if (arif >= 61 && arif <= 70) {
    result = 'b';
  } else if (arif >= 51 && arif <= 60) {
    result = 'bm';
  } else if (arif >= 40 && arif <= 50) {
    result = 'c';
  } else {
    result = 'f';
  }

  // number of grades increment
  const gradenumbers = document.getElementById('iits-' + result + '_count');
  gradenumbers.textContent = parseInt(gradenumbers.textContent) + 1;
});