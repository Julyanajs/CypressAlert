import TvgleeDrop from '/Users/jully/Desktop/Last/cypress/Methods/TvgleeDropDown'
import HomeTvglee from '/Users/jully/Desktop/Last/cypress/Methods/TvgleeHomePage'


describe ('Check Dropdown option on Tvglee Page', () => {
 const dropdown = new TvgleeDrop();
 const drop = new HomeTvglee();

 //Check dropDown Entertainment
 
 it ('Check Dropdown Entertainment Page', () => {
     drop.uncaughtexceptionOff();
     dropdown.dropHome();
     dropdown.entertainmentselect();
     dropdown.entertainmentcheck();
 })


 //Check dropDown Spanish
 it ('Check Dropdown Spanish Page',  () => {
     drop.uncaughtexceptionOff();
     dropdown.dropHome();
     dropdown.spanishselect();
     dropdown.spanishcheck();    
 })
 //Check dropDown Animal Videos
 it('Check Dropdown Animal Videos Page', () => {
     drop.uncaughtexceptionOff();
     dropdown.dropHome();
     dropdown.animalvideosselect();
     dropdown.animalvideoscheck();


 })
 //Check dropDown Animal Part II
 it('Check Dropdown Animals Part II Page', () => {
    drop.uncaughtexceptionOff();
    dropdown.animalpartIIselect();
    dropdown.animalpartIIcheck();

 })

//Check dropDown Auto Show
 it(' Check Dropdown Auto Show Page',() =>{
     drop.uncaughtexceptionOff();
     dropdown.autoshowselect();
     dropdown.autoshowcheck();

 })

//Check dropDown Beauty
 it(' Check Dropdown Beauty Page', () => {
     drop.uncaughtexceptionOff();
     dropdown.beautyselect();
     dropdown.beautycheck();

 })
//Check dropDown Celebrities
 it(' Check Dropdown Celebrities Page', () => {
     drop.uncaughtexceptionOff();
     dropdown.celebritiesselect();
     dropdown.celebritiescheck();


 })
//Check dropDown Celebrity News
 it(' Check Dropdown Celebrity News on Dropdown', () => {
     drop.uncaughtexceptionOff();
     dropdown.celebritiesnewselect();
     dropdown.celebritiesnewcheck();

 })

 it('Check Dropdown Computer Programing on Dropdown', () =>{
     drop.uncaughtexceptionOff();
     dropdown.computerprogselect();
     dropdown.computerprogcheck();

 })

 it('Check Dropdown Cooking on Dropdown', () => {
     drop.uncaughtexceptionOff();
     dropdown.cookingselect();
     dropdown.cookingcheck();
     
 })

 it('Check Dropdown Fashion on Dropdown', () => {
     drop.uncaughtexceptionOff();
     dropdown.fashionselect();
     dropdown.fashioncheck();
    
 })

 it('Check Dropdown Miscellaneous on Dropdown', () => {
     drop.uncaughtexceptionOff();
     dropdown.misceselect();
     dropdown.miscecheck();

 })

 it('Check Dropdown Most Viewed on Dropdown', () => {
     drop.uncaughtexceptionOff();
     dropdown.mostviewedselect();
     dropdown.mostviewedcheck();

 })

 it('Check Dropdown Most Watched Video on Dropdown', () =>{
     drop.uncaughtexceptionOff();
     dropdown.mostwatchedselect();
     dropdown.mostwatchedcheck();

 })

 it('Check Dropdown Music on Dropdown', () =>{
     drop.uncaughtexceptionOff();
     dropdown.musicselect();
     dropdown.musiccheck();

 })
})
