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
var BK_SB_DEL = ['Space', 'Delete', 'Backspace'];
var GET_TEXT_VALUE = function (idx) {
  let txt = document.getElementById('input').value;
  //console.log(idx, txt.charAt(idx));
  return txt.charAt(idx);
};
document.getElementById('input').addEventListener('keydown', (e) => {
  //console.log('Caret at: ', e.target.selectionStart);
  var start = e.target.selectionStart - 1;
  var end = e.target.selectionEnd;
  console.log(start, end);
  let key = getCode(e);
  let IsCancelable = !1;
  //console.log(e.code);
  let del_key_indx = BK_SB_DEL.includes(e.code);
  let start_text = GET_TEXT_VALUE(start);
  //console.log('start_text ==> ' + start_text);
  //console.log(del_key_indx);
  //console.log(del_key_indx && del_key_indx > -1);
  if (del_key_indx && del_key_indx > -1) {
    //console.log(`Remove ${key} was pressed!`);
    if (del_key_indx == 0) IsCancelable = !0;
    else {
      start_text = GET_TEXT_VALUE(del_key_indx == 1 ? start : start - 1);
      console.log('<' + start_text + '>');
      // get before char for remove - If number
      if (!isNaN(start_text) || start_text == ' ') IsCancelable = !0;
      else {
        // other than number
        console.log(start);
        if (start <= 2) {
          IsCancelable = !0;
        }
      }
    }
  } else if (!isNaN(e.key)) {
    IsCancelable = !0;
    console.log(`Number ${key} was pressed!`);
  } else {
    //console.log(`alphabetic ${key} was pressed!`);
  }

  if (IsCancelable) {
    e.preventDefault();
    return false;
  }
});

document.getElementById('btn1').addEventListener('click', (e) => {
  const input = document.getElementById('input');
  input.focus();
  input.setSelectionRange(2, 2);
});

document.getElementById('btn2').addEventListener('click', (e) => {
  var el = document.getElementById('editable');
  var range = document.createRange();
  var sel = window.getSelection();

  range.setStart(el.childNodes[2], 0);
  range.collapse(true);

  sel.removeAllRanges();
  sel.addRange(range);
});
function logCopy(event) {
  log.innerText = `Copied!\n${log.innerText}`;
}

function logPaste(event) {
  log.innerText = `Pasted!\n${log.innerText}`;
}

const editor = document.getElementById('editor');
const log = document.getElementById('log');

editor.oncopy = logCopy;
editor.onpaste = logPaste;

var ce = document.querySelector('#demo[contenteditable]');
ce.addEventListener('paste', function (e) {
  e.preventDefault();
  var text = e.clipboardData.getData('text/html');
  console.log(text);
  document.execCommand('insertHTML', false, text);
});
