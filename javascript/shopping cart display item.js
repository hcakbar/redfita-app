/*
	
Taken from Tutorial 9 of

Carey, P., & Canovatchel, F. (2006). New Perspectives on Javascript. Boston, MA: Thompson Course Technology.

		
*/

var now = new Date();
var expdate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

function findCookie(val) {
   var cookie = null;
   var findVal = val + "=";
//alert(val);
   var dc = document.cookie;
   if (dc.length > 0) {
      var start = dc.indexOf(findVal);
      if (start >= 0) {
         start += findVal.length;
         lastVal = dc.indexOf(";", start);
         if (lastVal == -1) {
            lastVal = dc.length;
	 }
         cookie = (dc.substring(start, lastVal));
      } else {
         return cookie;
      }
   }
   return cookie;
}


function delProd(prod){
   document.cookie = "myitem"+prod+" = ;expires = Thu, 01-Jan-70 00:00:01 GMT;";
   location.reload();
}

// show cookies in order confirmation
function showOrder(){
	var subTot = 0;
	var prod = new Array();
	prod[0] = findCookie("myitem0");
	prod[1] = findCookie("myitem1");
	prod[2] = findCookie("myitem2");

	prod[3] = findCookie("myitem3");

	if((prod[0] == null)&&(prod[1] == null)&&(prod[2] == null)&&(prod[3] == null))
		{
			document.write("<tr><td>");
			document.write("Your cart is empty.");
			document.write("</td></tr>");
		}
	for(i=0;i<=prod.length;i++)
		{
		if((prod[i] != null)&&(prod[i] != ""))
			{
			document.write("<tr><td>");
			start =  prod[i].substring(0,4);
			document.write(start+"</td><td>");

			name = prod[i].indexOf(",")+1;
			name2 = prod[i].indexOf(",",name);
			prod_name = prod[i].substring(name,name2);
			document.write(prod_name+"</td><td class=right'>");

			price = prod[i].indexOf(",",name2)+1;
			price2 = prod[i].indexOf(",",price);
			prod_price = parseFloat(prod[i].substring(price,price2));
			price = prod_price.toFixed(2);
			document.write("$"+price+"</td><td class='center'>");

			quant = parseInt(prod[i].substring(prod[i].length-1,prod[i].length));
			document.write(quant+"</td><td class='right'>");

			cost_raw = quant*prod_price;
			cost_tot = cost_raw;
			subTot += cost_tot;
			cost = cost_raw.toFixed(2);
			document.write("$"+cost+"</td><td>");
			document.write("<a href=# onclick = 'delProd("+[i]+")'>Remove Item</a>");
			document.write("</td><td>");
			}
	  	}
}
