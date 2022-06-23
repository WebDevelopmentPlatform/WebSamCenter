
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
function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    for (var i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            // window.location.href = "../manage.html"
            window.open("../manage_sp.html")
            // alert("d")

        }
    }
}
