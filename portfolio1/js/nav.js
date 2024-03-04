const navLinks = document.querySelectorAll('.navigation__link');

navLinks.forEach(link => {
 link.addEventListener('click', function() {
    const checkBox = document.getElementById('navi-toggle');
    checkBox.checked = false;
    })
});