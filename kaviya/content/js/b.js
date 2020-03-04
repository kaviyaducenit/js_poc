let cr=0;
const output=document.getElementById('display');
const input=document.getElementById('input');
function add()
{
    cr=cr+parseInt(input.value);
    output.innerText=cr;
}
function sub()
{
    cr=cr-parseInt(input.value);
    output.innerText=cr;
}
function mul()
{
    cr=cr*parseInt(input.value);
    output.innerText=cr;
}
function div()
{
    cr=cr/parseInt(input.value);
    output.innerText=cr;
}
document.getElementById('event1').addEventListener('click',add);
document.getElementById('event2').addEventListener('click',sub);
document.getElementById('event3').addEventListener('click',mul);
document.getElementById('event4').addEventListener('click',div);

