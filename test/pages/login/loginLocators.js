class loginLocators {

    get userName(){
        return $("//input[@placeholder='Username']")
    }

    get password(){
        return $("//input[@placeholder='Password']")
    }

    get loginButton(){
        return $("//input[@name='login-button']")
    }

    get errorMessage(){
        return $("//h3[@data-test='error']")
    }





}

module.exports = new loginLocators();