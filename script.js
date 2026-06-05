/**
 * Games Workin Theme JS - Versão 5.0
 * Correção agressiva de tamanho de vetores e realocação de rodapé
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("🎮 [Games Workin v5.0] Otimização de Menu e Correção de Ícones ativada.");

    // Efeito de rolagem do Cabeçalho
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

    // SISTEMA DE CORREÇÃO DO BLOGGER: Realocação e Limpeza de Ícones
    const posts = document.querySelectorAll('.post');
    
    posts.forEach(post => {
        const postBody = post.querySelector('.post-body');
        if (!postBody) return;

        let bottomWrapper = post.querySelector('.gamer-bottom-wrapper');
        if (!bottomWrapper) {
            bottomWrapper = document.createElement('div');
            bottomWrapper.className = 'gamer-bottom-wrapper';
            postBody.parentNode.insertBefore(bottomWrapper, postBody.nextSibling);
        }

        const elementsToMoveDown = [
            post.querySelector('.jump-link'),
            post.querySelector('.share-buttons'),
            post.querySelector('.post-share-buttons'),
            post.querySelector('.post-labels'),
            post.querySelector('.post-footer')
        ];

        elementsToMoveDown.forEach(el => {
            if (el) {
                bottomWrapper.appendChild(el);
            }
        });

        // LIMPEZA AGRESSIVA DE ÍCONES:
        // O Blogger injeta tamanhos inline (<svg width="100%" height="100%">) que quebram o layout.
        // Vamos varrer todos os svgs/imgs no rodapé e arrancar esses atributos.
        const icons = bottomWrapper.querySelectorAll('svg, img');
        icons.forEach(icon => {
            icon.removeAttribute('width');
            icon.removeAttribute('height');
            icon.style.width = '18px';
            icon.style.height = '18px';
        });
    });
});
