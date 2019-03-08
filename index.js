var OSinfo = require('./modules/osinfo');
var Convert = require('./modules/convertTime');
var event = require('events');
var EventEmitter = event.EventEmitter;
// lub var EventEmitter = require('events').EventEmitter; - potrzebujemy tylko 1 klasy
var emitter = new EventEmitter;

emitter.on('berforeCommand', function(instruction) {
    console.log('You wrote: ' + instruction + ' trying to run command.');
});
emitter.on('afterCommand', function() {
    console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        // berfore Command
        emitter.emit('berforeCommand', instruction);
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
            default:
                process.stderr.write('Wrong instruction!\n Choose: /exit, / sayhello or /getOSinfo\n');
        };
        // afterCommand
        emitter.emit('afterCommand');
    }
});

