arr=[];
i=1;
 let aa=document.getElementById('a');
 let bb=document.getElementById('b');
let cc=document.getElementById('c');
let dd=document.getElementById('d');

document.getElementById('e').addEventListener('click',Display);
document.getElementById('f').addEventListener('click',loop);
function Display()
{
    var pp={};
    pp.a1=aa.value;
    pp.a2=bb.value;
    pp.a3=cc.value;
    pp.a4=dd.value;
    arr.push(pp);
}

    // arr[0]=aa.value;
    // arr[1]=bb.value;
    // arr[2]=cc.value;
    // arr[3]=dd.value;
    
    /*console.log(arr);
    
    var n=arr.includes("kaviya");
    console.log(n);
    let table=document.getElementById("hai");
    let row=table.insertRow(i++);
    let col1=row.insertCell(0);
    let col2=row.insertCell(1);
    let col3=row.insertCell(2);
    let col4=row.insertCell(3);

    col1.innerText=aa.value;
    col2.innerText=bb.value;
    col3.innerText=cc.value;
    col4.innerText=dd.value;*/

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
        <td>${obj.a4}</td>
        </tr>`;
        rows+=tr;

});
document.getElementById("hai").innerHTML=rows;
} 