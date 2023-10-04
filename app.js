let scrn=document.getElementById('screen');
 
function display(e){


    scrn.value=scrn.value+e;
}


function allclear(){

    scrn.value=' ';

}


function fel(){

    scrn.value=scrn.value.slice(0,-1);
}


function calculate(){

    scrn.value=eval(scrn.value);

}










// container.screen.value += e.value;