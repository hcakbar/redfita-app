/*
	
Code to place an order, resulting in the creation of a cookie
Triggered by this HTML event -  onclick="placeOrder('Q517','Cat Collar','7.99',0)"

Taken from Tutorial 9 of
Carey, P., & Canovatchel, F. (2006). New Perspectives on Javascript. Boston, MA: Thompson Course Technology.

*/

var now = new Date();
var expdate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

function clearValue(n){
   if(n == 0) {
      document.order_form.qty0.value = "";
   } else if(n == 1) {
      document.order_form.qty1.value = "";
   } else if(n == 2) {
      document.order_form.qty2.value = "";
   } else { 
      document.order_form.qty3.value = "";
   }
}

function placeOrder(myItemID, myProductName, myPrice, myItemNumber){
// myItemNumber is an arbitrary identifed used in the HTML to mark an item
// if more than 4 items on the page, need to add more cases

   switch(myItemNumber) {
      case 0:
         myOrderQuantity = document.order_form.qty0.value;
         break;
      case 1:
         myOrderQuantity = document.order_form.qty1.value;
         break;
      case 2:
         myOrderQuantity = document.order_form.qty2.value;
         break;
      case 3:
         myOrderQuantity = document.order_form.qty3.value;
   }
   if(myOrderQuantity == 0) {
      alert("Please enter a quantity greater than zero.");
      return false;
   }
   document.cookie = "myitem"+ myItemNumber +" = "+ myItemID +","+ myProductName +","+ myPrice+","+ myOrderQuantity +";expires = " + expdate.toGMTString();

   window.alert(+ myOrderQuantity +" - "+ myProductName +" added to your cart. Thank you for shopping @ RedFita.");
}

