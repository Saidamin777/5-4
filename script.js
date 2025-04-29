let ism = prompt('Ismingizni kiriting')

let harf = prompt('Bironta harf kiriting')

if (ism.includes(harf)) {
    alert(`ismingizda ${harf} harfi bor `)
} else  {
    alert(`ismingizda ${harf} harfi yoq`)
}