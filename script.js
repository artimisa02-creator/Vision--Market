// ========================================
// VISION MARKET - SCRIPT.JS
// ========================================


// ========================================
// MENU RESPONSIVO
// ========================================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});


// FECHAR MENU QUANDO CLICAR NUM LINK

const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
    });
});


// ========================================
// PESQUISA DE SERVIÇOS
// ========================================

const campoPesquisa = document.getElementById("campoPesquisa");
const btnPesquisa = document.getElementById("btnPesquisa");
const produtos = document.querySelectorAll(".produto");


function pesquisar() {

    const texto = campoPesquisa.value
        .toLowerCase()
        .trim();


    // Ir até à secção de serviços

    document.getElementById("servicos").scrollIntoView({
        behavior: "smooth"
    });


    // Mostrar todos se estiver vazio

    if (texto === "") {

        produtos.forEach(produto => {
            produto.style.display = "flex";
        });

        return;
    }


    // Pesquisar serviços

    produtos.forEach(produto => {

        const conteudo =
            produto.innerText.toLowerCase();


        if (conteudo.includes(texto)) {

            produto.style.display = "flex";

        } else {

            produto.style.display = "none";

        }

    });

}


// BOTÃO PROCURAR

btnPesquisa.addEventListener("click", pesquisar);


// PESQUISAR COM ENTER

campoPesquisa.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        event.preventDefault();

        pesquisar();

    }

});


// ========================================
// PESQUISAS POPULARES
// ========================================

const tagsPesquisa =
    document.querySelectorAll(".tag-pesquisa");


tagsPesquisa.forEach(tag => {

    tag.addEventListener("click", () => {

        campoPesquisa.value =
            tag.innerText;

        pesquisar();

    });

});


// ========================================
// BOTÕES PEDIR ORÇAMENTO
// ========================================

const botoesOrcamento =
    document.querySelectorAll(".btn-orcamento");


botoesOrcamento.forEach(botao => {

    botao.addEventListener("click", () => {

        const servicoEscolhido =
            botao.getAttribute("data-servico");


        // Selecionar o serviço no formulário

        document.getElementById("servico").value =
            servicoEscolhido;


        // Ir até aos contactos

        document.getElementById("contactos").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ========================================
// FORMULÁRIO PARA WHATSAPP
// ========================================

const formulario =
    document.getElementById("contactForm");


formulario.addEventListener("submit", event => {

    event.preventDefault();


    // PEGAR OS DADOS

    const nome =
        document.getElementById("nome").value.trim();


    const telefone =
        document.getElementById("telefone").value.trim();


    const servico =
        document.getElementById("servico").value;


    const mensagem =
        document.getElementById("mensagem").value.trim();


    // ========================================
    // CRIAR MENSAGEM
    // ========================================

    const textoWhatsApp = `Olá, Vision Market!

Gostaria de pedir um orçamento.

👤 Nome: ${nome}

📞 Telefone: ${telefone}

💼 Serviço: ${servico}

📝 Mensagem:
${mensagem}

Aguardo o vosso contacto.`;


    // ========================================
    // NÚMERO DA VISION MARKET
    // ========================================

    const numeroWhatsApp =
        "258875172000";


    // ========================================
    // CRIAR LINK DO WHATSAPP
    // ========================================

    const linkWhatsApp =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(textoWhatsApp);


    // ========================================
    // ABRIR WHATSAPP
    // ========================================

    window.location.href =
        linkWhatsApp;

});


// ========================================
// QUANDO APAGAR A PESQUISA,
// MOSTRAR TODOS OS SERVIÇOS
// ========================================

campoPesquisa.addEventListener("input", () => {

    if (campoPesquisa.value.trim() === "") {

        produtos.forEach(produto => {

            produto.style.display =
                "flex";

        });

    }

});