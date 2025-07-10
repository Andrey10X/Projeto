// Exemplo em JavaScript mostrando os dados

// Função para alterar texto na página
function alterarTexto() {
    let texto = document.getElementById("mensagem");
    texto.innerHTML = "Texto alterado com sucesso!";
    texto.style.color = "blue";
    texto.style.fontSize = "20px";
}

// Array com quatro objetos de produtos
let produtos = [
    {
        tipo: "Moto",
        marca: "Honda",
        modelo: "CG 160",
        cor: "Vermelha",
        ano: 2022
    },
    {
        tipo: "Brinquedo",
        nome: "Lego City",
        faixaEtaria: "6+",
        preco: 199.90
    },
    {
        tipo: "Carrinho",
        marca: "Hot Wheels",
        modelo: "Mustang",
        cor: "Azul"
    },
    {
        tipo: "Moto",
        marca: "Yamaha",
        modelo: "Fazer 250",
        cor: "Preta",
        ano: 2023
    }
];

// Exemplo de "ala" de objetos (array de arrays de produtos)
let alas = [
    [
        { tipo: "Moto", marca: "Honda", modelo: "CG 160" },
        { tipo: "Carrinho", marca: "Hot Wheels", modelo: "Mustang" }
    ],
    [
        { tipo: "Brinquedo", nome: "Lego City" },
        { tipo: "Moto", marca: "Yamaha", modelo: "Fazer 250" }
    ]
];

// Exibindo todos os produtos
produtos.forEach(p => {
    console.log("Tipo:", p.tipo);
    if (p.marca) console.log("Marca:", p.marca);
    if (p.modelo) console.log("Modelo:", p.modelo);
    if (p.cor) console.log("Cor:", p.cor);
    if (p.ano) console.log("Ano:", p.ano);
    if (p.nome) console.log("Nome:", p.nome);
    if (p.faixaEtaria) console.log("Faixa Etária:", p.faixaEtaria);
    if (p.preco) console.log("Preço:", p.preco);
    console.log("-----");
});

// Exibindo as alas
alas.forEach((ala, idx) => {
    console.log(`Ala ${idx + 1}:`);
    ala.forEach(obj => {
        let info = `Tipo: ${obj.tipo}`;
        if (obj.marca) info += ` | Marca: ${obj.marca}`;
        if (obj.modelo) info += ` | Modelo: ${obj.modelo}`;
        if (obj.nome) info += ` | Nome: ${obj.nome}`;
        console.log(info);
    });
});
