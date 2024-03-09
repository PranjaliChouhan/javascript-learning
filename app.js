document.addEventListener('DOMContentLoaded', function() {
    var btn1 = document.querySelector('.btn1');
    var btn2 = document.querySelector('.btn2');
    var btn3 = document.querySelector('.btn3');
    var btn4 = document.querySelector('.btn4');

    btn1.addEventListener('click', function() {
        document.body.style.backgroundColor = "red";
    });

    btn2.addEventListener('click', function() {
        document.body.style.backgroundColor = "blue";
    });

    btn3.addEventListener('click', function() {
        document.body.style.backgroundColor = "green";
    });

    btn4.addEventListener('click', function() {
        document.body.style.backgroundColor = "yellow";
    });
});
