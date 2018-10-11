var lat  = 33.433638;
var lon  = -112.008113;
var dist = 10.0;
var R    = 6,371; // in KM
function myFunction(arr) {
    var out = "";
    var i;
    
    //for(i = 0; i < arr.ac.length; i++) {
        //out += '<a href="' + arr[i].url + '">' + 
        //arr[i].display + '</a><br>';
    var sceneEl = document.querySelector('a-scene');
    var els = sceneEl.querySelectorAll('a-sphere');
    for (var i = 0; i < els.length; i++) 
      {
          if(i <= arr.ac.length)
          {
            var lon1 = arr.ac[i].lon;
            var lat1 = arr.ac[i].lat;
            console.log(els[i]);    
            var dlon = 0;
            var dlat = Math.abs(lat - lat1);
            var a = (Math.sin(dlat/2)*Math.sin(dlat/2)) + Math.cos(lat1) * Math.cos(lat2) * (Math.sin(dlon/2)*Math.sin(dlon/2)) ;
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a) ) ;
            var latdif = (R * c)/10; 
            dlon = Math.abs(lon - lon1);
            dlat = 0.0;
            a = (Math.sin(dlat/2)*Math.sin(dlat/2)) + Math.cos(lat1) * Math.cos(lat2) * (Math.sin(dlon/2)*Math.sin(dlon/2)) ;
            c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a) ) ;
            var londiff = (R * c)/10; 
            els[i].object3D.visible = true;
            els[i].object3D.position.set(latdif, londiff, 0.5);
              out += arr.ac[i].icao + "  ";
          }
          else
          {
           els[i].object3D.visible = false;
          }
        }
    
        
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
