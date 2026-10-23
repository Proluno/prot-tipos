/* Categorias — menu principal, ícones e dados compartilhados entre a lista (index.html) e o formulário (categoria.html) */
(function () {
  var SPRITE = {
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
    box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    dollar: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    megaphone: '<path d="m3 11 18-5v12L3 14z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
    chart: '<path d="M12 20V10M18 20V4M6 20v-4"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M8.2 13.2 7 22l5-3 5 3-1.2-8.8"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    message: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8z"/>',
    star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2 2 9.3l6.9-1z"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    'chevron-left': '<path d="m15 18-6-6 6-6"/>',
    bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    more: '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
    edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    trash: '<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
    package: '<path d="M16.5 9.4 7.5 4.2M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    'arrow-right': '<path d="M5 12h14M12 5l7 7-7 7"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    alert: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>'
  };
  var sprite = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  sprite.setAttribute('width', '0'); sprite.setAttribute('height', '0'); sprite.setAttribute('aria-hidden', 'true'); sprite.style.position = 'absolute';
  sprite.innerHTML = Object.keys(SPRITE).map(function (k) { return '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + SPRITE[k] + '</symbol>'; }).join('');
  document.body.insertBefore(sprite, document.body.firstChild);

  function icon(name, cls, sw) {
    return '<svg' + (cls ? ' class="' + cls + '"' : '') + ' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (sw || 2) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use href="#i-' + name + '"/></svg>';
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function norm(s) { return (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim(); }
  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : many); }

  /* ---------- Moldura: menu principal, gaveta e cabeçalho ---------- */
  var ROOT = '../../';
  var HERE = '03-produtos/03-categorias/';
  var NAV = [
    { label: 'Início', icon: 'home', href: '01-inicio/' },
    { label: 'Construa seu site', icon: 'layout', href: '02-construa-seu-site/' },
    { label: 'Produtos', icon: 'box', items: [['Meus Produtos', '03-produtos/01-meus-produtos/'], ['Biblioteca de vídeo', '03-produtos/02-biblioteca-de-video/'], ['Categorias', '03-produtos/03-categorias/']] },
    { label: 'Checkout', icon: 'card', items: [['Gestão de checkout', '04-checkout/01-gestao-de-checkout/'], ['Order Bump', '04-checkout/02-order-bump/']] },
    { label: 'Financeiro', icon: 'dollar', items: [['Dashboard', '05-financeiro/01-dashboard/'], ['Transações', '05-financeiro/02-transacoes/'], ['Compartilhamento de Receita', '05-financeiro/03-compartilhamento-de-receita/'], ['Extrato', '05-financeiro/04-extrato/'], ['Planos', '05-financeiro/05-planos/'], ['Dashboard assinaturas', '05-financeiro/06-dashboard-assinaturas/'], ['Notas Fiscais (Nfe.io)', '05-financeiro/07-notas-fiscais/']] },
    { label: 'Marketing', icon: 'megaphone', items: [['Cupons', '06-marketing/01-cupons/'], ['Blog', '06-marketing/02-blog/'], ['Promoções', '06-marketing/03-promocoes/'], ['Produtos p/ afiliação', '06-marketing/04-produtos-para-afiliacao/'], ['Afiliados', '06-marketing/05-afiliados/']] },
    { label: 'Usuários', icon: 'users', items: [['Usuários da conta', '07-usuarios/01-usuarios-da-conta/'], ['Base de alunos', '07-usuarios/02-base-de-alunos/'], ['Instrutores', '07-usuarios/03-instrutores/']] },
    { label: 'Configurações', icon: 'settings', items: [['Editar perfil', '08-configuracoes/01-editar-perfil/'], ['Dados bancários', '08-configuracoes/02-dados-bancarios/'], ['Notificações', '08-configuracoes/03-notificacoes/'], ['Integrações', '08-configuracoes/04-integracoes/']] }
  ];
  var TOOLS = [
    ['Pro Pulse', 'zap', '09-ferramentas/01-pro-pulse/'], ['Hub de questões', 'help', '09-ferramentas/02-hub-de-questoes/'],
    ['UTM Analytics', 'chart', '09-ferramentas/03-utm-analytics/'], ['Pro Membros', 'award', '09-ferramentas/04-pro-membros/'],
    ['Planejamentos', 'calendar', '09-ferramentas/05-planejamentos/'], ['Mentoreasy', 'message', '09-ferramentas/06-mentoreasy/'],
    ['Meu Plano', 'star', '09-ferramentas/07-meu-plano/']
  ];

  var navList = document.getElementById('appNavList');
  navList.innerHTML = NAV.map(function (n, i) {
    if (!n.items) return '<a class="pl-nav-item" href="' + ROOT + n.href + '">' + icon(n.icon, '', 1.8) + n.label + '</a>';
    var active = n.items.some(function (it) { return it[1] === HERE; });
    return '<div class="pl-nav-group' + (active ? ' is-open has-active' : '') + '">' +
      '<button class="pl-nav-item" type="button" aria-expanded="' + active + '" aria-controls="navg' + i + '">' + icon(n.icon, '', 1.8) + n.label + icon('chevron-down', 'pl-nav-item-chevron') + '</button>' +
      '<div class="pl-nav-group-items" id="navg' + i + '">' + n.items.map(function (it) {
        var on = it[1] === HERE;
        return '<a class="pl-nav-subitem' + (on ? ' is-active' : '') + '" href="' + ROOT + it[1] + '"' + (on ? ' aria-current="page"' : '') + '>' + it[0] + '</a>';
      }).join('') + '</div></div>';
  }).join('') + '<p class="pl-nav-label">Ferramentas</p>' + TOOLS.map(function (t) {
    return '<a class="pl-nav-item" href="' + ROOT + t[2] + '"><span class="pl-nav-tool-icon">' + icon(t[1]) + '</span>' + t[0] + '</a>';
  }).join('');
  navList.addEventListener('click', function (e) {
    var b = e.target.closest('button.pl-nav-item'); if (!b) return;
    var g = b.parentElement, open = !g.classList.contains('is-open');
    g.classList.toggle('is-open', open); b.setAttribute('aria-expanded', open);
  });

  var nav = document.getElementById('appNav'), navBackdrop = document.getElementById('navBackdrop'), navOpenBtn = document.getElementById('navOpen');
  function setNav(open) {
    nav.classList.toggle('is-open', open); navBackdrop.classList.toggle('is-open', open);
    navOpenBtn.setAttribute('aria-expanded', open); document.body.style.overflow = open ? 'hidden' : '';
    if (open) nav.querySelector('.pl-drawer-close').focus(); else navOpenBtn.focus();
  }
  navOpenBtn.addEventListener('click', function () { setNav(true); });
  document.querySelectorAll('[data-nav-close]').forEach(function (el) { el.addEventListener('click', function () { setNav(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('is-open')) setNav(false); });

  /* ---------- Toast (também depois de trocar de página) ---------- */
  var toasts = document.getElementById('toasts');
  function toast(msg) {
    var t = document.createElement('div'); t.className = 'pl-toast'; t.innerHTML = icon('check') + esc(msg); toasts.appendChild(t);
    setTimeout(function () { t.style.transition = 'opacity .2s'; t.style.opacity = '0'; setTimeout(function () { t.remove(); }, 220); }, 2800);
  }
  function flash(msg) { try { sessionStorage.setItem('pl-categorias-toast', msg); } catch (e) {} }
  try { var pending = sessionStorage.getItem('pl-categorias-toast'); if (pending) { sessionStorage.removeItem('pl-categorias-toast'); toast(pending); } } catch (e) {}

  /* ---------- Dados ---------- */
  var PRODUCTS = ['Preparatório Farmácia para Concursos e Residências', 'Direito Constitucional na Prática', 'Festival das Imparáveis', 'Treino Discursivas',
    'Direito Constitucional para Iniciantes', 'Gold Face', 'A Verdadeira Harmonia', 'Além do Óbvio', 'Presets - Posts Incríveis', 'Imagem de Influência',
    'Mentoria Imparável', 'Direitos e Garantias Fundamentais em Questões', 'Controle de Constitucionalidade na Prática', 'Mentoria Imparável + Bônus',
    'Turma Além do Óbvio + Bônus', 'Aprova Concursos', 'Oficial de Justiça - TJCE 2026', 'Blusa Aulão GCM', 'Gravação Aulão GCM', 'AULÃO GCM',
    'Cronograma', 'Nebulosa', 'Sunshine', 'Star', 'Galaxy', 'Universe', 'Aurora Proluno', 'Curso Intermediário', 'IA para Iniciantes'
  ].map(function (name, i) { return { id: 'p' + i, name: name }; });
  function pid(name) { for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].name === name) return PRODUCTS[i].id; }
  function product(id) { for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].id === id) return PRODUCTS[i]; }

  function seed() {
    var n = 0;
    function cat(name, desc, names) { return { id: 'c' + (++n), name: name, desc: desc, products: names.map(pid) }; }
    return [
      cat('Direito Constitucional', 'Cursos e questões de Direito Constitucional, do básico à prática.', ['Direito Constitucional na Prática', 'Direito Constitucional para Iniciantes', 'Direitos e Garantias Fundamentais em Questões', 'Controle de Constitucionalidade na Prática']),
      cat('Concursos públicos', 'Preparatórios e materiais para concursos de nível médio e superior.', ['Preparatório Farmácia para Concursos e Residências', 'Oficial de Justiça - TJCE 2026', 'Aprova Concursos', 'Treino Discursivas', 'AULÃO GCM', 'Gravação Aulão GCM']),
      cat('Lançamentos', 'Novidades para quem quer sair na frente.', ['Imagem de Influência', 'Mentoria Imparável + Bônus', 'Turma Além do Óbvio + Bônus', 'IA para Iniciantes']),
      cat('Mentorias', 'Acompanhamento próximo, com encontros ao vivo.', ['Mentoria Imparável', 'Mentoria Imparável + Bônus', 'Festival das Imparáveis']),
      cat('Marketing e imagem pessoal', 'Posicionamento, conteúdo e presença nas redes sociais.', ['Imagem de Influência', 'Presets - Posts Incríveis', 'Gold Face', 'A Verdadeira Harmonia', 'Além do Óbvio']),
      cat('Até R$ 29,90', 'Produtos de entrada para conhecer o seu trabalho.', ['Cronograma', 'Presets - Posts Incríveis']),
      cat('Produtos gratuitos', '', [])
    ];
  }
  /* As alterações ficam no navegador de quem testa, para o fluxo lista → formulário → lista funcionar */
  var KEY = 'pl-categorias-dados';
  function load() {
    try { var raw = localStorage.getItem(KEY); if (raw) { var d = JSON.parse(raw); if (Array.isArray(d)) return d; } } catch (e) {}
    return seed();
  }
  function save(cats) { try { localStorage.setItem(KEY, JSON.stringify(cats)); } catch (e) {} }
  function newId(cats) { var max = 0; cats.forEach(function (c) { var n = +String(c.id).slice(1); if (n > max) max = n; }); return 'c' + (max + 1); }

  window.Categorias = { icon: icon, esc: esc, norm: norm, plural: plural, toast: toast, flash: flash,
    PRODUCTS: PRODUCTS, product: product, load: load, save: save, newId: newId };
})();
