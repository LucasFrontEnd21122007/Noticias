document.addEventListener('DOMContentLoaded', function () {
    // Simulando carregamento de notícias (pode ser substituído por uma chamada a uma API real)
    const noticias = [
        { titulo: 'Manchete 1', conteudo: 'Conteúdo da manchete 1.' },
        { titulo: 'Manchete 2', conteudo: 'Conteúdo da manchete 2.' },
        { titulo: 'Manchete 3', conteudo: 'Conteúdo da manchete 3.' },
    ];

    const noticiasContainer = document.getElementById('noticias');

    noticias.forEach(noticia => {
        const noticiaElement = document.createElement('div');
        noticiaElement.classList.add('noticia');

        const tituloElement = document.createElement('h2');
        tituloElement.textContent = noticia.titulo;

        const conteudoElement = document.createElement('p');
        conteudoElement.textContent = noticia.conteudo;

        noticiaElement.appendChild(tituloElement);
        noticiaElement.appendChild(conteudoElement);

        noticiasContainer.appendChild(noticiaElement);
    });
});