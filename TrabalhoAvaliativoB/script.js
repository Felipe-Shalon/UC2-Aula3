/*Cadastro de Personagens: O sistema deverá armazenar informações sobre os
personagens, como nome, classe, nível, pontos de vida (HP) e habilidades. Os
personagens devem ser armazenados. 

Ações dos Personagens: O sistema deve permitir que os personagens realizem ações
(como atacar, defender e usar habilidades especiais).

Histórico de Ações: O sistema deverá manter um histórico das ações realizadas por cada
personagem. Esse histórico será armazenado em um array dentro do objeto de cada
personagem.*/
/*let personagens = [ {
    nome: "Frodo Bolseiro",
    classe: "Ladino",
    nivel: 3,
    hp: 25,
    habilidades: ["Furtividade inigualável", "Resistência à Corrupção do Anel", "Sorte de Hobbit"],
    historicoAcoes: []
}, {
    nome: "Gandalf",
    classe: "Mago",
    nivel: 15,
    hp: 50,
    habilidades: ["Magia", "Liderança", "Sabedoria"],
    historicoAcoes: []
}, {
    nome:"Legolas",
    classe: "Elfo",
    nivel: 10,
    hp: 100,
    habilidades: ["Arquearia Impecável", "Sentidos Élficos", "Furtividade em florestas"],
    historicoAcoes: []
}]
console.log(personagens) */
/*Busca de Personagens por Nome: O sistema deverá ter uma função que permita ao
usuário buscar um personagem pelo nome. Se encontrado, o personagem deve ser exibido
com todos os detalhes. */
/*function buscarPersonagem(nome){
    const personagemEscontrado = personagens.find(personagem => personagem.nome === nome)
    if (personagemEscontrado){
        return personagemEscontrado
    } else {
        return `Personagem "${nome}" não foi encontrado.`
    }
}
console.log(buscarPersonagem("Gandalf")); */
/*Exclusão de Personagens: Implementar uma função que permita excluir personagens do
jogo. Essa operação deve ser eficiente, levando em consideração a estrutura de dados
escolhida. */
/*function excluirPersonagem(nome){
    const indicePersonagem = personagens.findIndex(personagem => personagem.nome === nome)
    if (indicePersonagem > 0){
        personagens.splice(indicePersonagem, 1);
    return `Personagem "${nome}" foi excluído com sucesso.`
} else {
    return `Personagem "${nome}" não foi encontrado para exclusão.`
}
}
console.log(excluirPersonagem("Legolas"))
console.log(personagens)*/