enum One
{
    
    c  = "blue",
    a  = "Green",
    b = "black"
}
interface Person
{
    firstName:string;
    lastName  : string;
    eyeColor  : string;
    details:One;
}
function test () :Person{
    return{
        firstName:"kaviya",
        lastName:"ravi",
        eyeColor:"red",
        details:One.a

    } as Person;
}
const i:Person=test();
const a:String =`${i.firstName} ${i.lastName} ${i.eyeColor} ${i.details}`;
const aa:String[] =a.split(" ");
const aaa:String=aa.join(',');
