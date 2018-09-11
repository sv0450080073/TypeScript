class Study {
    static Print<T>(x:T[]):void{
        console.log(x);
    }
}
Study.Print<string>(["mạnh","long"]);
Study.Print<number>([1,2,5,6,3,6,9,8]);