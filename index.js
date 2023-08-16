// let btnValue = '1';
const btnBold = document.getElementById('btn-bold');
const btnItalic = document.getElementById('btn-italic');
const btnUnderline = document.getElementById('btn-underlne');
const inputText = document.getElementById('input-text');


let btnValueBold = '1';
let btnValueItalic = '1';
let btnValueUnderline = '1';

// bold
document.getElementById('btn-bold').addEventListener('click',(e) => { 
    if (btnValueBold === '1') {
        btnBold.classList.remove('bg-transparent');
        inputText.style.fontWeight = 'bold';
        btnValueBold = '0';     
    }
    else if (btnValueBold === '0') {
        btnBold.classList.add('bg-transparent');
        inputText.style.fontWeight = 'normal';
        btnValueBold = '1';
    }

    btnBold.value = btnValueBold;
 })
//  italic
document.getElementById('btn-italic').addEventListener('click',(e) => {
    if (btnValueItalic === '1') {
        btnItalic.classList.remove('bg-transparent');
        inputText.style.fontStyle = 'italic';
        btnValueItalic = '0';     
    }
    else if (btnValueItalic === '0') {
        btnItalic.classList.add('bg-transparent');
        inputText.style.fontStyle = 'normal';
        btnValueItalic = '1';
    }
    btnItalic.value = btnValueItalic;
 })
//  underline
document.getElementById('btn-underlne').addEventListener('click',(e) => { 
    // inputText.style.textDecoration = 'underline';
    if (btnValueUnderline === '1') {
        btnUnderline.classList.remove('bg-transparent');
        inputText.style.textDecoration = 'underline';
        btnValueUnderline = '0';     
    }
    else if (btnValueUnderline === '0') {
        btnUnderline.classList.add('bg-transparent');
        inputText.style.textDecoration = 'none';
        btnValueUnderline = '1';
    }
    btnUnderline.value = btnValueUnderline;
 })
//  center align
document.getElementById('btn-center').addEventListener('click',(e) => { 
    inputText.style.textAlign = 'center';
 })
//  left align
document.getElementById('btn-left').addEventListener('click',(e) => { 
    inputText.style.textAlign = 'left';
 })
//  right align
document.getElementById('btn-right').addEventListener('click',(e) => { 
    inputText.style.textAlign = 'right';
 })
//  justify align
document.getElementById('btn-justify').addEventListener('click',(e) => { 
    inputText.style.textAlign = 'justify';
 })


//  text size input

document.getElementById('input-number').addEventListener('input', (e) => { 
    let textnum = parseFloat(e.target.value);
    inputText.style.fontSize = textnum + 'px';
 })


document.getElementById('input-color').addEventListener('input',(e) => { 
    let color = e.target.value;
    inputText.style.color = color;
 })