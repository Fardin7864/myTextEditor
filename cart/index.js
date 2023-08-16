
function getInputValueById(inputFildId){
    const stringValue = document.getElementById(inputFildId).value;
    const numValue = parseFloat(stringValue);
    stringValue = '';
    return numValue;
}
const disPrice = document.getElementById('dis-price');
const realPrice = parseFloat(document.getElementById('real-price').innerText);

document.getElementById('btn-apply').addEventListener('click',() => { 
    
    const input = document.getElementById('input-fild');
   if (input.value === 'DISC30') {
   
    disPrice.innerText = realPrice - (realPrice * 0.3);
    input.value = '';
   }
   else{
    alert("Invelid cupon Code!")
    input.value = '';
   }
 })