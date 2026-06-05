/**
 * Games Workin Theme JS - Versão 4.0
 * Engine de Layout Forçado: Corrige o bug do Blogger de misturar Rodapé com Cabeçalho
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("🎮 [Games Workin v4.0] Sistema de ancoragem de rodapé ativado.");

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

    // SISTEMA DE CORREÇÃO DO BLOGGER:
    // Pega todas as postagens na página e move os elementos de rodapé (Compartilhar, Leia Mais)
    // obrigatoriamente para DEBAIXO do conteúdo do texto.
    const posts = document.querySelectorAll('.post');
    
    posts.forEach(post => {
        const postBody = post.querySelector('.post-body');
        if (!postBody) return; // Se não houver corpo da postagem, ignora

        // Cria o contêiner de rodapé forçado caso não exista
        let bottomWrapper = post.querySelector('.gamer-bottom-wrapper');
        if (!bottomWrapper) {
            bottomWrapper = document.createElement('div');
            bottomWrapper.className = 'gamer-bottom-wrapper';
            // Insere o contêiner imediatamente após o corpo do texto
            postBody.parentNode.insertBefore(bottomWrapper, postBody.nextSibling);
        }

        // Mapeia todos os widgets que o Blogger teima em jogar pra cima
        const elementsToMoveDown = [
            post.querySelector('.jump-link'),        // Botão "Leia mais"
            post.querySelector('.share-buttons'),    // Menu novo de Compartilhamento
            post.querySelector('.post-share-buttons'), // Menu antigo de Compartilhamento
            post.querySelector('.post-labels'),      // Marcadores (Tags)
            post.querySelector('.post-footer')       // Rodapé padrão
        ];

        // Se o elemento existir na postagem, move ele para dentro do novo Rodapé Forçado
        elementsToMoveDown.forEach(el => {
            if (el) {
                bottomWrapper.appendChild(el);
            }
        });
    });
});
