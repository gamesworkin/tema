/**
 * Games Workin Theme JS - Versão 7.0
 * Realocação segura de botões de compartilhamento
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("🎮 [Games Workin v7.0] Carregamento seguro de módulos.");

    // Efeito Neon do Cabeçalho
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

    // Realocar botões de compartilhamento para o RODAPÉ da postagem
    const posts = document.querySelectorAll('.post');
    
    posts.forEach(post => {
        const postBody = post.querySelector('.post-body');
        const shareBtns = post.querySelector('.share-buttons') || post.querySelector('.post-share-buttons');
        const jumpLink = post.querySelector('.jump-link');

        if (postBody) {
            // Cria a área de rodapé forçado logo após o texto da postagem
            let bottomWrapper = post.querySelector('.gamer-bottom-wrapper');
            if (!bottomWrapper) {
                bottomWrapper = document.createElement('div');
                bottomWrapper.className = 'gamer-bottom-wrapper';
                // Insere depois do post-body
                postBody.parentNode.insertBefore(bottomWrapper, postBody.nextSibling);
            }

            // Move os elementos para dentro do rodapé de forma segura (preserva cliques)
            if (shareBtns) bottomWrapper.appendChild(shareBtns);
            if (jumpLink) bottomWrapper.appendChild(jumpLink);
        }
    });
});
