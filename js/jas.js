//Đẩy file lên
// git add
// git commit
// git push

//Lấy file
//git tull


//Tạo biến truy cập đến class rồi xử lý

let btnMoblie = document.querySelector('.btn_mb')
let btnTablet = document.querySelector('.btn_mtb')
let btnW = document.querySelector('.btn_dh')
let btnHP = document.querySelector('.btn_hp')
let btnPK = document.querySelector('.btn_pk')

let lst_mb = document.querySelector('.list_mb')
let lst_tb = document.querySelector('.list_tb')
let lst_w = document.querySelector('.list_w')
let lst_hp = document.querySelector('.list_hp')
let lst_pk = document.querySelector('.list_pk')

btnMoblie.addEventListener('click', function () {
    lst_mb.classList.add('active')
    lst_tb.classList.remove('active')
    lst_w.classList.remove('active')
    lst_hp.classList.remove('active')
    lst_pk.classList.remove('active')

});


btnTablet.addEventListener('click', function () {
    lst_mb.classList.remove('active')
    lst_tb.classList.add('active')
    lst_w.classList.remove('active')
    lst_hp.classList.remove('active')
    lst_pk.classList.remove('active')
});
btnW.addEventListener('click', function () {
    lst_mb.classList.remove('active')
    lst_tb.classList.remove('active')
    lst_w.classList.add('active')
    lst_hp.classList.remove('active')
    lst_pk.classList.remove('active')
});
btnHP.addEventListener('click', function () {
    lst_mb.classList.remove('active')
    lst_tb.classList.remove('active')
    lst_w.classList.remove('active')
    lst_hp.classList.add('active')
    lst_pk.classList.remove('active')
});
btnPK.addEventListener('click', function () {
    lst_pk.classList.add('active')
    lst_mb.classList.remove('active')
    lst_tb.classList.remove('active')
    lst_w.classList.remove('active')
    lst_hp.classList.remove('active')

});



//reponsive footer
let thongTin1 = document.querySelector('.tt1')
let thongTin2 = document.querySelector('.tt2')
let thongTin3 = document.querySelector('.tt3')
let listNew1 = document.querySelector('.lst_rp1')
let listNew2 = document.querySelector('.lst_rp2')
let listNew3 = document.querySelector('.lst_rp3')

thongTin1.addEventListener('click', function () {
    if (listNew1.style.display === 'none') {
        listNew1.style.display = 'block';
    }
    else {
        listNew1.style.display = 'none';
    }
})

thongTin2.addEventListener('click', function () {
    if (listNew2.style.display === 'none') {
        listNew2.style.display = 'block';
    }
    else {
        listNew2.style.display = 'none';
    }
})

thongTin3.addEventListener('click', function () {
    if (listNew3.style.display === 'none') {
        listNew3.style.display = 'block';
    }
    else {
        listNew3.style.display = 'none';
    }
})


//----content----

// sub slider 1 PC, Tablet
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}
// End sub slider1 PC,Tablet

// Begin sub slider 1 mobile
// End sub slider 1 mobile

// slick js
// $('.autoplay').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });
   

//---End content---

