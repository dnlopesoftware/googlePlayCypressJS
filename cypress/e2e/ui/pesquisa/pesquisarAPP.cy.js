/// <reference types="cypress" />

import Util from "../../../support/utils";

describe('Pesquisa Google Play', () => {
  let testData = {};

  before(()=>{
    Util.inicializarMassas(["ambiente"], testData);
  })

  beforeEach(() => {
    const enderecoTeste = testData.ambiente[Cypress.env("estagio")]
    cy.visit(enderecoTeste)
  })

  it('Pesquisar Game no Google play', () => {

    cy.get('.f0UV3d > span').should('have.text','google_logo Play')

    cy.get('[jsaction="JIbuQc:bWGA9c;"] > .VfPpkd-Bz112c-LgbsSe > .google-material-icons').click()
    cy.get('.HWAcU').type('roblox{enter}')


  })

})
