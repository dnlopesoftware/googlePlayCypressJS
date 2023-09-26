class Util {
    inicializarMassas(listaArquivos, objDados){
        listaArquivos.forEach((arquivo)=>{
            cy.fixture(`${Cypress.env("estagio")}/${arquivo}`).then((dados) =>{
                objDados[arquivo] = dados;
            })
        })
    }
}

export default new Util()