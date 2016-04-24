$(document).ready(function(){
  setInterval(countdownUpdater, 1000);
});

function countdownUpdater(){
  var cd = $("#countdown");
  var upto = new Date(2016, 12, 30);
  var timespan = countdown(upto);
  formatted = timespan.months.toString()+"M "+timespan.days.toString()+"D "
    +timespan.hours.toString()+"h "+timespan.minutes.toString()+"m "
    + timespan.seconds.toString()+"s ";
  cd.text(formatted);
}