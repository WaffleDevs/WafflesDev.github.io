//import 'bootstrap@4.6.0'
//import $ from 'jquery'
var time = 0;
var timerRunning = false;
var xTime

loop()

$("#b1")
  .html('End')
  .on('click', () => counter(false) + textUpdate() + console.log('Count Paused:' + timerRunning))
$("#b2")
  .html('Start')
  .on('click', () => counter(true) + textUpdate() + console.log('Count Started:' + timerRunning))
$("#b3")
  .html('Restart')
  .on('click', () => console.log('Count Restarted.') + timeSet(1) + textUpdate())
$("#b4")
  .html('+1')
  .on('click', () => timeSet(2) + textUpdate())
$("#b5")
  .html('-1')
  .on('click', () => timeSet(3) + textUpdate())
$("#b6")
  .html('-1')
  .on('click', () => timeMulti() )
  
async function loop() {
  timer()
  textUpdate()
  await sleep(1000)
  loop()
}
function timeMulti()
{
	
}
async function timeSet(operation) {
  if (operation === 1) {time = 0, timerRunning = false}
  if (operation === 2) {time = time + 1}
  if (operation === 3) {time = time - 1}
}
function textUpdate() {
  $("time").text('Time: ' + time);
  $("timerRunning").text('timerRunning: ' + timerRunning);
}
function counter(value) {
  timerRunning = value
}
function timer() {
  if (timerRunning === true) {
    if (time < 9999) {
      time = time + 1
      console.log(time)
      }}}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
