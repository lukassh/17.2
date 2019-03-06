var os = require('os');
var Convert = require('../modules/convertTime');

function getOSinfo() {
	var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();

    if(type === 'Darwin') {
	    type = 'OSX';
		} else if(type === 'Windows_NT') {
	    type = 'Windows';
	}
	console.log('System:', type);
	console.log('Release:', release);
	console.log('CPU:',cpu);
	console.log('Uptime: ~', Convert.time(uptime));
	console.log('User name:', userInfo.username);
	console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;