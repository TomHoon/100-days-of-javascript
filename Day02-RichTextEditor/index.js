/**
 * bold
 * superscript
 * subscript
 * insertOrderedList
 * insertUnorderedList
 * undo
 * redo
 * createLink
 * unlink
 * justifyLeft
 * justifyCenter
 * justifyRight
 * justifyFull
 * indent
 * outdent
 * 
 * <<execCommand(id, x, value)>>
 * formatBlock
 * fontName
 * fontSize
 * foreColor
 * backColor
 * 
 */

let optionButtons = document.querySelectorAll(".option-button");
let onceButtons = document.querySelectorAll(".once-button");

const intializer = () => {
 optionButtons.forEach(button => {
  button.addEventListener('click', () => {
   modifyText(button.id, false, null);
  });
 });

 onceButtons.forEach(button => {
  button.addEventListener('click', () => {
   modifyText(button.id, false, button.value);
  });
 });

}



const modifyText = (command, defaultUI, arg) => {
 document.execCommand(command, defaultUI, arg);
}

window.onload = intializer;