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


function showUserName(){
	var subTot = 0;
	var userName = findCookie("firstname");
			if(userName != null) {
			    document.write(userName.substring(0, 20));
			}
}
