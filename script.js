document.addEventListener("DOMContentLoaded", () => {
    console.log("Sistema Games Workin Inicializado!");

    // Adiciona um efeito extra de sombra no cabeçalho ao rolar a página (Sticky/Scroll Effect)
    const header = document.querySelector('.gamer-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 10px 30px rgba(0, 240, 255, 0.3)";
            header.style.transition = "box-shadow 0.3s ease";
        } else {
            header.style.boxShadow = "0 5px 20px rgba(0, 240, 255, 0.1)";
        }
    });

    // Você pode adicionar futuros scripts de menus mobile ou sliders aqui!
});
