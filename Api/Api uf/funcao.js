import colecaoUf from "./dados";

export const buscarUfs = () => {
    return colecaoUf
}
export const buscarnomesUf = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nome.toLowerCase()))
}
export const buscarUfporId = (id) => {
    const idUF = parseInt(id)
    return colecaoUf.find(uf => uf.id === idUF)
    
}