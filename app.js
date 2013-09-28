// Get the browser specific battery
var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

console.log(battery);

var charging = document.querySelector('#charging'),
		level = document.querySelector('#level'),
		dischargingTime = document.querySelector('#dischargingTime');

if(battery){
	// Readinf a few properties
	charging.innerHTML = "Battery charging: " + battery.charging;
	level.innerHTML = "Battery level: " + battery.level;
	dischargingTime.innerHTML = "Battery discharging time: " + battery.dischargingTime;

	// Adding event listeners
	battery.addEventListener('chargingchange', function(e){
		console.warn("Battery charge change: " + battery.charging);
	}, false);
	battery.addEventListener('chargingtimechange', function(e){
		console.warn("Battery charge change: " + battery.chargingTime);
	}, false);
	battery.addEventListener('dischargingtimechange', function(e){
		console.warn("Battery charge change: " + battery.dischargingTime);
	}, false);
	battery.addEventListener('levelchange', function(e){
		console.warn("Battery charge change: " + battery.level);
	}, false);

} else {
	console.log('Battery API is not supported');
}