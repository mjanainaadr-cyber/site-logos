// RAILARTS - Carrinho, login e registro de pedidos (armazenamento local do navegador)
const RAILARTS_CART_KEY = 'railartsCarrinho';
const RAILARTS_USERS_KEY = 'railartsUsuarios';
const RAILARTS_USER_KEY = 'railartsUsuarioAtual';
const RAILARTS_ORDERS_KEY = 'railartsPedidos';

function getCart(){ return JSON.parse(localStorage.getItem(RAILARTS_CART_KEY) || '[]'); }
function saveCart(cart){ localStorage.setItem(RAILARTS_CART_KEY, JSON.stringify(cart)); updateCartBadge(); }
function cartCount(){ return getCart().reduce((s,p)=>s+(Number(p.qtd)||0),0); }
function updateCartBadge(){ document.querySelectorAll('#contadorCarrinho').forEach(e=>e.textContent=cartCount()); }
function money(v){ return Number(v).toLocaleString('pt-BR',{style:'currency',currency:'BRL'}); }

function addToCart(product){
  const cart=getCart(); const found=cart.find(p=>p.id===product.id);
  if(found) found.qtd=(Number(found.qtd)||0)+1;
  else cart.push({...product,qtd:1});
  saveCart(cart); toast('Produto adicionado ao carrinho!');
}
function changeCart(id,delta){
  const cart=getCart(); const item=cart.find(p=>p.id===id); if(!item)return;
  item.qtd+=delta; const filtered=cart.filter(p=>p.qtd>0); saveCart(filtered);
}
function removeCart(id){ saveCart(getCart().filter(p=>p.id!==id)); }
function clearCart(){ if(getCart().length && confirm('Deseja realmente limpar o carrinho?')) saveCart([]); }
function renderCart(containerId='itensCarrinho'){
  const area=document.getElementById(containerId); if(!area)return;
  const empty=document.getElementById('carrinhoVazio'); const cart=getCart();
  if(empty) empty.style.display=cart.length?'none':'block';
  area.innerHTML=cart.map(p=>`<div class="item-carrinho"><div class="mini-produto">${p.emoji||'🎁'}</div><div class="item-dados"><h3>${p.nome}</h3><span>${money(p.preco)} cada</span></div><div class="quantidade"><button onclick="changeCart(${p.id},-1)">−</button><b>${p.qtd}</b><button onclick="changeCart(${p.id},1)">+</button></div><strong class="subtotal">${money(p.preco*p.qtd)}</strong><button class="remover" onclick="removeCart(${p.id})">✕</button></div>`).join('');
  const q=cartCount(); const ti=document.getElementById('totalItens'); const tq=document.getElementById('totalQuantidade');
  if(ti)ti.textContent=cart.length; if(tq)tq.textContent=q; updateCartBadge();
}

function getCurrentUser(){ return JSON.parse(localStorage.getItem(RAILARTS_USER_KEY) || 'null'); }
function getUsers(){ return JSON.parse(localStorage.getItem(RAILARTS_USERS_KEY) || '[]'); }
function saveUsers(users){ localStorage.setItem(RAILARTS_USERS_KEY,JSON.stringify(users)); }
function registerUser(name,email,password){
  const users=getUsers(); email=email.trim().toLowerCase();
  if(users.some(u=>u.email===email)) return {ok:false,msg:'Este e-mail já está cadastrado.'};
  users.push({id:Date.now(),name:name.trim(),email,password,createdAt:new Date().toISOString()}); saveUsers(users);
  const user=users[users.length-1]; localStorage.setItem(RAILARTS_USER_KEY,JSON.stringify(user)); return {ok:true,user};
}
function loginUser(email,password){
  const user=getUsers().find(u=>u.email===email.trim().toLowerCase() && u.password===password);
  if(!user)return {ok:false,msg:'E-mail ou senha incorretos.'}; localStorage.setItem(RAILARTS_USER_KEY,JSON.stringify(user)); return {ok:true,user};
}
function logoutUser(){localStorage.removeItem(RAILARTS_USER_KEY); location.href='index.html';}
function renderUserArea(){
  const user=getCurrentUser();
  document.querySelectorAll('[data-user-name]').forEach(e=>e.textContent=user?user.name:'Minha conta');
  document.querySelectorAll('[data-login-link]').forEach(e=>{e.href=user?'conta.html':'login.html';});
}
function recordOrder(){
  const cart=getCart(); if(!cart.length)return false;
  const user=getCurrentUser(); const obs=(document.getElementById('observacaoPedido')?.value||'').trim();
  const orders=JSON.parse(localStorage.getItem(RAILARTS_ORDERS_KEY)||'[]');
  orders.push({id:Date.now(),date:new Date().toISOString(),userId:user?.id||null,customer:user?.name||'Cliente não identificado',items:cart.map(p=>({id:p.id,nome:p.nome,qtd:p.qtd,preco:p.preco})),observation:obs});
  localStorage.setItem(RAILARTS_ORDERS_KEY,JSON.stringify(orders)); return true;
}
function sendWhatsApp(){
  const cart=getCart(); if(!cart.length){alert('Adicione pelo menos um produto ao carrinho.');return;}
  recordOrder(); const obs=(document.getElementById('observacaoPedido')?.value||'').trim(); let msg='Olá, Railarts! Gostaria de fazer um pedido:%0A%0A';
  cart.forEach(p=>msg+=`• ${p.nome} — ${p.qtd} un. — ${encodeURIComponent(money(p.preco*p.qtd))}%0A`);
  if(obs)msg+=`%0AObservação: ${encodeURIComponent(obs)}`;
  msg+='%0A%0AGostaria de confirmar disponibilidade, prazo e detalhes do pedido.';
  window.open(`https://wa.me/5588997638231?text=${msg}`,'_blank');
}
function toast(text){ let t=document.getElementById('railToast'); if(!t){t=document.createElement('div');t.id='railToast';t.className='rail-toast';document.body.appendChild(t);} t.textContent=text;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800); }

document.addEventListener('DOMContentLoaded',()=>{updateCartBadge();renderUserArea();});
