document.addEventListener('DOMContentLoaded', function () {
    const clickMenu = document.getElementById('clickMenu');
    const menuBlock = document.getElementById('menuBlock');

    clickMenu.addEventListener('click', function () {
        menuBlock.style.display = 'block'; // показати меню
    });


    // JavaScript для відображення меню після кліку на "Лабораторна робота №2"

    const Meta_lab3 = document.getElementById('Meta_lab3');
    const Lab3_1 = document.getElementById('Lab3_1');
    const Lab3_2 = document.getElementById('Lab3_2');
    const FixTable = document.getElementById('FixTable');
    const GymiTable = document.getElementById('GymiTable');
    const FixBlock = document.getElementById('FixBlock');
    const GymiBlock = document.getElementById('GymiBlock');
    const Lab3_3 = document.getElementById('Lab3_3');
    const ScrenshootPage = document.getElementById('ScrenshootPage');
    const HtmlCode = document.getElementById('HtmlCode');
    const CssCode = document.getElementById('CssCode');
    const result_lab3 = document.getElementById('result_lab3');

    const infoBlock = document.querySelector('.info-block');


    Meta_lab3.addEventListener('click', function () {
        infoBlock.innerHTML = "<h3>Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА" +
            "ЗАСОБАМИ CSS та FLEXBOX.</h3>" +
            "<p>Мета: ⎯ придбати практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок" +
            "⎯ придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX</p>" +
            "<a href='https://github.com/VladyslavaKYLIVNYK/Pizzeria.git'>Github Pizzeria</a><br>" +
            "<a href='https://github.com/VladyslavaKYLIVNYK/html-report.git'>Github Html report</a>";
    });

    Lab3_1.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/lab3/Task1_2.png'><br>" +
            "<img src='img/lab3/Task1_1.png'><br>" +
            "<img src='img/lab3/Task1.png'><br>";
    });


    FixTable.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/lab3/FixTable.png'><br>" +
            "<img src='img/lab3/FixTable_css.png'><br>" +
            "<img src='img/lab3/FixTable_css2.png'><br>" +
            "<img src='img/lab3/FixTable_result.png'>";
    });

    GymiTable.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/lab3/GymiTable.png'><br>" +
            "<img src='img/lab3/GymiTable_css.png'><br>" +
            "<img src='img/lab3/GymiTable_css2.png'><br>" +
            "<img src='img/lab3/GymiTable_result.png'>";
    });

    FixBlock.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/lab3/FixBlock.png'><br>" +
            "<img src='img/lab3/FixBlock_result.png'><br>";
    });

    GymiBlock.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/lab3/GymiBlock.png'><br>" +
            "<img src='img/lab3/FixBlock_css.png'><br>" +
            "<img src='img/lab3/GymiBlock_result.png'><br>";
    });

    ScrenshootPage.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/lab3/Task3_1.png'>";
    });

    HtmlCode.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/lab3/Task3_2.png'>" +
            "<img src='img/lab3/Task3_2b.png'>";
    });

    CssCode.addEventListener('click', function () {
        infoBlock.innerHTML = "<img src='img/lab3/Task3_3a.png'>" +
            "<img src='img/lab3/Task3_3b.png'>";
    });

    result_lab3.addEventListener('click', function () {
        infoBlock.innerHTML = "<h1>Висновки</h1>" +
            "<p>В цій лабораторній роботі я придбала практичні навички роботи верстки сторінок засобами CSS та FLEXBOX.</p>";;
    });

});



