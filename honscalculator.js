const display = document.querySelector('.display');

const buttons = document.querySelectorAll('.second-div button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === 'C') {
      display.textContent ='';
      return;
    }
    if (button.textContent === '=') {
      try {
      display.textContent = eval(display.textContent);
      } catch {
        display.textContent = 'Error'
      };
      return;
    }

  console.log('clicked:' , button.textContent);
    display.textContent = display.textContent + button.textContent; }); });