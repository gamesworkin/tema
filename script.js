/**
 * Games Workin Theme JS - Sistema Versão 2.0
 * Otimizações e comportamentos interativos para o Tema Gamer
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("🎮 [Games Workin v2.0] Engine gráfica carregada com sucesso.");

    // Efeito Dinâmico de Scroll no Cabeçalho (Efeito Neon Pulse reativo)
    const header = document.querySelector('.gamer-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header.style.boxShadow = "0 15px 40px rgba(0, 240, 255, 0.25)";
            header.style.borderColor = "var(--neon-pink)";
            header.style.transition = "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)";
        } else {
            header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.7)";
            header.style.borderColor = "#1f1f2e";
            header.style.borderBottomColor = "var(--neon-cyan)";
        }
    });

    // Correção programática auxiliar para links órfãos ou injetados por gadgets terceiros
    const allLinks = document.querySelectorAll('.post-body a, .gamer-sidebar a');
    allLinks.forEach(link => {
        // Se o link contiver cores inline herdadas do Blogger antigo, nós limpamos para o CSS Gamer dominar
        if (link.style.color) {
            link.style.color = '';
        }
    });
});
