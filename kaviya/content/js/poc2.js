arr=[];
i=1;
 let aa=document.getElementById('a');
 let bb=document.getElementById('b');
let cc=document.getElementById('c');

document.getElementById('e').addEventListener('click',Display);
document.getElementById('f').addEventListener('click',loop);
function Display()
{
    var pp={};
    pp.a1=aa.value;
    pp.a2=bb.value;
    pp.a3=cc.value;
    
    arr.push(pp);
}
function loop()
{
document.getElementById('mytable').style.visibility='visible';
let rows='';
arr.forEach(obj=>
{
    const tr=`<tr>
    <td>${obj.a1}</td>
        <td>${obj.a2}</td>
        <td>${obj.a3}</td>
       
        </tr>`;
        rows+=tr;

});
document.getElementById("hai").innerHTML=rows;
} 