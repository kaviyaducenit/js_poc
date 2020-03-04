 let a=5;
console.log(a);
kaviya();
//named function
function kaviya(b=7)
{
    console.log("hi");
    console.log(b);
}

const namedfunction =()=>
{
    console.log("hiii");
}
//nameless function
namedfunction(function() {});
//
const name = () => {

}
//invoke function
(function() {
console.log("kaviya");
})()
//string  
let string1 ="kaviya";
let string2="midhuna";
let num=10;
let string3=`String ${string2}`;
console.log(string3); 
console.log(string1.length);
console.log(string1+string2);
console.log(string1.indexOf('i'));
console.log(string1.toUpperCase());
function func()
{
    if(true)
    {
    var aaa=1;
    }
    console.log(aaa);
}
func();
