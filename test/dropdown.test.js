/**
 * Not creating page model for this
 */
describe("drop down handling", () => {

    it.skip("select drop down by visible text" ,() => {
        browser.url("https://www.facebook.com/");
        $('=Create New Account').click();
        $('#day').selectByVisibleText('10');
        $('#month').selectByVisibleText('Apr');
        $('#year').selectByVisibleText('1990');
        browser.pause(4000);
    }),

    it.skip("select drop down by visible text" ,() => {
        browser.url("https://www.facebook.com/");
        $('=Create New Account').click();
        $('#day').selectByIndex(3);
        $('#month').selectByIndex(10);
        $('#year').selectByIndex(12);
        browser.pause(4000);
    }),

    it.skip("select drop down by value" ,() => {
        browser.url("https://www.facebook.com/");
        $('=Create New Account').click();
        $('#day').selectByAttribute('value',"10");
        $('#month').selectByAttribute('value',"7");
        $('#year').selectByAttribute('value',"1990");
        browser.pause(4000);
    }),

    it("Above method will work only when there is select tag. This is when we have dropdown without select tag" ,() => {
        browser.url("https://www.facebook.com/");
        $('=Create New Account').click();
        let list= $('#day').$$('option');
        console.log('length is ',list.length);
        
        for(let i=0; i<list.length;i++){
            const element= list[i];
            console.log(element.getText());

            if(element.getText() === '23'){
                element.click();
                break;
            }
        }
        browser.pause(4000);
    })
    
})