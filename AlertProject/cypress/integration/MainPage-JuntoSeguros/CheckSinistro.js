import MainJunto from '/Users/Juliana/Desktop/GitHub/CypressAlert/AlertProject/cypress/Methods/MainPage-Junto';


describe('CNPJ Invalido', () => {
    const page = new MainJunto();
    // Check News
    it('Preencher CNPJ Invalido', function () {

        page.mainHome()
        page.acessaSinistro()
        page.assertUrl()
        page.getCNPJInvalido()
        page.getAlertCPFInvalido();
       
      })

 describe('CNPJ valido sem preencher captcha', () => {
    it('Preencher CNPJ valido sem captcha', function(){
        page.mainHome()
        page.acessaSinistro()
        page.assertUrl()
        page.getCNPJvalido()
        page.getAlertCPFvalido()
     })


     // teste apenas 
 })     
       
    })


