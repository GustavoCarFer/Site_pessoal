const anoAtual = new Date().getFullYear();
document.getElementById('year').textContent = anoAtual;

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry){
        if (entry.isIntersecting){
            entry.target.classList.add('visivel');
            observer.unobserve(entry.target);

        }
    });
}, {threshold: 0.1});

document.querySelectorAll('.fade-up').forEach(function(elemento){
    observer.observe(elemento)
})

const hamburguer = document.getElementById('hamburguer');
const navMenu = document.getElementById('nav-menu');

hamburguer.addEventListener('click', function(){
    navMenu.classList.toggle('aberto');
})

navMenu.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
        navMenu.classList.remove('aberto');
    })
})