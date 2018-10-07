function calculation() {
	let result = new Array(1000);
	
	for (let i=0; i < result.length; i++) {
		result[i]= Math.random();
		result.sort();
	}
	console.log(result);
}

setInterval(calculation, 100);