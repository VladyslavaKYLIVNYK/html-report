document.addEventListener('DOMContentLoaded', function () {
    const clickMenu = document.getElementById('clickMenu');
    const menuBlock = document.getElementById('menuBlock');

    clickMenu.addEventListener('click', function () {
        menuBlock.style.display = 'block'; // показати меню
    });


    // JavaScript для відображення меню після кліку на "Лабораторна робота №2"

    const Meta_lab8 = document.getElementById('Meta_lab8');

    const Weeks = document.getElementById('Weeks');

    const result_lab8 = document.getElementById('result_lab8');

    const infoBlock = document.querySelector('.info-block');

    Meta_lab8.addEventListener('click', function () {
        infoBlock.innerHTML = "<h3>Тема: Створення інтерфейсів WEB-застосувань з використанням React </h3>";
    });

    Weeks.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/Lab8/Certificate_1b.png'><br>" +
            "<img src='img/Lab8/Certificate_1.png'><br>" +
            "<img src='img/Lab8/Week1_1.png'><br>" +
            "<img src='img/Lab8/Week1_2.png'><br>" +
            "<img src='img/Lab8/Week1_3.png'><br>" +
            "<img src='img/Lab8/Week2_1.png'><br>" +
            "<img src='img/Lab8/Week2_2.png'><br>" +
            "<img src='img/Lab8/Week2_3.png'><br>" +
            "<img src='img/Lab8/Week3_1.png'><br>" +
            "<img src='img/Lab8/Week3_2.png'><br>" +
            "<img src='img/Lab8/Week3_3.png'><br>";
    });

    result_lab8.addEventListener('click', function () {
        infoBlock.innerHTML = "<h3>Висновок</h3>" +
            "<p> дізналася як створювати інтерфейсів WEB-застосувань з використанням React</p>";
    });


});