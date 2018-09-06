
//boolean
let  free:boolean=true;

free=false;


//number
let score: number =10;
//string 
let elm:string ="Manh";
elm ='manh nguyen';
let sum:string=elm +" "+ `${score}`;
//Array
let arr:Array<number> = [1,2,3];
let aarr:Array<string>= ["manh","nguyen","khac"];

//tuple 
let x:[number,string,boolean];
x=[1,"hai",true];
//enum 
enum Status {Create=100,Proccess,Finish};
let todostatus:Status=Status.Proccess;
//any
let mvariable :any =4;
mvariable="manh nguyen";

//void
function hamvoi():void 
{
    console.log("hello ham void");

}

//type assertions:: chuyển kiểu
let chuyenkieu: any ="Chuyen kieu";
let total = (<string>chuyenkieu).length;

//interface 
interface khoahoc {
    name: string;
    time:number;

}
let obj:khoahoc;
obj ={
    name:"Manh",
    time :5
};
//interface array
interface array_in
{
    [index:number]:number;
}
let chiso:array_in =[1,2];


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
