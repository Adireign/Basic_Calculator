
let screen = document.getElementById('screen');
blocks = document.querySelectorAll('button');
let currentValue='';


for(item of blocks){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('button test is',buttonText);
        if(buttonText=='X'){
            buttonText ='*';
            currentValue+=buttonText;
            screen.value = currentValue;
        }
        else if(buttonText=='C'){
            currentValue = '';
            screen.value = '';
        }
        else if(buttonText=='='){
            screen.value = eval(currentValue);
            currentValue = eval(currentValue);
        }
        else if(buttonText=='sin'){
            buttonText = 'Math.sin';
            currentValue += buttonText;
            screen.value = currentValue;
        }
        else if(buttonText=='cos'){
            buttonText = Math.cos;
            currentValue += buttonText;
        }
        else{
            currentValue +=buttonText;
            screen.value = currentValue;
        }
       
    })
}