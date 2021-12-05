const toggle = document.getElementsByClassName('toggle-btn')[0]
const navbarLinks = document.getElementsByClassName('navbar__links')[0]

toggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})