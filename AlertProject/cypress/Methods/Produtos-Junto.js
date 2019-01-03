class ProdutosJunto{

    //AcessaPagina

    mainHome(){
        cy.visit('https://www.juntoseguros.com/');
    }

    getProduct(){
        cy.get('.hamburger').click({force:true});
    }
    

    //Select Adiantamento de Pagamento
    selectProductAdiantPgto(){
    cy.get('#menu-produto > :nth-child(1) > .menu > :nth-child(1) > a').click({force:true});
    
    cy.url().should('eq', 'https://cotador.juntoseguros.com/#/produto/adiantamento-pagamento') // => true
    
    }

   //Select Aduaneiro-Admissao temporaria
   selectProductAdmTemp(){
    cy.get(':nth-child(1) > .menu > :nth-child(2) > a').click({force:true});
    cy.url().should('eq', 'https://cotador.juntoseguros.com/#/produto/admissao-temporaria') // => true

   }
  //Select Aduaneiro-Transito Aduaneiro
   selectProductTransitoAduan(){
    cy.get(':nth-child(1) > .menu > :nth-child(3) > a').click({force:true});
    cy.url().should('eq', 'https://cotador.juntoseguros.com/#/produto/transito-aduaneiro') // => true

   }

}


export default ProdutosJunto;