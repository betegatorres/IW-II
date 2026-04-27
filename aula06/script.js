function ex1()
{
    input1 = document.getElementById('input1').value;
    document.getElementById('p1').innerText = input1;
}

function ex2()
{
    input2 = document.getElementById('input2').value;
    document.getElementById('p2').innerText = "Olá "+input2 ;
}

function ex3()
{
    input3 = document.getElementById('input3').value; 
    let maioridade;
    if(Number(input3) >= 18)
         maioridade="maior de idade"
    else maioridade="menor de idade"
    document.getElementById('p3').innerText = maioridade ;
}
let i = 0; let num = 0;
function ex4()
{
    if (i ==1 ) {
        cor = "cyan";
    }
    else if (i ==2) {
        cor = "orange";
    }
    else  if (i ==3){
        cor = "red";
    }
    else  if (i ==4){
        cor = "blue";
    }
    else if (i ==5){
        cor = "yellow";
    }
    else if (i ==6){
        cor = "purple";
    }
    else {
        cor = "pink";
    }
    document.body.style.backgroundColor = cor;
    if (i == 7) {
        i = 0;
    }else
    i++;
}
let fundo=0
function ex5()
{
if(fundo%2 == 0)    
{
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
}
else  
{   
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}
fundo++;
}


function ex8()
{
    input8 = document.getElementById('input8').value; 
    let num;
    if(Number(fundo) %2 == 0)
         par="par"
    else impar="impar"
    document.getElementById('p8').innerText = num ;
}