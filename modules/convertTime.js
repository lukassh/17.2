function convertT(input) {
	
		if (!isNaN(input)) {
			var resultMin = (input / 60).toFixed(0);
			var restMin = (input%60).toFixed(0);
			var resultHr = (input / 3600).toFixed(0);
			var restHrMin = ((input%3600)/60).toFixed(0);
			var restHrMinSec = ((input%3600)%60).toFixed(0);

			if(resultHr>0) {
				return('Wynik: '+ resultHr + 'h i ' + restHrMin + 'min i ' + restHrMinSec + 'sec');
			} else {
				return('Wynik: '+ resultMin + 'min i ' + restMin + 'sec');}

			}
		else {
			console.log('Wrong input');
		}
}

exports.time = convertT;