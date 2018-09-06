// restparam
function showInfo(name:string, ...course:string[]):string{
    return name + " study "+course.join(" , ");

}
console.log(showInfo(" john "," es6 "," php "));