//import 'bootstrap@4.6.0'
//import $ from 'jquery'
var time = 0;
var timerRunning = false;

loop()

$( "#b1" )
  .html('End') // Try edit it...
  .on('click', () => end(false) + console.log('Count Paused:' + timerRunning))

$( "#b2" )
  .html('Start') // Try edit it...
  .on('click', () => end(true) + console.log('Count Started:' + timerRunning))

async function loop()
{
    timer()
    $("time").text('Time: ' + time);
    $("timerRunning").text('timerRunning: ' + timerRunning);
    await sleep(1000)
    loop()
}

function end(state)
{
  timerRunning = state
}

function timer()
{
  if( timerRunning === true )
  {
    if( time < 200)
    {  
      time = time + 1
      console.log(time)
      
    }
  }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
