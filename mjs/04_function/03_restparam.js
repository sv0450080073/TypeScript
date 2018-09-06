// restparam
function showInfo(name, ...course) {
    return name + " study " + course.join(" , ");
}
console.log(showInfo(" john ", " es6 ", " php "));
