import { generateKeys } from './node_modules/generate-keys/index.js'
const passwordLength = document.getElementById('passwordLength')
const password = document.getElementById('password')
const generate = document.getElementById('generate')
const download = document.getElementById('download')
let check = false

function getPass() {
    const lengthValue = parseInt(passwordLength.value, 10)
    if (!isNaN(lengthValue) && lengthValue >= 5 && lengthValue <= 100) {
        const newPassword = generateKeys(lengthValue)
        password.value = newPassword
        check = true
    } else {
        passwordLength.value = 5
        password.value = 'Password Min. 5 dan Max. 100'
    }
}

function savePass() {
    if (check) {
        document.title = 'Password Generator : ' + password.value
        download.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Password Generator : ${password.value}`))
        download.setAttribute('download', 'MyPasswordGenerator.txt')
    } else {
        password.value = 'Password Belum di Generate'
    }
}

generate.addEventListener('click', getPass)
download.addEventListener('click', savePass)