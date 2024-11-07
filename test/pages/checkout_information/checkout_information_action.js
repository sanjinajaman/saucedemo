const CheckOutInformation_locators=require('./checkout_information_locators');


class Action{
    async firstnameInputField(firstname){
        await CheckOutInformation_locators.firstname.setValue(firstname);

    }

    async lastnameInputField(lastname){
        await CheckOutInformation_locators.lastname.setValue(lastname);

    }

    async zip_or_postal_code(zip_or_postalcode){
        await CheckOutInformation_locators.zip_or_postal_code.setValue(zip_or_postalcode);

    }

    async clickOnContinueButton(){
        await CheckOutInformation_locators.clickOnContinueButton.click();
        await browser.pause(3000);

    }
    
    

}

module.exports=new Action();