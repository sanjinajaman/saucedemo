const q2Action=require('../pages/q2/q2_action');
const utility=require("../utilities/utility");
const checkout_information_action=require("../pages/checkout_information/checkout_information_action");
var firstname='Demo'
var lastname='Account' 
var zip_or_postal_code='1204'
var username='standard_user';
var password='secret_sauce';

let select_product=[] ;
let  cart_item=[];


let each_item_total_price;

describe("Swag logs", ()=>{


    it("Try login with standard_user and verify the error message", async()=>{
        await q2Action.clickOnUserInputField(username);
        await q2Action.clickOnPasswordInputField(password);
        await q2Action.clickOnLoginButton();
        await q2Action.clickOnhamburgerButton();
        await q2Action.clickOnresetAppState();

    });

    it("Click On hamburger Menu and Reset App State", async()=>{

        await q2Action.clickOnCrossButton();
        await q2Action.addToCart();
        select_product=await q2Action.productNames();
        await q2Action.clickOnShoppingCart();

    });


    it("Click On Checkout Button", async()=>{
        await q2Action.clickOnCheckout();

    })

    it("Final Checkout Page", async()=>{
        await checkout_information_action.firstnameInputField(firstname);
        await checkout_information_action.lastnameInputField(lastname);
        await checkout_information_action.zip_or_postal_code(zip_or_postal_code);
        await checkout_information_action.clickOnContinueButton();
    });




    it("Verify Product Name", async()=>{
        //const slect_product=await q2Action.productNames();
        cart_item=await q2Action.CartItem_productName();
        expect(select_product).toEqual(cart_item);
        
 
 
     });


 

    it("Verify Total Price", async()=>{
       const totalItemPrice=await q2Action.finalPrice();
       each_item_total_price=await q2Action.totalPrice();
       expect(totalItemPrice).toEqual(each_item_total_price);
       


    });



    it("Verify Total Price with Tax", async()=>{
        const Tax=await q2Action.Tax();
        console.log(Tax);
        const total_price_with_tax= Tax+each_item_total_price;
        console.log(total_price_with_tax);
        const price_with_tax=await q2Action.priceWithTax();
        //console.log(total_price_with_tax);
        console.log(price_with_tax);
        //const each_item_total_price_with_price=await q3Action.totalPrice(totalItemPrice_with_tax);
        expect(total_price_with_tax).toEqual(price_with_tax);
        
 
 
     });


    it("Finish Pourchase Jouney", async()=>{
       await q2Action.finishPurchaseJourney();
    });


    it("Verify Successfull Order", async()=>{
        const successMessage=await q2Action.success_massage();
        console.log(successMessage);
        //Thank you for your order!
        await expect(successMessage).toContain("Thank you for your order!");

    });



    it("Reset the app and Logout", async()=>{

        await q2Action.clickOnhamburgerButton();
        await q2Action.clickOnresetAppState();
        await q2Action.clickOnLogOutButton()
       // await browser.quit();

    })







});
