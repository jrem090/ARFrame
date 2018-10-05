
function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.ac.length; i++) {
        //out += '<a href="' + arr[i].url + '">' + 
        //arr[i].display + '</a><br>';
        out += 'arr.ac[i].icao'
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