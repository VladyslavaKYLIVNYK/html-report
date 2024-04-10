// JavaScript для відображення меню після кліку на "Лабораторна робота №1"

document.addEventListener('DOMContentLoaded', function () {
    const clickMenu = document.getElementById('clickMenu');
    const menuBlock = document.getElementById('menuBlock');

    clickMenu.addEventListener('click', function () {
        menuBlock.style.display = 'block'; // показати меню
    });

    const descBtn = document.getElementById('description');
    const textBtn = document.getElementById('theme');
    const htmlBtn = document.getElementById('html-structure');
    const tableBtn = document.getElementById('html-table');
    const formBtn = document.getElementById('html-form');
    const imageBtn = document.getElementById('html-img');
    const resultBtn = document.getElementById('result');


    const infoBlock = document.querySelector('.info-block');


    descBtn.addEventListener('click', function () {
        infoBlock.textContent = "Веб-додаток для перегляду списку всіх піц, напоїв, і бачити детальну інформацію про піцу/напій";
    });

    textBtn.addEventListener('click', function () {
        infoBlock.innerHTML = "<h3>Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ." +
            "РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ HTML-ДОКУМЕНТІ.</h3>" +
            "<p>Мета: придбати практичні навички роботи з HTML-документом, таблицями," +
            "зображеннями, посиланнями, списками, формами" +
            "Створити шаблон звітного HTML-документом для відображення" +
            "результатів роботи всіх лабораторних робіт.</p>";
    });

    htmlBtn.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/Structura.png'><br>";
    });
    tableBtn.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/Table.png'><br>";
    });
    formBtn.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/Forma.png'><br>";
    });
    imageBtn.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/Img.png'><br>";
    });
    resultBtn.addEventListener('click', function () {
        infoBlock.innerHTML = "<h1>Висновки</h1>" +
            "<p>В ході виконання першої лабораторної роботи була проведена робота зі структурою HTML-документа та вибором предметної галузі. Під час цієї роботи було здійснено практичні дії з посиланнями, таблицями, зображеннями та списками в HTML-документі.</p><br>";
    });


});



