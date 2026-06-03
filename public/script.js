const catalogo = [
    {
        id: 1,
        titulo: "Inception",
        tipo: "filme",
        ano: 2010,
        generos: ["ficção científica", "ação", "suspense"],
        nota: 9.2,
        assistido: true
    },
    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.5,
        assistido: true
    },
    {
        id: 3,
        titulo: "Interstellar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 8.6,
        assistido: true
    },
    {
        id: 4,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["ficção científica", "terror", "drama"],
        nota: 8.7,
        assistido: false
    },
    {
        id: 5,
        titulo: "Pulp Fiction",
        tipo: "filme",
        ano: 1994,
        generos: ["crime"],
        nota: 8.9,
        assistido: false
    },
    {
        id: 6,
        titulo: "Dark",
        tipo: "serie",
        ano: 2017,
        generos: ["ficção científica", "suspense", "drama"],
        nota: 8.8,
        assistido: false
    },
    {
        id: 7,
        titulo: "The Godfather",
        tipo: "filme",
        ano: 1972,
        generos: ["drama", "crime"],
        nota: 9.2,
        assistido: true
    },
    {
        id: 8,
        titulo: "Chernobyl",
        tipo: "serie",
        ano: 2019,
        generos: ["drama", "história"],
        nota: 9.4,
        assistido: false
    }
];

console.log("Catálogo completo");
console.log(catalogo);

console.log("\nAcessos específicos");
console.log("Título do primeiro item:", catalogo[0].titulo);
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

const terceiro = catalogo[2];
if (terceiro.generos.length >= 2) {
    console.log("Segundo gênero do terceiro item:", terceiro.generos[1]);
} else {
    console.log("Terceiro item tem apenas 1 gênero:", terceiro.generos[0]);
}

const totalItens = catalogo.length;
const totalFilmes = catalogo.filter(item => item.tipo === "filme").length;
const totalSeries = catalogo.filter(item => item.tipo === "serie").length;
const naoAssistidos = catalogo.filter(item => !item.assistido).length;
const somaNotas = catalogo.reduce((acc, item) => acc + item.nota, 0);
const mediaNotas = (somaNotas / totalItens).toFixed(1);

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

console.log("\nEstatísticas");
console.log("Total de itens:", totalItens);
console.log("Filmes:", totalFilmes, "| Séries:", totalSeries);
console.log("Não assistidos:", naoAssistidos);
console.log("Média de notas:", mediaNotas);
console.log("Top 3 notas:");
ranking.forEach((item, i) => {
    console.log(`  ${i + 1}. ${item.titulo} — ${item.nota}`);
});

const output = document.getElementById("output");

const rankingHTML = ranking
    .map((item, i) => `<div class="ranking-item">${i + 1}. ${item.titulo} <span class="nota">★ ${item.nota}</span></div>`)
    .join("");

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>
    <div class="stat">Total de itens: <strong>${totalItens}</strong></div>
    <div class="stat">Filmes: <strong>${totalFilmes}</strong> | Séries: <strong>${totalSeries}</strong></div>
    <div class="stat">Não assistidos: <strong>${naoAssistidos}</strong></div>
    <div class="stat">Média geral de notas: <strong>${mediaNotas}</strong></div>
    <h2>Top 3 Maiores Notas</h2>
    ${rankingHTML}
`;
