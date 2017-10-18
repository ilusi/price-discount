var data1 = [5, 1, 3, 4 , 6, 2];
var data2 = [1, 3, 3, 2, 5];

function printPrice(data) {
	var total = 0;
	var length = data.length;
	var nonDiscount = [];
	
	for (var i = 0; i < length; i++) {
		var noDisc = true;   // Assume there's no discount found
		for (var j = i + 1; j < length; j++) {
			if (data[j] <= data[i]) {
				noDisc = false;
				total += data[i] - data[j];
				
				break;
			}
		}
		
		if (noDisc) {
			total += data[i];
			nonDiscount.push(i);
		}
	}
	
	console.log('Total', total);
	console.log('Non-Discount', nonDiscount);
}

printPrice(data1);
printPrice(data2);
