const pass = document.getElementById('password');

const UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '`~!@#$%^&*()_-+=[];/'
const allChars = UpperCase + lowercase + symbols
function generate(){
    let password = '';
    let len = 12;
    password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    while (password.length < len){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    pass.value = password;
}

function copyPassword(){
    pass.select();
    document.execCommand('copy');
}