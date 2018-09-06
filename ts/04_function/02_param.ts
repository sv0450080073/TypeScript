//đầy đủ các tham số

function ten(name:string,age:number):string 
{
    return `My name is: ${name}, ${age} year old`;

}

 console.log( ten("Mạnh",20));

 // nếu ko có tham só thì nó sẽ lấy gt mắc đinh
 function ten1(name:string,age:number=26):string{
     return `My name is ${name}, ${age} year old`;
 }


 console.log(ten1("Mạnh"));


 //function nâng cao 
 function totallength(x:(string|any[]),y:(string[]|string)):number{
     return x.length+y.length;
 }
 //console.log(totallength("manh","nguyen"));
 //console.log(totallength("manh",["123"]));
 //console.log(totallength(["manh",123,"242"],["123","manh"]));
 console.log(totallength(["manh",123,"242"],"123"));