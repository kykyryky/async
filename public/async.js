function funcA() {
	console.log('A');
	setTimeout(function() {
		console.log('B');
	}, 1000);	
	setTimeout(function() {
		console.log('C');
	}, 0);	
	setTimeout(function() {
		console.log('D');
	}, 0);	
}

function funcC() {
	console.log('E');	
}

funcA();
funcC();
