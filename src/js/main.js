const navButtons = document.querySelectorAll('.nav-link');
const log = document.querySelector('.log')

log.addEventListener('click', ()=>{
    log.nextElementSibling.classList.add(active)
})
navButtons.forEach(nav =>{
    nav.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
})