//boolean
let free = true;
free = false;
//number
let score = 10;
//string 
let elm = "Manh";
elm = 'manh nguyen';
let sum = elm + " " + `${score}`;
//Array
let arr = [1, 2, 3];
let aarr = ["manh", "nguyen", "khac"];
//tuple 
let x;
x = [1, "hai", true];
//enum 
var Status;
(function (Status) {
    Status[Status["Create"] = 100] = "Create";
    Status[Status["Proccess"] = 101] = "Proccess";
    Status[Status["Finish"] = 102] = "Finish";
})(Status || (Status = {}));
;
let todostatus = Status.Proccess;
//any
let mvariable = 4;
mvariable = "manh nguyen";
//void
function hamvoi() {
    console.log("hello ham void");
}
//type assertions:: chuyển kiểu
let chuyenkieu = "Chuyen kieu";
let total = chuyenkieu.length;
let obj;
obj = {
    name: "Manh",
    time: 5
};
let chiso = [1, 2];
console.log(chiso);
console.log(obj);
console.log(total);
hamvoi();
console.log(mvariable);
console.log(todostatus);
console.log(x);
console.log(free);
console.log(score);
console.log(sum);
console.log(arr);
console.log(aarr);
