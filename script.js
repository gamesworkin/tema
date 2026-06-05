document.addEventListener("DOMContentLoaded", () => {
    // Remove qualquer altura forçada que o Blogger insira na logo
    const headerImg = document.querySelector('.Header img');
    if (headerImg) {
        headerImg.style.height = 'auto';
        headerImg.style.maxHeight = 'none';
        headerImg.setAttribute('width', '100%');
    }

    // Move widgets de compartilhamento para baixo da postagem
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        const body = post.querySelector('.post-body');
        const share = post.querySelector('.share-buttons');
        if (body && share) {
            body.parentNode.insertBefore(share, body.nextSibling);
        }
    });
});
