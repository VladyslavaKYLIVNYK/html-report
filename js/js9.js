document.addEventListener('DOMContentLoaded', function () {
    const clickMenu = document.getElementById('clickMenu');
    const menuBlock = document.getElementById('menuBlock');

    clickMenu.addEventListener('click', function () {
        menuBlock.style.display = 'block'; // показати меню
    });


    // JavaScript для відображення меню після кліку на "Лабораторна робота №2"

    const Meta_lab9 = document.getElementById('Meta_lab9');

    const Weeks = document.getElementById('Weeks');

    const result_lab9 = document.getElementById('result_lab9');


    const infoBlock = document.querySelector('.info-block');

    Meta_lab9.addEventListener('click', function () {
        infoBlock.innerHTML = "<h3>Тема: Building RESTful APIs with Node.js and Express </h3>";
    });

    Weeks.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/Lab9/Certeficat2.png'><br>" +
            "<img src='img/Lab9/Certeficat1.png'><br>" +
            "<img src='img/Lab9/.png'><br>" +
            "<img src='img/Lab9/Week1_1.png'><br>" +
            "<img src='img/Lab9/Week1_2.png'><br>" +
            "<img src='img/Lab9/Week1_3.png'><br>" +
            "<img src='img/Lab9/Week1_4.png'><br>" +
            "<img src='img/Lab9/Week1_5.png'><br>" +
            "<img src='img/Lab9/Week2_1.png'><br>" +
            "<img src='img/Lab9/Week2_2.png'><br>" +
            "<img src='img/Lab9/Week2_3.png'><br>" +
            "<img src='img/Lab9/Week2_4.png'><br>" +
            "<img src='img/Lab9/Week2_5.png'><br>" +
            "<img src='img/Lab9/Week2_6.png'><br>";
    });

    result_lab9.addEventListener('click', function () {
        infoBlock.innerHTML = "<p>вивчила Building RESTful APIs with Node.js and Express </p>";
    });

});