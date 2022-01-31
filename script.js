var contador = 0;

function selecionarItem(classe, item) {
    var selecionado = document.querySelector("." + classe + " .check");

    if(selecionado !== null) {
        selecionado.classList.remove("check")
        selecionado.querySelector("ion-icon").style.display = "none";
        contador--;
    }
    var classe = document.querySelector("." + item);
    classe.classList.add("check");
    classe.querySelector("ion-icon").style.display = "inline-block";
    contador++;

    habilitarBotao();
}

function habilitarBotao() {
    
    var botao = document.querySelector("footer button");
    if(contador == 3) {
        botao.removeAttribute('disabled');
        botao.style.backgroundColor = "#32B72F";
        botao.innerHTML = "<a>Fechar Pedido</a>";
    }
}

function fecharPedido() {
    var link = document.querySelector("button a");
    link.href=`https://api.whatsapp.com/send?phone=${encodeURIComponent(5519971501506)}&text=${encodeURIComponent("Olá, gostaria de fazer o pedido: - Prato: Frango Yin Yang - Bebida: Coquinha Gelada - Sobremesa: Pudim Total: R$ 27.70")}`

    /*var tela_final = document.querySelector("tela-final");
    tela_final.style.display="flex";

    var itens_selecionados = document.querySelector(".menu .check");
    tela_final.innerHTML+=itens_selecionados;*/

    
}