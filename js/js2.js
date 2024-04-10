document.addEventListener('DOMContentLoaded', function () {
    const clickMenu = document.getElementById('clickMenu');
    const menuBlock = document.getElementById('menuBlock');

    clickMenu.addEventListener('click', function () {
        menuBlock.style.display = 'block'; // показати меню
    });


    // JavaScript для відображення меню після кліку на "Лабораторна робота №2"

    const Meta_lab2 = document.getElementById('Meta_lab2');
    const Style_lab2 = document.getElementById('Style_lab2');
    const Celteg_lab2 = document.getElementById('Celteg_lab2');
    const Celclass_lab2 = document.getElementById('Celclass_lab2');
    const Celid_lab2 = document.getElementById('Celid_lab2');
    const Celectors_lab2 = document.getElementById('Celectors_lab2');
    const css_lab2 = document.getElementById('css_lab2');
    const result_lab2 = document.getElementById('result_lab2');

    const infoBlock = document.querySelector('.info-block');


    Meta_lab2.addEventListener('click', function () {
        infoBlock.textContent = "<h1>Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ" +
            "ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.</h1>" +
            "<h3>Мета: придбати практичні навички роботи з селекторами, ідентифікаторами,\n" +
            "списками, різноманітними властивостями кольору і фону, зовнішними та\n" +
            "внутрішними відступами, плаваючими елементами, оформленням текстових\n" +
            "елементів<h3>" +
            "<a href='https://github.com/VladyslavaKYLIVNYK/Pizzeria.git'>Github Pizzeria</a><br>" +
            "<a href='https://github.com/VladyslavaKYLIVNYK/html-report.git'>Github Html report</a>";
    });

    Style_lab2.addEventListener('click', function () {
        infoBlock.innerHTML =
            "<img src='img/style_lab2.png'><br>";
    });


    //
    Celteg_lab2.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/CelTeg_lab2.png'><br>";
    });
    Celclass_lab2.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/CelClass_laba2.png'><br>";
    });
    Celid_lab2.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/CelId_lab2.png'><br>";
    });
    Celectors_lab2.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/Celector1.png'><br>" +
            "<img src='img/Celector3.png'><br>" +
            "<img src='img/Celector2.png'><br>";
    });
    css_lab2.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/css1_lab2.png'><br>" +
            "<img src='img/css2_lab2.png'><br>" +
            "<img src='img/css3_lab2.png'><br>" +
            "<img src='img/CelTeg_lab2.png'><br>";
    });

    result_lab2.addEventListener('click', function () {
        infoBlock.innerHTML = "<h1>Висновки</h1>" +
            "<p>Я навчилася використовувати CSS для стилізації веб-сторінок." +
            ",вибирати та оформлювати елементи HTML за допомогою селекторів та " +
            "ідентифікаторів, встановлювати різні кольори, фони та інше.</p><br>";
    });


});



