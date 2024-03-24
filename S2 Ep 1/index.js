// console.log("Namaste");

// setTimeout(function(){
//     console.log("JavsScript");
// }, 5000);


// console.log("Season 2");

const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {

    api.proceedToPayment(function () {
        
        api.showOrderSummary(
            
            function (params) {
                api.updateWallet()
            }

        )
    })

})
// This is known as Callback Hell or Pyramid of Doom.
// This type of code grows horizontally instead of vertically and is very unreadable and unmaintainable.

// Inversion of Control


