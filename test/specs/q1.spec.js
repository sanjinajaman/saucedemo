const q1Action=require('../pages/q1/q1_action');
var username='locked_out_user';
var password='secret_sauce'

describe("Swag logs", ()=>{


    it("Try login with locked_out_user and verify the error message", async()=>{
        await q1Action.clickOnUserInputField(username);
        await q1Action.clickOnPasswordInputField(password);
        await q1Action.clickOnLoginButton();
        const massage=await q1Action.errorMassage();
        console.log(massage);
        await expect(massage).toContain("Epic sadface: Sorry, this user has been locked out.");
       


        


    });

});
