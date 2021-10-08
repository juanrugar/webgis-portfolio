
var layerFarmacias;
var urlFarmacias = "datos/arqueo-protoVAL.geojson";

function addDatosFarmacias() { 

        layerFarmacias  = new L.GeoJSON.AJAX(urlFarmacias, {
            onEachFeature: function (feature, layer) {
                popupContent = "<b>Site: </b>" + feature.properties.nomb_yacim 
                + "<br>"
                + "<b>Type: </b>" + feature.properties.tipo_yacim 
                + "<br>"
                + "<b>Cult.: </b>" + feature.properties.adsc_cultu 
                + "<br>"
                + "<b>Period: </b>" + feature.properties.cronologia 
                + "<br>"
                + "<b>Protection: </b>" + feature.properties.tipo_prote 
                + "<br>"
                + "<b>Town: </b>"+ feature.properties.municipio;
                layer.bindPopup(popupContent);
            },
            pointToLayer: function (feature, latlng) {
               // puntosCluster.addLayer(L.marker(latlng));
                return L.circleMarker(latlng, {
                    radius: 6,
                    fillColor: "#00ff00",
                    color: "#ffffff",
                    weight: 3,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            }
        }).addTo(map);

        map.setView([39.580140, -0.678216], 10);

        //adding leaflet-search CONTROLS

        var searchControl = new L.Control.Search({
            layer: layerFarmacias,
            initial: false,
            propertyName: 'EQUIPAMENT',
            circleLocation: true,
            moveToLocation: function (latlng) {
                map.setView(latlng, 17);
            } 
        });

        searchControl.on('search:locationfound', function(e) {
            e.layer.openPopup();
        });
        map.addControl(searchControl);
        

}//fin funcion