/* Categorias — dados de exemplo compartilhados entre a lista (index.html) e o formulário (categoria.html). Depende de ../../assets/app-shell.js */
(function () {
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

  var S = window.PLShell;
  window.Categorias = { icon: S.icon, esc: S.esc, norm: S.norm, plural: S.plural, toast: S.toast, flash: S.flash,
    PRODUCTS: PRODUCTS, product: product, load: load, save: save, newId: newId };
})();
