
function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        //out += '<a href="' + arr[i].url + '">' + 
        //arr[i].display + '</a><br>';
        out += 'arr[i].Call'
    }
    document.getElementById("demo").innerHTML = out;
}

function requestTraffic()
{
        var xmlhttp = new XMLHttpRequest();
    //var url = "https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=33.433638&lng=-112.008113&fDstL=0&fDstU=100"
    var url = "https://adsbexchange.com/api/aircraft/json/lat/33.433638/lon/-112.008113/dist/10/";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
