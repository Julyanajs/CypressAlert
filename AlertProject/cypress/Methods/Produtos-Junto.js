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
   //Select Administrativo de Credito Tributario
   selectProductCredTributario(){
    cy.get('.menu > :nth-child(4) > a').click({force:true});
    cy.url().should('eq', 'https://cotador.juntoseguros.com/#/produto/creditos-tributarios') // => true

   }

   //Select Antecipacao de Recebiveis
   selectProductAntRecebiveis(){
    cy.get('.menu > :nth-child(5) > a').click({force:true});
    cy.url().should('eq', 'https://cotador.juntoseguros.com/#/produto/antecipacao-recebiveis') // => true

   }

}


export default ProdutosJunto;