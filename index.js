// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const input = document.getElementById('input');
const position = input.selectionStart;

// If the position of the cursor is at the very last character inside the input,
// this will result in 3
//alert(position);

document.getElementById('trigger').addEventListener(
  'click',
  function () {
    var myElement = document.getElementById('text-element');
    var startPosition = myElement.selectionStart;
    var endPosition = myElement.selectionEnd;

    // Check if you've selected text
    if (startPosition == endPosition) {
      alert(
        'The position of the cursor is (' +
          startPosition +
          '/' +
          myElement.value.length +
          ')'
      );
    } else {
      alert(
        'Selected text from (' +
          startPosition +
          ' to ' +
          endPosition +
          ' of ' +
          myElement.value.length +
          ')'
      );
    }
  },
  false
);
const getCode = (e) => {
  e = e || window.event;
  return e.code;
};
var BK_SB_DEL = ['Delete','Space','Backspace']
document.getElementById('input').addEventListener('keydown', (e) => {
  //console.log('Caret at: ', e.target.selectionStart);
  let key = getCode(e);
  console.log(key);
  if (isFinite(key)) {
    console.log(`Number ${key} was pressed!`);
  } else {
    //console.log(`alphabetic ${key} was pressed!`);
  }
});
