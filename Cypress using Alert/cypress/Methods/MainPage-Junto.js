class MainJunto{
    //Access TvgleeHome
   

    mainHome(){
        cy.visit('https://www.juntoseguros.com/');
  
    } 

    acessaSinistro(){
        cy.get('.auto').click()
        cy.get('.header__nav > .menu > :nth-child(2) > a').click({force:true});
    }

    assertUrl(){
        cy.url().should('eq', 'https://cotador.juntoseguros.com/#/aviso-de-sinistro')// => true
    }
    
    getCNPJInvalido(){
        cy.get('.is-8-desktop > .button').click({force:true});
        cy.get(':nth-child(1) > .control > .input').type('250.5458.548');
        cy.get(':nth-child(2) > .control > .input').type('76.xxx.624/0002-84')
        cy.get(':nth-child(3) > .control > .input').type('fake@news.com')

    }

    getCNPJvalido(){
        cy.get('.is-8-desktop > .button').click({force:true});
        cy.get(':nth-child(1) > .control > .input').type('250.5458.548');
        cy.get(':nth-child(2) > .control > .input').type('76.564.624/0002-84')
        cy.get(':nth-child(3) > .control > .input').type('fake@news.com')

    }
Debug
    getAlertCPFInvalido(){
        cy.get('button').contains('Enviar').click();
        cy.get('.s-alert-wrapper >').should('to.have.length', 1)
        cy.contains('CNPJ inválido').should('to.have.length', 1);

        }

Debug
    getAlertCPFvalido(){
        cy.get('button').contains('Enviar').click();
        cy.get('.s-alert-wrapper >').should('to.have.length', 1)
        cy.contains('A opção acima deve ser marcada').should('to.have.length', 1);
    
        }  
    }

    


   
    



export default MainJunto;