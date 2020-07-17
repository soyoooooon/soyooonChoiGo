(()=>{
console.log('이소윤 체고');

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastCheck;

//resign one => using let

function handleCheck(e){

let inBetween = false;
if(e.shiftKey && this.checked){

checkboxes.forEach(checkbox=>{
    console.log(checkbox);

if(checkbox === this || checkbox === lastCheck){
    inBetween = !inBetween; 
}

if (inBetween) {
    checkbox.checked = true;

}
})

}

lastCheck = this;
}

checkboxes.forEach(checkbox=>checkbox.addEventListener('click', handleCheck));

})();