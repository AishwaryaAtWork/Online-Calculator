let screen=document.getElementById('screen');
let screenVal='';
let buttons=document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        // If x is clicked then it will convert to * sign
        if(buttonText=='x'){
            buttonText='*';
            screenVal+=buttonText;
            screen.value=screenVal;
        }
        // If = is clicked , the value will be calculated and display on screen
        else if(buttonText=='='){
            screen.value=eval(screenVal);
        }
        //If C is clicked, it clears the screen
        else if(buttonText=='C'){
            screenVal="";
            screen.value=screenVal;
        }
        // If any otherr button clicked, add it to screen and the evaluate it
        else{
            screenVal+=buttonText;
            screen.value=screenVal;
        }
    })
}