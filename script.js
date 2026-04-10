var randomText = "QWERTYUIOPFGHJKLZXCVBNM@#$&qwertyuiopfghjklzxcvbnm1234567890"
var passwordField = document.getElementById("password-field")

function randomPasswordGenerator() {
    var password = ""
    for (let i = 0; i < 8; i++) {
        var randomIndex = Math.floor(Math.random() * randomText.length)
        password += randomText[randomIndex]
    }
    passwordField.innerHTML = password
}