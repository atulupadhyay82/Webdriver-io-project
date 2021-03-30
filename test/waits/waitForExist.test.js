const { assert } = require("chai");

describe("wait for delete button using waitForExist",() =>{

    it("should wait for delete button",() => {
        browser.url("https://the-internet.herokuapp.com/add_remove_elements/");
        const addElement=$(`//button[text()='Add Element']`);
        const deleteElement= $(`//button[text()='Delete']`);

        addElement.waitForDisplayed();
        addElement.click();

        deleteElement.waitForExist({ timeout: 5000 });
        assert.equal(true, deleteElement.isExisting());

        deleteElement.click();
        assert.equal(false, deleteElement.isExisting());

    })
})