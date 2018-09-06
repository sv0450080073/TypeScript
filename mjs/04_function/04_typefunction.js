//cách 1;
function u1(name, age) {
    return `My name is: ${name}, ${age} year old`;
}
console.log(u1("manh", 21));
//cách 2:
let u2 = function (name, age) {
    return `My name is: ${name}, ${age} year old`;
};
console.log(u2("manh", 21));
