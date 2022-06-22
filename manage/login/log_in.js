

var objPeople = [
    { // Object @ 0 index
        username: "nguyentien",
        password: "123456"
    },
    { // Object @ 1 index
        username: "nguyenquang",
        password: "123456"
    },
    { // Object @ 2 index
        username: "lethang",
        password: "123456"
    }

]
const btn = document.querySelector(".btn");

function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    btn.addEventListener('click', function () {
        for (var i = 0; i < objPeople.length; i++) {
            // check is user input matches username and password of a current index of the objPeople array
            if (username == objPeople[i].username && password == objPeople[i].password) {
                alert("Đăng nhập thành công.");
                // stop the function if this is found to be true

            }
        })

}