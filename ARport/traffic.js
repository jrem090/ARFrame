var lat = 33.433638;
var lon = -112.008113;

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.ac.length; i++) {
        //out += '<a href="' + arr[i].url + '">' + 
        //arr[i].display + '</a><br>';
        out += arr.ac[i].icao + "  ";
        //document.getElementById("parent").setAttribute(arr.ac[i].icao, {primitive: 'box', height: .1, width: .1});
        document.getElementById("parent").setAttribute(arr.ac[i].icao, {primitive: 'box', height: 1, width: 1, position: "0 0 0"});
        // arr.ac[i].alt/5000
    }
    document.getElementById("demo").innerHTML = out;
    
}

function requestTraffic()
{
    var xmlhttp = new XMLHttpRequest();
    var url = "https://adsbexchange.com/api/aircraft/json/lat/33.433638/lon/-112.008113/dist/10/"

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('api-auth', 'test')
    xmlhttp.send();
}