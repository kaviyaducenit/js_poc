let cr=0;
const inputt=document.getElementById('input');
const outputt=document.getElementById('output');
function add()
{
    cr=cr+parseInt(inputt.value);
    outputt.innerText=cr;
}
function sub()
{
    cr=cr-parseInt(inputt.value);
    outputt.innerText=cr;
}
function mul()
{
    cr=cr*parseInt(inputt.value);
    outputt.innerText=cr;
}
function div()
{
    cr=cr/parseInt(inputt.value);
    outputt.innerText=cr;
}
document.getElementById('add').addEventListener('click',add);
document.getElementById('sub').addEventListener('click',sub);

document.getElementById('mul').addEventListener('click',mul);

document.getElementById('div').addEventListener('click',div);
