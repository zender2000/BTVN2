let N = window.prompt("Nhap chieu dai N")
let ans =""
for(let i = 0;i<N;i++){
    for(let j = 0;j<N;j++){
        ans += "* "
    }
    ans += "\n"
}
console.log(ans)