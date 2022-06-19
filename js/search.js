let formSearch = document.querySelector('.form-search')
let showSearch = document.querySelector('.show-search')
const listPhone = document.querySelectorAll('.list-phone')
const arr = document.querySelectorAll('.name-phone')
const submit = document.querySelector('.example')
const input = document.querySelector('.input')


//Truy từ html vào data để lấy dữ liệu
let data = [];
arr.forEach(e => {
    data.push({
        name:e.innerHTML,
        img:e.parentElement.parentElement.parentElement.querySelector('img').src,
        cost:e.parentElement.parentElement.parentElement.querySelectorAll('p')[1].innerHTML,
        // button: e.parentElement.parentElement.parentElement.querySelectorAll('button'),
    })
} )



submit.addEventListener('submit', function(e){
    e.preventDefault()
    let value = input.value.toLowerCase()
    let a = data.filter(e => {
        // e.name.toLowerCase()
        // console.log(e.name.toLowerCase())
        return e.name.toLowerCase().includes(value) === true
    })
    
    listPhone.forEach(e => {
        e.classList.add('hide')
    })

    formSearch.classList.remove('active')

    let html = a.map(e => {
        return `
        <a href="" class="show-phone">
        <div class="list-phone">
                <div class="img-phone text-center">
                    <img src="${e.img}" alt="">
                </div>

                <div class="buy-phone text-center">
                    <div class="infor-phone">
                        <p class="name-phone mt-3 mb-3">${e.name}</p>
                        <p class="cost-phone mt-3 mb-3 ">${e.cost}</p>
                        <button class="more-phone mt-3 mb-3">Xem chi tiết</button>
                    </div>

                    <div class="button-z">

                    </div>
                </div>
            </div>
        </a>
        `
    })
    showSearch.innerHTML = html.join('')

})