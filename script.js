/**
 * Games Workin Theme JS - Versão 6.0
 * Script enxuto - Removida a manipulação de DOM para proteger links nativos do Blogger
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("🎮 [Games Workin v6.0] Engine estabilizada. Sistemas operacionais.");

    // Efeito de rolagem do Cabeçalho (Pulse Gamer)
    const header = document.querySelector('.gamer-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header.style.boxShadow = "0 15px 40px rgba(0, 240, 255, 0.25)";
            header.style.borderColor = "var(--neon-pink)";
            header.style.transition = "all 0.4s ease";
        } else {
            header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.7)";
            header.style.borderColor = "#1f1f2e";
        }
    });
});
