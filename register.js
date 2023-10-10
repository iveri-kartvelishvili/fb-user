let mysel = document.querySelector("#mysel")
for (let i = 1905; i <= 2023; i++){
    let op = document.createElement('option')

    mysel.appendChild(op)
    op.innerHTML += i
}