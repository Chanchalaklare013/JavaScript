// Q : 5
//
let a=10;
let b=90;
function solve()

{
    console.log(`a :${a} b:${b}`);
    let temp=a;
    a=b;
    b=temp;
    console.log(`A:${a} B:${b}`);
}
solve();