const loginLocators = require('./loginLocators');

class loginActions {

    // async login(username, password){
    //     await (await loginLocators.userName).setValue(username);
    //     await (await loginLocators.password).setValue(password);
    //     await (await loginLocators.loginButton).click();
    // }

    async enterUsername(username){
        await loginLocators.userName.setValue(username);
    }

    async enterPassword(password){
        await loginLocators.password.setValue(password);
    }

    async clickLoginButton(){
        await loginLocators.loginButton.click();
    }



    async getErrorMessage() {
        // await loginLocators.errorMessage.waitForDisplayed({ timeout: 15000 });
        // return await loginLocators.errorMessage.getText();
    //    const msg=  await expect(loginLocators.errorMessage).toBeDisplayed();
    //    msg.getText();

     
     await loginLocators.errorMessage.waitForDisplayed({ timeout: 15000 });
     return await loginLocators.errorMessage.getText();

    }
}

module.exports = new loginActions();