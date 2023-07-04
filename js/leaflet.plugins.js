
var map, layer1;

function init() {

    //map object instantation 
    map = L.map('map',      
    {center:[39.47, -0.376389],
    zoom:14});

    //a basic layer for the map
    layer1 = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
    maxZoom : 19,
    minZoom : 1,
    attribution : "OSM"
    }).addTo(map);

    //variable to instantiate the Leaflet plugin 
    var osmGeocoder = new L.Control.OSMGeocoder({placeholder : 'search location...'});
    map.addControl(osmGeocoder);

    var LocateControl = L.control.locate({
        position : 'topleft'        
    }).addTo(map);

    controlEscala = L.control.scale().addTo(map);

};