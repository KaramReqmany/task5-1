let firstnum;
let secondnum;
let operator;
let display= document.querySelector('.display');

function get(x){
    if(x=='+'){
        firstnum=display.value;
        operator='+';
        
        

    }
    if(x=='*'){
        firstnum=display.value;
        operator='*';
        
        

    }
    if(x=='-'){
        firstnum=display.value;
        operator='-';
        
        

    }
    if(x=='/'){
        firstnum=display.value;
        operator='/';
        
        

    }
    
    
    if(x=='=')
    {
        secondnum=display.value;

        if(operator=='+')
            display.value=Number(firstnum)+Number(secondnum);
        if(operator=='-')
            display.value=Number(firstnum)-Number(secondnum);
        if(operator=='/')
            display.value=Number(firstnum)/Number(secondnum);
        if(operator=='*')
            display.value=Number(firstnum)*Number(secondnum);
        
    }
    else
        display.value+=x;


}