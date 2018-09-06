//cách 1;
function u1(name:string,age:number):string
{
    return `My name is: ${name}, ${age} year old`;

}
console.log(u1("manh",21));

//cách 2:
let u2= function(name:string , age:number):string
{
    return `My name is: ${name}, ${age} year old`;
}
console.log(u2("manh",21));
