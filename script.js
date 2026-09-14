// Menu para celular
function abrirMenu() {

    const menu = document.getElementById("menu");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {

        menu.style.display = "flex";

        menu.style.position = "absolute";
        menu.style.top = "70px";
        menu.style.left = "0";

        menu.style.width = "100%";

        menu.style.background = "#ffca28";

        menu.style.padding = "20px";

        menu.style.flexDirection = "column";

        menu.style.textAlign = "center";

        menu.style.gap = "20px";
    }
}


// Botão de serviços
function mostrarMensagem() {

    alert(
        "Confira nossos serviços: Impressões, Design Gráfico, Personalizados, Convites e Papelaria!"
    );
}


// Efeito ao rolar a página
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 3px 10px rgba(0,0,0,.2)";
    } else {
        header.style.boxShadow = "none";
    }

});
// Atualiza o contador do carrinho em qualquer página que possua o contador.
document.addEventListener("DOMContentLoaded", function(){
    const contador = document.getElementById("contadorCarrinho");
    if(contador){
        const itens = JSON.parse(localStorage.getItem("railartsCarrinho") || "[]");
        contador.textContent = itens.reduce((total, item) => total + (item.qtd || 0), 0);
    }
});
