let N = window.prompt("Nhap so N:")
let a = []
let inp
for(let i = 0;i<N;i++){
inp = window.prompt(" Nhap so thu" + (i+1))
inp = Number.parseInt(inp)
a.push(inp)
}
console.log(a)
let sum = 0
for(let i=0;i<N;i++){
    sum +=a[i]
}
console.log(sum)