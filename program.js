process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	
	if (input !== null) {
		var instruction = input.toString().trim(); 
		switch(instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
			case '/version':
				process.stdout.write(process.version);
				break;
			case '/lang':
				process.stdout.write(process.env.LANG);
				break;
			default:
				process.stderr.write('Wrong instruction!\n Type: /version, /lang or /exit\n:');
		}		
	};
})
