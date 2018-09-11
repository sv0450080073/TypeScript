class Course 
{
    id :string;
    name:string;
    price:number;

    constructor (id:string,name:string,price:number)
    {
        this.id=id;
        this.name=name;
        this.price=price;
    }
    ShowCourceInfo():void{
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
class CourseJava extends Course{
    DateIn:number;
    constructor(id:string,name:string,price:number,Datein:number)
    {
        super(id,name,price);
        this.DateIn=Datein;
    }   
    ShowCourceInfo()
    {
        super.ShowCourceInfo();
        console.log(this.DateIn);
    }
    
}
let aobj = new Course('123','mạnh',25);
aobj.ShowCourceInfo();
let aobj1 = new CourseJava('123','mạnh',25,85);
aobj1.ShowCourceInfo();

