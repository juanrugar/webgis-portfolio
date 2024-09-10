let map, osm, Esri_WorldImagery, controlCapas, controlEscala;
function init() {
    map = L.map('map', {
       center: [39.470078, -0.376407],//Barna center center: [41.409042, 2.181242],
        zoom: 14
    });

    // Carto map
    osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 1,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright"/>OpenStreetMap</a>'
    });

    // Imagery map
    Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX,GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    //Hibrid map layers    

    let Esri_WorldImagery2 =
        L.tileLayer(
            'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX,GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
            opacity: 0.5
        });

    /* let Stamen_TonerHybrid = L.tileLayer(
        'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        opacity: 1,
        ext: 'png'
    }); */

    let hibrid = L.layerGroup([osm, Esri_WorldImagery2]);

    hibrid.addTo(map);

    var mapaBase = {
        'Map': osm,
        'Satellite': Esri_WorldImagery,
        'Hybrid': hibrid
    };

    controlCapas = L.control.layers(mapaBase, null, { collapsed: true });
    controlCapas.addTo(map);

    controlEscala = L.control.scale();
    controlEscala.addTo(map);

    map.addControl(osmGeocoder);
}