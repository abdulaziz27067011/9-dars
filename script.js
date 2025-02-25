
let fon = document.getElementById(`blac`)
fon.style.color = `white`
fon.style.backgroundColor = `black`
fon.style.borderRadius = `15px`
fon.style.width = `360px`
fon.style.margin = `20px`

let ism = document.getElementById(`firstname`)
let familiya = document.getElementById(`lastname`)
let yosh = document.getElementById(`yosh`)

let firstname = prompt(`ism kiriting`)
let lastname = prompt(`familiya kiriting`)
let age = prompt(`yoshingizni kiriting`)

let savol = prompt(`1(katta xarif)
2(kichkina xarif)`)



if (savol == `1`) {
    ism.innerHTML = firstname.toLocaleUpperCase()
    familiya.innerHTML = lastname.toLocaleUpperCase()
    yosh.innerHTML = age.toLocaleUpperCase()
}else if (savol == `2`) {
    ism.innerHTML = firstname.toLocaleLowerCase()
    familiya.innerHTML = lastname.toLocaleLowerCase()
    yosh.innerHTML = age.toLocaleLowerCase()
} else{
    alert(`iltimos 1 yoki 2 raqamidan ortiq katta sonlarni tanlamang!`)
    let savol = prompt(`1 yoki 2 kiriting`)
}

















