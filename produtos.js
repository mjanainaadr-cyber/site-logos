// RAILARTS - Produtos
// Para trocar a foto de qualquer produto, altere somente o caminho em "imagem".
// Exemplo: imagem:'imagens/Canecas/minha-caneca.jpg'

const produtos = [
{id:1,nome:'Caneca Porcelana Branca',categoria:'canecas',preco:30,desc:'Acompanha caixa.',emoji:'☕',imagem:'imagens/Canecas/c53fa06f-10ee-433e-b0d3-513b647638d6 (1).jpg'},
{id:2,nome:'Caneca com Interno e Alça Colorida',categoria:'canecas',preco:40,desc:'Personalizavel.',emoji:'✨',imagem:'imagens/Canecas/WhatsApp Image 2026-09-10 at 22.27.40 (6).jpeg', fotos:['imagens/Canecas/Caneca interno colorido.jpeg','imagens/Canecas/WhatsApp Image 2026-09-10 at 22.27.40 (6).jpeg']},
{id:3,nome:'Caneca Imperial',categoria:'canecas',preco:60,desc:'Alça e borda dourada.',emoji:'🥤',imagem:'imagens/Canecas/Caneca imperial.jpeg',fotos:['imagens/Canecas/Caneca imperial.jpeg','imagens/Canecas/WhatsApp Image 2026-09-10 at 22.27.40.jpeg','imagens/Canecas/WhatsApp Image 2026-09-10 at 22.27.41 (1).jpeg']},
{id:4,nome:'Caneca para Presente',categoria:'canecas',preco:80,desc:'Otimá opção para presentear.',emoji:'💌',imagem:'imagens/Canecas/caneca para presente.jpeg'},
{id:5,nome:'Xicaras com Torre',categoria:'canecas',preco:90,desc:'kit 2 xicaras com suporte torre.',emoji:'🏷️',imagem:'imagens/Canecas/Caneca torre.jpeg'},
{id:6,nome:'Xícara com Pires Personalizado',categoria:'canecas',preco:65,desc:'O pires é personalizado com dtf UV.',emoji:'⭐',imagem:'imagens/Canecas/xicara com pires personalizado.jpeg', fotos:['imagens/Canecas/xicara com pires personalizado.jpeg','imagens/Canecas/xicara com pires.jpeg']},
{id:7,nome:'Caneca Reta c/ Colher',categoria:'canecas',preco:45,desc:'Interno colorido.',emoji:'📒',imagem:'imagens/Canecas/caneca com colher.jpeg'},
{id:8,nome:'Caneca Interno Colorido e Alça',categoria:'canecas',preco:45,desc:'c/ colher.',emoji:'📚',imagem:'imagens/Canecas/caneca interno colorido amendoado.jpeg'},
{id:9,nome:'Agenda',categoria:'papelaria',preco:50,desc:'Dois dias por folha.',emoji:'🎁',imagem:'imagens/Agenda/agend.jpeg'},
{id:10,nome:'Agendamento',categoria:'papelaria',preco:65,desc:'Agendamento.',emoji:'🎁',imagem:'imagens/Agenda/Agendamento.jpeg'},
{id:11,nome:'Caderneta Pet',categoria:'papelaria',preco:35,desc:'Caderneta pet.',emoji:'🎁',imagem:'imagens/Agenda/Caderneta pet 4.jpeg', fotos:['imagens/Agenda/Caderneta pet 4.jpeg','imagens/Agenda/Caderneta pet 1.jpeg']},
{id:12,nome:'Livro de Atividades',categoria:'papelaria',preco:35,desc:'Livro de atividades',emoji:'🎁',imagem:'imagens/Agenda/Livro atividades 2.jpeg', fotos:['imagens/Agenda/Livro atividades 2.jpeg','imagens/Agenda/Livro atividades.jpeg']},
{id:13,nome:'kit Papelaria',categoria:'papelaria',preco:25,desc:'C/ corrente e chaveiro de bambú',emoji:'🎁',imagem:'imagens/Agenda/kit papelaria.jpeg'},
{id:14,nome:'Bloco Postit',categoria:'papelaria',preco:25,desc:'Personalizavel.',emoji:'🎁',imagem:'imagens/Blocos/Bloco postit.jpeg'},
{id:15,nome:'Body',categoria:'Vestuário Personalizado',preco:35,desc:'Personalizavel.',emoji:'🎁',imagem:'imagens/Body/WhatsApp Image 2026-09-10 at 22.27.38.jpeg'},
{id:16,nome:'Ecobag Tactel',categoria:'Ecobags',preco:12,desc:'Personalizavel.',emoji:'🎁',imagem:'imagens/Bolsas/ECO.jpeg'},
{id:17,nome:'Copo Eco Branco',categoria:'Copos',preco:8,desc:'frente e verso',emoji:'🎁',imagem:'imagens/Copos/branco.jpg'},
{id:18,nome:'Copo Caldereta Jateado',categoria:'Copos',preco:8,desc:'Consultar cores',emoji:'🎁',imagem:'imagens/Copos/WhatsApp Image 2026-09-10 at 22.27.42 (3).jpeg'},
{id:19,nome:'Copo c/ Gelatina',categoria:'Copos',preco:15,desc:'Personalizavel.',emoji:'🎁',imagem:'imagens/Copos/WhatsApp Image 2026-09-10 at 22.27.43 (1).jpeg'},
{id:20,nome:'Copo Long Drink',categoria:'Copos',preco:5,desc:'Consultar cores',emoji:'🎁',imagem:'imagens/Copos/WhatsApp Image 2026-09-10 at 22.27.43 (2).jpeg'},
{id:21,nome:'Copo Long Drink Jateado',categoria:'Copos',preco:7,desc:'Consultar cores',emoji:'🎁',imagem:'imagens/Copos/WhatsApp Image 2026-09-10 at 22.27.43 (3).jpeg'},
{id:22,nome:'Taça de Gim',categoria:'Copos',preco:9,desc:'Consultar cores',emoji:'🎁',imagem:'imagens/Copos/WhatsApp Image 2026-09-10 at 22.27.43 (4).jpeg'},
{id:23,nome:'Copo Canudo',categoria:'Copos',preco:10,desc:'Consultar cores',emoji:'🎁',imagem:'imagens/Copos/WhatsApp Image 2026-09-10 at 22.27.43 (5).jpeg'},
{id:24,nome:'Taça de Gim Jateado',categoria:'Copos',preco:17,desc:'Consultar cores',emoji:'🎁',imagem:'imagens/Copos/WhatsApp Image 2026-09-10 at 22.27.45 (8).jpeg', fotos:['imagens/copos/WhatsApp Image 2026-09-10 at 22.27.45 (9).jpeg','imagens/Copos/WhatsApp Image 2026-09-10 at 22.27.45 (8).jpeg']},
{id:25,nome:'kit Caderno Moleskine',categoria:'papelaria',preco:50,desc:'C/ corrente e chaveiro de bambú',emoji:'🎁',imagem:'imagens/Agenda/3dad0a56-014d-4d75-8011-7f908e6f068c.jpg'},
{id:26,nome:'Porta Retrato',categoria:'outros',preco:35,desc:'Madeira e vidro',emoji:'🎁',imagem:'imagens/Agenda/67ce7a46-74f4-47b2-9737-02aa104576c4.jpg'},
{id:27,nome:'Azulejo 20 x 20',categoria:'outros',preco:45,desc:'Personalizavel',emoji:'🎁',imagem:'imagens/Azulejo 15 x 15 e 20 x 20/770f83db-0816-4a06-bbb3-7dee6e5bc138.jpg', fotos:['imagens/Azulejo 15 x 15 e 20 x 20/770f83db-0816-4a06-bbb3-7dee6e5bc138.jpg', 'imagens/Azulejo 15 x 15 e 20 x 20/azulejo 20 x 20 1.jpeg']},
{id:28,nome:'Azulejo 15 x 15',categoria:'outros',preco:8,desc:'Personalizavel',emoji:'🎁',imagem:'imagens/Azulejo 15 x 15 e 20 x 20/96c29ce8-3e41-409a-855e-0448747a3837.jpg'},
{id:29,nome:'Azulejo Relogio 20 x 20',categoria:'outros',preco:60,desc:'Personalizavel',emoji:'🎁',imagem:'imagens/Azulejo 15 x 15 e 20 x 20/azulejo relogio.jpeg'},



];

function getProdutosFiltrados(filtro='todos', termo=''){
  const busca=termo.trim().toLowerCase();
  const filtroNormalizado=(filtro || '').toLowerCase();
  const porCategoria=filtroNormalizado==='todos'
    ? produtos
    : produtos.filter(p => (p.categoria || '').toLowerCase() === filtroNormalizado);

  if(!busca){
    return porCategoria;
  }

  return porCategoria.filter(p=>{
    const textoCompleto=`${p.nome} ${p.desc} ${p.categoria}`.toLowerCase();
    return textoCompleto.includes(busca);
  });
}

function renderSugestoes(lista, datalistId) {
  const datalist=document.getElementById(datalistId);
  if(!datalist){ return; }

  const sugestoes=[...new Set(lista.map(p=>p.nome))].slice(0, 8);
  datalist.innerHTML=sugestoes.map(nome=>`<option value="${nome}"></option>`).join('');
}

function renderProdutos(filtro='todos', termo=''){
 const el=document.getElementById('catalogo'); if(!el)return;
 const lista=getProdutosFiltrados(filtro, termo);
 el.innerHTML=lista.map(p=>{
   const fotos=(Array.isArray(p.fotos)&&p.fotos.length)?p.fotos:[p.imagem];
   const thumbs=fotos.length>1?`<div class="produto-thumbs">${fotos.map((foto, index)=>`<button type="button" class="produto-thumb ${index===0?'ativo':''}" data-image-src="${foto}" data-image-alt="${p.nome}" aria-label="Ver imagem ${index+1} de ${p.nome}"><img src="${foto}" alt="${p.nome} ${index+1}"></button>`).join('')}</div>`:'';
   const gallery=fotos.length>1?`<div class="produto-galeria" aria-label="Galeria do produto ${p.nome}">
     <div class="produto-galeria-track">
       ${fotos.map((foto)=>`<div class="produto-slide"><img src="${foto}" alt="${p.nome}" class="imagem-ampliavel" loading="lazy" onerror="this.style.display='none'; this.parentElement.style.display='none';"></div>`).join('')}
     </div>
   </div>`:`<img src="${fotos[0]}" alt="${p.nome}" class="imagem-ampliavel" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`;
   return `<article class="produto-card">
     <div class="produto-visual produto-foto">
       ${gallery}
       <span class="produto-placeholder">${p.emoji}</span>
     </div>
     ${thumbs}
     <div class="produto-info">
       <span class="categoria">${p.categoria}</span>
       <h3>${p.nome}</h3>
       <p>${p.desc}</p>
       <div class="produto-bottom"><strong>${money(p.preco)}</strong><button onclick='addToCart(${JSON.stringify(p)})'>+ ADICIONAR</button></div>
     </div>
   </article>`;
 }).join('');

 const modal=document.getElementById('imageModal');
 const modalImg=document.getElementById('imageModalImg');
 const closeBtn=document.querySelector('.image-modal-close');
 if(!modal || !modalImg || !closeBtn) return;

 function abrirModal(src,alt){
   modalImg.src=src;
   modalImg.alt=alt;
   modal.classList.add('show');
   modal.setAttribute('aria-hidden','false');
   document.body.classList.add('modal-open');
 }

 function fecharModal(){
   modal.classList.remove('show');
   modal.setAttribute('aria-hidden','true');
   document.body.classList.remove('modal-open');
 }

 el.querySelectorAll('.imagem-ampliavel').forEach(img=>{
   img.addEventListener('click',()=>abrirModal(img.src, img.alt));
 });

 el.querySelectorAll('.produto-thumb').forEach(btn=>{
   btn.addEventListener('click',()=>abrirModal(btn.dataset.imageSrc, btn.dataset.imageAlt));
 });

 el.querySelectorAll('.produto-galeria').forEach(galeria=>{
   let isDragging=false;
   let startX=0;
   let startScrollLeft=0;

   galeria.addEventListener('pointerdown',(event)=>{
     isDragging=true;
     startX=event.clientX;
     startScrollLeft=galeria.scrollLeft;
     galeria.classList.add('dragging');
     galeria.setPointerCapture(event.pointerId);
   });

   galeria.addEventListener('pointermove',(event)=>{
     if(!isDragging) return;
     const delta=event.clientX-startX;
     galeria.scrollLeft=startScrollLeft-delta;
   });

   const stopDragging=()=>{
     isDragging=false;
     galeria.classList.remove('dragging');
   };

   galeria.addEventListener('pointerup',stopDragging);
   galeria.addEventListener('pointerleave',stopDragging);
   galeria.addEventListener('pointercancel',stopDragging);
 });

 closeBtn.onclick=fecharModal;
 modal.onclick=(event)=>{
   if(event.target===modal){ fecharModal(); }
 };

 document.onkeydown=(event)=>{
   if(event.key==='Escape' && modal.classList.contains('show')){
     fecharModal();
   }
 };
}

document.addEventListener('DOMContentLoaded',()=>{
 const inputPesquisa=document.getElementById('pesquisaProdutos');
 const filtroAtivo=document.querySelector('.filtro.ativo');

 renderSugestoes(produtos, 'sugestoesProdutos');
 renderProdutos();
 renderCart();

 if(inputPesquisa){
   inputPesquisa.addEventListener('input', (event)=>{
     const filtroSelecionado=document.querySelector('.filtro.ativo')?.dataset.filtro || 'todos';
     renderProdutos(filtroSelecionado, event.target.value);
   });
 }

 document.querySelectorAll('.filtro').forEach(btn=>btn.addEventListener('click',()=>{
   document.querySelectorAll('.filtro').forEach(b=>b.classList.remove('ativo'));
   btn.classList.add('ativo');
   const termo=inputPesquisa ? inputPesquisa.value : '';
   renderProdutos(btn.dataset.filtro, termo);
 }));
});
