const passwordLength = document.getElementById('passwordLength')
const password = document.getElementById('password')
const download = document.getElementById('download')
let check = false

function generate(length) {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const num = '0123456789'
    const symbol = `~!@#$%^&*()_+{}|:"<>?-=[]\;',./`
    const data = lowerCase + upperCase + num + symbol

    let generator = null
    check = true

    for (let i = 0; i < length; i++) {
        generator += data[~~(Math.random() * data.length)]
    }
    return generator
}

function getPass() {
    if (passwordLength.value >= 6 && passwordLength.value <= 32) {
        const newPassword = generate(passwordLength.value)
        password.value = newPassword
    } else {
        passwordLength.value = 6
        password.value = 'Password Min. 6 dan Max. 32'
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