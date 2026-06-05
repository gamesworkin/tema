/**
 * Games Workin Theme JS - Versão 3.0
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("🎮 [Games Workin v3.0] Ajustes visuais de logo e vetores carregados.");

    const header = document.querySelector('.gamer-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header.style.boxShadow = "0 15px 40px rgba(0, 240, 255, 0.25)";
            header.style.borderColor = "var(--neon-pink)";
        } else {
            header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.7)";
            header.style.borderColor = "#1f1f2e";
        }
    });
});
