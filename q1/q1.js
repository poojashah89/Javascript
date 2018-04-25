
var items = [ { name: 'item1', isExpired: false },
  { name: 'item4', isExpired: false },
  { name: 'item5', isExpired: false },
  { name: 'item2', isExpired: true },
  { name: 'item3', isExpired: true } ];
 
window.onload = displayExpired(items);
function displayExpired(items) {
	var expired = [];
	var notexpired = [];
	var final = [];

	var j = 0, k = 0;
	for (var i = 0; i < items.length; i++) { 
		console.log(items[i].isExpired )
		if(items[i].isExpired == true){
			expired.push(items[i]);
			j++;	
		} else {
			notexpired.push(items[i]);
			k++;
		}
	}
	

	for (k = 0; k < notexpired.length; k++) { 
		final.push(notexpired[k]);
	}
 	for (j = 0; j < expired.length; j++) { 
		final.push(expired[j]);
	}
 	for (var k = 0; k < final.length; k++) { 
		console.log(final[k]);
		document.getElementById('itemList').append(final[k].name + " " + final[k].isExpired);
		var br = document.createElement("br");
		document.getElementById('itemList').appendChild(br);
	 }

	 
}


