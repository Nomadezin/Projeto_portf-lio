const typed = new Typed('.habilidades',{
    strings:['Desenvolvedor Front End','Desenvolvedor BackEnd','Desenvolvedor UI/UX'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 300,
    loop: true
});

const scrollReveal = new ScrollReveal({
    distance: '80px',
    duration: 1000,
    delay: 150,
    reset: false
});

scrollReveal.reveal('.hero header, .servicos > h2,.superior-portfolio',{
    origin: 'top'
});

scrollReveal.reveal('.esquerda-home,.esquerda-sobre',{
    origin: 'left'
});

scrollReveal.reveal('.direita-home,.direita-sobre',{
    origin: 'right'
});

scrollReveal.reveal('.caixa-servico,.inferior-portfolio img,footer',{
    origin: 'bottom'
});
<script src="https://unpkg.com/scrollreveal"></script>