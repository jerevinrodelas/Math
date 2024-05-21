function addition(){
    let x =0;
    let y =0;
    x= document.getElementById('add1').value;
    y= document.getElementById('add2').value;
    ans1= Number(x)+Number(y);
    document.getElementById('sum').value = ans1;
}
function subtraction(){
    let x =0;
    let y =0;
    x= document.getElementById('sub1').value;
    y= document.getElementById('sub2').value;
    ans1= Number(x)-Number(y);
    document.getElementById('sub').value = ans1;
}
function multiplication(){
    let x =0;
    let y =0;
    x= document.getElementById('mul1').value;
    y= document.getElementById('mul2').value;
    ans1= Number(x)*Number(y);
    document.getElementById('prod').value = ans1;
}
function division(){
    let x =0;
    let y =0;
    x= document.getElementById('div1').value;
    y= document.getElementById('div2').value;
    ans1= Number(x)/Number(y);
    document.getElementById('qou').value = ans1;
}