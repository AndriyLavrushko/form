function myFunction() {
    var date = new Date(document.getElementById('date').value);
    var unixtime = Math.round(date.getTime()/1000);
    document.getElementById('unixtime').innerHTML = unixtime;
}