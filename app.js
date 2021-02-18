const generatePin = () => {
    const display = document.getElementById('generate-code');
    display.value = getPin()
}
const getPin = () => {
    const random = Math.ceil(Math.random()*10000) + "";

    if(random.length === 4){
        return random
    }else{
        return getPin()
    }  
}

document.getElementById('digit').addEventListener('click', (event) => {
    const digit = event.target.innerText;
    const displayTypedPin = document.getElementById('displayTypedPin');
    if(isNaN(digit)){
        if(digit === 'C'){
            displayTypedPin.value = '';
        }
        if(digit === '<'){
            
        }
    }
    else{
        displayTypedPin.value = displayTypedPin.value + digit ;
    }
})

const submit = () => {
    const generateCode = document.getElementById('generate-code').value;
    const typedPin = document.getElementById('displayTypedPin').value;
    if(generateCode === typedPin){
        notify('block', 'none')
    }else{
        notify('none', 'block')
    }
}

const notify = (correctStatus, incorrectStatus) => {
    document.getElementById('correct').style.display = correctStatus;
    document.getElementById('incorrect').style.display = incorrectStatus;     
}
