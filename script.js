const navToggle = document.getElementById('nav-mobile');
const navList = document.getElementById('nav-list');
const body = document.getElementById('body');

navToggle.addEventListener('click', function(){
    body.classList.toggle('overflow');
    navList.addEventListener('click', function() {
        body.classList.toggle('overflow');
    })
})