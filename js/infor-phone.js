let moTa = document.querySelector('.describe')
let thaoLuan = document.querySelector('.comment-fb')
let danhGia = document.querySelector('.judge')
let thongSoKythuat = document.querySelector('.parameter')

let ndMoTa = document.querySelector('.content-describe')
let binhLuan = document.querySelector('.input-comment')
let choSao = document.querySelector('.content-judge')
let thongSo = document.querySelector('.more-parameter')

moTa.addEventListener('click', function () {
    if (ndMoTa.style.display === 'none') {
        ndMoTa.style.display = 'block';
        binhLuan.style.display = 'none';
        choSao.style.display = 'none';
        thongSo.style.display = 'none';
    }
    else {
        ndMoTa.style.display = 'none';
    }
})

thaoLuan.addEventListener('click', function () {
    if (binhLuan.style.display === 'none') {
        binhLuan.style.display = 'block';
        ndMoTa.style.display = 'none';
        thongSo.style.display = 'none';
        choSao.style.display = 'none';
    }
    else {
        binhLuan.style.display = 'none';
    }
})

danhGia.addEventListener('click', function () {
    if (choSao.style.display === 'none') {
        choSao.style.display = 'block';
        ndMoTa.style.display = 'none';
        binhLuan.style.display = 'none';
        thongSo.style.display = 'none';
    }
    else {
        choSao.style.display = 'none';
    }
})

thongSoKythuat.addEventListener('click', function () {
    if (thongSo.style.display === 'none') {
        thongSo.style.display = 'block';
        ndMoTa.style.display = 'none';
        binhLuan.style.display = 'none';
        choSao.style.display = 'none';
    }
    else {
        thongSo.style.display = 'none';
    }
})

