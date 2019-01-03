import ProdutosJunto from '/Users/jully/Desktop/GitHub Project/CypressAlert/AlertProject/cypress/Methods/Produtos-Junto';


describe('Check products option on Menu website', () => {
    const products = new ProdutosJunto();



    it ('Check all options - Seguro Garantia- Adiantamento Pagamento', ()=> {
        products.mainHome()
        products.getProduct()
        products.selectProductAdiantPgto();

    })

    it (' Check all options - Seguro Garantia- Aduaneiro - Admissao temporaria', () => {
        products.mainHome()
        products.getProduct()
        products.selectProductAdmTemp();
    })

    it (' Check all options - Seguro Garantia- Aduaneiro - Transito Aduaneiro', () => {
        products.mainHome()
        products.getProduct()
        products.selectProductTransitoAduan();
    })
})