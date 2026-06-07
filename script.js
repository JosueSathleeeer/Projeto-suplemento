// Modo claro/escuro
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('temaNexus');

if (savedTheme === 'claro') {
    document.body.classList.add('light-mode');
    if (themeToggle) themeToggle.textContent = 'Modo escuro';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('temaNexus', isLight ? 'claro' : 'escuro');
        themeToggle.textContent = isLight ? 'Modo escuro' : 'Modo claro';
    });
}

// Filtro de produtos na página Whey
const filtroBotoes = document.querySelectorAll('.filtro-btn');
const produtos = document.querySelectorAll('.produto-item');
const mensagemFiltro = document.getElementById('mensagemFiltro');

filtroBotoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        const filtro = botao.dataset.filter;
        let totalVisivel = 0;

        filtroBotoes.forEach((item) => {
            item.classList.remove('active', 'btn-warning');
            item.classList.add('btn-outline-warning');
        });

        botao.classList.add('active', 'btn-warning');
        botao.classList.remove('btn-outline-warning');

        produtos.forEach((produto) => {
            const deveMostrar = filtro === 'todos' || produto.dataset.sabor === filtro;
            produto.style.display = deveMostrar ? 'block' : 'none';
            if (deveMostrar) totalVisivel++;
        });

        if (mensagemFiltro) {
            mensagemFiltro.textContent = `Mostrando ${totalVisivel} produto(s).`;
        }
    });
});

// Favoritar produtos
const favoritoBotoes = document.querySelectorAll('.favorito-btn');

favoritoBotoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        botao.classList.toggle('favoritado');
        botao.textContent = botao.classList.contains('favoritado') ? '♥ Favoritado' : '♡ Favoritar';
    });
});

// Mensagem dinâmica no formulário de contato
const formContato = document.getElementById('formContato');
const mensagemContato = document.getElementById('mensagemContato');

if (formContato && mensagemContato) {
    formContato.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const nome = document.getElementById('nome').value.trim();
        mensagemContato.textContent = `Obrigado, ${nome}! Sua mensagem foi registrada com sucesso.`;
        formContato.reset();
    });
}
