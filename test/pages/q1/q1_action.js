const q1_locators=require('./q1_locators');


class Action{
    async clickOnUserInputField(username){
        await q1_locators.user_name.setValue(username);

    }

    async clickOnPasswordInputField(password){
        await q1_locators.password.setValue(password);

    }

    async clickOnLoginButton(){
        await q1_locators.login_button.click();

    }

    async errorMassage(){
        const massage=await q1_locators.error_massage.getText();
        return massage;
        
    }
    
    

}

module.exports=new Action();