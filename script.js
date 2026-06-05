/**
 * Games Workin Theme JS - Versão 7.1
 * Realocação estável v7 + Ajuste dinâmico de mídias responsivas
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("🎮 [Games Workin v7.1] Sistema estabilizado com imagens responsivas.");

    // Efeito Neon de Scroll do Cabeçalho
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

    // Realocar botões de compartilhamento para debaixo do texto da postagem
    const posts = document.querySelectorAll('.post');
    
    posts.forEach(post => {
        const postBody = post.querySelector('.post-body');
        const shareBtns = post.querySelector('.share-buttons') || post.querySelector('.post-share-buttons');
        const jumpLink = post.querySelector('.jump-link');

        if (postBody) {
            let bottomWrapper = post.querySelector('.gamer-bottom-wrapper');
            if (!bottomWrapper) {
                bottomWrapper = document.createElement('div');
                bottomWrapper.className = 'gamer-bottom-wrapper';
                postBody.parentNode.insertBefore(bottomWrapper, postBody.nextSibling);
            }

            if (shareBtns) bottomWrapper.appendChild(shareBtns);
            if (jumpLink) bottomWrapper.appendChild(jumpLink);

            // CORREÇÃO AUXILIAR MOBILE: Proíbe larguras em píxeis fixos de quebrarem a proporção
            const postImages = postBody.querySelectorAll('img');
            postImages.forEach(img => {
                img.removeAttribute('width');
                img.removeAttribute('height');
                img.style.width = '100%';
                img.style.height = 'auto';
            });
        }
    });
});
