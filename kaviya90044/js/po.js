// arr=[];
// i=1;
//  let aa=document.getElementById('a');
//  let bb=document.getElementById('b');
// let cc=document.getElementById('c');
// document.getElementById('e').addEventListener('click',Display);
// document.getElementById('f').addEventListener('click',loop);
// function Display()
// {
//     var pp={};
//     pp.a1=aa.value;
//     pp.a2=bb.value;
//     pp.a3=cc.value;
//     arr.push(pp);
// }
// function loop()
// {
// document.getElementById('mytable').style.visibility='visible';
// let rows='';
// arr.forEach(obj=>
// {
//     const tr=`<tr>
//     <td>${obj.a1}</td>
//         <td>${obj.a2}</td>
//         <td>${obj.a3}</td>
//         </tr>`;
//         rows+=tr;
// });
// document.getElementById("hai").innerHTML=rows;
// }
array = []
document.getElementById("e").addEventListener("click",display);
function display(){
    const obj = {}
    const tname = document.getElementById("a").value
    const tage = document.getElementById("b").value
    const tcomments = document.getElementById("c").value
    let value = 1;
    array.forEach(element =>{
        if(element.NAME == tname && element.AGE == tage || element.NAME == "" && element.AGE == "")
        {
            value=0;
        }
        
    });
    if(value == 1 ){
    obj.NAME = tname;
    obj.AGE = tage;
    obj.COMMENTS = tcomments;
    
    array.push(obj);
    let rows = '';
    array.forEach(element => {
        const tr = `<tr>
        <td>${element.NAME}</td>
        <td>${element.AGE}</td>
        <td>${element.COMMENTS}</td>
        </tr>`
        rows += tr;
        document.getElementById("hai").innerHTML = rows;
    });
    
}
}