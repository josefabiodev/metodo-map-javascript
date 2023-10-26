const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas);

// Alterando strings com Map
const alunos = ["ana Júlia", "Caio vinícius", "BIA silva"];

const nomesPadronizados = alunos.map(nome => nome.toUpperCase());
console.log(nomesPadronizados);

const nomesPadronizadosMin = alunos.map(nome => nome.toLowerCase());
console.log(nomesPadronizadosMin);