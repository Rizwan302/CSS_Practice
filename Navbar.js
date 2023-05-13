const humburger = document.querySelector('.humburger')
const nav_link = document.querySelector('.nav-link')
const links = document.querySelector('.nav-link li')


humburger.addEventListener("click", ()=>{
    nav_link.classList.toggle("open")

    links.forEach(link => {
        link.classList.toggle("fade")
    });
})