window.onload = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    upButton = document.getElementById('upButton');
    height = document.getElementById('info-background').offsetHeight;
    menuBox = document.getElementById('menuBox');
    window.onscroll = function () { scrollFunction() };
    openIcon = document.getElementById('open-icon');
    closeIcon = document.getElementById('close-icon');
    darkBox = document.getElementById('dark-box');
};
let flag = true;
function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scrollFunction() {
    if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        upButton.style.display = 'block';
    } else {
        upButton.style.display = 'none';
    }
}

function showMenu() {
    if (flag) {
        upButton.style.backgroundColor = '#000';
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';

        menuBox.style.animation = 'fadeinsolid .5s forwards';
        menuBox.style.opacity = '0%';

        darkBox.style.animation = 'fadeintransparent .5s forwards'
        darkBox.style.opacity = '0%';

        flag = false;
    } else {
        upButton.style.backgroundColor = '#aaabab';
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    
        menuBox.style.animation = 'fadeoutsolid .5s forwards';
        menuBox.style.opacity = '100%';

        darkBox.style.animation = 'fadeouttransparent .5s forwards'
        darkBox.style.opacity = '70%';

        flag = true;
    }
}