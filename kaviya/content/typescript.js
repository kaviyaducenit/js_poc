
var One;
(function (One) {
    One["c"] = "blue";
    One["a"] = "Green";
    One["b"] = "black";
})(One || (One = {}));
function test() {
    return {
        firstName: "kaviya",
        lastName: "ravi",
        eyeColor: "red",
        details: One.a
    };
}
const i = test();
const a = `${i.firstName} ${i.lastName} ${i.eyeColor} ${i.details}`;
const aa = a.split(" ");
const aaa = aa.join(',');
console.log("a");
console.log("aa");
console.log("aaa");
