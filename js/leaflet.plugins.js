
let map, layer1;

function init() {

    //map object instantation 
    map = L.map('map',
        {
            center: [39.47, -0.376389],
            zoom: 14
        });

    //a basic layer for the map
    layer1 = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,
            minZoom: 1,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright"/>OpenStreetMap</a>'
        }).addTo(map);

    // Imagery map
    Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX,GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    //variable to instantiate the Leaflet plugin 
    let osmGeocoder = new L.Control.OSMGeocoder({
        placeholder: 'search location...'
    });

    map.addControl(osmGeocoder);

    L.control.locate({
        position: 'topright',
        showCompass: true
    }).addTo(map);

    var mapaBase = {
        'Map': layer1,
        'Satellite': Esri_WorldImagery
    };

    controlCapas = L.control.layers(mapaBase, null, { collapsed: true });
    controlCapas.addTo(map);

    L.control.scale().addTo(map);

};