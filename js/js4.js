document.addEventListener('DOMContentLoaded', function () {
    const clickMenu = document.getElementById('clickMenu');
    const menuBlock = document.getElementById('menuBlock');

    clickMenu.addEventListener('click', function () {
        menuBlock.style.display = 'block'; // показати меню
    });


    // JavaScript для відображення меню після кліку на "Лабораторна робота №2"

    const Meta_lab4 = document.getElementById('Meta_lab4');

    const Desktop_version = document.getElementById('Desktop_version');

    const Ipad_version = document.getElementById('Ipad_version');

    const Mobil_version = document.getElementById('Mobil_version');

    const result_lab4 = document.getElementById('result_lab4');



    const infoBlock = document.querySelector('.info-block');


    Meta_lab4.addEventListener('click', function () {
        infoBlock.innerHTML = "<h3>Тема: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST. </h3>" +
            "<p>Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First.</p>" +
            "<a href='https://github.com/VladyslavaKYLIVNYK/Pizzeria.git'>Github Pizzeria</a><br>" +
            "<a href='https://github.com/VladyslavaKYLIVNYK/html-report.git'>Github Html report</a>";
    });
    Desktop_version.addEventListener('click', function () {
        infoBlock.innerHTML = "<h3>Тема: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST. </h3>" +
            "<p>Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First.</p><br>" +
            "<img src='img/lab4/Desktop1.png'><br>" +
            "<img src='img/lab4/Desktop2.png'>";
    });

    Ipad_version.addEventListener('click', function () {
        infoBlock.innerHTML = "<h3>Тема: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST. </h3>" +
            "<p>Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First.</p><br>" +
            "<img src='img/lab4/Ipad1.png'><br>" +
            "<img src='img/lab4/Ipad2.png'><br>" +
            "<img src='img/lab4/Ipad3.png'><br>";
    });

    Mobil_version.addEventListener('click', function () {
        infoBlock.innerHTML = "<h3>Тема: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST. </h3><br>" +
            "<img src='img/lab4/Iphone1.png'><br>" +
            "<img src='img/lab4/Iphone2.png'><br>";
    });

    result_lab4.addEventListener('click', function () {
        infoBlock.innerHTML = "<h3>Висновок</h3>" +
            "<p>Дізналася про адаптивну верстку, медіа-запити, медіа-типи, функції , метатег viewport.</p>";
    });

});