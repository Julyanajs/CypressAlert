class HomeTvglee{

    //Accessa HomePage
    homePage(){
        cy.visit('/');
    }

   //Select New Option and Click above
   checkNewLink(){
       return cy.get('.active > .nav-link').click(); 
       cy.url().should('eq', 'http://dev.tvglee.com/#newsLauncher')// => true
   }

   checkVideoLink(){
       return cy.contains('Videos').click({force:true});
       cy.url().should('eq', 'http://dev.tvglee.com/#videogallery')// => true
    
   }

   checkGalleriesOption(){
       return cy.contains('Galleries').click();
       cy.url().should('eq', 'http://dev.tvglee.com/#topgallery')// => true
   }


   uncaughtexceptionOff() {
//    beforeEach ( function () {
     Cypress.on('uncaught:exception', (err, runnable) => {
     // returning false here prevents Cypress from
     // failing the test
        return false
     
     })
    }
  

}



export default HomeTvglee;