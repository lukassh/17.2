process.stdin.setEncoding('utf8');

function times() {
	process.stdin.on('readable', function(input) {
		var input = process.stdin.read();
		
		if (!isNaN(input)) {
			
			var resultMin = (input / 60).toFixed(0);
			var restMin = (input%60).toFixed(0);
			var resultHr = (input / 3600).toFixed(0);
			var restHrMin = ((input%3600)/60).toFixed(0);
			var restHrMinSec = ((input%3600)%60).toFixed(0);

			console.log('Wynik: '+ resultMin + 'min i ' + restMin + 'sec');
			console.log('Wynik: '+ resultHr + 'h i ' + restHrMin + 'min i ' + restHrMinSec + 'sec');
		}
		else {
			console.log('Type number');
		}
	})
}
times();	