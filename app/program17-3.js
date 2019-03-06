var OSinfo = require('../modules/osinfo');
var Convert = require('../modules/convertTime');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
            	OSinfo.print();
            	break;    
            case '/convert':

                Convert.time(1200);
                break;  
            default:
                process.stderr.write('Wrong instruction!\n Choose: /exit, / sayhello, /getOSinfo or /convert\n');
        };
    }
});

