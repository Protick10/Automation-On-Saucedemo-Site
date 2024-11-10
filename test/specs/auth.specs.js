const loginActions = require("../pages/login/loginActions");

const userName = "locked_out_user";
const password = "secret_sauce";
const errorMessage = "Epic sadface: Sorry, this user has been locked out.";

describe("Login Tests", ()=>{
    
    // it("Login with invalid credentials", async ()=>{
    //     await loginActions.enterUsername("invalid_user");
    //     await loginActions.enterPassword("invalid_password");
    //     await loginActions.clickLoginButton();
    //     expect(await loginActions.getErrorMessage()).toBe("Epic sadface: Username and password do not match any user in this service");
    // });

    it("login with locked_out_user ", async()=>{
        await loginActions.enterUsername(userName);
        await loginActions.enterPassword(password);
        await browser.pause(2000);
        await loginActions.clickLoginButton();
        await browser.pause(2000);
        // expect(await browser.getUrl()).toBe("https://www.saucedemo.com/inventory.html");
        // const actualErrorMessage = await loginActions.getErrorMessage();
        // // await expect(actualErrorMessage).toBeDisplayed();
        // // const actualErrorText = await actualErrorMessage.getText();

        // expect(actualErrorMessage).toEqual(errorMessage);

        const actualErrorMessage = await loginActions.getErrorMessage();
        expect(actualErrorMessage).toBe(errorMessage);


    })
} )