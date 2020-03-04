





    
fetch('https://api.spacexdata.com/v3/launches',{
    method:'GET',
    mode: 'cors'
}).then((response)=>{
     return response.json();
}).then(data=>{
console.log(data);
let rows='';
data.forEach(dat=>
    {
        const  ull=`<li style="color:${dat.launch_success ?'green':'red'}">
   
      ${dat.flight_number}
      ${dat.mission_name}
      ${dat.launch_success}
   
      </li>`;

      rows+=ull;

});
document.getElementById("hai").innerHTML=rows;
}).catch(error=>{
})

