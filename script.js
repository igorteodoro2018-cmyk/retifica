// =====================================================
// SCRIPT PROFISSIONAL - RETÍFICA CENTER MOTORS
// =====================================================

// =====================================================
// MENU MOBILE
// =====================================================

const menu = document.querySelector('.menu');

const botaoMenu = document.createElement('button');
botaoMenu.innerHTML = '☰';
botaoMenu.classList.add('menu-mobile');

document.querySelector('.header').appendChild(botaoMenu);

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

// =====================================================
// SCROLL HEADER
// =====================================================

window.addEventListener('scroll', () => {

    const header = document.querySelector('.header');

    if (window.scrollY > 50) {
        header.classList.add('scroll-header');
    }
    else {
        header.classList.remove('scroll-header');
    }

});

// =====================================================
// BOTÃO VOLTAR TOPO
// =====================================================

const voltarTopo = document.createElement('button');
voltarTopo.innerHTML = '↑';
voltarTopo.classList.add('voltar-topo');

document.body.appendChild(voltarTopo);

window.addEventListener('scroll', () => {

    if (window.scrollY > 300) {
        voltarTopo.style.display = 'block';
    }
    else {
        voltarTopo.style.display = 'none';
    }

});

voltarTopo.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});

// =====================================================
// ANIMAÇÃO AO ROLAR
// =====================================================

const elementos = document.querySelectorAll(
    '.card-servico, .vantagem, .cliente, .empresa-texto, .empresa-imagem'
);

function animarScroll() {

    const topoTela = window.innerHeight * 0.85;

    elementos.forEach((elemento) => {

        const posicao = elemento.getBoundingClientRect().top;

        if (posicao < topoTela) {
            elemento.classList.add('mostrar');
        }

    });

}

window.addEventListener('scroll', animarScroll);
animarScroll();

// =====================================================
// FORMULÁRIO
// =====================================================

const formulario = document.querySelector('.formulario');

if (formulario) {

    formulario.addEventListener('submit', (e) => {

        e.preventDefault();

        const nome = formulario.querySelector('input[type="text"]').value;

        if (nome === '') {
            alert('Digite seu nome');
            return;
        }

        alert('Mensagem enviada com sucesso!');

        formulario.reset();

    });

}

// =====================================================
// CONTADOR DE VISITAS
// =====================================================

let visitas = localStorage.getItem('visitasSite');

if (!visitas) {
    visitas = 0;
}

visitas++;

localStorage.setItem('visitasSite', visitas);

console.log('Número de visitas:', visitas);

// =====================================================
// DARK MODE
// =====================================================

const botaoDark = document.createElement('button');

botaoDark.innerHTML = '🌙';
botaoDark.classList.add('dark-mode-btn');

document.body.appendChild(botaoDark);

botaoDark.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'dark');
    }
    else {
        localStorage.setItem('tema', 'light');
    }

});

if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('dark-mode');
}

// =====================================================
// SLIDER AUTOMÁTICO
// =====================================================

const imagens = [
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1800',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1800',
    'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1800'
];

let slideAtual = 0;

function trocarSlide() {

    const hero = document.querySelector('.hero');

    if (hero) {

        hero.style.backgroundImage = `
        linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
        url(${imagens[slideAtual]})`;

        slideAtual++;

        if (slideAtual >= imagens.length) {
            slideAtual = 0;
        }

    }

}

setInterval(trocarSlide, 5000);

// =====================================================
// PRELOADER
// =====================================================

const preloader = document.createElement('div');
preloader.classList.add('preloader');
preloader.innerHTML = '<div class="loader"></div>';

document.body.appendChild(preloader);

window.addEventListener('load', () => {

    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);

});

// =====================================================
// DATA AUTOMÁTICA
// =====================================================

const footer = document.querySelector('.footer p');

if (footer) {

    const ano = new Date().getFullYear();

    footer.innerHTML = `© ${ano} Center Motors - Todos os direitos reservados`;

}

// =====================================================
// TOOLTIP
// =====================================================

const botoes = document.querySelectorAll('a');

botoes.forEach((botao) => {

    botao.addEventListener('mouseenter', () => {
        botao.style.opacity = '0.8';
    });

    botao.addEventListener('mouseleave', () => {
        botao.style.opacity = '1';
    });

});

// =====================================================
// EFEITO DIGITAÇÃO
// =====================================================

const titulo = document.querySelector('.hero-texto h2');

if (titulo) {

    const textoOriginal = titulo.innerHTML;

    titulo.innerHTML = '';

    let i = 0;

    function escreverTexto() {

        if (i < textoOriginal.length) {

            titulo.innerHTML += textoOriginal.charAt(i);

            i++;

            setTimeout(escreverTexto, 50);

        }

    }

    escreverTexto();

}

// =====================================================
// GALERIA LIGHTBOX
// =====================================================

const imagensGaleria = document.querySelectorAll('.grid-galeria img');

imagensGaleria.forEach((img) => {

    img.addEventListener('click', () => {

        const overlay = document.createElement('div');
        overlay.classList.add('lightbox');

        const imagemGrande = document.createElement('img');
        imagemGrande.src = img.src;

        overlay.appendChild(imagemGrande);

        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            overlay.remove();
        });

    });

});

// =====================================================
// REVELAR ELEMENTOS
// =====================================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('ativo');
        }

    });

});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

// =====================================================
// SOM CLIQUE
// =====================================================

const audio = new Audio(
    'https://www.soundjay.com/buttons/sounds/button-16.mp3'
);

botoes.forEach((btn) => {

    btn.addEventListener('click', () => {

        audio.currentTime = 0;
        audio.play();

    });

});

// =====================================================
// RELÓGIO DIGITAL
// =====================================================

const relogio = document.createElement('div');
relogio.classList.add('relogio-digital');

document.body.appendChild(relogio);

function atualizarRelogio() {

    const agora = new Date();

    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    relogio.innerHTML = `${horas}:${minutos}:${segundos}`;

}

setInterval(atualizarRelogio, 1000);

// =====================================================
// FRASES AUTOMÁTICAS
// =====================================================

const frases = [
    'Qualidade garantida',
    'Atendimento profissional',
    'Especialistas em motores',
    'Seu carro em boas mãos'
];

let fraseAtual = 0;

const fraseElemento = document.createElement('div');
fraseElemento.classList.add('frases-automaticas');

document.body.appendChild(fraseElemento);

function trocarFrase() {

    fraseElemento.innerHTML = frases[fraseAtual];

    fraseAtual++;

    if (fraseAtual >= frases.length) {
        fraseAtual = 0;
    }

}

setInterval(trocarFrase, 3000);
trocarFrase();

// =====================================================
// BLOQUEAR BOTÃO DIREITO
// =====================================================

window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// =====================================================
// BLOQUEAR F12
// =====================================================

window.addEventListener('keydown', (e) => {

    if (e.key === 'F12') {
        e.preventDefault();
    }

});

// =====================================================
// MENSAGEM AUTOMÁTICA
// =====================================================

setTimeout(() => {

    const mensagem = document.createElement('div');

    mensagem.classList.add('mensagem-site');

    mensagem.innerHTML = 'Bem-vindo à Center Motors 🚗';

    document.body.appendChild(mensagem);

    setTimeout(() => {
        mensagem.remove();
    }, 5000);

}, 3000);

// =====================================================
// BARRA DE PROGRESSO
// =====================================================

const barra = document.createElement('div');
barra.classList.add('barra-progresso');
document.body.appendChild(barra);

window.addEventListener('scroll', () => {

    const altura = document.documentElement.scrollHeight - window.innerHeight;

    const progresso = (window.scrollY / altura) * 100;

    barra.style.width = progresso + '%';

});

// =====================================================
// CONTADOR DE NÚMEROS
// =====================================================

const numeros = document.querySelectorAll('.contador');

numeros.forEach((numero) => {

    let iniciar = 0;

    const final = parseInt(numero.dataset.numero);

    const tempo = setInterval(() => {

        iniciar++;

        numero.innerHTML = iniciar;

        if (iniciar >= final) {
            clearInterval(tempo);
        }

    }, 20);

});

// =====================================================
// SISTEMA DE LOGIN
// =====================================================

const usuarios = [];

function cadastrarUsuario(nome, email, senha) {

    usuarios.push({
        nome,
        email,
        senha
    });

    console.log('Usuário cadastrado');

}

function loginUsuario(email, senha) {

    const usuario = usuarios.find((u) => {
        return u.email === email && u.senha === senha;
    });

    if (usuario) {
        alert('Login realizado com sucesso');
    }
    else {
        alert('Email ou senha incorretos');
    }

}

// =====================================================
// CARRINHO DE COMPRAS
// =====================================================

let carrinho = [];

function adicionarCarrinho(produto, preco) {

    carrinho.push({
        produto,
        preco
    });

    atualizarCarrinho();

}

function atualizarCarrinho() {

    console.log('Itens no carrinho:', carrinho.length);

}

// =====================================================
// CHATBOT
// =====================================================

const chatbot = document.createElement('div');
chatbot.classList.add('chatbot');
chatbot.innerHTML = '💬 Atendimento Online';

document.body.appendChild(chatbot);

chatbot.addEventListener('click', () => {

    alert('Olá! Como podemos ajudar você?');

});

// =====================================================
// AGENDAMENTO
// =====================================================

function agendarServico(cliente, data) {

    console.log(`Serviço agendado para ${cliente} em ${data}`);

}

// =====================================================
// PESQUISA
// =====================================================

const pesquisa = document.querySelector('#pesquisa');

if (pesquisa) {

    pesquisa.addEventListener('keyup', () => {

        const valor = pesquisa.value.toLowerCase();

        const cards = document.querySelectorAll('.card-servico');

        cards.forEach((card) => {

            const titulo = card.innerText.toLowerCase();

            if (titulo.includes(valor)) {
                card.style.display = 'block';
            }
            else {
                card.style.display = 'none';
            }

        });

    });

}

// =====================================================
// NOTIFICAÇÃO
// =====================================================

function criarNotificacao(texto) {

    const notificacao = document.createElement('div');

    notificacao.classList.add('notificacao');

    notificacao.innerHTML = texto;

    document.body.appendChild(notificacao);

    setTimeout(() => {
        notificacao.remove();
    }, 4000);

}

// =====================================================
// PAINEL ADMIN
// =====================================================

const admin = {

    usuarios: 0,
    mensagens: 0,
    servicos: 0

};

function atualizarPainel() {

    console.log(admin);

}

// =====================================================
// SISTEMA DE AVALIAÇÃO
// =====================================================

function avaliar(nota) {

    console.log('Avaliação recebida:', nota);

}

// =====================================================
// GOOGLE MAPS
// =====================================================

function abrirMapa() {

    window.open('https://maps.google.com', '_blank');

}

// =====================================================
// SISTEMA DE LOADING
// =====================================================

function loadingSistema() {

    console.log('Carregando sistema...');

}

// =====================================================
// SISTEMA DE PRODUTOS
// =====================================================

const produtos = [

    {
        nome: 'Retífica Completa',
        preco: 1200
    },

    {
        nome: 'Cabeçote',
        preco: 500
    },

    {
        nome: 'Troca de Óleo',
        preco: 150
    }

];

console.table(produtos);

// =====================================================
// SISTEMA RESPONSIVO
// =====================================================

window.addEventListener('resize', () => {

    console.log('Largura atual:', window.innerWidth);

});

// =====================================================
// SISTEMA DE ANIMAÇÃO
// =====================================================

function animarElemento(elemento) {

    elemento.style.opacity = '1';
    elemento.style.transform = 'translateY(0)';

}

// =====================================================
// SEO
// =====================================================

const meta = document.createElement('meta');
meta.name = 'description';
meta.content = 'Retífica profissional de motores';

document.head.appendChild(meta);

// =====================================================
// FINAL
// =====================================================

console.log('SCRIPT PROFISSIONAL CARREGADO COM SUCESSO');

